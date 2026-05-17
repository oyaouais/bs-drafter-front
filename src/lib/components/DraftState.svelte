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
<p class="gamemode">{draft.map.mode}</p>
</div>

<div class="enemy-picks">
{#each draft.enemy.picks as pick}
<img src={pick.icon} alt={pick.name} />
{/each}
</div>

<div class="enemy-bans">
{#each draft.enemy.bans as ban}
<img src={ban.icon} alt={ban.name} />
{/each}
</div>

</section>

<style>
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

.gamemode {
margin-top: 4px;
font-size: 0.9rem;
opacity: 0.8;
}

.ally-bans, .enemy-bans {
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
}

.ally-bans img, .enemy-bans img {
width: 64px;
height: 64px;
border: 2px solid white;
border-radius: 12px;
overflow: hidden;
object-fit: cover;
filter: grayscale(100%);
}

.ally-picks, .enemy-picks {
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
}

.ally-picks img, .enemy-picks img {
width: 64px;
height: 64px;
border: 2px solid white;
border-radius: 12px;
overflow: hidden;
object-fit: cover;
box-shadow: 0 0 12px 4px rgba(0, 100, 255, 0.7);
}
</style>
