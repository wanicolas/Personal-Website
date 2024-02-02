<template>
  <div class="max-w-3xl mx-auto">
    <h1 class="text-5xl font-black text-gray-900 dark:text-white mb-14">A propos de moi.</h1>
    <div class="flex gap-8">
      <div class="w-px shrink-0 bg-black dark:bg-white"></div>
      <div>
        <div class="flex items-center -ml-10 gap-6 mb-3">
          <div class="flex items-center justify-center size-4 bg-black rounded-full">
            <div class="size-3 bg-white rounded-full"></div>
          </div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Mon parcours et ma passion.</h2>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-12">
          Au lycée, j'ai découvert les bases du web. J'avoue que pour moi, c'était la révolution. Un pauvre site en local
          fait un camarade, et je me voyais déjà demander à tout le monde de le visiter. Bon, c'est vrai qu'au début
          j'avais pas compris qu'il n'était pas en ligne, mais c'était un début ! Ce qui m'a tout de suite plû, c'est le
          style. Une inspiration sur internet et hop j'essayais de le reproduire avec du CSS ! C'est comme ça que j'ai eu
          envie de faire du web. J'ai donc commencé à apprendre le HTML et le CSS, puis je suis allé faire mon BUT MMI et
          j'ai choisi le parcours développement web en 2èeme année, et j'ai accroché dans ce domaine vaste et riche. Là,
          j'ai appris à faire du back et du front, et le dynamisme ainsi que la beauté graphique qu'on peut donner
          aujourd'hui à une application web, c'est vraiment génial.
        </p>

        <div class="flex items-center -ml-10 gap-6 mb-3">
          <div class="flex items-center justify-center size-4 bg-black rounded-full">
            <div class="size-3 bg-white rounded-full"></div>
          </div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Développer pour le web.</h2>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-12">Faire un site web, ce n'est pas juste mettre du texte, des
          images
          et des
          vidéos puis animer un peu le tout et faire joli. C'est bien plus que cela. Malgré le changement constant des
          technologies, la base du web reste indifférente aux nouveaux frameworks et librairies. C'est pourquoi la base du
          web, ce dont quoi se nourrit le navigatuer, est très important. On sous-estime souvent une bonne connaissance du
          HTML pur. Oui, vous avez bien entendu, je parle du HTML. Aujourd'hui, on cherche des développeurs qui maitrisent
          le JavaScript, pour faire des sites dynamiques et interactifs. Mais utiliser un framework front et écrire du
          JS dans tous les sens c'est bien beau, mais ce qui compte vraiment, c'est ce qui va être généré et
          utilisé par le navigateur. C'est là où un bon markup devient utile : la sémantique est extrêmement importante,
          tout d'abord pour une question de SEO car un contenu bien balisé sera plus mis en avant, mais aussi pour une
          question d'accessibilité et de practicité. Un site bien balisé et correctement implémenté, c'est un site qui
          sera affiché correctement en mode lecture, qui pourra être exploité par certaines extensions, mais c'est aussi
          un site qui sera rendu fidèlement aux personnes utilisatrices de technologies d'assistance. Cette base est
          nécessaire afin d'avoir un site web accessible et utilisable par tous, et c'est ce que je m'efforce de faire
          dans mes projets.
        </p>

        <div class="flex items-center -ml-10 gap-6 mb-3">
          <div class="flex items-center justify-center size-4 bg-black rounded-full">
            <div class="size-3 bg-white rounded-full"></div>
          </div>
          <h2 class="text-lg font-semibold text-gray-900 dark:text-white">L'accessibilité, une nécessité.</h2>
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-3">
          Comme expliqué précédemment, je me suis découvert au fil de mes années d'études et de travail un véritable
          engouement pour l'accessibilité du web. C'est pourquoi je m'efforce de rendre mes projets accessibles au plus
          grand nombre. Cela passe par une bonne sémantique, mais aussi par une bonne utilisation des technologies. Par
          exemple, j'utilise le plus possible des éléments natifs du navigateur, et je n'utilise des librairies que
          lorsque cela est nécessaire. Cela permet d'avoir un site web plus léger, plus rapide, et plus accessible.
          L'ajout ou le masquage d'information pour les personnes utilisant un lecteur d'écran ou la sémantique de la page
          sont des aspects bien souvent oubliés.
        </p>
        <p class="text-gray-600 dark:text-gray-300">
          Lors de mes travaux personnels, professionnels ou universitaires, je me suis formé à l'accessibilité du web,
          principalement par envie en consultant les documentations officielles techniques en ligne comme le WCAG, mais
          aussi en lisant des articles de blog et en regardant des vidéos sur le sujet. J'ai aussi eu l'occasion de
          travailler sur des projets d'accessibilité professionnels, notamment la mise en conformité d'un site web avec le
          RGAA. J'ai aussi eu l'occasion de vérifier officiellement mon niveau de compétences au travers de certifications
          reconnues.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'A propos de moi | Nicolas Walter - Développeur web front-end',
  meta: [{
    name: 'description', content: 'Mes projets personnels et universitaires.'
  }]
})
</script>