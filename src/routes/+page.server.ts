import type { Projects } from '$lib/kv/schema';
import type { PageServerLoad } from './$types';

export const load = (async (events) => {
	const kv = events.platform?.env.KV;
	const start = performance.now();
	const flags = await kv?.get('flagShip');
	const ts = (performance.now() - start).toPrecision(3);
	if (flags) {
		const boolFlag = extractFlagValue(flags, 'isWinter', 'prod');
		return {
			flags,
			boolFlag,
			ts
		};
	}
}) satisfies PageServerLoad;

function extractFlagValue(data: string, flagName: string, envName: string) {
	const res: Projects = JSON.parse(data);
	for (const flag of res.flags) {
		if (flag.name === flagName) {
			for (const config of flag.configs) {
				if (config.environment.name === envName) {
					return config.value;
				}
			}
		}
	}
}
