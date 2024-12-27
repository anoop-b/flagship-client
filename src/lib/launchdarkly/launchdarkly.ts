import { LD_SDK_KEY } from '$env/static/private';
import LaunchDarkly from 'launchdarkly-node-server-sdk';

let launchDarklyClient: LaunchDarkly.LDClient;

async function initialize() {
	const client = LaunchDarkly.init(LD_SDK_KEY);
	try {
		await client.waitForInitialization();
	} catch (err) {
		console.log('Failed to Init LD', err);
	}
	return client;
}

export async function getClient() {
	return await initialize();
}

export async function getClientWithCaching() {
	if (launchDarklyClient) return launchDarklyClient;
	return (launchDarklyClient = await initialize());
}

export async function getFlagValue(client: LaunchDarkly.LDClient, key: string) {
	const context: LaunchDarkly.LDContext = {
		key: 'anonymous'
	};
	return await client.variation(key, context, false);
}
