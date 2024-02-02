<template>
  <div>
    <div class="w-fit mx-auto">
      <h1
        class="uppercase text-5xl sm:text-7xl lg:text-[8rem] tracking-tight font-bold mb-8 flex flex-col leading-none gap-4">
        <span>Hey, je suis</span>
        <span class="md:ml-20">Nicolas Walter</span>
      </h1>
      <h2 class="text-xl sm:text-center text-gray-800 dark:text-gray-300 font-medium mb-10">Développeur d'interfaces web
        pixel-perfect et accessibles.</h2>
    </div>

    <!-- <footer class="flex justify-between items-end absolute bottom-4 left-4 right-4">
      <NuxtLink to="a-propos" class="flex w-fit">
        <span class="hover:underline">En apprendre plus sur moi</span>
        <svg class="animateSVG fill-black dark:fill-white" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd" clip-rule="evenodd">
          <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
        </svg>
      </NuxtLink>
      <div class="flex gap-8">
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
    </footer> -->
  </div>
</template>

<style lang="css" scoped>
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

<script setup lang="ts">
useHead({
  title: 'Nicolas Walter - Développeur web front-end',
  meta: [{
    name: 'description', content: 'Nicolas Walter est un développeur web front-end passionné par les interfaces agréables, ergonomiques et accessibles.'
  }]
})
</script>
