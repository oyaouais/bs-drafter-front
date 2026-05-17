import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		prerender: {
			handleHttpError: ({ path, message }) => {
				console.warn(`Prerender warning for ${path}: ${message}`);
			}
		}
	}
};

export default config;
