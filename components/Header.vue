<template>
    <header class="max-w-6xl mx-auto px-4 text-gray-500 dark:text-gray-400 mt-16 mb-36">
        <nav class="flex justify-between">
            <NuxtLink to="/" title="Accueil" class="text-4xl font-medium text-gray-600 dark:text-gray-300"
                style="letter-spacing: -0.440em;">NW
            </NuxtLink>
            <div class="flex gap-8 items-center">
                <div class="space-x-4">
                    <NuxtLink to="/a-propos" title="À propos">À propos</NuxtLink>
                    <NuxtLink to="/projets" title="Blog">Projets</NuxtLink>
                </div>
                <button @click="toggleColorMode">
                    <svg class="fill-gray-600 dark:fill-gray-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24">
                        <path
                            d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z">
                        </path>
                    </svg>
                    <span class="sr-only">Activer/Désactiver le mode sombre</span>
                </button>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    methods: {
        toggleColorMode() {
            this.$colorMode.preference = this.$colorMode.preference === 'dark' ? 'light' : 'dark';
        },
    },
};
</script>