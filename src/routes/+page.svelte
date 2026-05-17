<script lang="ts">
	import DraftState from '$lib/components/DraftState.svelte';

	import { draft } from '$lib/data/mockDraft';
</script>

<div class="draft-state">
	<DraftState draft={draft} />
</div>

<style>
	.draft-state {
			display: flex;
			justify-content: center;
			padding-top: 20px;
	}
</style>
