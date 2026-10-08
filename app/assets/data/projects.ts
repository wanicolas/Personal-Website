export interface Project {
	slug: string;
	date: string;
	img: string;
	technos: string[];
	title: Record<LocaleCode, string>;
	description: Record<LocaleCode, string>;
	link?: string;
	github?: string;
	role: Record<LocaleCode, string>;
	company: string;
	client: string;
	keyFigures: Record<LocaleCode, string[]>;
}

export const projectsData: Project[] = [
	{
		slug: "mg-shop",
		date: "2025-2026",
		title: {
			fr: "MG Shop - Aqua Mulhouse",
			en: "MG Shop - Aqua Mulhouse",
		},
		description: {
			fr: "Refonte complète du tunnel d'achat et des interfaces d'administration pour une plateforme e-commerce SaaS en Vue/Nuxt. Mise en place des standards de qualité (CI/CD, tests, typage strict) et conception de composants UI avancés.",
			en: "Complete redesign of the checkout funnel and admin interfaces for a SaaS e-commerce platform using Vue/Nuxt. Implemented quality standards (CI/CD, testing, strict typing) and designed advanced UI components.",
		},
		img: "mg_shop.webp",
		technos: ["Nuxt", "NuxtI18n", "TypeScript", "TailwindCSS"],
		role: {
			fr: "Lead Front-End",
			en: "Lead Front-End",
		},
		company: "Logitud Solutions",
		client: "Ville de Mulhouse",
		keyFigures: {
			fr: ["> 600 k€ traités", "90% de dématérialisation"],
			en: ["> €600k processed", "90% dematerialization"],
		},
	},
	{
		slug: "todo-app",
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
		role: { fr: "blabla", en: "blabla" },
		company: "blabla",
		client: "blabla",
		keyFigures: { fr: ["blabla"], en: ["blabla"] },
	},
	{
		slug: "mg-ui",
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
		role: { fr: "blabla", en: "blabla" },
		company: "blabla",
		client: "blabla",
		keyFigures: { fr: ["blabla"], en: ["blabla"] },
	},
	{
		slug: "personal-website",
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
		role: { fr: "blabla", en: "blabla" },
		company: "blabla",
		client: "blabla",
		keyFigures: { fr: ["blabla"], en: ["blabla"] },
	},
];
