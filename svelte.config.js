import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// SPA fallback برای هاست‌های استاتیک (GitHub Pages/Cloudflare Pages/Netlify/...)
			// برای GitHub Pages بهتره 404.html باشد.
			fallback: '404.html'
		})
	}
};

export default config;
