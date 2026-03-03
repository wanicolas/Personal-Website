import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
		},
	},
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"@nuxt/eslint",
		"@nuxt/test-utils/module",
		"@nuxtjs/i18n",
		"@nuxtjs/color-mode",
		"@nuxt/icon",
	],
	vite: {
		// @ts-expect-error - https://github.com/tailwindlabs/tailwindcss/issues/18802
		plugins: [tailwindcss()],
	},
	css: ["./app/assets/css/main.css"],
	i18n: {
		baseUrl: process.env.BASE_URL,
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
});
