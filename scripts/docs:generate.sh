# docs:generate

# Generate API documentation
typedoc

# Move all content of /docs/api/2d/src to /docs/api/2d
mv ./docs/api/2d/src/* ./docs/api/2d
rm -r ./docs/api/2d/src

# Move all content of /docs/api/3d/src to /docs/api/3d
mv ./docs/api/3d/src/* ./docs/api/3d
rm -r ./docs/api/3d/src

# Move all content of /docs/api/core/src to /docs/api/core
mv ./docs/api/core/src/* ./docs/api/core
rm -r ./docs/api/core/src

# Replace every occurence of "[fibbojs](*)" with "[@fibbojs](/api/index)"
find ./docs/api -type f -name "*.md" -exec sed -i '' 's/\[fibbojs\]([^)]*)/\[@fibbojs\](\/api\/index)/g' {} \;

# 2d package
# Replace 2d/src in ./docs/api/2d/index.md with 2d
sed -i '' 's/2d\/src/2d/g' ./docs/api/2d/index.md
# Replace every occurence of "[2d/src](*)" with "[2d](/api/2d)"
sed -i '' 's/\[2d\/src\]([^)]*)/\[2d\](\/api\/2d)/g' ./docs/api/index.md
find ./docs/api/2d -type f -name "*.md" -exec sed -i '' 's/\[2d\/src\]([^)]*)/\[2d\](\/api\/2d)/g' {} \;

# 3d package
# Replace 3d/src in ./docs/api/3d/index.md with 3d
sed -i '' 's/3d\/src/3d/g' ./docs/api/3d/index.md
# Replace every occurence of "[3d/src](*)" with "[3d](/api/3d)"
sed -i '' 's/\[3d\/src\]([^)]*)/\[3d\](\/api\/3d)/g' ./docs/api/index.md
find ./docs/api/3d -type f -name "*.md" -exec sed -i '' 's/\[3d\/src\]([^)]*)/\[3d\](\/api\/3d)/g' {} \;

# Core package
# Replace core/src in ./docs/api/core/index.md with core
sed -i '' 's/core\/src/core/g' ./docs/api/core/index.md
# Replace every occurence of "[core/src](*)" with "[core](/api/core)"
sed -i '' 's/\[core\/src\]([^)]*)/\[core\](\/api\/core)/g' ./docs/api/index.md
find ./docs/api/core -type f -name "*.md" -exec sed -i '' 's/\[core\/src\]([^)]*)/\[core\](\/api\/core)/g' {} \;
