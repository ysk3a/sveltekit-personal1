<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let active = 0;
	let tabs = ['Tab 111111111111111111111111111111', 'Tab 2', 'Tab 3'];

	const addTab = () => (tabs = [...tabs, 'Tab ' + (tabs.length + 1)]);
	const removeTab = (index: number) => (tabs = tabs.filter((t, i) => i !== index));
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar slotDefault="my-overflow-addition">
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Skeleton</strong>
			</svelte:fragment>
			<TabGroup
				flex="snap-align-none group flex flex-1 justify-start items-start w-[150px] min-w-[70px] max-w-[150px] overflow-hidden"
				padding="px-2 py-2"
				active="border border-b-0"
				spacing="space-y-0 space-x-1 flex flex-1 justify-start items-start"
			>
				{#each tabs as tab, i}
					<Tab label={tab} bind:group={active} name={tab} value={i}>
						<svelte:fragment slot="lead">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="icon icon-tabler icon-tabler-message-plus"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M8 9h8" />
								<path d="M8 13h6" />
								<path
									d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"
								/>
								<path d="M16 19h6" />
								<path d="M19 16v6" />
							</svg>
						</svelte:fragment>
						<span class="clip-tab-title">{tab}</span>
						<span class="my-close-icon absolute h-0 w-auto left-[-28px] hidden group-hover:block">
							<button class="btn-icon w-[25px] variant-ringed-tertiary !bg-[darkslateblue] rounded">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="icon icon-tabler icon-tabler-x"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M18 6l-12 12" />
									<path d="M6 6l12 12" />
								</svg>
							</button>
						</span>
					</Tab>
					<!-- <svelte:fragment slot="panel">
						<button class="btn variant-outline-warning" type="button" on:click={() => removeTab(i)}
							>Remove {tab}</button
						>
				</svelte:fragment> -->
				{/each}
			</TabGroup>

			<svelte:fragment slot="trail">
				<button class="my-add-btn btn variant-filled-primary" type="button" on:click={addTab}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-script-plus"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M17 19h4" />
						<path
							d="M14 20h-8a3 3 0 0 1 0 -6h11a3 3 0 0 0 -3 3m7 -3v-8a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8"
						/>
						<path d="M19 17v4" />
					</svg>
				</button>

				<select class="select" bind:value={active} placeholder="Change Tab">
					{#each tabs as tab, i}
						<option value={i}>{tab}</option>
					{/each}
				</select>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Discord
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Twitter
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					GitHub
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>

<style>
	/* slotDefault */
	.clip-tab-title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: inherit;
	}
</style>
