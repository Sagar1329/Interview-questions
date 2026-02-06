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

# ---- Split logic ----
awk '
BEGIN {
  fileIndex = 0
}

/^\/\/ === QUESTION:/ {
  fileIndex++
  filename = sprintf("question_%02d.js", fileIndex)
  filepath = outdir "/" filename
  print "// Auto-generated file\n" > filepath
}

{
  if (fileIndex > 0) {
    print >> filepath
  }
}
' outdir="$OUTPUT_DIR" "$SOURCE_FILE"

# ---- Commit each file individually ----
for file in "$OUTPUT_DIR"/question_*.js; do
  git add "$file"
  git commit -m "implement $(basename "$file")"
done

echo " Split + commit completed successfully"
