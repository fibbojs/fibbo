# docs:generate



################################ API DOCUMENTATION GENERATION ################################



echo "📚 Generating API documentation..."

# Generate API documentation (hide the output)
./node_modules/.bin/typedoc --tsconfig tsconfig.json &> /dev/null

echo "✅ API documentation generated successfully!"

echo "📚 Beautifying API documentation structure..."

# Function to beautify the structure of the API documentation
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
beautifyStructure event
beautifyStructure util

# Replace every occurence of "[fibbojs](*)" with "[@fibbojs](/api/index)"
find ./docs/api -type f -name "*.md" -exec sed -i '' 's/\[fibbojs\]([^)]*)/\[@fibbojs\](\/api\/index)/g' {} \;

echo "✅ API documentation structure beautified successfully!"



################################ VITEPRESS NAVBAR CONFIGURATION ################################



echo "📚 Generating VitePress navbar configuration..."

# Function to generate VitePress navbar entries for classes in a specific category
generate_classes_entries() {
  local package_dir="$1"
  local category="$2"

  find "packages/$package_dir/src" -type f -name "*.ts" -not -name "index.ts" -print0 | while IFS= read -r -d $'\0' file; do
    local filename=$(basename "$file" .ts)
    local class_category=$(grep "@category" "$file" | awk '{print $3}' | sed 's/\"//g')

    if [[ "$class_category" == "$category" ]]; then
      echo "              { text: '$filename', link: '/api/$package_dir/classes/$filename.md' },"
    fi
  done
}

# Function to generate VitePress navbar entries for enumerations
generate_enum_entries() {
  local package_dir="$1"

  find "packages/$package_dir/src" -type f -name "*.ts" -print0 | while IFS= read -r -d $'\0' file; do
    grep -q "export enum" "$file" && {
      local enums=$(grep "export enum " "$file" | awk '{print $3}' | sed 's/{//')
      # Iterate through each enumeration in the file
      for enum_name in $enums; do
        echo "              { text: '$enum_name', link: '/api/$package_dir/enumerations/$enum_name.md' },"
      done
    }
  done
}

# Function to generate VitePress navbar entries for interfaces
generate_interface_entries() {
  local package_dir="$1"

  find "packages/$package_dir/src" -type f -name "*.ts" -print0 | while IFS= read -r -d $'\0' file; do
    grep -q "export interface " "$file" && {
      local interfaces=$(grep "export interface " "$file" | awk '{print $3}' | sed 's/{//')
      # Iterate through each interface in the file
      for interface_name in $interfaces; do
        echo "              { text: '$interface_name', link: '/api/$package_dir/interfaces/$interface_name.md' },"
      done
    }
  done
}

# Define the VitePress configuration file
VITEPRESS_CONFIG_FILE="docs/.vitepress/config.ts"

# Generate the VitePress navbar content for the API section
TEMP_FILE="docs/.vitepress/config.ts.tmp"

echo "      // API DOC START" > $TEMP_FILE
echo "      '/api/': [" >> $TEMP_FILE
echo "        { text: 'API Reference', items: [" >> $TEMP_FILE

# Iterate through each package directory
for package_dir in 2d 3d core event util; do
  echo "          { text: '$package_dir', link: '/api/$package_dir/index.md', collapsed: true, items: [" >> $TEMP_FILE

  # Generate navbar entries for each category
  for category in $(find "packages/$package_dir/src" -type f -name "*.ts" -not -name "index.ts" | xargs grep "@category" | awk '{print $4}' | sort | uniq); do
    echo "            { text: '$category', collapsed: true, items: [" >> $TEMP_FILE
    generate_classes_entries "$package_dir" "$category" >> $TEMP_FILE
    echo "            ] }," >> $TEMP_FILE
  done

  # Generate navbar entries for enumerations
  find "packages/$package_dir/src" -type f -name "*.ts" -print0 | while IFS= read -r -d $'\0' file; do
    grep -q "export enum" "$file" && {
      echo "            { text: 'Enumerations', collapsed: true, items: [" >> $TEMP_FILE
      generate_enum_entries "$package_dir" >> $TEMP_FILE
      echo "            ] }," >> $TEMP_FILE
      break
    }
  done

  # Generate navbar entries for interfaces
  find "packages/$package_dir/src" -type f -name "*.ts" -print0 | while IFS= read -r -d $'\0' file; do
    grep -q "export interface " "$file" && {
      echo "            { text: 'Interfaces', collapsed: true, items: [" >> $TEMP_FILE
      generate_interface_entries "$package_dir" >> $TEMP_FILE
      echo "            ] }," >> $TEMP_FILE
      break
    }
  done

  echo "          ] }," >> $TEMP_FILE
done

echo "        ] }," >> $TEMP_FILE
echo "      ]," >> $TEMP_FILE
echo "      // API DOC END" >> $TEMP_FILE

# Uses ed to replace the content of the VitePress configuration file between "// API DOC START" and "// API DOC END"
ed -s $VITEPRESS_CONFIG_FILE <<EOF
/\/\/ API DOC START/,/\/\/ API DOC END/c
$(cat $TEMP_FILE)
.
w
EOF

# Remove the temporary file
rm "$TEMP_FILE"

echo "✅ VitePress navbar configuration generated successfully!"

# Lint the documentation
echo "📚 Linting documentation..."

npm run lint:docs &> /dev/null

echo "✅ Documentation linted successfully!"
