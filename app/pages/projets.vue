<script setup lang="ts">
// projects are stored in assets/data/projects.json
import projects from "~/assets/data/projects.json";

useHead({
	title: "Projets - Nicolas Walter, développeur web front-end",
	meta: [
		{
			name: "description",
			content: "Mes projets personnels et universitaires.",
		},
	],
});
</script>

<template>
	<div>
		<div
			aria-hidden="true"
			class="fixed -left-[12vmin] bottom-0 -z-10 hidden select-none text-[30vmin] font-black text-[#EDEDED] md:block dark:text-neutral-900"
			style="writing-mode: vertical-lr"
		>
			Projets.
		</div>
		<div class="mx-auto max-w-5xl">
			<h1 class="mb-14 text-3xl font-black lg:text-4xl">Projets.</h1>
			<div
				v-for="(project, index) in projects"
				:key="index"
				class="group/project peer mx-auto mb-16 grid max-w-lg grid-cols-1 items-center gap-4 md:mb-24 lg:mb-32 lg:max-w-none lg:grid-cols-2 lg:gap-8"
			>
				<div>
					<div class="mb-1 text-sm text-neutral-500 dark:text-neutral-400">
						<span class="sr-only">Date :</span>
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
						<svg
							aria-hidden="true"
							class="mb-1 ml-2 inline size-4 shrink-0 stroke-2 transition motion-safe:group-hover/title:-translate-y-1 motion-safe:group-hover/title:translate-x-1"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
							/>
						</svg>
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
						<svg
							class="size-5 fill-neutral-700 dark:fill-neutral-200"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							data-v-inspector="app.vue:64:13"
						>
							<path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
							></path>
						</svg>
						<span class="text-base">Visiter le dépôt GitHub</span>
					</NuxtLink>
				</div>
				<NuxtLink
					aria-hidden="true"
					:to="project.link"
					target="blank"
					class="h-fit shrink-0"
				>
					<img
						class="max-h-72 w-full rounded border border-neutral-200 object-cover transition xl:grayscale xl:group-hover/project:grayscale-0 dark:border-neutral-800"
						:src="'/img/' + project.img"
						alt=""
					/>
				</NuxtLink>
			</div>
		</div>
	</div>
</template>
