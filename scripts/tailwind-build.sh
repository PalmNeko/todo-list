
# options

# ENVIRONS

SRC_DIR=src
OUT_DIR=docs
WATCH="$1"
WAIT_LIST=""

# preprocess

cd $(dirname $0)
cd ..

# tailwind

CSS_DIR="$SRC_DIR/css"
CSS_FILES=$(find "$CSS_DIR" -name "*.css")
OPTIONS=""
if [ -n "$WATCH" ]; then
    OPTIONS="$OPTIONS --watch"
fi
STYLE_DIR="$OUT_DIR/css/"
mkdir -p "$STYLE_DIR"
for file in $CSS_FILES; do
    FILENAME=$(basename "$file")
    echo "build $file -> $STYLE_DIR/$FILENAME"
    npx tailwindcss -i "$file" -o "$STYLE_DIR/$FILENAME" $OPTIONS
done
