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
	let tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

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
			<TabGroup>
				{#each tabs as tab, i}
					<Tab label={tab} bind:group={active} name={tab} value={i}>
						<svelte:fragment slot="lead">(icon)</svelte:fragment>
						<span>{tab}</span>
					</Tab>
					<!-- <svelte:fragment slot="panel">
						<button class="btn variant-outline-warning" type="button" on:click={() => removeTab(i)}
							>Remove {tab}</button
						>
				</svelte:fragment> -->
				{/each}
			</TabGroup>

			<svelte:fragment slot="trail">
				<button class="my-add-btn btn variant-filled-primary" type="button" on:click={addTab}
					>Add Tab</button
				>

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
</style>
