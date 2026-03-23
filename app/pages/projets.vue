<script setup lang="ts">
import projectsData from "~/assets/data/projects.json";
const { locale } = useI18n();

const projects = computed(() => {
	return projectsData.map((project) => ({
		...project,
		title: project[`${locale.value}_title`],
		description: project[`${locale.value}_description`],
	}));
});

useSeoMeta({
	title: $t("projectsPage.title"),
	ogTitle: $t("projectsPage.title"),
	description: $t("projectsPage.description"),
	ogDescription: $t("projectsPage.description"),
});
</script>

<template>
	<div>
		<div
			aria-hidden="true"
			class="fixed bottom-0 -z-10 hidden font-black text-[#EDEDED] select-none [writing-mode:vertical-lr] md:block dark:text-neutral-900"
			:class="
				locale === 'fr'
					? '-left-[9vmin] text-[26vmin]'
					: '-left-[8vmin] text-[22vmin]'
			"
		>
			{{ $t("projectsPage.bgText") }}
		</div>
		<div class="mx-auto max-w-5xl">
			<h1 class="mb-14 text-3xl font-black lg:text-4xl">
				{{ $t("projectsPage.h1") }}
			</h1>
			<article
				v-for="(project, index) in projects"
				:key="index"
				class="group/project peer mx-auto mb-16 grid max-w-lg grid-cols-1 items-center gap-4 md:mb-24 lg:mb-32 lg:max-w-none lg:grid-cols-2 lg:gap-8"
			>
				<div>
					<div class="mb-1 text-sm text-neutral-500 dark:text-neutral-400">
						<span class="sr-only">{{ $t("projectsPage.date") }}</span>
						{{ project.date }}
					</div>
					<NuxtLink
						:to="project.link"
						target="blank"
						class="group/title mb-3 block"
					>
						<h2 class="inline text-lg font-semibold lg:text-xl">
							{{ project.title }}
						</h2>
						<Icon
							name="lucide:move-up-right"
							class="-mb-0.5 ml-2 stroke-2 transition motion-safe:group-hover/title:translate-x-1 motion-safe:group-hover/title:-translate-y-1"
						/>
					</NuxtLink>
					<div class="mb-2 flex flex-wrap items-center gap-2">
						<span
							v-for="(techno, tIndex) in project.technos"
							:key="tIndex"
							class="rounded-full bg-neutral-200 px-2 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
						>
							{{ techno }}
						</span>
					</div>
					<p class="text-neutral-600 lg:text-lg dark:text-neutral-300">
						{{ project.description }}
					</p>
					<NuxtLink
						v-if="project.github"
						:to="project.github"
						title="GitHub"
						target="blank"
						class="mt-4 flex items-center gap-2 text-neutral-700 hover:text-black lg:text-lg dark:text-neutral-200 hover:dark:text-white"
					>
						<Icon
							name="lucide:github"
							class="size-5 fill-neutral-700 dark:fill-neutral-200"
						/>
						<span class="text-base">{{ $t("visitGithubRepo") }}</span>
					</NuxtLink>
				</div>
				<NuxtLink
					aria-hidden="true"
					tabindex="-1"
					:to="project.link"
					target="blank"
					class="h-fit shrink-0"
				>
					<img
						class="max-h-72 w-full rounded border border-neutral-200 object-cover transition xl:grayscale xl:group-focus-within/project:grayscale-0 xl:group-hover/project:grayscale-0 dark:border-neutral-800"
						:src="'/img/' + project.img"
						alt=""
					/>
				</NuxtLink>
			</article>
		</div>
	</div>
</template>
