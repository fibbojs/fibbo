import { build as viteBuild } from "vite";
import { version } from "../package.json";
import { loadConfig } from "./options";

/**
 * Build a Fibbo application.
 */
export async function build(): Promise<void> {
	console.log(`Fibbo v${version}`);
	// Load the configuration file and resolve options
	const options = await loadConfig();
	console.log("Building application with options:", options);
	// Build with Vite
	await viteBuild({
		...options.vite,
		configFile: false, // Disable config file to use the options directly
	});
	console.log("Build completed successfully.");
}
