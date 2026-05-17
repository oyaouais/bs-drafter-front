<script lang="ts">
let { brawlers, bannedNames, pickedNames } = $props();

function isUnavailable(brawler: any): boolean {
return bannedNames.has(brawler.name) || pickedNames.has(brawler.name);
}
</script>

<div class="brawlers-grid">
{#each brawlers as brawler}
<button
class="brawler-card"
class:unavailable={isUnavailable(brawler)}
title={brawler.name}
disabled={isUnavailable(brawler)}
>
<div class="brawler-image-wrap">
<img src={brawler.icon} alt={brawler.name} draggable={false} />
{#if isUnavailable(brawler)}
<div class="unavailable-overlay">
{#if bannedNames.has(brawler.name)}
<span class="status-badge banned">BANNED</span>
{:else}
<span class="status-badge picked">PICKED</span>
{/if}
</div>
{/if}
</div>
<span class="brawler-name">{brawler.name}</span>
</button>
{/each}
</div>

<style>
.brawlers-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
gap: 10px;
padding: 4px 8px;
max-height: 320px;
overflow-y: auto;
scrollbar-width: thin;
scrollbar-color: #3b82f6 #1a1a24;
}

.brawlers-grid::-webkit-scrollbar {
width: 8px;
}

.brawlers-grid::-webkit-scrollbar-track {
background: #1a1a24;
border-radius: 4px;
}

.brawlers-grid::-webkit-scrollbar-thumb {
background: #3b82f6;
border-radius: 4px;
}

.brawlers-grid::-webkit-scrollbar-thumb:hover {
background: #2563eb;
}

.brawler-card {
display: flex;
flex-direction: column;
align-items: center;
gap: 6px;
padding: 6px;
background: #222230;
border: 2px solid #2e2e40;
border-radius: 14px;
cursor: pointer;
transition: all 0.15s ease;
min-width: 72px;
}

.brawler-card:hover:not(.unavailable) {
transform: translateY(-4px) scale(1.05);
border-color: #3b82f6;
box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
}

.brawler-card:active:not(.unavailable) {
transform: translateY(0) scale(0.97);
}

/* Greyed out state for banned/picked */
.brawler-card.unavailable {
opacity: 0.45;
cursor: not-allowed;
border-color: #333;
background: #1a1a22;
}

.brawler-card.unavailable:hover {
transform: none;
box-shadow: none;
}

.brawler-image-wrap {
position: relative;
width: 56px;
height: 56px;
border-radius: 10px;
overflow: hidden;
flex-shrink: 0;
}

.brawler-card img {
width: 100%;
height: 100%;
object-fit: cover;
display: block;
}

.brawler-card.unavailable img {
filter: grayscale(100%) brightness(0.4);
}

.unavailable-overlay {
position: absolute;
inset: 0;
display: flex;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.3);
}

.status-badge {
font-size: 8px;
letter-spacing: 0.5px;
padding: 2px 6px;
border-radius: 4px;
font-weight: 700;
}

.status-badge.banned {
background: #ef4444;
color: white;
}

.status-badge.picked {
background: #3b82f6;
color: white;
}

.brawler-name {
font-size: 10px;
color: #94a3b8;
text-align: center;
max-width: 100%;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-family: 'Lilita One', sans-serif;
}

.brawler-card.unavailable .brawler-name {
color: #555;
}
</style>
