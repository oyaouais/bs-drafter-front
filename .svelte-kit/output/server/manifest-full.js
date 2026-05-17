export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["brawlers/8bit_portrait.png","brawlers/BS_Portrait_BOLT_Export_V2.png","brawlers/BS_Portrait_DAMIAN.png","brawlers/BS_Portrait_GIGI_Export_V2.png","brawlers/BS_Portrait_PIERCE_Export_V1.png","brawlers/BS_Portrait_STARNOVA 2.png","brawlers/Jae-Yong_portrait.png","brawlers/Kaze_portrait.png","brawlers/Mina_portrait.png","brawlers/Ziggy_portrait.png","brawlers/alli_portrait.png","brawlers/amber_portrait.png","brawlers/angelo_portrait.png","brawlers/ash_portrait.png","brawlers/barley_portrait.png","brawlers/bea_portrait.png","brawlers/belle_portrait.png","brawlers/berry_portrait.png","brawlers/bibi_portrait.png","brawlers/bo_portrait.png","brawlers/bonnie_portrait.png","brawlers/brock_portrait (1).png","brawlers/brock_portrait.png","brawlers/bull_portrait.png","brawlers/buster_portrait.png","brawlers/buzz_lightyear_portrait.png","brawlers/buzz_portrait.png","brawlers/byron_portrait.png","brawlers/carl_portrait.png","brawlers/charlie_portrait.png","brawlers/chester_portrait.png","brawlers/chuck_portrait.png","brawlers/clancy_portrait.png","brawlers/colette_portrait.png","brawlers/colt_portrait (1).png","brawlers/colt_portrait.png","brawlers/cordelius_portrait.png","brawlers/crow_portrait.png","brawlers/darryl_portrait.png","brawlers/doug_portrait.png","brawlers/draco_portrait.png","brawlers/dynamike_portrait.png","brawlers/edgar_portrait.png","brawlers/elprimo_portrait.png","brawlers/emz_portrait.png","brawlers/eve_portrait.png","brawlers/fang_portrait.png","brawlers/finx_portrait.png","brawlers/frank_portrait.png","brawlers/gale_portrait.png","brawlers/gene_portrait.png","brawlers/gray_portrait.png","brawlers/griff_portrait.png","brawlers/grom_portrait.png","brawlers/gus_portrait.png","brawlers/hank_portrait.png","brawlers/hyper_colt_portrait.png","brawlers/hyper_dynamike_portrait.png","brawlers/jacky_portrait.png","brawlers/janet_portrait.png","brawlers/jessie_portrait.png","brawlers/juju_portrait.png","brawlers/kenji_portrait.png","brawlers/kit_portrait.png","brawlers/larry&lawrie_portrait.png","brawlers/leon_portrait.png","brawlers/lily_portrait.png","brawlers/lola_portrait.png","brawlers/lou_portrait.png","brawlers/lumi_portrait.png","brawlers/maisie_portrait.png","brawlers/mandy_portrait.png","brawlers/max_portrait.png","brawlers/meeple_portrait.png","brawlers/meg_portrait.png","brawlers/melodie_portrait.png","brawlers/mico_portrait.png","brawlers/moe_portrait.png","brawlers/mortis_portrait.png","brawlers/mrp_portrait.png","brawlers/nani_portrait.png","brawlers/nita_portrait.png","brawlers/ollie_portrait.png","brawlers/otis_portrait.png","brawlers/pam_portrait.png","brawlers/pearl_portrait.png","brawlers/penny_portrait.png","brawlers/piper_portrait.png","brawlers/poco_portrait.png","brawlers/portrait_brawler_crow_propass.png","brawlers/portrait_brawler_najia.png","brawlers/portrait_brawler_sirius.png","brawlers/portrait_brawler_sirius_mask.png","brawlers/rico_portrait.png","brawlers/rosa_portrait.png","brawlers/rt_portrait.png","brawlers/ruffs_portrait.png","brawlers/sam_portrait.png","brawlers/sandy_portrait.png","brawlers/shade_portrait.png","brawlers/shelly_portrait.png","brawlers/spike_portrait.png","brawlers/sprout_portrait.png","brawlers/squeak_portrait.png","brawlers/stu_portrait.png","brawlers/surge_portrait.png","brawlers/tara_portrait.png","brawlers/tick_portrait.png","brawlers/trunk_portrait.png","brawlers/willow_portrait.png","fonts/lilitaone-regular-webfont.ttf","maps/double-swoosh.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DhpTpPZk.js",app:"_app/immutable/entry/app.F6iGUXYW.js",imports:["_app/immutable/entry/start.DhpTpPZk.js","_app/immutable/chunks/Dh71xEYJ.js","_app/immutable/chunks/UhCTSAyH.js","_app/immutable/entry/app.F6iGUXYW.js","_app/immutable/chunks/UhCTSAyH.js","_app/immutable/chunks/Dj6f-nJM.js","_app/immutable/chunks/DEDqjojZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
