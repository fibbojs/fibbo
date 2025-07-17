/**
 * Post-install script for Fibbo
 */
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const binPath = path.join(__dirname, '../node_modules/.bin/fibbo');
const cliPath = path.join(__dirname, '../packages/fibbo/dist/cli.js');

// Manually create the shortcut for the fibbo CLI in the node_modules/.bin directory
// This is required, because npm won't create the symlink if the binary isn't found
// The reason is that the fibbo CLI is made in Typescript and needs to be compiled first to the dist folder
async function createFibboSymlink() {
  try {
    // Check if the symlink already exists
    await fs.access(binPath);
    console.log('Symlink already exists:', binPath);
  } catch (error) {
    // If it doesn't exist, create it
    await fs.symlink(cliPath, binPath, 'file');
    console.log('Created symlink:', binPath);
  }
}
createFibboSymlink().catch((error) => {
  console.error('Error creating symlink:', error);
  process.exit(1);
});
