import { build as viteBuild } from "vite";
import { loadConfig } from "./options";

/**
 * Build a Fibbo application.
 */
export async function build(): Promise<void> {
	// Load the configuration file and resolve options
	const options = await loadConfig();
	// Build with Vite
	await viteBuild({
		...options.vite,
		configFile: false, // Disable config file to use the options directly
		logLevel: "error", // Only log errors
	});
}
