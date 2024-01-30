<template>
    <h1 class="text-5xl font-black text-gray-900 dark:text-white mb-14">A propos de moi.</h1>
    <h2 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Développer pour le web</h2>
    <p class="text-gray-600 dark:text-gray-300">Faire un site web, ce n'est pas juste mettre du texte, des images et des
        vidéos puis animer un peu le tout et faire joli. C'est bien plus que cela. Malgré le changement constant des
        technologies, la base du web reste indifférente aux nouveaux frameworks et librairies. C'est pourquoi la base du
        web, ce dont quoi se nourrit le navigatuer, est très important. On sous-estime souvent une bonne connaissance du
        HTML pur. Oui, vous avez bien entendu, je parle du HTML. Parce qu'utiliser un framework front et écrire du
        JavaScript dans tous les sens c'est bien beau, mais ce qui compte vraiment, c'est ce qui va être généré et utilisé
        par le navigateur. C'est là où un bon markup devient utile : la sémantique est extrêmement importante, tout d'abord
        pour une question de SEO car un contenu bien balisé sera plus mis en avant, mais aussi pour une question
        d'accessibilité et de practicité. Cette base est nécessaire afin d'avoir un site web accessible et utilisable par
        tous, et c'est ce que je m'efforce de faire dans mes projets.
    </p>
</template>

<script setup lang="ts">
useHead({
    title: 'A propos de moi | Nicolas Walter - Développeur web front-end',
    meta: [{
        name: 'description', content: 'Mes projets personnels et universitaires.'
    }]
})
</script>