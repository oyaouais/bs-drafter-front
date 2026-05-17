

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C3wxBRT0.js","_app/immutable/chunks/UhCTSAyH.js","_app/immutable/chunks/DEDqjojZ.js"];
export const stylesheets = ["_app/immutable/assets/2.bpYJPSL0.css"];
export const fonts = [];
