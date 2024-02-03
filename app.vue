<template>
  <Body class="bg-white dark:bg-black text-black dark:text-white">
    <header class="px-4 sm:px-12 text-black dark:text-white mt-16 mb-28 sm:mb-40">
      <nav class="flex justify-between items-center">
        <NuxtLink to="/">
          <svg aria-hidden="true" class="h-8 w-auto stroke-black dark:stroke-white" width="1210" height="664"
            viewBox="0 0 1210 664" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M78 585L78 79" stroke="inherit" stroke-width="120" stroke-linecap="round" />
            <path d="M430 79L430 585" stroke="inherit" stroke-width="120" stroke-linecap="round" />
            <path d="M782 79L782 585" stroke="inherit" stroke-width="120" stroke-linecap="round" />
            <path d="M430 585L78 79" stroke="inherit" stroke-width="120" stroke-linecap="round" />
            <path d="M782 79L430 585" stroke="inherit" stroke-width="120" stroke-linecap="round" />
            <path d="M1134 79L782 585" stroke="inherit" stroke-width="120" stroke-linecap="round" />
          </svg>
          <span class="sr-only">Accueil</span>
        </NuxtLink>
        <div class="flex gap-8 items-center">
          <NuxtLink to="/a-propos" title="À propos" class="hover:underline underline-offset-8">A propos</NuxtLink>
          <NuxtLink to="/projets" title="Blog" class="hover:underline underline-offset-8">Projets</NuxtLink>
          <button class="mt-1" @click="toggleColorMode">
            <svg class="fill-inherit dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
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

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}


.background::after {
  background-image: radial-gradient(at 40% 40%, rgb(30, 144, 255) 0px, transparent 50%), radial-gradient(at 90% 10%, rgb(255, 105, 180) 0px, transparent 50%), radial-gradient(at 50% 95%, rgb(0, 255, 255) 0px, transparent 50%), radial-gradient(at 20% 30%, rgb(50, 205, 50) 0px, transparent 50%), radial-gradient(at 90% 90%, rgb(255, 255, 0) 0px, transparent 50%), radial-gradient(at 33% 50%, rgb(255, 69, 0) 0px, transparent 50%), radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%);
  position: fixed;
  content: "";
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>