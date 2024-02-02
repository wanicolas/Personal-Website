<template>
    <Body class="bg-white dark:bg-black text-black dark:text-white">
        <header class="px-4 sm:px-12 text-black dark:text-white mt-16 mb-28 sm:mb-40">
            <nav class="flex justify-between items-center">
                <NuxtLink to="/" title="Accueil" class="text-4xl font-medium pr-3" style="letter-spacing: -0.4em;">NW
                </NuxtLink>
                <div class="flex gap-8 items-center">
                    <NuxtLink to="/a-propos" title="À propos" class="hover:underline underline-offset-8">A propos</NuxtLink>
                    <NuxtLink to="/projets" title="Blog" class="hover:underline underline-offset-8">Projets</NuxtLink>
                    <button class="mt-1" @click="toggleColorMode">
                        <svg class="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
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
        <main class="mb-16 mx-auto px-4">
            <NuxtPage />
        </main>
    </Body>
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

<style lang="css" scoped>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>