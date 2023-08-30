<script lang="ts">
	import { TabGroup, Tab, TabAnchor } from '@skeletonlabs/skeleton';
	let active = 0;
	let tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

	const addTab = () => (tabs = [...tabs, 'Tab ' + (tabs.length + 1)]);
	const removeTab = (index: number) => (tabs = tabs.filter((t, i) => i !== index));
</script>

<div class="container h-full flex">
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
		<button class="btn variant-filled-primary" type="button" on:click={addTab}>Add Tab</button>

		<svelte:fragment slot="panel">
			{#each tabs as tab, i}
				<button class="btn variant-outline-warning" type="button" on:click={() => removeTab(i)}
					>Remove {tab}</button
				>
			{/each}
		</svelte:fragment>
	</TabGroup>

	<div class="space-y-10 text-center flex flex-col items-center">
		<select class="select" bind:value={active} placeholder="Change Tab">
			{#each tabs as tab, i}
				<option value={i}>{tab}</option>
			{/each}
		</select>
	</div>
</div>

<style lang="postcss">
	/* figure {
		@apply flex relative flex-col;
	}
	figure svg,
	.img-bg {
		@apply w-64 h-64 md:w-80 md:h-80;
	}
	.img-bg {
		@apply absolute z-[-1] rounded-full blur-[50px] transition-all;
		animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
			glow 5s linear infinite;
	}
	@keyframes glow {
		0% {
			@apply bg-primary-400/50;
		}
		33% {
			@apply bg-secondary-400/50;
		}
		66% {
			@apply bg-tertiary-400/50;
		}
		100% {
			@apply bg-primary-400/50;
		}
	}
	@keyframes pulse {
		50% {
			transform: scale(1.5);
		}
	} */
</style>
