<script setup lang="ts">
import { projectsData } from "~/assets/data/projects";

import type { Collections } from "@nuxt/content";

const route = useRoute();
const { locale } = useI18n();

const slug = computed(() =>
	Array.isArray(route.params.slug)
		? String(route.params.slug.join("/"))
		: String(route.params.slug),
);
const path = computed(() => `/${slug.value}`);

const project = computed(() => {
	const p = projectsData.find((p) => p.slug === slug.value);
	if (!p) return null;

	const currentLocale = locale.value as LocaleCode;
	return {
		...p,
		title: p.title[currentLocale],
		description: p.description[currentLocale],
		role: p.role[currentLocale],
		keyFigures: p.keyFigures[currentLocale],
	};
});

const { data: page } = await useAsyncData(
	`page-${locale.value}-${path.value}`,
	async () => {
		const collection = ("projets_" + locale.value) as keyof Collections;
		let content = await queryCollection(collection).path(path.value).first();

		if (!content && locale.value !== "fr") {
			content = await queryCollection("projets_fr").path(path.value).first();
		}

		return content;
	},
	{
		watch: [locale],
	},
);

useSeoMeta({
	title: () => project.value?.title,
	description: () => project.value?.description,
});
</script>

<template>
	<div class="mx-auto max-w-4xl">
		<NuxtLinkLocale
			to="/projets"
			class="mb-12 inline-flex items-center gap-2 text-neutral-600 underline-offset-4 transition-colors hover:text-neutral-900 hover:underline sm:no-underline dark:text-neutral-400 hover:dark:text-neutral-100"
		>
			<Icon name="lucide:arrow-left" class="size-5" />
			<span>{{ $t("projects") }}</span>
		</NuxtLinkLocale>

		<div v-if="project" class="mb-16">
			<!-- Header section -->
			<div class="mb-4">
				<h1
					class="mb-5 text-4xl font-black text-balance md:text-5xl lg:text-6xl"
				>
					{{ project.title }}
				</h1>
				<p
					class="text-lg text-balance text-neutral-600 md:text-xl dark:text-neutral-300"
				>
					{{ project.description }}
				</p>
			</div>

			<!-- Technos -->
			<AppBadge :items="project.technos" class="mb-12" />

			<!-- Metadata Grid -->
			<div class="mb-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
				<div v-if="project.role">
					<h3 class="mb-1 text-xs tracking-wider text-neutral-500 uppercase">
						{{ $t("projectMeta.role") }}
					</h3>
					<p class="font-medium text-neutral-900 dark:text-neutral-100">
						{{ project.role }}
					</p>
				</div>
				<div v-if="project.company || project.client">
					<h3 class="mb-1 text-xs tracking-wider text-neutral-500 uppercase">
						{{ $t("projectMeta.entity") }}
					</h3>
					<p class="font-medium text-neutral-900 dark:text-neutral-100">
						{{ project.client }}
					</p>
				</div>
				<div v-if="project.date">
					<h3 class="mb-1 text-xs tracking-wider text-neutral-500 uppercase">
						{{ $t("projectMeta.date") }}
					</h3>
					<p class="font-medium text-neutral-900 dark:text-neutral-100">
						{{ project.date }}
					</p>
				</div>
				<div v-if="project.keyFigures && project.keyFigures.length">
					<h3 class="mb-1 text-xs tracking-wider text-neutral-500 uppercase">
						{{ $t("projectMeta.impact") }}
					</h3>
					<ul class="font-medium text-neutral-900 dark:text-neutral-100">
						<li v-for="fig in project.keyFigures" :key="fig">{{ fig }}</li>
					</ul>
				</div>
			</div>

			<!-- Links -->
			<div
				v-if="project.link || project.github"
				class="mb-12 flex flex-wrap gap-4"
			>
				<NuxtLink
					v-if="project.link"
					:to="project.link"
					target="_blank"
					class="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
				>
					{{ $t("projectMeta.visitSite") }}
					<Icon name="lucide:arrow-up-right" class="size-4" />
				</NuxtLink>
				<NuxtLink
					v-if="project.github"
					:to="project.github"
					target="_blank"
					class="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-900"
				>
					<Icon name="lucide:github" class="size-4" />
					{{ $t("projectMeta.viewCode") }}
				</NuxtLink>
			</div>

			<!-- Cover Image -->
			<img
				v-if="project.img"
				:src="'/img/' + project.img"
				:alt="project.title"
				class="aspect-video w-full rounded-2xl border border-neutral-200 object-cover shadow-sm dark:border-neutral-800"
			/>
		</div>

		<article
			class="prose prose-sm md:prose-base dark:prose-invert prose-neutral max-w-none"
		>
			<ContentRenderer v-if="page" :value="page" />
			<div v-else class="py-12 text-center">
				<h1 class="mb-4 text-2xl font-bold">
					{{ $t("somethingIsWrong") }}
				</h1>
			</div>
		</article>
	</div>
</template>
