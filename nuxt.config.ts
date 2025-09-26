// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		pageTransition: { name: "page", mode: "out-in" },
	},
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: [
		"@nuxt/eslint",
		"@nuxt/test-utils/module",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/i18n",
		"@nuxtjs/color-mode",
		"@nuxt/icon",
	],
	i18n: {
		defaultLocale: "fr",
		locales: [
			{
				code: "fr",
				language: "fr-FR",
				name: "Français",
				file: "fr.json",
			},
		],
	},
});
