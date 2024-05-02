# docs:generate

# Generate API documentation
typedoc

# Remove the generated README.md and rename modules.md to index.md
rm ./docs/api/README.md
mv ./docs/api/modules.md ./docs/api/index.md

# Replace every occurence of "/ [Exports](*)" with ""
sed -i '' 's/\/ Exports//g' ./docs/api/index.md
sed -i '' 's/\/ \[Exports\](.*)//g' ./docs/api/**/*.md

# Replace every occurence of "[@fibbojs/fibbo](*)" with "[@fibbojs/fibbo](/api/index)"
sed -i '' 's/\[@fibbojs\/fibbo\](.*)/\[@fibbojs\/fibbo\](\/api\/index)/g' ./docs/api/index.md
sed -i '' 's/\[@fibbojs\/fibbo\](.*)/\[@fibbojs\/fibbo\](\/api\/index)/g' ./docs/api/**/*.md
