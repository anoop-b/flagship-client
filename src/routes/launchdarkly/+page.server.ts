import { getFlagValue } from '$lib/launchdarkly/launchdarkly';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    const start = performance.now();
    const flag = await getFlagValue("isWinter")
    const request_duration = (performance.now() - start).toPrecision(3)
        return {
            flag,
            request_duration
        };
}) satisfies PageServerLoad;