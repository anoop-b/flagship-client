<script lang="ts">
	import summer from '$lib/assets/summer.webp';
	import winter from '$lib/assets/winter.webp';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	// this is where the values is loaded from SDK typically
	// if flag is not found, it defaults to false
	let isWinter = data.boolFlag || false;
</script>

<div class="bg-white pb-8 sm:pb-12 lg:pb-12">
	<div class="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
		<div
			class="prose mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8"
		>
			<div>
				<div class="mt-20">
					<div class="mt-6 sm:max-w-xl">
						<h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
							FlagShip: Serverless Edge-first feature management
						</h1>

						<h2>About the demo:</h2>
						<p class="mt-6 text-xl text-gray-500">
							A client application that makes use of feature toggle to swtich between Mooninpippa in
							the winter and Mooninpippa in the summer
						</p>
						<p class="mt-6 text-xl text-gray-500">
							The client application reads the flags config from Cloudflare KV. A different image is
							loaded based on the evaluation of the `isWinter` boolean flag
						</p>
						<p class="mt-6 italic text-gray-500">
							Elapsed Time: {data.ts} performance units (3 digits of precision)
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="sm:mx-auto sm:max-w-3xl sm:px-6">
			<div class="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
				<div class="hidden sm:block">
					<div
						class="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full"
					></div>
					<svg
						class="absolute right-1/2 top-8 -mr-3 lg:left-0 lg:m-0"
						width="404"
						height="392"
						fill="none"
						viewBox="0 0 404 392"
					>
						<defs>
							<pattern id="8" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
								<rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
							</pattern>
						</defs>
						<rect width="404" height="392" fill="url(#8)" />
					</svg>
				</div>
				<div
					class="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12"
				>
					{#if isWinter}
						<img
							class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
							src={winter}
							alt="moominpippa"
						/>
					{:else}
						<img
							class="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
							src={summer}
							alt="moominpippa"
						/>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div class="prose mx-auto">
		<h2 class="underline underline-offset-4">Debug Info:</h2>

		<pre class="max-h-50 overflow-y-scroll rounded-lg bg-gray-800 p-4 text-white">{JSON.stringify(
				JSON.parse(data.flags || ''),
				null,
				4
			)}
		</pre>
	</div>
</div>
