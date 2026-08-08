import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
			link: [
				{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon.png",
				},
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},
			],
		},
	},
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"@nuxt/eslint",
		"@nuxtjs/i18n",
		"@nuxtjs/color-mode",
		"@nuxt/icon",
		"@nuxtjs/seo",
	],
	vite: {
		plugins: [tailwindcss()],
	},
	site: {
		url: "https://nicolaswalter.fr",
		name: "Nicolas Walter",
	},
	routeRules: {
		"/**": { prerender: true },
	},
	nitro: {
		externals: {
			inline: ["unhead"],
		},
	},
	css: ["./app/assets/css/main.css"],
	i18n: {
		baseUrl: "https://nicolaswalter.fr",
		defaultLocale: "fr",
		locales: [
			{
				code: "fr",
				language: "fr-FR",
				name: "Français",
				file: "fr.json",
			},
			{
				code: "en",
				language: "en-US",
				name: "English",
				file: "en.json",
			},
		],
	},
	sitemap: {
		zeroRuntime: true,
	},
	robots: {
		//  routes are auto-prefixed with i18n
		disallow: ["/merci"],
	},
});
