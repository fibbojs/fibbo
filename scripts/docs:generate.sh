# docs:generate

# Generate API documentation
typedoc

# Based on previous code, create a function that make the process easier for each package
beautifyStructure () {
  # Move all content of /docs/api/PACKAGE/src to /docs/api/PACKAGE
  mv ./docs/api/$1/src/* ./docs/api/$1
  rm -r ./docs/api/$1/src
  # Replace PACKAGE/src in ./docs/api/PACKAGE/index.md with PACKAGE
  sed -i '' 's/'$1'\/src/'$1'/g' ./docs/api/$1/index.md
  # Replace every occurence of "PACKAGE/src" with "PACKAGE"
  sed -i '' 's/\['$1'\/src\]([^)]*)/\['$1'\](\/api\/'$1')/g' ./docs/api/index.md
  find ./docs/api/$1 -type f -name "*.md" -exec sed -i '' 's/\['$1'\/src\]([^)]*)/\['$1'\](\/api\/'$1')/g' {} \;
}

# Call the function for each package
beautifyStructure 2d
beautifyStructure 3d
beautifyStructure core
beautifyStructure devtools
beautifyStructure event

# Replace every occurence of "[fibbojs](*)" with "[@fibbojs](/api/index)"
find ./docs/api -type f -name "*.md" -exec sed -i '' 's/\[fibbojs\]([^)]*)/\[@fibbojs\](\/api\/index)/g' {} \;
