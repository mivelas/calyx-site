# Agent Instructions for Calyx Concierge

## Project Overview
Calyx Concierge is a luxury home watch and property management marketing website for Southwest Florida. Built with React 19 + TypeScript + Vite, featuring animations, responsive design, and a single-page layout.

## Quick Start
- **Dev**: `npm run dev` — runs on `http://localhost:3000`
- **Build**: `npm run build` — creates production bundle in `dist/`
- **Lint**: `npm run lint` — TypeScript type checking (no auto-fix)

## Tech Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 6.2
- **Styling**: Tailwind CSS 4 (using `@theme` syntax for custom colors)
- **Animations**: Motion/React (Framer Motion)
- **Icons**: Lucide React
- **Form Submission**: Web3Forms API
- **Fonts**: Georgia (serif) for headings, Inter/Helvetica (sans-serif) for body

## Architecture Notes

### App Structure
- **Single component**: All UI in `src/App.tsx` — contains hero, about, services, contact, and footer sections
- **No state management**: Uses local React state only; no Redux, Zustand, or Context API
- **No component library**: Components are inline and section-based

### Branding & Styling
Custom Tailwind theme colors defined in `src/index.css` (`@theme` block):
- `--color-brand-bg`: `#fdfbf7` (warm cream)
- `--color-brand-ink`: `#2d3436` (dark charcoal)
- `--color-brand-accent`: `#6b705c` (muted sage green)
- `--color-brand-sand`: `#e9edc9` (light warm sand)

Use these via Tailwind classes like `text-brand-accent`, `bg-brand-bg`, etc.

### Key Patterns
- **Smooth scroll navigation**: `scrollToSection()` function handles anchor scrolling and mobile menu closing
- **Scroll state tracking**: `isScrolled` state changes nav appearance based on `window.scrollY`
- **Modal service details**: Service cards trigger modal overlay with extended info
- **Animations**: Motion components with `initial`, `animate`, `whileInView`, `exit` props
- **Responsive breakpoints**: Mobile-first with `md:` and `lg:` prefixes for tablet/desktop

### Services Data
Hardcoded in `SERVICES` array — each service has: `title`, `description`, `extendedDescription`, `features`, `icon`

## Important Details

### Form Submission
- Uses Web3Forms API at `https://api.web3forms.com/submit`
- Access key: `bfe3730b-206c-4883-a57b-f696c1a4d80b`
- Form sends to: `info@calyxconcierge.com` (configured via Web3Forms dashboard)
- Fields: firstName, lastName, phone, email, message

### Environment Variables
- `GEMINI_API_KEY`: Expected in `.env.local` (from README, but not used in current codebase)
- `DISABLE_HMR`: Set to `'true'` in AI Studio to disable hot reload

### Accessibility & SEO
- Schema.org LocalBusiness markup in `index.html`
- Open Graph meta tags for social sharing
- Semantic HTML structure with proper headings and sections

## Development Guidelines

### When Making Changes
1. **Styling**: Use Tailwind classes; add custom utilities to `src/index.css` if needed
2. **Animations**: Use Motion components; avoid CSS keyframes
3. **Icons**: Import from lucide-react as needed
4. **Mobile**: Test responsiveness; mobile nav opens via Menu button in `<nav>`
5. **Scroll**: Update section IDs in `.scrollToSection()` if adding new sections

### Common Tasks
- **Add a service**: Add item to `SERVICES` array in `App.tsx`
- **Change colors**: Update `@theme` block in `src/index.css`
- **Modify contact info**: Update phone, email, address in contact section
- **Add new section**: Create new `<section>` with id, ensure it's in the nav links

### Type Safety
- TypeScript strict mode; run `npm run lint` before committing
- Service type: `typeof SERVICES[0]`

## File Structure
```
src/
  App.tsx          (main component with all sections)
  main.tsx         (React root mount)
  index.css        (Tailwind config, brand colors)
index.html         (HTML entry point, meta tags, schema)
vite.config.ts     (Vite + React plugin setup)
package.json       (dependencies, scripts)
tsconfig.json      (TypeScript config)
```

## Notes for Agents
- **No external APIs** are actively used (Gemini key is unused)
- **Monolithic component** works well for this marketing site; decomposition isn't urgent
- **Mobile menu** auto-closes when scrolling to section
- **Body overflow** is managed when service modal is open
- Always run `npm run lint` after code changes to catch type errors
