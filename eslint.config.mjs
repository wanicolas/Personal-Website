import withNuxt from "./.nuxt/eslint.config.mjs";
import checkFile from "eslint-plugin-check-file";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import jsoncParser from "jsonc-eslint-parser";
import vueI18n from "@intlify/eslint-plugin-vue-i18n";

export default withNuxt(
	...vueI18n.configs.recommended,
	{
		rules: {
			"vue/block-order": [
				"error",
				{
					order: ["script", "template", "style"],
				},
			],
			"vue/block-lang": [
				"error",
				{
					script: {
						lang: "ts",
					},
				},
			],
			"vue/padding-line-between-blocks": "error",
			"vue/enforce-style-attribute": ["error", { allow: ["scoped", "module"] }],
			"vue/no-unused-refs": "error",
			"vue/no-unused-emit-declarations": "error",
			"vue/no-useless-mustaches": [
				"error",
				{
					ignoreIncludesComment: false,
					ignoreStringEscape: false,
				},
			],
			"vue/no-useless-v-bind": [
				"error",
				{
					ignoreIncludesComment: false,
					ignoreStringEscape: false,
				},
			],
			"vue/prefer-true-attribute-shorthand": ["error", "always"],
			"vue/v-bind-style": [
				"error",
				"shorthand",
				{
					sameNameShorthand: "always",
				},
			],
			"no-else-return": "error",
			"no-param-reassign": "error",
			"vue/custom-event-name-casing": ["error", "camelCase"],
			"vue/no-restricted-syntax": [
				"error",
				{
					selector: "Identifier[name='$emit']",
					message: "Use 'emit' returned from 'defineEmits' instead of '$emit'.",
				},
			],
			"@intlify/vue-i18n/no-duplicate-keys-in-locale": "error",
		},
		// Configuration du plugin vue-i18n
		settings: {
			"vue-i18n": {
				localeDir: {
					pattern: "./i18n/locales/*.json",
					localePattern: /^.*\/locales\/(?<locale>[A-Za-z0-9-_]+)\.json$/,
					localeKey: "path",
				},
				messageSyntaxVersion: "^11.0.0",
			},
		},
	},
	// Configuration spécifique aux fichiers de traduction JSON
	{
		files: ["i18n/locales/**/*.json"],
		languageOptions: {
			parser: jsoncParser,
		},
		plugins: {
			jsonc: eslintPluginJsonc,
		},
		rules: {
			"jsonc/sort-keys": ["error", "asc", { natural: true }],
			// Désactiver la règle pour permettre les espaces insécables dans les traductions
			"no-irregular-whitespace": "off",
		},
	},
	{
		files: ["**/*.ts", "**/*.tsx", "**/*.vue"],
		rules: {
			"@typescript-eslint/naming-convention": [
				"error",
				{
					selector: "typeLike",
					format: ["PascalCase"],
				},
			],
		},
	},
	{
		files: ["app/components/**/*.vue"],
		plugins: {
			"check-file": checkFile,
		},
		rules: {
			// Interdire les fichiers nommés index.vue dans les composants pour favoriser le nommage explicite
			"check-file/filename-blocklist": [
				"error",
				{
					"**/index.vue": "*.vue",
					"**/Index.vue": "*.vue",
					"**/INDEX.vue": "*.vue",
				},
			],
			"check-file/folder-naming-convention": [
				"error",
				{
					"app/components/**/*": "PASCAL_CASE",
				},
			],
		},
	},
	{
		files: ["app/pages/**/*.*"],
		plugins: {
			"check-file": checkFile,
		},
		rules: {
			"check-file/folder-naming-convention": [
				"error",
				// tout sauf les dossiers spéciaux entre crochets comme [id] ou entre parenthèses comme (admin)
				{
					"app/pages/**/!(\\[*\\]|\\(*\\))/": "KEBAB_CASE",
				},
			],
		},
	},
	{
		files: ["app/services/**/*.*", "app/stores/**/*.*", "app/types/**/*.*"],
		plugins: {
			"check-file": checkFile,
		},
		rules: {
			"check-file/filename-naming-convention": [
				"error",
				{
					"app/services/**/*.!(test|spec).*": "*.service",
					"app/stores/**/*.!(test|spec).*": "*.store",
					"app/types/**/*.!(test|spec).*": "*.type",
				},
			],
		},
	},
	eslintConfigPrettier,
	// rules qui doivent être appliquées après la config Prettier pour l'override
	{
		rules: {
			"vue/html-self-closing": [
				"error",
				{
					html: {
						void: "always",
						normal: "always",
						component: "always",
					},
				},
			],
		},
	},
);
