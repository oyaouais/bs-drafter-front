import { F as attr, I as escape_html, r as ensure_array_like } from "../../chunks/dev.js";
//#region src/lib/components/DraftState.svelte
function DraftState($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { draft } = $$props;
		$$renderer.push(`<section class="draft-layout svelte-1vly9ig"><div class="ally-bans svelte-1vly9ig"><!--[-->`);
		const each_array = ensure_array_like(draft.ally.bans);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let ban = each_array[$$index];
			$$renderer.push(`<img${attr("src", ban.icon)}${attr("alt", ban.name)} class="svelte-1vly9ig"/>`);
		}
		$$renderer.push(`<!--]--></div> <div class="ally-picks svelte-1vly9ig"><!--[-->`);
		const each_array_1 = ensure_array_like(draft.ally.picks);
		for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
			let pick = each_array_1[$$index_1];
			$$renderer.push(`<img${attr("src", pick.icon)}${attr("alt", pick.name)} class="svelte-1vly9ig"/>`);
		}
		$$renderer.push(`<!--]--></div> <div class="map svelte-1vly9ig"><img${attr("src", draft.map.image)}${attr("alt", draft.map.name)} class="svelte-1vly9ig"/> <h2>${escape_html(draft.map.name)}</h2> <p class="gamemode svelte-1vly9ig">${escape_html(draft.map.mode)}</p></div> <div class="enemy-picks svelte-1vly9ig"><!--[-->`);
		const each_array_2 = ensure_array_like(draft.enemy.picks);
		for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
			let pick = each_array_2[$$index_2];
			$$renderer.push(`<img${attr("src", pick.icon)}${attr("alt", pick.name)} class="svelte-1vly9ig"/>`);
		}
		$$renderer.push(`<!--]--></div> <div class="enemy-bans svelte-1vly9ig"><!--[-->`);
		const each_array_3 = ensure_array_like(draft.enemy.bans);
		for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
			let ban = each_array_3[$$index_3];
			$$renderer.push(`<img${attr("src", ban.icon)}${attr("alt", ban.name)} class="svelte-1vly9ig"/>`);
		}
		$$renderer.push(`<!--]--></div></section>`);
	});
}
//#endregion
//#region src/lib/components/BrawlersList.svelte
function BrawlersList($$renderer, $$props) {
	let { brawlers } = $$props;
	$$renderer.push(`<div class="brawlers-list svelte-1gzprdk"><!--[-->`);
	const each_array = ensure_array_like(brawlers);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let brawler = each_array[$$index];
		$$renderer.push(`<div class="brawler-item svelte-1gzprdk"><img${attr("src", brawler.icon)}${attr("alt", brawler.name)} class="svelte-1gzprdk"/> <span class="svelte-1gzprdk">${escape_html(brawler.name)}</span></div>`);
	}
	$$renderer.push(`<!--]--></div>`);
}
//#endregion
//#region src/lib/data/maps.ts
var maps = { doubleSwoosh: {
	name: "Double Swoosh",
	mode: "Gem Grab",
	image: "/maps/double-swoosh.png"
} };
//#endregion
//#region src/lib/data/brawlers.ts
var brawlers = {
	shelly: {
		name: "Shelly",
		icon: "/brawlers/shelly_portrait.png"
	},
	nita: {
		name: "Nita",
		icon: "/brawlers/nita_portrait.png"
	},
	colt: {
		name: "Colt",
		icon: "/brawlers/colt_portrait.png"
	},
	bull: {
		name: "Bull",
		icon: "/brawlers/bull_portrait.png"
	},
	brock: {
		name: "Brock",
		icon: "/brawlers/brock_portrait.png"
	},
	elprimo: {
		name: "El Primo",
		icon: "/brawlers/elprimo_portrait.png"
	},
	barley: {
		name: "Barley",
		icon: "/brawlers/barley_portrait.png"
	},
	poco: {
		name: "Poco",
		icon: "/brawlers/poco_portrait.png"
	},
	rosa: {
		name: "Rosa",
		icon: "/brawlers/rosa_portrait.png"
	},
	jessie: {
		name: "Jessie",
		icon: "/brawlers/jessie_portrait.png"
	},
	dynamike: {
		name: "Dynamike",
		icon: "/brawlers/dynamike_portrait.png"
	},
	tick: {
		name: "Tick",
		icon: "/brawlers/tick_portrait.png"
	},
	_8_bit: {
		name: "8-bit",
		icon: "/brawlers/8bit_portrait.png"
	},
	rico: {
		name: "Rico",
		icon: "/brawlers/rico_portrait.png"
	},
	darryl: {
		name: "Darryl",
		icon: "/brawlers/darryl_portrait.png"
	},
	penny: {
		name: "Penny",
		icon: "/brawlers/penny_portrait.png"
	},
	carl: {
		name: "Carl",
		icon: "/brawlers/carl_portrait.png"
	},
	jacky: {
		name: "Jacky",
		icon: "/brawlers/jacky_portrait.png"
	},
	gus: {
		name: "Gus",
		icon: "/brawlers/gus_portrait.png"
	},
	bo: {
		name: "Bo",
		icon: "/brawlers/bo_portrait.png"
	},
	emz: {
		name: "Emz",
		icon: "/brawlers/emz_portrait.png"
	},
	stu: {
		name: "Stu",
		icon: "/brawlers/stu_portrait.png"
	},
	piper: {
		name: "Piper",
		icon: "/brawlers/piper_portrait.png"
	},
	pam: {
		name: "Pam",
		icon: "/brawlers/pam_portrait.png"
	},
	frank: {
		name: "Frank",
		icon: "/brawlers/frank_portrait.png"
	},
	bibi: {
		name: "Bibi",
		icon: "/brawlers/bibi_portrait.png"
	},
	bea: {
		name: "Bea",
		icon: "/brawlers/bea_portrait.png"
	},
	nani: {
		name: "Nani",
		icon: "/brawlers/nani_portrait.png"
	},
	edgar: {
		name: "Edgar",
		icon: "/brawlers/edgar_portrait.png"
	},
	griff: {
		name: "Griff",
		icon: "/brawlers/griff_portrait.png"
	},
	grom: {
		name: "Grom",
		icon: "/brawlers/grom_portrait.png"
	},
	bonnie: {
		name: "Bonnie",
		icon: "/brawlers/bonnie_portrait.png"
	},
	gale: {
		name: "Gale",
		icon: "/brawlers/gale_portrait.png"
	},
	colette: {
		name: "Colette",
		icon: "/brawlers/colette_portrait.png"
	},
	belle: {
		name: "Belle",
		icon: "/brawlers/belle_portrait.png"
	},
	ash: {
		name: "Ash",
		icon: "/brawlers/ash_portrait.png"
	},
	lola: {
		name: "Lola",
		icon: "/brawlers/lola_portrait.png"
	},
	sam: {
		name: "Sam",
		icon: "/brawlers/sam_portrait.png"
	},
	mandy: {
		name: "Mandy",
		icon: "/brawlers/mandy_portrait.png"
	},
	maisie: {
		name: "Maisie",
		icon: "/brawlers/maisie_portrait.png"
	},
	hank: {
		name: "Hank",
		icon: "/brawlers/hank_portrait.png"
	},
	pearl: {
		name: "Pearl",
		icon: "/brawlers/pearl_portrait.png"
	},
	larry_and_lawrie: {
		name: "Larry & Lawrie",
		icon: "/brawlers/larryandlawrie_portrait.png"
	},
	angelo: {
		name: "Angelo",
		icon: "/brawlers/angelo_portrait.png"
	},
	berry: {
		name: "Berry",
		icon: "/brawlers/berry_portrait.png"
	},
	shade: {
		name: "Shade",
		icon: "/brawlers/shade_portrait.png"
	},
	meeple: {
		name: "Meeple",
		icon: "/brawlers/meeple_portrait.png"
	},
	trunk: {
		name: "Trunk",
		icon: "/brawlers/trunk_portrait.png"
	},
	mortis: {
		name: "Mortis",
		icon: "/brawlers/mortis_portrait.png"
	},
	tara: {
		name: "Tara",
		icon: "/brawlers/tara_portrait.png"
	},
	gene: {
		name: "Gene",
		icon: "/brawlers/gene_portrait.png"
	},
	max: {
		name: "Max",
		icon: "/brawlers/max_portrait.png"
	},
	mr_p: {
		name: "Mr. P",
		icon: "/brawlers/mrp_portrait.png"
	},
	sprout: {
		name: "Sprout",
		icon: "/brawlers/sprout_portrait.png"
	},
	byron: {
		name: "Byron",
		icon: "/brawlers/byron_portrait.png"
	},
	squeak: {
		name: "Squeak",
		icon: "/brawlers/squeak_portrait.png"
	},
	lou: {
		name: "Lou",
		icon: "/brawlers/lou_portrait.png"
	},
	ruffs: {
		name: "Ruffs",
		icon: "/brawlers/ruffs_portrait.png"
	},
	buzz: {
		name: "Buzz",
		icon: "/brawlers/buzz_portrait.png"
	},
	fang: {
		name: "Fang",
		icon: "/brawlers/fang_portrait.png"
	},
	eve: {
		name: "Eve",
		icon: "/brawlers/eve_portrait.png"
	},
	janet: {
		name: "Janet",
		icon: "/brawlers/janet_portrait.png"
	},
	otis: {
		name: "Otis",
		icon: "/brawlers/otis_portrait.png"
	},
	buster: {
		name: "Buster",
		icon: "/brawlers/buster_portrait.png"
	},
	gray: {
		name: "Gray",
		icon: "/brawlers/gray_portrait.png"
	},
	r_t: {
		name: "R-T",
		icon: "/brawlers/rt_portrait.png"
	},
	willow: {
		name: "Willow",
		icon: "/brawlers/willow_portrait.png"
	},
	doug: {
		name: "Doug",
		icon: "/brawlers/doug_portrait.png"
	},
	chuck: {
		name: "Chuck",
		icon: "/brawlers/chuck_portrait.png"
	},
	charlie: {
		name: "Charlie",
		icon: "/brawlers/charlie_portrait.png"
	},
	mico: {
		name: "Mico",
		icon: "/brawlers/mico_portrait.png"
	},
	melodie: {
		name: "Melodie",
		icon: "/brawlers/melodie_portrait.png"
	},
	lily: {
		name: "Lily",
		icon: "/brawlers/lily_portrait.png"
	},
	moe: {
		name: "Moe",
		icon: "/brawlers/moe_portrait.png"
	},
	clancy: {
		name: "Clancy",
		icon: "/brawlers/clancy_portrait.png"
	},
	juju: {
		name: "Juju",
		icon: "/brawlers/juju_portrait.png"
	},
	ollie: {
		name: "Ollie",
		icon: "/brawlers/ollie_portrait.png"
	},
	finx: {
		name: "Finx",
		icon: "/brawlers/finx_portrait.png"
	},
	lumi: {
		name: "Lumi",
		icon: "/brawlers/lumi_portrait.png"
	},
	jae_yong: {
		name: "Jae-Yong",
		icon: "/brawlers/jaeyong_portrait.png"
	},
	alli: {
		name: "Alli",
		icon: "/brawlers/alli_portrait.png"
	},
	mina: {
		name: "Mina",
		icon: "/brawlers/mina_portrait.png"
	},
	ziggy: {
		name: "Ziggy",
		icon: "/brawlers/ziggy_portrait.png"
	},
	spike: {
		name: "Spike",
		icon: "/brawlers/spike_portrait.png"
	},
	crow: {
		name: "Crow",
		icon: "/brawlers/crow_portrait.png"
	},
	leon: {
		name: "Leon",
		icon: "/brawlers/leon_portrait.png"
	},
	sandy: {
		name: "Sandy",
		icon: "/brawlers/sandy_portrait.png"
	},
	amber: {
		name: "Amber",
		icon: "/brawlers/amber_portrait.png"
	},
	meg: {
		name: "Meg",
		icon: "/brawlers/meg_portrait.png"
	},
	surge: {
		name: "Surge",
		icon: "/brawlers/surge_portrait.png"
	},
	chester: {
		name: "Chester",
		icon: "/brawlers/chester_portrait.png"
	},
	cordelius: {
		name: "Cordelius",
		icon: "/brawlers/cordelius_portrait.png"
	},
	kit: {
		name: "Kit",
		icon: "/brawlers/kit_portrait.png"
	},
	draco: {
		name: "Draco",
		icon: "/brawlers/draco_portrait.png"
	},
	kenji: {
		name: "Kenji",
		icon: "/brawlers/kenji_portrait.png"
	},
	sirius: {
		name: "Sirius",
		icon: "/brawlers/sirius_portrait.png"
	},
	najia: {
		name: "Najia",
		icon: "/brawlers/najia_portrait.png"
	},
	pierce: {
		name: "Pierce",
		icon: "/brawlers/pierce_portrait.png"
	},
	damian: {
		name: "Damian",
		icon: "/brawlers/damian_portrait.png"
	},
	starr_nova: {
		name: "Starr Nova",
		icon: "/brawlers/starrnova_portrait.png"
	},
	bolt: {
		name: "Bolt",
		icon: "/brawlers/bolt_portrait.png"
	},
	glowbert: {
		name: "Glowbert",
		icon: "/brawlers/glowbert_portrait.png"
	},
	kaze: {
		name: "Kaze",
		icon: "/brawlers/kaze_portrait.png"
	},
	gigi: {
		name: "Gigi",
		icon: "/brawlers/gigi_portrait.png"
	}
};
//#endregion
//#region src/lib/data/mockDraft.ts
var draft = {
	map: maps.doubleSwoosh,
	coin: 1,
	ally: {
		bans: [brawlers.shelly],
		picks: [brawlers.colt]
	},
	enemy: {
		bans: [brawlers.shelly],
		picks: [brawlers.colt]
	}
};
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer) {
	$$renderer.push(`<div class="draft-state svelte-1uha8ag">`);
	DraftState($$renderer, { draft });
	$$renderer.push(`<!----></div> <div class="brawlers-list-container svelte-1uha8ag">`);
	BrawlersList($$renderer, { brawlers });
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _page as default };
