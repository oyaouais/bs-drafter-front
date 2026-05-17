<script lang="ts">
let { brawlers } = $props()
</script>

<div class="brawlers-list">
{#each brawlers as brawler}
<div class="brawler-item">
<img src={brawler.icon} alt={brawler.name} />
<span>{brawler.name}</span>
</div>
{/each}
</div>

<style>
.brawlers-list {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 12px;
padding: 16px;
max-height: 300px;
overflow-y: auto;
margin-top: 20px;
}

.brawler-item {
display: flex;
flex-direction: column;
align-items: center;
gap: 4px;
}

.brawler-item img {
width: 64px;
height: 64px;
border: 2px solid white;
border-radius: 12px;
overflow: hidden;
object-fit: cover;
}

.brawler-item span {
font-size: 0.8rem;
text-align: center;
}
</style>
