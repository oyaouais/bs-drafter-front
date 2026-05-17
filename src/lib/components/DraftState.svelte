<script lang="ts">
	import BrawlersList from './BrawlersList.svelte';
	import { brawlers as allBrawlersList } from '$lib/data/brawlers';

	let { draft } = $props();

	// Game mode color mapping
	const modeColors: Record<string, string> = {
		'Gem Grab': '#9b59b6',
		'Showdown': '#e74c3c',
		'Brawl Ball': '#3498db',
		'Bounty': '#f39c12',
		'Heist': '#e67e22',
		'Hot Zone': '#e74c3c',
		'Knockout': '#2ecc71',
		'Wipeout': '#1abc9c',
		'Capture': '#1abc9c'
	};

	function getModeColor(mode: string): string {
		return modeColors[mode] || '#3b82f6';
	}

	// Get all brawlers as array
	const allBrawlers = Object.values(allBrawlersList);

	// Get banned brawler names for greying out in the list
	const bannedNames = new Set([
		...draft.ally.bans.map((b: any) => b?.name).filter(Boolean),
		...draft.enemy.bans.map((b: any) => b?.name).filter(Boolean)
	]);

	const pickedNames = new Set([
		...draft.ally.picks.map((p: any) => p?.name).filter(Boolean),
		...draft.enemy.picks.map((p: any) => p?.name).filter(Boolean)
	]);
</script>

<section class="draft-container">
	<!-- Main Board: Left (Ally) | Center (Map) | Right (Enemy) -->
	<div class="draft-board">
		<!-- Left Side: Ally Bans + Picks (vertical) -->
		<div class="side ally-side">
			<div class="bans-section">
				<div class="section-title ban-title">BANS</div>
				<div class="bans-col">
					{#each draft.ally.bans as ban}
						<div class="ban-slot">
							{#if ban}
								<img src={ban.icon} alt={ban.name} title={ban.name} />
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<div class="picks-section">
				<div class="section-title pick-title">PICKS</div>
				<div class="picks-col">
					{#each draft.ally.picks as pick, i}
						<div
							class="pick-slot"
							class:active={draft.currentStep === 'ally_pick' && draft.currentPickIndex === i}
						>
							{#if pick}
								<img src={pick.icon} alt={pick.name} title={pick.name} />
							{:else}
								<span class="pick-number">{i + 1}</span>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>

		<!-- Center: Map + VS -->
		<div class="center-section">
			<div class="map-section">
				<div class="map-card">
					<img src={draft.map.image} alt={draft.map.name} class="map-image" />
					<div class="map-overlay"></div>
				</div>
				<h2 class="map-name">{draft.map.name}</h2>
				<div class="game-mode" style="background: {getModeColor(draft.map.mode)}">
					{draft.map.mode}
				</div>
			</div>

			<div class="vs-section">
				<div class="vs-line"></div>
				<span class="vs-text">VS</span>
				<div class="vs-line"></div>
			</div>
		</div>

		<!-- Right Side: Enemy Bans + Picks (vertical) -->
		<div class="side enemy-side">
			<div class="bans-section">
				<div class="section-title ban-title">BANS</div>
				<div class="bans-col">
					{#each draft.enemy.bans as ban}
						<div class="ban-slot">
							{#if ban}
								<img src={ban.icon} alt={ban.name} title={ban.name} />
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<div class="picks-section">
				<div class="section-title pick-title">PICKS</div>
				<div class="picks-col">
					{#each draft.enemy.picks as pick, i}
						<div
							class="pick-slot"
							class:active={draft.currentStep === 'enemy_pick' && draft.currentPickIndex === i}
						>
							{#if pick}
								<img src={pick.icon} alt={pick.name} title={pick.name} />
							{:else}
								<span class="pick-number">{i + 1}</span>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Bottom: Horizontally scrolling Brawlers List -->
	<div class="brawlers-section">
		<div class="brawlers-header">CHOOSE YOUR BRAWLER</div>
		<div class="brawlers-scroll">
			<BrawlersList brawlers={allBrawlers} {bannedNames} {pickedNames} />
		</div>
	</div>
</section>

<style>
	.draft-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		padding: 20px 32px 24px;
		min-height: 100vh;
		max-width: 1200px;
		margin: 0 auto;
	}

	/* ========== DRAFT BOARD (3 columns) ========== */
	.draft-board {
		display: flex;
		align-items: stretch;
		justify-content: center;
		gap: 32px;
		width: 100%;
		flex: 1;
	}

	/* Sides */
	.side {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		min-width: 100px;
		padding-top: 8px;
	}

	/* Bans Section */
	.bans-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.section-title {
		font-size: 13px;
		letter-spacing: 2px;
		color: #666;
		text-transform: uppercase;
	}

	.bans-col {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.ban-slot {
		width: 60px;
		height: 60px;
		border-radius: 14px;
		border: 2px solid #333;
		overflow: hidden;
		background: #16161e;
		opacity: 0.55;
		transition: opacity 0.2s ease;
	}

	.ban-slot:hover {
		opacity: 0.8;
	}

	.ban-slot img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(100%) brightness(0.4);
	}

	/* Picks Section */
	.picks-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		flex: 1;
		justify-content: center;
	}

	.picks-col {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.pick-slot {
		width: 80px;
		height: 80px;
		border-radius: 16px;
		border: 3px solid #2e2e40;
		overflow: hidden;
		background: #1a1a24;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.25s ease;
		position: relative;
	}

	.pick-slot img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.pick-number {
		font-size: 26px;
		color: #555;
		font-family: 'Lilita One', sans-serif;
	}

	/* Active pick highlight - Blue pulsing glow */
	.pick-slot.active {
		border-color: #3b82f6;
		box-shadow:
			0 0 16px rgba(59, 130, 246, 0.5),
			0 0 32px rgba(59, 130, 246, 0.25);
		animation: pulse-glow 2s ease-in-out infinite;
	}

	.pick-slot.active .pick-number {
		color: #3b82f6;
	}

	@keyframes pulse-glow {
		0%, 100% {
			box-shadow: 0 0 16px rgba(59, 130, 246, 0.5), 0 0 32px rgba(59, 130, 246, 0.25);
		}
		50% {
			box-shadow: 0 0 24px rgba(59, 130, 246, 0.7), 0 0 48px rgba(59, 130, 246, 0.4);
		}
	}

	/* ========== CENTER SECTION ========== */
	.center-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		flex: 1;
		max-width: 360px;
	}

	/* Map */
	.map-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.map-card {
		position: relative;
		width: 300px;
		height: 170px;
		border-radius: 20px;
		overflow: hidden;
		border: 3px solid #2e2e40;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
	}

	.map-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.map-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 50%);
		pointer-events: none;
	}

	.map-name {
		font-size: 26px;
		font-weight: 400;
		margin: 0;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
		letter-spacing: 1px;
	}

	.game-mode {
		font-size: 13px;
		padding: 4px 16px;
		border-radius: 20px;
		text-transform: uppercase;
		letter-spacing: 1px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
	}

	/* VS */
	.vs-section {
		display: flex;
		align-items: center;
		gap: 16px;
		width: 100%;
		justify-content: center;
	}

	.vs-line {
		flex: 1;
		height: 2px;
		background: linear-gradient(to right, transparent, #333, transparent);
		max-width: 80px;
	}

	.vs-text {
		font-size: 32px;
		color: #444;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
		letter-spacing: 3px;
	}

	/* ========== BOTTOM: BRAWLERS LIST ========== */
	.brawlers-section {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.brawlers-header {
		font-size: 16px;
		letter-spacing: 2px;
		color: #94a3b8;
		text-align: center;
	}

	.brawlers-scroll {
		width: 100%;
		overflow-x: auto;
		overflow-y: hidden;
		padding: 8px 4px;
		scrollbar-width: thin;
		scrollbar-color: #3b82f6 #1a1a24;
	}

	.brawlers-scroll::-webkit-scrollbar {
		height: 8px;
	}

	.brawlers-scroll::-webkit-scrollbar-track {
		background: #1a1a24;
		border-radius: 4px;
	}

	.brawlers-scroll::-webkit-scrollbar-thumb {
		background: #3b82f6;
		border-radius: 4px;
	}

	.brawlers-scroll::-webkit-scrollbar-thumb:hover {
		background: #2563eb;
	}
</style>
