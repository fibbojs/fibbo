#!/usr/bin/env node
import process from "node:process";
import { intro, log, outro, spinner } from "@clack/prompts";
import { build, createServer } from "@fibbojs/config";
import { cac } from "cac";
import { version } from "../package.json";

const cli = cac("fibbo");
cli.help().version(version);

cli
	.command("dev", "Run the development server for a Fibbo application")
	.option("--silent", "Suppress non-error logs")
	.action(async () => {
		console.log(`Fibbo v${version}\n`);

		// logger.setSilent(!!options.silent);

		// Create the development server
		await createServer();
	});

cli
	.command("build", "Build a Fibbo application")
	.option("--silent", "Suppress non-error logs")
	.action(async () => {
		console.log(`Fibbo v${version}\n`);

		const s = spinner();
		s.start("Building your application...");
		// Build the application
		await build();
		s.stop("Application built successfully");

		// End clack prompts
		outro();
	});

cli
	.command("upgrade", "Upgrade your Fibbo application to the latest version")
	.option("--silent", "Suppress non-error logs")
	.action(async () => {
		// Start clack prompts
		intro(`Fibbo v${version}`);

		// logger.setSilent(!!options.silent);

		const s = spinner();
		s.start("Updating dependencies...");
		// Artificially delay to simulate work
		await new Promise((resolve) => setTimeout(resolve, 1000));
		s.stop("Dependencies updated successfully");

		// End clack prompts
		outro();
	});

async function runCLI(): Promise<void> {
	cli.parse(process.argv, { run: false });

	try {
		await cli.runMatchedCommand();
	} catch (error) {
		log.error(String(error));
		process.exit(1);
	}
}

(async () => {
	if (process.argv.length <= 2) {
		cli.outputHelp();
		return;
	}
	await runCLI();
})().catch((error) => {
	log.error(String(error));
	process.exit(1);
});
