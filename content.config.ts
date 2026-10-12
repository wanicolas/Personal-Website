import { defineCollection, defineContentConfig } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		projets_fr: defineCollection({
			type: "page",
			source: {
				include: "fr/projets/*.md",
				prefix: "/",
			},
		}),
		projets_en: defineCollection({
			type: "page",
			source: {
				include: "en/projets/*.md",
				prefix: "/",
			},
		}),
	},
});
