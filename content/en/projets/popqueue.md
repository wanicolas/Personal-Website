## Context & Business Challenges

Citizen reception in municipal town halls is a decisive touchpoint for local public services. Poorly managed queues create citizen friction and overwhelm front-desk staff.

To tackle this challenge, Logitud Solutions developed **PopQueue**, a real-time modular application suite designed to equip local governments without locking them into cumbersome, proprietary hardware ecosystems.

![Interactive touch kiosk interface on the reception terminal](/works-and-projects/alternance-logitud/popqueue/choix_demarche.jpg)

## Architecture & Real-Time Ecosystem

The system synchronizes three distinct interfaces bidirectionally via **WebSockets** powered by **Laravel Reverb**:

1. **Interactive Touch Kiosk:** Enables citizens to select their administrative procedure, collect a ticket, or check in for scheduled appointments.
2. **Staff Console:** A reactive web interface allowing desk officers to call the next citizen, manage no-shows, or reassign cases across desks.
3. **Dynamic Waiting Room Display:** Broadcasts queue status, emits visual and acoustic call alerts, and directs visitors to the designated service desk.

The WebSocket pipeline transmits lightweight events (`TicketCreated`, `TicketCalled`) with **under 100 ms latency**, backed by a custom composable (`usePopQueueSocket`) featuring exponential backoff auto-reconnection.

![Real-time global supervision dashboard](/works-and-projects/alternance-logitud/popqueue/supervision_globale_bo.jpg)

## Technical Challenges & Solutions

### Custom On-Screen Touch Keyboard

In kiosk mode on touch tablets, native OS virtual keyboards introduced severe UX breakdowns: violent viewport shifts, unwanted browser accessory bars, and intrusive autocorrection.

I engineered a **standalone on-screen virtual keyboard** mounted directly within the application DOM:

- Tailored specifically to administrative inputs (numeric keypad for file IDs, clean alphabetical layout for names).
- Fully decoupled from underlying Android, Windows, or iPadOS system quirks.
- Designed with generous touch targets (> 48x48 px) to drastically reduce typing mistakes.

![Custom on-screen virtual keyboard](/works-and-projects/alternance-logitud/popqueue/clavier.jpg)

### Inclusive Accessibility & Speech Synthesis (RGAA 4.1.2)

Public administrative counters legally mandate accessibility for everyone:

- **Native Speech Synthesis:** Integrated the browser's **Web Speech API** to automatically vocalize ticket call-outs in waiting rooms (_"Ticket number A42 to Desk 3"_), ensuring autonomy for visually impaired visitors.
- **Accessible Touch UI:** High contrast ratios, clear visual hierarchies, and ergonomic touch areas accommodating users with motor impairments.

![Staff desk console and waiting room screen](/works-and-projects/alternance-logitud/popqueue/console_agent_guichet.jpg)

## Impact & Key Results

- **< 100 ms latency** for real-time synchronization between desk call actions and waiting room screens.
- **Zero proprietary hardware lock-in:** Deployed directly on consumer tablets and standard TV displays via standard modern web browsers.
- **100% accessible:** Full compliance with French **RGAA 4.1.2** and WCAG AA standards.
- **Improved user experience:** Tangible reduction in perceived waiting times and smoother day-to-day operations for municipal receptionists.

---

### Documentation & Resources

To inspect event flow architectures and comprehensive technical documentation:

- [Read the software engineering experience report (PDF)](/works-and-projects/alternance-logitud/rapport-experience-pro.pdf)
