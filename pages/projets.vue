<template>
  <div class="max-w-5xl mx-auto">
    <h1 class="text-4xl font-black mb-14">Projets.</h1>
    <div
      v-for="project in projects"
      class="group/whole flex flex-col items-center mx-auto max-w-lg lg:max-w-none lg:flex-row lg:odd:flex-row-reverse gap-4 lg:gap-8 peer mb-12 md:mb-20 lg:mb-28"
    >
      <NuxtLink
        aria-disabled="true"
        :to="project.link"
        target="blank"
        class="shrink-0 h-fit"
      >
        <img
          class="w-full h-auto max-w-lg object-cover rounded xl:grayscale xl:group-hover/whole:grayscale-0 transition"
          :src="'/img/' + project.img"
          alt=""
        />
      </NuxtLink>
      <div>
        <div class="lg:-mt-1 flex items-center gap-8 flex-wrap mb-3">
          <NuxtLink :to="project.link" target="blank">
            <h2
              class="text-lg font-semibold flex gap-2 flex-wrap items-center group/title"
            >
              {{ project.title }}
              <svg
                aria-hidden="true"
                class="transition group-hover/title:translate-x-1 group-hover/title:-translate-y-1 size-4 stroke-2"
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
            </h2>
          </NuxtLink>
          <NuxtLink
            v-if="project.github"
            :to="project.github"
            title="GitHub"
            target="blank"
          >
            <svg
              class="size-5 fill-black dark:fill-white"
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
            <span class="sr-only">Lien du dépôt GitHub du projet</span>
          </NuxtLink>
        </div>
        <div v-if="project.technos" class="flex gap-2 mb-2">
          <span
            v-for="techno in project.technos"
            class="bg-gray-100 rounded-full px-2 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            {{ techno }}
          </span>
        </div>
        <p class="text-gray-600 dark:text-gray-300">
          {{ project.description }}
        </p>
      </div>
    </div>
    <h2 class="text-xl">
      Plus de projets sont en cours d'ajout. N'hésitez pas à revenir plus tard !
    </h2>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Projets - Nicolas Walter, développeur web front-end",
  meta: [
    {
      name: "description",
      content: "Mes projets personnels et universitaires.",
    },
  ],
});

// projects are stored in assets/data/projects.json
import projects from "~/assets/data/projects.json";
</script>
