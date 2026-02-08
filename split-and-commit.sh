#!/bin/bash

set -e

SOURCE_FILE="transformations.js"
OUTPUT_DIR="questions"

# ---- Safety checks ----
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo " Not inside a git repository"
  exit 1
fi

if [ ! -f "$SOURCE_FILE" ]; then
  echo " File not found: $SOURCE_FILE"
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

# ---- Split + commit ONLY new questions ----
awk '
function slugify(text) {
  text = tolower(text)
  gsub(/[^a-z0-9]+/, "-", text)
  gsub(/^-|-$/, "", text)
  return text
}

/^\/\/ === QUESTION:/ {
  close(file)

  question = $0
  sub(/^\/\/ === QUESTION:[[:space:]]*/, "", question)
  sub(/[[:space:]]*===.*$/, "", question)

  filename = slugify(question) ".js"
  filepath = outdir "/" filename

  # Skip if file already exists
  if (system("[ -f \"" filepath "\" ]") == 0) {
    file = ""
    next
  }

  file = filepath
  print "// Auto-generated from transformations.js\n" > file
  print "NEW_FILE=" filename > "/tmp/new_question_files"
  next
}

{
  if (file != "") {
    print >> file
  }
}
' outdir="$OUTPUT_DIR" "$SOURCE_FILE"

# ---- Commit only newly created files ----
if [ -f /tmp/new_question_files ]; then
  while read -r line; do
    file="${line#NEW_FILE=}"
    git add "$OUTPUT_DIR/$file"
    git commit -m "implement $file"
  done < /tmp/new_question_files

  rm /tmp/new_question_files
else
  echo "ℹ No new questions found"
fi

echo " Only new questions were split and committed"
