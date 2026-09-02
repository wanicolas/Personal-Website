interface Project {
	date: string;
	img: string;
	technos: string[];
	title: Record<"fr" | "en", string>;
	description: Record<"fr" | "en", string>;
	link?: string;
	github?: string;
}

export const projectsData: Project[] = [
	{
		date: "2025-2026",
		title: {
			fr: "MG Shop - Aqua Mulhouse",
			en: "MG Shop - Aqua Mulhouse",
		},
		description: {
			fr: "Réalisé en alternance chez Logitud, j'ai eu l'occasion de mettre en place le frontend Nuxt usager et agent d'une plateforme e-commerce générique et son adaptation pour les piscines de Mulhouse. J'ai pu y intégrer la CI avec ses briques essentielles, à savoir : Eslint et sa configuration custom avancée, Prettier, TypeScript et Vitest. J'ai également pu créer et maintenir/améliorer les composants essentiels comme les drawers \"stackables\" ; les DataTable avec export intégré en CSV/PDF, sélecteur de colonne, recherche et tri (+ sauvegarde) ; un CommandPalette avancé, un visionneur type \"git-diff\" de code, un système d'achat et de panier générique réutilisable via l'administration et bien plus encore.",
			en: "Completed as part of a work-study program at Logitud, I had the opportunity to build both the user- and agent-facing Nuxt frontends for a generic e-commerce platform and tailor it for the Mulhouse public pools. I set up the CI pipeline with its core building blocks: ESLint featuring an advanced custom configuration, Prettier, TypeScript, and Vitest. I also created, maintained, and improved key components such as stackable drawers; DataTables with integrated PDF/CSV exports, column selectors, search, and sorting (with state persistence); an advanced CommandPalette; a git-diff code viewer; a reusable, generic cart and checkout system configurable via the admin dashboard; and much more.",
		},
		img: "mg_shop.webp",
		technos: ["Nuxt", "NuxtI18n", "TypeScript", "TailwindCSS"],
	},
	{
		date: "2026",
		title: {
			fr: "TodoApp - Refactor cloud-native",
			en: "TodoApp - Cloud-native refactor",
		},
		description: {
			fr: "Refactor cloud-native de l'application getting-started-todo-app de Docker. Architecture micro-services, CI/CD, tests, Docker, Helm et k8s, Azure et Terraform.",
			en: "Cloud-native refactor of Docker's getting-started-todo-app. Microservices architecture, CI/CD, tests, Docker, Helm and k8s, Azure and Terraform.",
		},
		img: "todo.webp",
		github: "https://github.com/wanicolas/todo-app-cloud",
		technos: ["Helm", "TerraForm", "Kubernetes", "Docker"],
	},
	{
		date: "2023-2024",
		title: {
			fr: "MG_UI - Librairie de composants Nuxt",
			en: "MG_UI - Nuxt Component Library",
		},
		description: {
			fr: "Utilisée au sein de Logitud, cette librairie comporte des composants dynamiques, customisables et accessibles. Elle est accessible sur NPM et sera bientôt open-source sous license MIT et disponible sur GitHub.",
			en: "Used within Logitud, this library includes dynamic, customizable and accessible components. It is available on NPM and will soon be open-source under MIT license and available on GitHub.",
		},
		img: "mg_ui.webp",
		link: "https://www.npmjs.com/package/@numesia/mg_ui",
		technos: ["Nuxt", "HeadlessUI", "TailwindCSS", "Flowbite"],
	},
	{
		date: "2024-Aujourd'hui",
		title: {
			fr: "Site personnel",
			en: "Personal website",
		},
		description: {
			fr: "Quoi de mieux qu'un site personnel pour se présenter, exposer ses projets et compétences ? Développé avec des technos que j'affectionne, il est open-source sous license MIT.",
			en: "What better than a personal website to introduce myself, showcase my projects and skills? Developed with technologies I love, it is open-source under MIT license.",
		},
		img: "personal-website.webp",
		link: "https://nicolaswalter.fr",
		github: "https://github.com/wanicolas/Personal-Website",
		technos: ["Nuxt", "NuxtSEO", "NuxtI18n", "TypeScript", "TailwindCSS"],
	},
];
