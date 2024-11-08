import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
	const start = performance.now();

	console.log(`${event.url.pathname}:🚀 ${(performance.now() - start).toPrecision(3)} ms`);

	return resolve(event);
};
