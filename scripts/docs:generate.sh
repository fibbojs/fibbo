# docs:generate

# Generate API documentation
typedoc

# Remove the generated README.md and rename modules.md to index.md
rm ./docs/api/README.md
mv ./docs/api/modules.md ./docs/api/index.md

# Replace every occurence of "/ [Modules](*)" with ""
sed -i '' 's/\/ Modules//g' ./docs/api/index.md
sed -i '' 's/\/ \[Modules\]([^)]*)//g' ./docs/api/**/*.md

# Replace every occurence of "[fibbojs](*)" with "[@fibbojs](/api/index)"
sed -i '' 's/\[fibbojs\]([^)]*)/\[@fibbojs\](\/api\/index)/g' ./docs/api/index.md
sed -i '' 's/\[fibbojs\]([^)]*)/\[@fibbojs\](\/api\/index)/g' ./docs/api/**/*.md

# 2d package
# Replace every occurence of "[2d/src](*)" with "[2d](/api/modules/2d_src)"
sed -i '' 's/\[2d\/src\]([^)]*)/\[2d\](\/api\/modules\/2d_src)/g' ./docs/api/index.md
sed -i '' 's/\[2d\/src\]([^)]*)/\[2d\](\/api\/modules\/2d_src)/g' ./docs/api/**/*.md
# Replace 2d/src in ./docs/api/modules/*.md with 2d
sed -i '' 's/2d\/src/2d/g' ./docs/api/modules/*.md

# 3d package
# Replace every occurence of "[3d/src](*)" with "[3d](/api/modules/3d_src)"
sed -i '' 's/\[3d\/src\]([^)]*)/\[3d\](\/api\/modules\/3d_src)/g' ./docs/api/index.md
sed -i '' 's/\[3d\/src\]([^)]*)/\[3d\](\/api\/modules\/3d_src)/g' ./docs/api/**/*.md
# Replace 3d/src in ./docs/api/modules/*.md with 3d
sed -i '' 's/3d\/src/3d/g' ./docs/api/modules/*.md

# core package
# Replace every occurence of "[core/src](*)" with "[core](/api/modules/core_src)"
sed -i '' 's/\[core\/src\]([^)]*)/\[core\](\/api\/modules\/core_src)/g' ./docs/api/index.md
sed -i '' 's/\[core\/src\]([^)]*)/\[core\](\/api\/modules\/core_src)/g' ./docs/api/**/*.md
# Replace core/src in ./docs/api/modules/*.md with core
sed -i '' 's/core\/src/core/g' ./docs/api/modules/*.md
