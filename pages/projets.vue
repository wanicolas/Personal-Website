<template>
    <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-black mb-14">Projets.</h1>
        <div v-for="i in 5" class="flex flex-col md:flex-row odd:flex-row-reverse gap-4 peer mb-12 md:mb-20">
            <img class="w-72 h-40 object-cover rounded shrink-0" src="https://picsum.photos/320/180" alt="">
            <div>
                <h2 class="md:-mt-1 text-lg font-semibold mb-1">Titre du projet</h2>
                <p class="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                    eligendi eum blanditiis placeat quas
                    deserunt officiis. Consectetur, repellendus dignissimos blanditiis quaerat consequuntur culpa! Voluptas
                    iure
                    inventore, similique facilis esse tempore!
                </p>
                <div class="flex items-center gap-6 mt-4">
                    <NuxtLink class="flex gap-1 items-center underline group" to="#">
                        <span aria-hidden="true">siteweb.com</span>
                        <svg class="transition group-hover:translate-x-1 group-hover:-translate-y-1 size-4"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Lien du projet</span>
                    </NuxtLink>
                    <NuxtLink to="#">
                        <svg class="size-4 fill-black dark:fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            width="20" height="20" viewBox="0 0 24 24" data-v-inspector="app.vue:64:13">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
                            </path>
                        </svg>
                        <span class="sr-only">Lien du dépôt GitHub du projet</span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Projets | Nicolas Walter - Développeur web front-end',
    meta: [{
        name: 'description', content: 'Mes projets personnels et universitaires.'
    }]
})
</script>