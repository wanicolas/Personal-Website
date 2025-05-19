<template>
  <Body
    class="bg-white text-black selection:bg-black selection:text-white dark:bg-black dark:text-white dark:selection:bg-white dark:selection:text-black"
  >
    <!-- Custom cursor -->
    <div
      id="outerCursor"
      aria-hidden="true"
      class="pointer-events-none fixed z-[9999] size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black transition-all duration-[250ms] ease-out dark:border-white"
      :class="{ 'size-32 bg-white mix-blend-difference': isHovered }"
      :style="{ left: cursorPosition.x + 'px', top: cursorPosition.y + 'px' }"
    />
    <div
      id="innerCursor"
      aria-hidden="true"
      class="pointer-events-none fixed z-[9998] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-white"
      :style="{ left: cursorPosition.x + 'px', top: cursorPosition.y + 'px' }"
    />

    <!-- Accessible link to go to the content -->
    <a
      href="#contenu"
      class="absolute -left-80 -top-80 rounded-b-md bg-black p-1 text-white focus:left-4 focus:top-0"
    >
      Aller au contenu
    </a>

    <div
      class="flex min-h-dvh flex-col justify-between px-4 pb-6 pt-8 sm:px-12"
    >
      <header
        class="mx-auto mb-20 w-full max-w-6xl text-black dark:text-white md:mb-32 lg:mb-40"
      >
        <nav class="flex items-center justify-between">
          <NuxtLink to="/">
            <svg
              aria-hidden="true"
              class="h-8 w-auto fill-black dark:fill-white"
              width="101"
              height="54"
              viewBox="0 0 101 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.3845 54C37.3164 54 39 52.9331 39.8822 51.3543L60.4625 21.6646V48.7135C60.4619 48.7614 60.4619 48.8092 60.4626 48.8571C60.4778 51.7001 62.779 54 65.6155 54C67.5474 54 69.2311 52.9331 70.1132 51.3543L100.077 8.12819C101.702 5.78362 101.125 2.56077 98.7892 0.929764C96.453 -0.701243 93.2416 -0.122784 91.6164 2.22179L70.7685 32.2975V5.24853C70.7905 3.58918 70.0179 1.94878 68.5582 0.929764C66.222 -0.701243 63.0106 -0.122784 61.3854 2.22179L40.5375 32.2975L40.5375 5.21652C40.5375 2.36043 38.2304 0.0451218 35.3845 0.0451217C32.5386 0.0451216 30.2315 2.36043 30.2315 5.21652L30.2315 32.2944L9.38361 2.21865C7.7584 -0.125921 4.54701 -0.70438 2.21077 0.926627C0.751195 1.9456 -0.0214849 3.5859 0.000454599 5.24517L0.000456497 48.8286C0.000456622 51.6847 2.30754 54 5.15347 54C7.9994 54 10.3065 51.6847 10.3065 48.8286L10.3065 21.6614L30.8779 51.3384C31.7577 52.9259 33.4461 54 35.3845 54Z"
                fill="current"
              />
            </svg>
            <span class="sr-only">Accueil</span>
          </NuxtLink>
          <div class="flex items-center gap-6 sm:gap-8">
            <NuxtLink
              to="/a-propos"
              title="À propos"
              class="relative before:absolute before:left-0 before:top-6 before:block before:h-px before:w-full before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 before:dark:bg-white"
            >
              A propos
            </NuxtLink>
            <NuxtLink
              to="/projets"
              title="Blog"
              class="relative before:absolute before:left-0 before:top-6 before:block before:h-px before:w-full before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 before:dark:bg-white"
            >
              Projets
            </NuxtLink>
            <button class="mt-1" @click="toggleColorMode">
              <svg
                class="fill-inherit dark:fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"
                ></path>
              </svg>
              <span class="sr-only">Activer/Désactiver le mode sombre</span>
            </button>
          </div>
        </nav>
      </header>

      <main id="contenu" class="mx-auto">
        <NuxtPage
          @cursor-hovered="isHovered = true"
          @cursor-left="isHovered = false"
        />
      </main>

      <footer
        class="z-10 mx-auto mt-20 flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 md:mt-32 lg:mt-40"
      >
        <NuxtLink
          :to="route.name === 'a-propos' ? '/projets' : '/a-propos'"
          class="flex w-fit items-center"
        >
          <span
            class="mr-2 underline underline-offset-4 hover:underline sm:no-underline"
          >
            {{
              route.name === "a-propos"
                ? "Voir mes projets"
                : "En apprendre plus sur moi"
            }}
          </span>
          <svg
            class="animateSVG hidden size-7 fill-black dark:fill-white sm:block"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </NuxtLink>
        <div class="flex items-center gap-8">
          <NuxtLink to="https://www.linkedin.com/in/wanicolas/">
            <svg
              class="size-5 fill-black dark:fill-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
              ></path>
            </svg>
            <span class="sr-only">Accédez à mon profil LinkedIn.</span>
          </NuxtLink>
          <NuxtLink to="https://github.com/wanicolas">
            <svg
              class="size-5 fill-black dark:fill-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              ></path>
            </svg>
            <span class="sr-only">Accédez à mon profil GitHub.</span>
          </NuxtLink>
          <NuxtLink to="mailto:contact@nicolaswalter.fr">
            <svg
              class="size-6 fill-black dark:fill-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"
              />
              <path
                d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"
              />
            </svg>
            <span class="sr-only">Contactez-moi par email !.</span>
          </NuxtLink>
        </div>
      </footer>
    </div>
  </Body>
</template>

<script setup>
const colorMode = useColorMode();
colorMode.preference = colorMode.value;

const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};

const route = useRoute();

const cursorPosition = ref({ x: -200, y: -200 });

const isHovered = ref(false);

onMounted(() => {
  // Add an event listener for mousemove event
  if (window.innerWidth > 1200) {
    document.addEventListener("pointermove", (e) => {
      cursorPosition.value = { x: e.clientX, y: e.clientY };
    });
  }
});
</script>

<style>
/* Transition between pages */
.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.1rem);
}

/* SVG animation */
.animateSVG {
  animation-name: backAndForth;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  @media (prefers-reduced-motion) {
    animation: none;
  }
}

@keyframes backAndForth {
  0% {
    margin-left: 0rem;
  }

  100% {
    margin-left: 1rem;
  }
}
</style>
