<template>
  <div class="mx-auto w-fit">
    <h1
      @mouseover="$emit('cursor-hovered')"
      @mouseleave="$emit('cursor-left')"
      class="mx-auto mb-8 flex w-fit flex-col gap-4 text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl lg:mb-12 lg:p-4 lg:text-[6rem] xl:text-[8rem]"
    >
      <span>Hey, je suis</span>
      <span class="md:ml-20">Nicolas Walter</span>
    </h1>
    <h2 class="text-xl font-medium sm:text-center">
      Développeur web d'interfaces pixel-perfect et
      <NuxtLink
        to="/a-propos#accessibilite"
        class="link relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black after:text-white after:transition-[height] hover:after:h-full hover:after:content-['accessibles.'] after:dark:bg-white after:dark:text-black"
      >
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

const emit = defineEmits(["cursor-left", "cursor-hovered"]);

onUnmounted(() => {
  emit("cursor-left");
});
</script>
