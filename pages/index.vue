<template>
  <div>
    <div id="customCursor" class="absolute -top-80 -left-80 size-8 rounded-full bg-black dark:bg-white" />
    <div class="w-fit mx-auto">
      <h1 @mouseover="hover = true" @mouseleave="hover = false"
        class="uppercase text-5xl sm:text-7xl lg:text-[8rem] tracking-tight font-bold mb-8 flex flex-col leading-none gap-4">
        <span>Hey, je suis</span>
        <span class="md:ml-20">Nicolas Walter</span>
      </h1>
      <h2 class="text-xl sm:text-center text-gray-800 dark:text-gray-300 font-medium mb-10">Développeur d'interfaces web
        pixel-perfect et
        <NuxtLink to="/a-propos#accessibilite"
          class="relative link after:text-white hover:after:content-['accessibles.'] after:bg-black after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:transition-[height] hover:after:h-full">
          accessibles.
        </NuxtLink>
        <!-- WIP hover effect -->
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nicolas Walter - Développeur web front-end',
  meta: [{
    name: 'description', content: 'Nicolas Walter est un développeur web front-end passionné par les interfaces agréables, ergonomiques et accessibles.'
  }]
})

const hover = ref(false);

// watch of hover value, if true, cursor must be visible and follow the mouse, else, cursor must be hidden
watch(hover, (newHover) => {
  // Get the custom cursor element
  const cursor = document.getElementById('customCursor');

  // Add an event listener for mousemove event
  if (newHover && cursor) {
    document.addEventListener('mousemove', e => {
      // Update the position of the cursor
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    })
  };
});
</script>
