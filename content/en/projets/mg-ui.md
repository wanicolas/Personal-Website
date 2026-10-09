## Context & Business Challenges

At Logitud Solutions (a GovTech software vendor serving local authorities), the growth of legacy Vue 2 portals had accumulated significant technical debt: duplicative handcrafted CSS, visual inconsistencies, and recurring hurdles when meeting mandatory French digital accessibility standards (**RGAA**).

To unify front-end developments and deliver a seamless user experience, I architected and built **MG_UI**, a reusable Vue 3 / Nuxt component library packaged and distributed internally and published on NPM ([`@numesia/mg_ui`](https://www.npmjs.com/package/@numesia/mg_ui)).

![Mon-Guichet v2 modernized with MG_UI Design System](/works-and-projects/alternance-logitud/mon-guichet/home_v2.jpg)

## Architecture & Dynamic Theming

Built on **Vue 3**, **TailwindCSS**, **Headless UI**, and **VueUse**, the library addresses the specific needs of a multi-tenant municipal ecosystem:

- **Real-Time Design Tokens:** Each client municipality carries distinct branding (municipal coat of arms, primary color schemes, typography). Using a dynamic CSS variables token system, the citizen portal morphs instantaneously to each city's visual identity with zero source code recompilation.
- **Headless Architecture & Inclusion:** Strict separation between accessible interaction behavior (ARIA state machines, focus traps, full keyboard navigation) and styling powered by Tailwind.
- **Reusable Accessibility Composables:** Standardized administrative form handling via dedicated composables (`useAccessibleField`), binding input validity to `aria-invalid` and announcement alerts via `aria-live` automatically.

## Performance & Core Web Vitals Optimization

Refactoring enterprise user journeys with MG_UI led to substantial speed improvements across client portals:

- **LCP (Largest Contentful Paint) divided by 3:** Dropped from 2.8s down to **0.9s**, ensuring lightning-fast rendering even on 4G mobile connections.
- **Visual Stability (CLS at 0.01):** Layout shifts eliminated through systematic container aspect-ratio reservations and asset pre-fetching.
- **Modularity & Tree-shaking:** Fine-grained component imports yielding minimal bundle footprints.

![Legacy Mon-Guichet v1 prior to the Design System overhaul](/works-and-projects/alternance-logitud/mon-guichet/home_v1.jpg)

## Impact & Key Results

- **40% faster integration time** for developers delivering new screens and features.
- **RGAA 4.1.2 & WCAG 2.1 AA Compliance:** Full contrast and screen-reader audits passed across the entire component catalog.
- **Unified Software Asset:** Centralized npm package establishing a single source of truth for the entire Mon-Guichet product suite.

---

### Documentation & Resources

- [Official NPM package (@numesia/mg_ui)](https://www.npmjs.com/package/@numesia/mg_ui)
- [Read the software engineering experience report (PDF)](/works-and-projects/alternance-logitud/rapport-experience-pro.pdf)
