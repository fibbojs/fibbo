import { createServer as viteCreateServer } from "vite";
import { loadConfig } from "./options";

/**
 * Create a development server for a Fibbo application.
 * This function initializes a Vite server with the provided options.
 */
export async function createServer(): Promise<void> {
	// Load the configuration file and resolve options
	const options = await loadConfig();
	// Create a development server with Vite
	const server = await viteCreateServer({
		...options.vite,
		configFile: false, // Disable config file to use the options directly
	});
	// Start the server
	await server.listen();
	console.log("Server is running at :");
	server.printUrls();
}
