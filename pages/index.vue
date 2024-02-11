<template>
  <div class="w-fit mx-auto">
    <h1
      class="peer w-fit mx-auto lg:p-12 uppercase text-5xl sm:text-7xl lg:text-[6rem] xl:text-[8rem] tracking-tight font-bold flex flex-col leading-none gap-4">
      <span>Hey, je suis</span>
      <span class="md:ml-20">Nicolas Walter</span>
    </h1>
    <div id="customCursor" aria-hidden="true"
      class="peer-hover:mix-blend-difference peer-hover:bg-white peer-hover:size-40 absolute -top-80 -left-80 size-8 rounded-full bg-black dark:bg-white" />
    <h2 class="mt-8 lg:mt-0 text-xl sm:text-center text-gray-800 dark:text-gray-300 font-medium mb-10">
      Développeur web d'interfaces pixel-perfect et
      <NuxtLink to="/a-propos#accessibilite"
        class="relative link after:text-white hover:after:content-['accessibles.'] after:bg-black after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:transition-[height] hover:after:h-full">
        accessibles.
      </NuxtLink>
      <!-- WIP hover effect -->
    </h2>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nicolas Walter - Développeur web front-end',
  meta: [{
    name: 'description', content: "Nicolas Walter est un développeur web d'interfaces pixel-perfect et accessibles, créateur de produits inclusifs et d'expériences digitales."
  }]
})

onMounted(() => {
  // Get the custom cursor element
  const cursor = document.getElementById('customCursor');

  // Add an event listener for mousemove event
  if (cursor) {
    document.addEventListener('mousemove', e => {
      // Update the position of the cursor
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    })
  };
});
</script>