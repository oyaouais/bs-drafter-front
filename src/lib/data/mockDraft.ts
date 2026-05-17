import { maps } from './maps'
import { brawlers } from './brawlers'

export const draft = {
	map: maps.doubleSwoosh,

	coin: 1,

	ally: {
		bans: [
			brawlers.shelly
		],

		picks: [
			brawlers.colt
		]
	},

	enemy: {
		bans: [
			brawlers.shelly
		],
		picks: [
			brawlers.colt
		]
	}
}