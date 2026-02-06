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

# ---- Split + filename generation ----
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
  file = outdir "/" filename

  print "// Auto-generated from questions.js\n" > file
}

{
  if (file != "") {
    print >> file
  }
}
' outdir="$OUTPUT_DIR" "$SOURCE_FILE"

# ---- Commit each file individually ----
for file in "$OUTPUT_DIR"/*.js; do
  git add "$file"
  git commit -m "implement $(basename "$file")"
done

echo " Split + commit completed with question-based filenames"
