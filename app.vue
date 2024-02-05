<template>
  <Body>
    <div
      class="min-h-screen flex flex-col justify-between bg-white dark:bg-black text-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black px-4 py-8 sm:px-12">
      <header class="md:mt-16 text-black dark:text-white">
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
            <NuxtLink to="/a-propos" title="À propos" class="menu-link relative">A
              propos
            </NuxtLink>
            <NuxtLink to="/projets" title="Blog" class="menu-link relative">Projets
            </NuxtLink>
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

      <main class="mx-auto">
        <NuxtPage />
      </main>

      <footer class="flex flex-col gap-4 sm:flex-row justify-between items-end">
        <NuxtLink to="a-propos" class="flex w-fit">
          <span class="hover:underline underline-offset-4">En apprendre plus sur moi</span>
          <svg class="animateSVG fill-black dark:fill-white" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd" clip-rule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
          </svg>
        </NuxtLink>
        <div class="order-first sm:order-last flex gap-8">
          <NuxtLink to="https://linkedin.com/nicolaswalternw">
            <svg class="fill-black dark:fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20"
              height="20" viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z">
              </path>
            </svg>
            <span class="sr-only">Accédez à mon profil LinkedIn.</span>
          </NuxtLink>
          <NuxtLink to="https://linkedin.com/nicolaswalternw">
            <svg class="fill-black dark:fill-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20"
              height="20" viewBox="0 0 24 24">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z">
              </path>
            </svg>
            <span class="sr-only">Accédez à mon profil GitHub.</span>
          </NuxtLink>
        </div>
      </footer>
    </div>
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
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}

.menu-link::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  top: 24px;
  left: 0;
  background-color: #000;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.menu-link:hover::before {
  transform: scaleX(1);
}


.animateSVG {
  animation-name: forward;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes forward {
  0% {
    margin-left: 1rem;
  }

  100% {
    margin-left: 2rem;
  }
}
</style>