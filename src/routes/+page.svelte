<script lang="ts">
	import DraftState from '$lib/components/DraftState.svelte';
	import { draft } from '$lib/data/mockDraft';
</script>

<div class="page">
	<DraftState {draft} />
</div>

<style>
	.page {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		padding: 20px;
	}
</style>
