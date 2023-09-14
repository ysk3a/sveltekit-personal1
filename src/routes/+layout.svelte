<script lang="ts">
	import '../app.postcss';

	// Highlight JS
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { initializeStores } from '@skeletonlabs/skeleton';

	initializeStores();
	import {} from '@skeletonlabs/skeleton';
	import {
		AppShell,
		AppBar,
		TabGroup,
		Tab,
		TabAnchor,
		Modal,
		getModalStore
	} from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();

	import {
		Popover,
		Button,
		Checkbox,
		Search,
		Dropdown,
		DropdownItem,
		DropdownDivider,
		DropdownHeader,
		Radio
	} from 'flowbite-svelte';

	import { dndzone } from 'svelte-dnd-action';
	import { flip as sFlip } from 'svelte/animate';
	const flipDurationMs = 200;
	function handleSort(e: any) {
		console.log('::handleSort', e);
		items = e.detail.items;
	}
	let items = [
		{ id: 1, title: 'Tab 111111111111111111111111111111' },
		{
			id: 2,
			title:
				'Tab 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222'
		},
		{ id: 3, title: 'Tab 3' }
	];

	let active = 0;
	let tabs = [
		{ id: 1, title: 'Tab 111111111111111111111111111111' },
		{
			id: 2,
			title:
				'Tab 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222'
		},
		{ id: 3, title: 'Tab 3' }
	];

	// const addTab = () =>
	function addTab() {
		let newId: number = (items.at(-1)?.id ?? 0) + 1;
		console.log('::addTab', newId);
		items = [...items, { id: newId, title: 'Tab ' + newId }];
	}
	// const removeTab = (index: number) => (items = items.filter((t, i) => i !== index));
	function removeTabConfirm(id: number) {
		console.log('::removeTabConfirm', id);
		modalStore.trigger({
			type: 'confirm',
			// Data
			title: 'Please Confirm',
			body: 'Are you sure you wish to proceed?',
			// TRUE if confirm pressed, FALSE if cancel pressed
			response: (r: boolean) => {
				if (r) {
					console.log('::modalStoreTrigger Response', r, id);
					removeTabById(id);
				}
			}
		} satisfies ModalSettings);
	}
	function removeTabById(id: number) {
		console.log('::removeTabById', id);
		items = items.filter((tab, i) => tab.id !== id);
	}
	$: console.log('::items tab=', items);
</script>

<Modal />

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
				spacing="space-y-0 space-x-1 flex flex-1 justify-start items-start">
				<section
					class="tab-list flex overflow-x-auto hide-scrollbar justify-start border-b border-surface-400-500-token"
					use:dndzone={{ items, flipDurationMs }}
					on:consider={handleSort}
					on:finalize={handleSort}>
					{#each items as tab (tab.id)}
						<Tab label={tab} bind:group={active} name={tab.title} value={tab.id}>
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
									stroke-linejoin="round">
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M8 9h8" />
									<path d="M8 13h6" />
									<path
										d="M12.01 18.594l-4.01 2.406v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5" />
									<path d="M16 19h6" />
									<path d="M19 16v6" />
								</svg>
							</svelte:fragment>
							<span class="clip-tab-title">{tab.title}</span>
							<span class="my-close-icon absolute h-0 w-auto left-[-28px] hidden group-hover:block">
								<!-- <Button id="progress">
									<Icon name="database-solid" class="mr-2 w-4 h-4 text-white dark:text-white" /> Storage status
								  </Button> -->
								<button
									id="my-confirm-click"
									class="btn-icon w-[25px] variant-ringed-tertiary !bg-[darkslateblue] rounded"
									on:click={() => removeTabConfirm(tab.id)}>
									<!-- on:click={() => removeTabById(tab.id)} -->
									<!-- c0bra.github.io/svelma/components/tabs -->
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
										stroke-linejoin="round">
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
				</section>

				<svelte:fragment slot="panel">
					{#each items as tab (tab.id)}
						{#if active === tab.id}
							<button
								class="btn variant-outline-warning"
								type="button"
								on:click={() => removeTabConfirm(tab.id)}>
								Remove {tab.title}
							</button>
						{/if}
					{/each}
				</svelte:fragment>
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
						stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M17 19h4" />
						<path
							d="M14 20h-8a3 3 0 0 1 0 -6h11a3 3 0 0 0 -3 3m7 -3v-8a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v8" />
						<path d="M19 17v4" />
					</svg>
				</button>
				<button type="button" class="btn variant-outline-tertiary">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-chevron-down"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round">
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M6 9l6 6l6 -6" />
					</svg>
				</button>
				<Dropdown class="overflow-y-auto px-3 pb-3 text-sm h-44">
					<div slot="header" class="p-3">
						<Search size="md" />
					</div>
					<!-- how to fix large tab title? -->
					{#each items as tab (tab.id)}
						<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
							<Radio class="my-radio" name="active-tab" bind:group={active} value={tab.id}
								>{tab.id}:{tab.title}</Radio>
						</li>
					{/each}
					<!-- <a
						slot="footer"
						href="/"
						class="flex items-center p-3 -mb-1 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
						<Icon
							name="user-remove-solid"
							class="w-4 h-4 mr-2 text-primary-700 dark:text-primary-700" />Delete user
					</a> -->
				</Dropdown>
				<select class="select w-0" bind:value={active} placeholder="Change Tab">
					{#each items as tab (tab.id)}
						<option value={tab.id}>{tab.title}</option>
					{/each}
				</select>
				<a class="btn btn-sm variant-ghost-surface" href="/" target="_blank" rel="noreferrer">
					Some Btn
				</a>
				<a class="btn btn-sm variant-ghost-surface" href="/"> home </a>
				<a class="btn btn-sm variant-ghost-surface" href="/gallery-demo"> gallery demo </a>
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
	/* .my-radio {
		overflow: hidden;
		overflow-wrap: break-word;
		inline-size: 150px;

	} */
</style>
