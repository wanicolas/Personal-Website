## Context & Business Challenges

As part of the modernization of its municipal public services, the **City of Mulhouse** partnered with Logitud Solutions to completely overhaul the online ticketing and purchasing engine for its aquatic and sports facilities (**Aqua Mulhouse**). The main challenge was to replace a legacy system with a modern, scalable SaaS transaction platform integrated into the territorial citizen portal Mon-Guichet.

The platform needed to withstand high summer traffic peaks while handling diverse offerings: single-entry tickets, nominative annual season passes, and collective classes with real-time limited capacities (aquagym, swimming lessons).

![Checkout flow and time slot selection](/works-and-projects/alternance-logitud/mg-shop/user_buy.png)

## Architecture & Technical Decisions

I designed the front-end architecture using **Nuxt 4**, **strict TypeScript**, and **TailwindCSS / Nuxt UI** components, ensuring long-term maintainability and high rendering performance.

The application follows a clean layered architecture:

- **Presentation & UI:** Modular auto-imported components, fine-grained interaction states, and real-time user feedback via toasts.
- **State & Business Logic:** Reactive **Pinia** stores decoupled from views, and modular composables orchestrating cart persistence and slot reservation.
- **Network & API Contracts:** Resilient API interceptor (`useApiFetch`) wrapping `ofetch`, handling token refresh automatically and enforcing strict DTO contracts with the NestJS back-end.

## Technical Challenges & Solutions

### PayFIP Payment Resilience & Idempotency

Connecting to the French public sector payment gateway (**PayFIP / DGFiP**) required zero tolerance for financial discrepancies:

- **Redis Temporary Locks (10 min TTL):** Real-time booking locks on limited capacity slots to eliminate overbooking, automatically released upon cart abandonment.
- **Unique SHA-256 Idempotency Key:** Protects against duplicate bank debits caused by repeated user checkout clicks.
- **Dual-Channel Validation:** Immediate synchronous web redirection for positive user UX combined with an asynchronous server-to-server webhook (HMAC SHA-256 signature verification), which serves as the authoritative trigger for official pass generation.

![Stackable lateral drawers](/works-and-projects/alternance-logitud/mg-shop/drawer_multi_panel.png)

### High-Productivity Admin Components

To enhance daily workflows for municipal administrators, I developed reusable infrastructure components:

- **Dual-Mode High-Performance DataTable:** Instant in-memory search, multi-column sorting, and pagination (< 30 ms) on the client side, seamlessly switching to server-side mode for massive datasets, with native CSV and PDF exports.
- **Stackable Drawers System:** Multi-panel lateral sliding stack (LIFO) with RGAA-compliant focus trapping, preventing disruptive modal proliferation during multi-tier file reviews.
- **JSON Diff Viewer & Dashboards:** Visual Git-like split/unified diff comparator for pricing audit trails, and interactive **Apache ECharts** dashboards for real-time sales and attendance analytics.

![DataTable with column picker and export](/works-and-projects/alternance-logitud/mg-shop/datatable_export.png)

## Quality, Performance & Accessibility

- **Strict CI/CD Pipelines:** Automated Pull Request checks including ESLint, strict TypeScript compiler verification, and **Vitest** unit test suites reaching 85% code coverage.
- **Accessibility & UX:** Universal keyboard shortcuts (`Ctrl+K` command palette), WCAG AA contrast compliance, and managed ARIA dialog lifecycles.

## Impact & Key Results

- **> €600,000 in transactions** securely processed online.
- **90% dematerialization** of ticket and pass purchases from the very first months.
- **0 accounting discrepancies** or double debits due to the idempotency architecture.
- **40% time saved** by developers when rolling out subsequent back-office modules.

---

### Documentation & Resources

For comprehensive architectural diagrams and technical specifications:

- [Read the software engineering experience report (PDF)](/works-and-projects/alternance-logitud/rapport-experience-pro.pdf)
