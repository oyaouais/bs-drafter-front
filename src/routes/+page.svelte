<script lang="ts">
import DraftState from '$lib/components/DraftState.svelte';
import BrawlersList from '$lib/components/BrawlersList.svelte';

import { draft } from '$lib/data/mockDraft';
import { brawlers } from '$lib/data/brawlers';
</script>

<div class="draft-state">
<DraftState draft={draft} />
</div>

<div class="brawlers-list-container">
<BrawlersList brawlers={brawlers} />
</div>

<style>
.draft-state {
display: flex;
justify-content: center;
padding-top: 20px;
}

.brawlers-list-container {
display: flex;
justify-content: center;
}
</style>
