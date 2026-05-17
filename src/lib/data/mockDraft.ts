import { maps } from './maps'
import { brawlers } from './brawlers'

export const draft = {
	map: maps.doubleSwoosh,
	coin: 1,

	// Current step in the draft: 'ally_ban', 'enemy_ban', 'ally_pick', 'enemy_pick', etc.
	currentStep: 'ally_pick',

	// Index of the currently active pick (0-based, for highlighting)
	currentPickIndex: 1,

	ally: {
		bans: [
			brawlers.shelly,
			brawlers.bull,
			brawlers.brock
		],
		picks: [
			brawlers.colt,
			null,  // current pick slot (highlighted blue)
			null
		]
	},

	enemy: {
		bans: [
			brawlers.nita,
			brawlers.elprimo,
			brawlers.rosa
		],
		picks: [
			brawlers.dynamike,
			null,
			null
		]
	}
}
