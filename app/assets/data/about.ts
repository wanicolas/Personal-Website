export interface AboutSection {
	id?: string;
	title: Record<"fr" | "en", string>;
	content: Record<"fr" | "en", string[]>;
}

export const aboutData: AboutSection[] = [
	{
		title: {
			fr: "Mon parcours et ma passion.",
			en: "My journey and passion.",
		},
		content: {
			fr: [
				"Au lycée, j'ai découvert les bases du web. J'avoue que pour moi, c'était la révolution. Un petit site en local fait avec un camarade, et je me voyais déjà demander à tout le monde de le visiter. Bon, c'est vrai qu'au début je n'avais pas compris qu'il n'était pas en ligne, mais c'était un début ! Ce qui m'a tout de suite plu, c'est le style, enfin l'UI je veux dire (soyons pro tout de même). Une inspiration sur internet et hop j'essayais de le reproduire avec du CSS ! C'est comme ça que j'ai eu envie de faire du web.",
			],
			en: [
				"In high school, I discovered the basics of the web. I admit that for me, it was revolutionary. A small local site made with a classmate, and I already saw myself asking everyone to visit it. Well, it's true that at first I didn't understand it wasn't online, but it was a start! What I immediately liked was the style, well the UI I mean (let's be professional after all). An inspiration from the internet and there I was trying to reproduce it with CSS! That's how I wanted to do web development.",
			],
		},
	},
	{
		title: {
			fr: "Développer pour le web.",
			en: "Developing for the web.",
		},
		content: {
			fr: [
				"Faire un site web, ce n'est pas juste mettre du texte, des images et des vidéos puis animer un peu le tout et faire joli. C'est bien plus que cela. Malgré le changement constant des technologies, la base du web reste indifférente aux nouveaux \"frameworks\" et \"librairies\". On sous-estime souvent une bonne connaissance du HTML pur. Oui, vous avez bien entendu, je parle du HTML. Aujourd'hui, on cherche des développeurs qui maitrisent le JavaScript, pour faire des sites dynamiques et interactifs. Mais utiliser un framework front et écrire du code dans tous les sens c'est bien beau, mais ce qui compte vraiment, c'est ce qui va être généré et utilisé par le navigateur.",
				"C'est là où un bon \"markup\" devient utile : la sémantique est extrêmement importante, tout d'abord pour une question de SEO, car un contenu bien balisé sera plus mis en avant, mais aussi pour une question d'accessibilité et de practicité. Un site sémantiquement juste, c'est un site qui sera affiché correctement en mode lecture, qui pourra être exploité par certaines extensions de navigateur, mais c'est aussi un site qui sera rendu fidèlement aux personnes utilisatrices de technologies d'assistance. Avoir cette base saine est nécessaire, et je l'applique strictly dans mes projets.",
			],
			en: [
				'Making a website is not just about putting text, images and videos, then animating everything a bit and making it pretty. It\'s much more than that. Despite the constant change in technologies, the web foundation remains indifferent to new "frameworks" and "libraries". We often underestimate a good knowledge of pure HTML. Yes, you heard me right, I\'m talking about HTML. Today, we\'re looking for developers who master JavaScript, to make dynamic and interactive sites. But using a front-end framework and writing code all over the place is all well and good, but what really matters is what will be generated and used by the browser.',
				'This is where good "markup" becomes useful: semantics are extremely important, first of all for SEO purposes, because well-tagged content will be more highlighted, but also for accessibility and practicality. A semantically correct site is a site that will be displayed correctly in reading mode, that can be exploited by certain browser extensions, but it\'s also a site that will be faithfully rendered to users of assistive technologies. Having this solid foundation is necessary, and I strictly apply it in my projects.',
			],
		},
	},
	{
		id: "accessibility",
		title: {
			fr: "L'accessibilité, une nécessité.",
			en: "Accessibility, a necessity.",
		},
		content: {
			fr: [
				"Comme expliqué précédemment, je me suis découvert au fil de mes années d'études et de travail un véritable engouement pour l'accessibilité du web. Je m'attache donc à rendre mes projets accessibles : cela passe par une bonne sémantique, mais aussi par une utilisation adaptée des technologies. Par exemple, j'utilise en priorité des éléments HTML natifs et n'utilise le JavaScript que lorsque cela est nécessaire. Cela permet d'avoir un site web plus léger, plus rapide, et plus accessible. L'ajout ou le masquage d'informations pour les utilisateurs de lecteurs d'écran ainsi que l'ajout de propriété \"aria\" sont des aspects trop souvent négligés par les développeurs, mais qui sont pourtant essentiels pour une bonne accessibilité.",
				"Lors de mes travaux personnels ou universitaires, je me suis auto-formé à l'accessibilité du web. J'ai aussi eu l'occasion de travailler sur des projets d'accessibilité professionnels, notamment la mise en conformité d'une Single Page Application complexe avec le RGAA. J'ai également eu l'occasion de vérifier officiellement mon niveau de compétences au travers de certifications reconnues.",
			],
			en: [
				'As explained previously, I discovered throughout my years of study and work a real enthusiasm for web accessibility. I therefore strive to make my projects accessible: this involves good semantics, but also an adapted use of technologies. For example, I primarily use native HTML elements and only use JavaScript when necessary. This allows for a lighter, faster, and more accessible website. Adding or hiding information for screen reader users as well as adding "aria" properties are aspects too often neglected by developers, but which are nevertheless essential for good accessibility.',
				"During my personal or academic work, I self-trained in web accessibility. I also had the opportunity to work on professional accessibility projects, including making a complex Single Page Application compliant with RGAA. I also had the opportunity to officially verify my skill level through recognized certifications.",
			],
		},
	},
	{
		title: {
			fr: "Trêve de blabla...",
			en: "Enough talk...",
		},
		content: {
			fr: [
				"C'est bien joli joli tout ça, mais je n'ai pas que le développement web dans la vie. J'aime aussi la musique, je suis pianiste (je sais, c'est la classe) et je joue du ukulele. Je suis cinéphile aussi, donc ne me proposez pas de regarder \"Taxi 2\" en streaming... J'aime aussi apprendre et je suis toujours à l'affût de nouvelles technologies, de nouvelles méthodes de travail et de nouvelles pratiques.",
			],
			en: [
				"That's all nice and dandy, but I don't only have web development in my life. I also love music, I'm a pianist (I know, how cool) and I play the ukulele. I'm also a film buff, so don't suggest watching \"Taxi 2\"... I also love learning and I'm always on the lookout for new technologies, new working methods and new practices.",
			],
		},
	},
];
