<template>
  <div class="w-fit mx-auto">
    <h1
      class="peer w-fit mx-auto lg:pt-12 lg:px-12 mb-8 lg:mb-12 uppercase text-5xl sm:text-7xl lg:text-[6rem] xl:text-[8rem] tracking-tight font-bold flex flex-col leading-none gap-4">
      <span>Hey, je suis</span>
      <span class="md:ml-20">Nicolas Walter</span>
    </h1>
    <h2 class="text-xl sm:text-center font-medium lg:mb-12">
      Développeur web d'interfaces pixel-perfect et
      <NuxtLink to="/a-propos#accessibilite"
        class="relative link after:text-white after:dark:text-black hover:after:content-['accessibles.'] after:bg-black after:dark:bg-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:transition-[height] hover:after:h-full">
        accessibles.
      </NuxtLink>
      <!-- WIP hover effect -->
    </h2>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Nicolas Walter, développeur web front-end",
  meta: [
    {
      name: "description",
      content:
        "Nicolas Walter est un développeur web d'interfaces pixel-perfect et accessibles, créateur de produits inclusifs et d'expériences digitales.",
    },
  ],
});
</script>