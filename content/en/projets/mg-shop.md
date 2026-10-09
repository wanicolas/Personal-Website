## Context & Business Challenges

As part of the modernization of its municipal public services, the **City of Mulhouse** partnered with Logitud Solutions to completely overhaul the online ticketing and purchasing engine for its aquatic and sports facilities (**Aqua Mulhouse**). The main challenge was to replace a legacy tool with a modern, ergonomic SaaS front-end integrated into the territorial citizen portal Mon-Guichet.

The front-end needed to withstand heavy summer traffic spikes while easily guiding citizens through a diverse product catalog: single-entry tickets, nominative season passes, and collective classes with real-time limited capacities (aquagym, swimming lessons).

![Checkout flow and time slot selection](/works-and-projects/alternance-logitud/mg-shop/user_buy.png)

## Architecture & Technical Decisions

I designed and built the front-end architecture using **Nuxt 4**, **strict TypeScript**, and **TailwindCSS**, ensuring optimal usability and high maintainability.

The application relies on a modular front-end architecture:

- **Presentation & Layout:** Modular auto-imported components, responsive layouts, and immediate interactive feedback via toast notifications.
- **State & Business Logic:** Reactive **Pinia** stores decoupled from views, and custom composables orchestrating cart persistence and booking schedules.
- **Network & API Contracts:** Resilient API interceptor (`useApiFetch`) wrapping `ofetch`, guaranteeing strict DTO typing and smooth session lifecycle management.

![Interactive cart and checkout review](/works-and-projects/alternance-logitud/mg-shop/user_cart.png)

## Technical Challenges & Solutions

### Seamless Checkout Funnel & Reactive Multi-Product Cart

The citizen experience was engineered to minimize any purchasing friction:

- **Real-Time Booking:** Interactive calendar interface with immediate validation of available time slot quotas prior to cart addition.
- **Reactive Cart (Pinia):** Dynamic calculations of tiered pricing and discounts (residents, families, students), with local persistence to prevent any state loss during inadvertent page refreshes.
- **Graceful Network Error Handling:** Intuitive recovery prompts in case of session timeouts or recently filled capacities, without losing the user's booking flow.

![Stackable lateral drawers](/works-and-projects/alternance-logitud/mg-shop/drawer_multi_panel.png)

### High-Productivity Admin Components

To empower municipal staff managing schedules and registrations, I engineered reusable UI components:

- **Dual-Mode High-Performance DataTable:** Instant in-memory search, multi-column sorting, and pagination (< 30 ms) on the client side, seamlessly switching to server-side mode for massive datasets, with native CSV and PDF exports.
- **Stackable Drawers System:** Multi-panel lateral sliding stack (LIFO) with RGAA-compliant focus trapping, enabling deep file inspection without losing the working background context.
- **JSON Diff Viewer & Dashboards:** Visual Git-like split/unified diff comparator for pricing audit trails, and interactive **Apache ECharts** dashboards for real-time sales and attendance analytics.

![DataTable with column picker and export](/works-and-projects/alternance-logitud/mg-shop/datatable_export.png)

## Quality, Performance & Accessibility

- **Automated CI/CD Pipelines:** Pull Request checks including ESLint, strict TypeScript compiler verification, and **Vitest** unit test suites reaching 85% code coverage.
- **Ergonomics & Accessibility:** Universal keyboard shortcuts (`Ctrl+K` command palette), WCAG AA contrast compliance, and managed ARIA dialog lifecycles.

## Impact & Key Results

- **> €600,000 in transactions** securely processed through the new online purchasing funnel.
- **90% dematerialization** of pass and ticket purchases from the very first months.
- **40% time saved** by the engineering team when developing new back-office screens.
- **Smooth and responsive user journey**, acclaimed by facility managers for its intuitive design.

---

### Documentation & Resources

For comprehensive front-end architectural diagrams and technical specifications:

- [Read the software engineering experience report (PDF)](/works-and-projects/alternance-logitud/rapport-experience-pro.pdf)
