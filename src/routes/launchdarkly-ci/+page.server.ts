import { getClient, getFlagValue } from '$lib/launchdarkly/launchdarkly';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const name = event.url.searchParams.get('name') || 'ld';
	const start = performance.now();
	const client = await getClient();
	const flag = await getFlagValue(client, 'isWinter');
	const request_duration = (performance.now() - start).toPrecision(3);
	client.close();

	// Save duration to CSV without blocking
	saveDurationToCSV(request_duration, name);

	return {
		flag,
		request_duration
	};
}) satisfies PageServerLoad;

async function saveDurationToCSV(duration: string, name: string) {
	const fs = await import('fs/promises');
	const row = `${name},${new Date().toISOString()},${duration}\n`;
	try {
		await fs.appendFile('ld-wo-cache.csv', row, { flag: 'a' });
	} catch (err) {
		console.error('Failed to write duration:', err);
	}
}
