<script setup lang="ts">
import type { Collections } from "@nuxt/content";

const route = useRoute();
const { locale } = useI18n();
const slug = computed(() =>
	Array.isArray(route.params.slug)
		? `/${String(route.params.slug.join("/"))}`
		: `/${String(route.params.slug)}`,
);

const { data: page } = await useAsyncData(
	`page-${locale.value}-${slug.value}`,
	async () => {
		// Build collection name based on current locale
		const collection = ("projets_" + locale.value) as keyof Collections;
		const content = await queryCollection(collection).path(slug.value).first();

		// Optional: fallback to default locale if content is missing
		if (!content && locale.value !== "fr") {
			return await queryCollection("projets_fr").path(slug.value).first();
		}

		return content;
	},
	{
		watch: [locale], // Refetch when locale changes
	},
);

useSeoMeta({
	title: () => page.value?.title,
	description: () => page.value?.description,
});
</script>

<template>
	<div class="mx-auto max-w-4xl px-4 py-8">
		<NuxtLinkLocale
			to="/projets"
			class="mb-8 inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 hover:dark:text-white"
		>
			<Icon name="lucide:arrow-left" class="size-5" />
			<span>{{ $t("projects") }}</span>
		</NuxtLinkLocale>

		<article class="prose prose-sm md:prose-base dark:prose-invert">
			<ContentRenderer v-if="page" :value="page" />
			<div v-else class="py-12 text-center">
				<h1 class="mb-4 text-2xl font-bold">
					{{ $t("somethingIsWrong") }}
				</h1>
			</div>
		</article>
	</div>
</template>
