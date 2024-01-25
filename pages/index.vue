<template>
  <div class="text-black dark:text-white">
    <h1 class="glitch relative uppercase tracking-widest text-4xl font-medium mb-2"
      data-text="Nicolas Walter, tout simplement.">Nicolas Walter, tout simplement.</h1>
    <h2 class="text-xl mb-10">Développeur d'interfaces web pixel-perfect et accessibles.</h2>
  </div>
  <div class="text-gray-600 dark:text-gray-300">
    <p class="mb-6">Après avoir découvert les bases du web au lycée, développer des interfaces UI agréables et utilisables
      m'a motivé à
      devenir un véritable professionnel du web. L'UX et l'accessibilité sont des sujets qui me passionnent et que je mets
      en pratique dans mes projets.
    </p>
    <p>Toujours enthousiasmé à l'idée de créer des pages web graphiquement plaisantes, l'accessibilité est au centre de
      mon
      développement afin de garantir une expérience juste et pratique pour quiconque navigue le web.</p>
    <NuxtLink to="a-propos" class="mt-10 flex w-fit">
      <span class="hover:underline">En apprendre plus sur moi</span>
      <svg class="animateSVG" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
        clip-rule="evenodd">
        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
      </svg>
    </NuxtLink>
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

/* Glitch H1 */
.glitch:before,
.glitch:after {
  display: block;
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
}

@media (prefers-reduced-motion) {

  .glitch:before,
  .glitch:after {
    animation: none;
  }
}

.glitch:before {
  animation: glitch-it 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
  color: #777777;
  z-index: -1;
}

.glitch:after {
  animation: glitch-it 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
  color: #cecece;
  z-index: -2;
}

@keyframes glitch-it {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  to {
    transform: translate(0);
  }
}
</style>

<script setup lang="ts">
useHead({
  title: 'Nicolas Walter - Développeur web full-stack',
  meta: [{
    name: 'description', content: 'Nicolas Walter est un développeur web full-stack passionné par les interfaces agréables, ergonomiques et accessibles.'
  }]
})
</script>
