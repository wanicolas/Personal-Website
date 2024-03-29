<template>
  <div>
    <div aria-hidden="true"
      class="fixed -left-4 bottom-4 md:bottom-8 text-7xl sm:text-[8rem] sm:-left-8 md:text-[12rem] md:-left-12 lg:-left-16 lg:text-[15rem] select-none font-black text-gray-100 dark:text-gray-900">
      A propos
    </div>
    <section class="relative max-w-3xl mx-auto mb-10">
      <h1 class="text-4xl font-black mb-14">A propos de moi.</h1>
      <div class="flex gap-4 sm:gap-8">
        <div class="w-px shrink-0 bg-black dark:bg-white"></div>
        <div class="space-y-12">
          <div v-for="info in infos">
            <div class="flex items-center -ml-6 sm:-ml-10 gap-3 sm:gap-6 mb-3">
              <div class="flex items-center justify-center size-4 bg-black dark:bg-white rounded-full">
                <div class="size-3 bg-white dark:bg-black rounded-full"></div>
              </div>
              <h2 class="text-lg font-semibold" :id="info.id">
                {{ info.title }}
              </h2>
            </div>
            <p v-for="paragraph in info.content" class="leading-relaxed text-gray-600 dark:text-gray-300 mb-3">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "A propos de moi - Nicolas Walter, développeur web front-end",
  meta: [
    {
      name: "description",
      content:
        "Découvrez mon parcours, ma passion pour le web et l'accessibilité.",
    },
  ],
});

const infos = [
  {
    title: "Mon parcours et ma passion.",
    content: [
      "Au lycée, j'ai découvert les bases du web. J'avoue que pour moi, c'était la révolution. Un petit site en local fait avec un camarade, et je me voyais déjà demander à tout le monde de le visiter. Bon, c'est vrai qu'au début je n'avais pas compris qu'il n'était pas en ligne, mais c'était un début ! Ce qui m'a tout de suite plu, c'est le style, enfin l'UI. Une inspiration sur internet et hop j'essayais de le reproduire avec du CSS ! C'est comme ça que j'ai eu envie de faire du web.",
    ],
  },
  {
    title: "Développer pour le web.",
    content: [
      "Faire un site web, ce n'est pas juste mettre du texte, des images et des vidéos puis animer un peu le tout et faire joli. C'est bien plus que cela. Malgré le changement constant des technologies, la base du web reste indifférente aux nouveaux \"frameworks\" et \"librairies\". C'est pourquoi la base du web, ce dont se nourrit le navigateur, est très important. On sous-estime souvent une bonne connaissance du HTML pur. Oui, vous avez bien entendu, je parle du HTML. Aujourd'hui, on cherche des développeurs qui maitrisent le JavaScript, pour faire des sites dynamiques et interactifs. Mais utiliser un framework front et écrire du JavaScript dans tous les sens c'est bien beau, mais ce qui compte vraiment, c'est ce qui va être généré et utilisé par le navigateur.",
      "C'est là où un bon \"markup\" devient utile : la sémantique est extrêmement importante, tout d'abord pour une question de SEO, car un contenu bien balisé sera plus mis en avant, mais aussi pour une question d'accessibilité et de practicité. Un site bien balisé et correctement implémenté, c'est un site qui sera affiché correctement en mode lecture, qui pourra être exploité par certaines extensions de navigateur, mais c'est aussi un site qui sera rendu fidèlement aux personnes utilisatrices de technologies d'assistance. Cette base est nécessaire afin d'avoir un site web accessible et utilisable par tous, et c'est ce que je m'efforce de faire dans mes projets.",
    ],
  },
  {
    title: "L'accessibilité, une nécessité.",
    id: "accessibilite",
    content: [
      "Comme expliqué précédemment, je me suis découvert au fil de mes années d'études et de travail un véritable engouement pour l'accessibilité du web. C'est pourquoi je m'attache à rendre mes projets accessibles au plus grand nombre. Cela passe par une bonne sémantique, mais aussi par une bonne utilisation des technologies. Par exemple, j'utilise en priorité des éléments natifs et n'utilise des librairies que lorsque cela est nécessaire, en y ajoutant des propriétés \"aria\". Cela permet d'avoir un site web plus léger, plus rapide, et plus accessible. L'ajout ou le masquage d'informations pour les utilisateurs de lecteurs d'écran, ainsi que la sémantique de la page, sont des aspects trop souvent négligés",
      "Lors de mes travaux personnels, professionnels ou universitaires, je me suis formé à l'accessibilité du web, principalement par envie, en consultant les documentations officielles techniques en ligne comme le \"WCAG\", la plateforme de \"Mozilla\" et d'autres. J'ai aussi eu l'occasion de travailler sur des projets d'accessibilité professionnels, notamment la mise en conformité d'une application web complexe avec le RGAA. J'ai aussi eu l'occasion de vérifier officiellement mon niveau de compétences au travers de certifications reconnues.",
    ],
  },
  {
    title: "Trêve de blabla...",
    content: [
      "C'est bien joli joli tout ça, mais je n'ai pas que le développement web dans la vie. J'aime aussi la musique, je suis pianiste (je sais, c'est la classe) et je joue du ukulele. Je suis cinéphile aussi, donc ne me proposez pas de regarder \"Taxi 2\" en streaming... J'aime aussi apprendre, et je suis toujours à l'affût de nouvelles technologies, de nouvelles méthodes de travail, de nouvelles pratiques.",
    ],
  },
];
</script>
