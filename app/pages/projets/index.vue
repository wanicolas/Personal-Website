<script setup lang="ts">
import { projectsData } from "~/assets/data/projects";

const { locale, t } = useI18n();

const projects = computed(() => {
	const currentLocale = locale.value as LocaleCode;
	return projectsData.map((p) => ({
		...p,
		title: p.title[currentLocale],
		description: p.description[currentLocale],
		path: `/${p.slug}`,
	}));
});

useSeoMeta({
	title: t("projectsPage.title"),
	description: t("projectsPage.description"),
});
</script>

<template>
	<div>
		<div class="mx-auto max-w-5xl">
			<h1 class="mb-14 text-4xl font-black lg:text-5xl">
				{{ $t("projectsPage.h1") }}
			</h1>
			<article
				v-for="(project, index) in projects"
				:key="index"
				class="group/project peer mx-auto mb-16 grid max-w-lg grid-cols-1 items-center gap-4 md:mb-24 lg:mb-32 lg:max-w-none lg:grid-cols-2 lg:gap-8"
			>
				<div>
					<div
						class="mb-1 font-mono text-sm text-neutral-500 dark:text-neutral-400"
					>
						<span class="sr-only">{{ $t("projectsPage.date") }}</span>
						{{ project.date }}
					</div>
					<NuxtLinkLocale
						:to="`/projets/${project.slug}`"
						class="group/title mb-3"
					>
						<h2 class="inline text-lg font-semibold lg:text-xl">
							{{ project.title }}
						</h2>
						<Icon
							name="lucide:arrow-right"
							class="ml-2 transition motion-safe:group-hover/title:translate-x-1"
						/>
					</NuxtLinkLocale>
					<AppBadge :items="project.technos" class="mb-2" />
					<p class="text-neutral-600 lg:text-lg dark:text-neutral-300">
						{{ project.description }}
					</p>
				</div>
				<NuxtLinkLocale
					aria-hidden="true"
					tabindex="-1"
					:to="`/projets/${project.slug}`"
					class="h-fit shrink-0"
				>
					<img
						class="max-h-72 w-full rounded border border-neutral-200 object-cover transition xl:grayscale xl:group-focus-within/project:grayscale-0 xl:group-hover/project:grayscale-0 dark:border-neutral-800"
						:src="'/img/' + project.img"
						alt=""
					/>
				</NuxtLinkLocale>
			</article>
		</div>
	</div>
</template>
