# Adili V2 Frontend Prototype

## Outcome
Build the complete frontend-only Adili V2 operations console using the selected “Supervisory exception ledger” direction and the supplied Adili branding.

## Screens
- `/` redirects to `/dashboard`.
- `/login` provides mock sign-in, validation, remember-me, and password visibility.
- `/dashboard` matches the selected dense supervisory dashboard.
- `/declarations` provides search, filters, status badges, data table, pagination, and row actions.
- `/declarations/$id` provides declaration metadata, entity/officer details, indicators, flags, notes, history, and mock workflow actions.
- `/indicators` provides summary measures, filters, and monitoring table.
- `/assessments` provides a clear assessment workflow with findings, indicators, notes, history, and actions.
- `/reports` provides period/entity/indicator controls, summary data, a trend chart, flagged items, completed work, preview, and mock export.
- `/users` provides mock administrator user management.
- `/settings` provides profile, account, notification, security, and application sections.

## Shared Experience
- Reusable purple Adili sidebar, top bar, breadcrumbs, notification panel, profile menu, and compact mobile navigation.
- Reusable buttons, fields, selectors, filters, badges, panels, tables, tabs, pagination, alerts, empty/loading/error states, dialogs, and menus.
- Local mock data and interface state only; no backend, database, authentication, permissions, APIs, or external integrations.
- Accessible labels, focus states, keyboard-friendly controls, responsive tables, and tablet/mobile layouts.

## Visual System
- Preserve the supplied Adili Online identity and use its logo treatment.
- Purple `#5A0B69`, gold `#C69A00`, white, and light neutral surfaces.
- Libre Baskerville headings; IBM Plex Sans body; IBM Plex Mono metadata.
- Four-pixel panel corners, clean borders, restrained shadows, compact information density, and semantic status colors.

## Technical Notes
- Implement with TanStack Start file routes and shared React components.
- Add unique page metadata for every route.
- Keep mock data separate from page structure and ensure all navigation targets exist together.
- Verify the central mock sign-in flow, dashboard navigation, declaration detail flow, dialogs, and desktop/mobile rendering.
