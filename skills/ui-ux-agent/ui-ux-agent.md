---
name: ui-ux-agent
description: AI-powered design intelligence toolkit with searchable databases of UI styles, color palettes, font pairings, chart types, and UX guidelines. Use when designing or styling any UI component, page, or site.
---

# UI/UX Agent

Searchable design intelligence for AI coding assistants.

## Search Command

```bash
python3 scripts/search.py "<query>" --domain <domain> [-n <max_results>]
```

**Domains:**
- `product` — Product type recommendations (SaaS, e-commerce, portfolio)
- `style` — UI styles (glassmorphism, minimalism, brutalism) + AI prompts and CSS keywords
- `typography` — Font pairings with Google Fonts imports
- `color` — Color palettes by product type
- `landing` — Page structure and CTA strategies
- `chart` — Chart types and library recommendations
- `ux` — Best practices and anti-patterns

**Stack search:**
```bash
python3 scripts/search.py "<query>" --stack <stack>
```
Stacks: `html-tailwind`, `react`, `nextjs`, `astro`, `vue`, `nuxtjs`, `nuxt-ui`, `svelte`, `swiftui`, `react-native`, `flutter`, `shadcn`, `jetpack-compose`

## Data

16 CSV databases covering 67+ UI styles, 161 color palettes, 57 font pairings, 99 UX guidelines, 25 chart types.

## When to use

Use this skill when:
- Designing a new page or component
- Choosing colors, fonts, or UI styles
- Building landing pages, dashboards, or marketing sites
- Need UX best practices or anti-patterns
- Need chart type recommendations

## Examples

```
python3 scripts/search.py "dark mode SaaS dashboard" --domain style -n 5
python3 scripts/search.py "blue gradient" --domain color -n 3
python3 scripts/search.py "inter roboto" --domain typography -n 5
python3 scripts/search.py "hero section CTA" --domain landing -n 5
python3 scripts/search.py "nextjs" --stack nextjs -n 5
```
