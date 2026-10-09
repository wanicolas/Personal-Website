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
			fr: "MG Shop — Billetterie SaaS & E-commerce",
			en: "MG Shop — SaaS Ticketing & E-commerce",
		},
		description: {
			fr: "Refonte complète du tunnel d'achat et des interfaces d'administration pour les piscines de Mulhouse. Architecture front-end Nuxt 4, gestion réactive du panier avec Pinia, composants d'administration avancés et dashboards de fréquentation.",
			en: "Complete redesign of the checkout funnel and admin interfaces for Mulhouse public pools. Front-end Nuxt 4 architecture, reactive cart management with Pinia, advanced admin components, and attendance dashboards.",
		},
		img: "mg-shop.webp",
		technos: ["Nuxt 4", "TypeScript", "TailwindCSS", "Pinia", "ECharts"],
		role: {
			fr: "Lead Front-End & Architecture",
			en: "Lead Front-End & Architecture",
		},
		company: "Logitud Solutions",
		client: "Ville de Mulhouse",
		keyFigures: {
			fr: ["> 600 k€ traités", "90% dématérialisation"],
			en: ["> €600k processed", "90% dematerialization"],
		},
	},
	{
		slug: "popqueue",
		date: "2025-2026",
		title: {
			fr: "PopQueue — File d'attente connectée & Borne tactile",
			en: "PopQueue — Connected Queue & Touch Kiosk",
		},
		description: {
			fr: "Solution d'accueil citoyen temps réel : développement intégral de l'interface de la borne tactile (clavier virtuel autonome, synthèse vocale RGAA) et des consoles d'administration synchronisées en WebSockets.",
			en: "Real-time citizen reception system: full development of the touch kiosk interface (custom virtual keyboard, RGAA speech synthesis) and admin consoles synchronized via WebSockets.",
		},
		img: "popqueue.jpg",
		technos: [
			"Nuxt 4",
			"WebSockets",
			"TypeScript",
			"TailwindCSS",
			"Web Speech API",
		],
		role: {
			fr: "Concepteur & Développeur Front-End",
			en: "Front-End Designer & Developer",
		},
		company: "Logitud Solutions",
		client: "Collectivités territoriales",
		keyFigures: {
			fr: [
				"< 100 ms de latence",
				"Conforme RGAA 4.1.2",
				"Borne tactile autonome",
			],
			en: [
				"< 100 ms latency",
				"RGAA 4.1.2 compliant",
				"Autonomous touch kiosk",
			],
		},
	},
	{
		slug: "mg-ui",
		date: "2023-2025",
		title: {
			fr: "MG_UI — Design System & Librairie de composants",
			en: "MG_UI — Design System & Component Library",
		},
		description: {
			fr: "Bibliothèque de composants UI Vue 3 / Nuxt déployée au sein de Logitud et sur NPM. Architecture de Design Tokens pour la thématisation multi-collectivités en temps réel et accessibilité native RGAA / WCAG AA.",
			en: "Vue 3 / Nuxt UI component library deployed across Logitud and on NPM. Design Tokens architecture for real-time multi-tenant theming and native RGAA / WCAG AA accessibility.",
		},
		img: "mg-ui.webp",
		link: "https://www.npmjs.com/package/@numesia/mg_ui",
		technos: [
			"Vue 3",
			"Nuxt",
			"TailwindCSS",
			"Flowbite",
			"HeadlessUI",
			"VueUse",
			"TypeScript",
		],
		role: {
			fr: "Créateur & Mainteneur Design System",
			en: "Design System Creator & Maintainer",
		},
		company: "Logitud Solutions",
		client: "Écosystème Mon-Guichet",
		keyFigures: {
			fr: [
				"-40% temps d'intégration",
				"LCP divisé par 3",
				"Conforme RGAA 4.1.2 & WCAG AA",
			],
			en: [
				"-40% integration time",
				"LCP divided by 3",
				"RGAA 4.1.2 & WCAG AA compliant",
			],
		},
	},
	{
		slug: "todo-app",
		date: "2026",
		title: {
			fr: "Todo App Cloud — Architecture Cloud-Native & DevSecOps",
			en: "Todo App Cloud — Cloud-Native & DevSecOps Architecture",
		},
		description: {
			fr: "Refonte complète d'une application en architecture microservices Cloud-Native pour la certification RNCP 7. Infrastructure as Code (Terraform), cluster Azure AKS isolé, CI/CD sans secret via OIDC, scans Trivy et déploiements Helm zero-downtime.",
			en: "Complete application refactor into a Cloud-Native microservices architecture for RNCP 7 certification. Infrastructure as Code (Terraform), isolated Azure AKS cluster, secretless CI/CD via OIDC, Trivy scans, and zero-downtime Helm deployments.",
		},
		img: "todo.webp",
		github: "https://github.com/wanicolas/todo-app-cloud",
		technos: [
			"Terraform",
			"Azure AKS",
			"Kubernetes",
			"Helm",
			"GitHub Actions",
			"Docker",
			"k6",
		],
		role: {
			fr: "Ingénieur Logiciel & DevSecOps",
			en: "Software & DevSecOps Engineer",
		},
		company: "Ynov Campus Strasbourg",
		client: "Projet Mastère RNCP 7",
		keyFigures: {
			fr: [
				"SLA 99.9% validé",
				"p95 < 300 ms sous charge",
				"0 secret statique (OIDC)",
			],
			en: [
				"99.9% validated SLA",
				"p95 < 300 ms under load",
				"0 static secrets (OIDC)",
			],
		},
	},
	{
		slug: "personal-website",
		date: "2024-2026",
		title: {
			fr: "Portfolio — Architecture Front & Vitrine de standards",
			en: "Personal Portfolio — Front Architecture & Standards Showcase",
		},
		description: {
			fr: "Site personnel et portfolio conçu avec Nuxt 4 et Nuxt Content v3. Vitrine d'ingénierie front démontrant un typage strict TypeScript, une accessibilité soignée (RGAA / Opquast Avancé), un score SEO optimal et un workflow CI/CD automatisé.",
			en: "Personal website and portfolio built with Nuxt 4 and Nuxt Content v3. Front engineering showcase demonstrating strict TypeScript typing, thoughtful accessibility (RGAA / Advanced Opquast), optimal SEO score, and automated CI/CD workflow.",
		},
		img: "personal-website.webp",
		link: "https://nicolaswalter.fr",
		github: "https://github.com/wanicolas/Personal-Website",
		technos: [
			"Nuxt 4",
			"Nuxt Content v3",
			"NuxtSEO",
			"NuxtI18n",
			"TypeScript",
			"TailwindCSS",
		],
		role: {
			fr: "Lead Développeur & Designer",
			en: "Lead Developer & Designer",
		},
		company: "Projet Personnel Open Source",
		client: "nicolaswalter.fr",
		keyFigures: {
			fr: [
				"100% TypeScript strict",
				"Conforme RGAA & Opquast (808 pts)",
				"100/100 Lighthouse SEO",
			],
			en: [
				"100% strict TypeScript",
				"RGAA & Opquast compliant (808 pts)",
				"100/100 Lighthouse SEO",
			],
		},
	},
];
