<script lang="ts">
	let { draft } = $props()
</script>

<section class="draft-layout">

	<div class="ally-bans">
		{#each draft.ally.bans as ban}
			<img src={ban.icon} alt={ban.name} />
		{/each}
	</div>

	<div class="ally-picks">
		{#each draft.ally.picks as pick}
			<img src={pick.icon} alt={pick.name} />
		{/each}
	</div>

	<div class="map">
		<img
			src={draft.map.image}
			alt={draft.map.name}
		/>
		<h2>{draft.map.name}</h2>
	</div>
	
</section>

<style>
		.ally-bans {
				display: flex;
				flex-direction: column;

				align-items: center;
		}

    .draft-layout {
        display: flex;

        gap: 40px;

        align-items: center;
    }

    .map {
        display: flex;
        flex-direction: column;

        align-items: center;
    }

    .map img {
        width: 280px;

        border-radius: 16px;

				margin-bottom: -16px;
    }

    .ally-bans {
        width: 64px;
        height: 64px;

        border: 2px solid white;
        border-radius: 12px;

        overflow: hidden;
    }

    .ally-bans img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        filter: grayscale(100%);
    }

		.ally-picks {
        width: 64px;
        height: 64px;

        border: 2px solid white;
        border-radius: 12px;

        overflow: hidden;
		}

    .ally-picks img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }
</style>