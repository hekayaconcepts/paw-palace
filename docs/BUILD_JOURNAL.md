# Paw Palace Pet Grooming — Build Journal

> **Project:** Paw Palace Pet Grooming — Vancouver, Canada
> **Repo:** https://github.com/hekayaconcepts/paw-palace
> **Live URL:** https://paw-palace-six.vercel.app
> **Last Updated:** June 18, 2026

---

## 1. File Structure

### Complete Source Tree

```
src/
├── app/
│   ├── layout.tsx              ← Root layout (Header + Footer + global styles)
│   ├── page.tsx                ← Homepage with hero section
│   ├── about/
│   │   └── page.tsx            ← About page (empty shell)
│   ├── accessibility/
│   │   └── page.tsx            ← Accessibility statement (empty shell)
│   ├── api/
│   │   ├── book/route.ts       ← Booking email API (Resend)
│   │   ├── comments/route.ts   ← Comments API (file-based /tmp storage)
│   │   └── likes/route.ts      ← Likes/dislikes API (file-based /tmp storage)
│   ├── blog/
│   │   ├── page.tsx            ← Blog listing with 4 hardcoded posts
│   │   ├── vancouver-grooming-cost-2026/
│   │   │   └── page.tsx        ← Article page (has content, likes, back link)
│   │   ├── how-often-groom-rainy-vancouver/
│   │   │   └── page.tsx        ← EMPTY (1 line, no content)
│   │   ├── japanese-scissor-vs-clipper/
│   │   │   └── page.tsx        ← EMPTY (1 line, no content)
│   │   └── nagayu-spa-vancouver/
│   │       └── page.tsx        ← EMPTY (1 line, no content)
│   ├── booking/
│   │   └── page.tsx            ← Booking form (multi-step, Resend email)
│   ├── contact/
│   │   └── page.tsx            ← Contact page (empty shell)
│   ├── cookies/
│   │   └── page.tsx            ← Cookie policy (empty shell)
│   ├── gallery/
│   │   └── page.tsx            ← Gallery page (empty shell)
│   ├── privacy/
│   │   └── page.tsx            ← Privacy policy (empty shell)
│   ├── services/
│   │   └── page.tsx            ← Services page (full implementation)
│   ├── shop/
│   │   └── page.tsx            ← Shop page (empty shell, Phase 2)
│   └── terms/
│       └── page.tsx            ← Terms of service (empty shell)
├── components/
│   ├── Header.tsx              ← Sticky header with mobile hamburger
│   └── Footer.tsx              ← 4-column footer with contact info
└── lib/
    ├── design-tokens.ts        ← Colors, fonts, spacing, shadows, breakpoints
    ├── resend.ts               ← Resend client stub
    ├── security-headers.ts     ← 7 security headers (HSTS, CSP, etc.)
    └── supabase.ts             ← Supabase client stub
```

### Public Assets
```
public/
  (empty — no static assets yet)
```

---

## 2. Git History (Last 40 Commits)

### Grouped by Feature

#### Foundation & Shell (June 16, 2026)

| Commit | Date | Message | Files Changed |
|--------|------|---------|---------------|
| `11d42e4` | Jun 16 19:56 | Initial repo shell | `README.md`, `package.json`, `next.config.ts`, `tsconfig.json`, `.gitignore`, `.env.example`, `src/app/layout.tsx`, `src/app/page.tsx`, 11 page shells, `skills/` |
| `a6afde6` | Jun 16 20:32 | Shell structure audit — 6 critical fixes | `src/lib/design-tokens.ts`, `src/lib/security-headers.ts`, `src/lib/supabase.ts`, `src/lib/resend.ts`, `src/app/cookies/page.tsx`, `src/app/accessibility/page.tsx`, `next.config.ts`, `.env.example` |
| `6e5e3b6` | Jun 16 21:35 | Verified tooling — npm install + build | `package.json`, `package-lock.json` |
| `7eae5fe` | Jun 17 04:14 | Add supabase-js and zod dependencies | `package.json`, `package-lock.json` |

#### Header, Footer & Hero (June 17, 2026)

| Commit | Date | Message | Files Changed |
|--------|------|---------|---------------|
| `6ac9ed7` | Jun 17 04:23 | Build Header and Footer components | `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/app/layout.tsx` |
| `c56f39c` | Jun 17 04:39 | Build homepage hero section | `src/app/page.tsx` |
| `292a101` | Jun 17 09:10 | Viewport export, hero layout refinements | `src/app/layout.tsx`, `src/app/page.tsx` |
| `91a94e9` | Jun 17 09:20 | Scroll indicator spacing fix | `src/app/page.tsx` |

#### Services Page (June 17, 2026)

| Commit | Date | Message | Files Changed |
|--------|------|---------|---------------|
| `7201d1d` | Jun 17 15:52 | Add ServicesSection with animated blob pods, 3D tilt, liquid glass | `src/app/services/page.tsx` |
| `d4a3899` | Jun 17 16:06 | Refactor page.tsx for readability | `src/app/services/page.tsx` |
| `d34eab9` | Jun 17 16:13 | Update page.tsx | `src/app/services/page.tsx` |
| `3c47a03` | Jun 17 16:22 | Refactor ServicesPage with core services | `src/app/services/page.tsx` |
| `131d4b5` | Jun 17 16:27 | Refactor ServicesPage for mobile responsiveness | `src/app/services/page.tsx` |
| `39c8545` | Jun 17 16:46 | Implement wobble animation and refactor service display | `src/app/services/page.tsx` |
| `4ba044b` | Jun 17 16:48 | Update page.tsx | `src/app/services/page.tsx` |
| `588f62b` | Jun 17 16:59 | Refactor ServicesPage component and add state management | `src/app/services/page.tsx` |

#### Booking System (June 17, 2026)

| Commit | Date | Message | Files Changed |
|--------|------|---------|---------------|
| `5bdb946` | Jun 17 17:13 | Implement booking request email handling | `src/app/booking/page.tsx`, `src/app/api/book/route.ts` |
| `b21dbb8` | Jun 17 17:25 | Refactor booking page with form handling and styles | `src/app/booking/page.tsx` |
| `2130567` | Jun 17 17:30 | Add loading state and custom date picker | `src/app/booking/page.tsx` |
| `1a18d05` | Jun 17 17:37 | Update page.tsx | `src/app/booking/page.tsx` |
| `432d872` | Jun 17 17:41 | Refactor booking email to include petName | `src/app/booking/page.tsx` |
| `99b5cf6` | Jun 17 17:50 | Update page.tsx | `src/app/booking/page.tsx` |
| `ad5da92` | Jun 17 17:55 | Refactor booking page for readability | `src/app/booking/page.tsx` |
| `34624af` | Jun 17 18:02 | Refactor booking page layout and styles | `src/app/booking/page.tsx` |
| `9cdefc9` | Jun 17 18:06 | Fix JSX formatting in booking page | `src/app/booking/page.tsx` |
| `06f8111` | Jun 17 18:09 | Refactor booking page with localStorage and styles | `src/app/booking/page.tsx` |

#### Blog System (June 17-18, 2026)

| Commit | Date | Message | Files Changed |
|--------|------|---------|---------------|
| `be74852` | Jun 17 18:16 | Update page.tsx | `src/app/blog/page.tsx` |
| `e77be03` | Jun 17 18:27 | Update page.tsx | `src/app/blog/page.tsx` |
| `3cee3d7` | Jun 17 18:45 | Update page.tsx | `src/app/blog/page.tsx` |
| `111f4a8` | Jun 17 19:03 | Update page.tsx | `src/app/blog/page.tsx` |
| `9021637` | Jun 18 14:10 | Refactor BlogPage component with improved layout | `src/app/blog/page.tsx` |
| `11d4d76` | Jun 18 14:13 | Update page.tsx | `src/app/blog/page.tsx` |
| `4579401` | Jun 18 14:46 | Update blog posts with images and excerpts | `src/app/blog/page.tsx` |
| `ac8cc9e` | Jun 18 15:48 | Implement API for handling comments | `src/app/api/comments/route.ts` |
| `6437c79` | Jun 18 15:49 | Implement API for managing likes | `src/app/api/likes/route.ts` |
| `ec86e19` | Jun 18 15:57 | Create page.tsx (article shell) | `src/app/blog/vancouver-grooming-cost-2026/page.tsx` |
| `e440d6c` | Jun 18 15:58 | Create page.tsx (article shell) | `src/app/blog/how-often-groom-rainy-vancouver/page.tsx` |
| `6ed200a` | Jun 18 15:59 | Create page.tsx (article shell) | `src/app/blog/japanese-scissor-vs-clipper/page.tsx` |
| `9b59e67` | Jun 18 15:59 | Create page.tsx (article shell) | `src/app/blog/nagayu-spa-vancouver/page.tsx` |
| `dba902d` | Jun 18 16:09 | Add article on dog grooming costs | `src/app/blog/vancouver-grooming-cost-2026/page.tsx` |
| `5a87f5b` | Jun 18 16:13 | Update page.tsx | `src/app/blog/nagayu-spa-vancouver/page.tsx` |

---

## 3. Blog Status

### Blog Listing Page (`src/app/blog/page.tsx`)

The blog listing page contains **4 hardcoded posts** with category filtering:

| # | Slug | Title | Category | Read Time | Has Article Page? |
|---|------|-------|----------|-----------|-------------------|
| 1 | `vancouver-grooming-cost-2026` | How Much Does Dog Grooming Cost in Vancouver in 2026? | Pricing | 4 min | ✅ Yes (has content) |
| 2 | `how-often-groom-rainy-vancouver` | How Often Should You Groom Your Dog in Vancouver's Rain? | Health | 3 min | ❌ Empty |
| 3 | `japanese-scissor-vs-clipper` | Japanese Scissor vs Clipper Cut: Best for Vancouver Doodles | Styles | 5 min | ❌ Empty |
| 4 | `nagayu-spa-vancouver` | Nagayu CO2 Spa: Does It Help Itchy Skin? | Spa | 4 min | ❌ Empty |

### Article Page Status

| Slug | File Exists | Exports Valid React Component | Has Content |
|------|-------------|-------------------------------|-------------|
| `vancouver-grooming-cost-2026` | ✅ Yes | ✅ `export default function Article()` | ✅ Full article with images, headings, likes button |
| `how-often-groom-rainy-vancouver` | ✅ Yes | ❌ Empty file (1 line) | ❌ No content |
| `japanese-scissor-vs-clipper` | ✅ Yes | ❌ Empty file (1 line) | ❌ No content |
| `nagayu-spa-vancouver` | ✅ Yes | ❌ Empty file (1 line) | ❌ No content |

### Why `/blog/nagayu-spa-vancouver/` Returns 404

The file `src/app/blog/nagayu-spa-vancouver/page.tsx` exists but is **empty** (contains only a newline). It does not export a React component. Next.js requires every `page.tsx` to have a default export that is a valid React component. When the export is missing or invalid, Next.js returns a 404 at build time.

**Fix needed:** Each empty article page needs a valid default export:
```tsx
export default function Article() {
  return (
    <main>
      <h1>Article Title</h1>
      <p>Article content goes here.</p>
    </main>
  );
}
```

---

## 4. API Routes

### `src/app/api/book/route.ts` — Booking Email

**Purpose:** Handles booking form submissions. Sends two emails via Resend:
1. **To studio** (`hekayaconcepts@gmail.com`) — booking request details
2. **To client** — confirmation email

**Method:** POST
**Input:** `{ name, email, phone, petName, dogName, service, date, notes }`
**Output:** `{ success: true }` or `{ error: 'Failed to send' }`

**Data persistence:** ❌ None. Emails are sent but no database record is created.

### `src/app/api/comments/route.ts` — Comments

**Purpose:** GET and POST comments for blog articles.

**Storage:** File-based at `/tmp/pawpalace-comments.json`

```typescript
// GET /api/comments?slug=article-slug
// Returns: [{ id, name, comment, date }]

// POST /api/comments
// Body: { slug, name, comment }
// Returns: { success: true }
```

### `src/app/api/likes/route.ts` — Likes/Dislikes

**Purpose:** GET and POST likes/dislikes for blog articles.

**Storage:** File-based at `/tmp/pawpalace-likes.json`

```typescript
// GET /api/likes?slug=article-slug
// Returns: { likes: number, dislikes: number }

// POST /api/likes
// Body: { slug, type: 'like' | 'dislike' }
// Returns: { likes: number, dislikes: number }
```

### ⚠️ Why Data Won't Persist on Vercel

Both comments and likes APIs use **file-based storage** (`/tmp/pawpalace-*.json`). This is problematic on Vercel because:

1. **Vercel serverless functions are ephemeral** — each invocation may run on a different instance
2. **`/tmp` is not shared** between function instances
3. **Data is lost** when the function cold-starts or scales
4. **No concurrent write protection** — race conditions will corrupt data

**Recommended fix:** Replace file storage with Supabase database tables:
```sql
CREATE TABLE comments (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  slug text NOT NULL,
  name text NOT NULL,
  comment text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE likes (
  slug text PRIMARY KEY,
  likes integer DEFAULT 0,
  dislikes integer DEFAULT 0
);
```

---

## 5. Build Errors

### "Error: The default export is not a React Component"

**Cause:** Empty `page.tsx` files in blog article subdirectories.

The files `src/app/blog/how-often-groom-rainy-vancouver/page.tsx`, `src/app/blog/japanese-scissor-vs-clipper/page.tsx`, and `src/app/blog/nagayu-spa-vancouver/page.tsx` were created as empty files (1 line, no content). Next.js requires every `page.tsx` to export a valid React component as the default export.

**Triggered by:** Commit `9b59e67` (Create page.tsx) and `5a87f5b` (Update page.tsx) — the nagayu-spa-vancouver page was updated but still has no valid export.

**Fix:** Add a default export to each empty page:
```tsx
export default function Article() {
  return (
    <main style={{ padding: '40px 24px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Article Title</h1>
      <p>Coming soon...</p>
    </main>
  );
}
```

---

## 6. Challenges Log

### Timeline of Problems

| Date | Challenge | Resolution |
|------|-----------|------------|
| Jun 16 | **GitHub mobile can't create folders** — Attempted to create blog article subfolders via GitHub mobile interface, but the UI doesn't support creating nested folders easily | Switched to creating files directly via GitHub API with full paths (e.g., `src/app/blog/slug/page.tsx`) |
| Jun 16 | **Switching to static folders** — Initially considered using static HTML files for blog articles, but this would lose Next.js benefits (SSR, routing, components) | Decided to use dynamic Next.js routes with `page.tsx` in each subfolder |
| Jun 17 | **Minified JSX breaking Turbopack build** — A minified/broken JSX file in `src/app/booking/page.tsx` caused Turbopack to fail with "The default export is not a React Component" | Fixed by rewriting the booking page with proper JSX formatting in commit `9cdefc9` |
| Jun 17 | **Header onMouseEnter syntax error** — Broken `onMouseEnter` syntax in Header.tsx caused build failure | Fixed in commit `61dd4a4` — "Fixed the broken onMouseEnter syntax that caused the build error" |
| Jun 18 | **404s on article pages** — 3 of 4 blog article pages return 404 because they're empty files with no React component export | **NOT YET FIXED** — Need to add default exports to empty pages |
| Jun 18 | **Disk space exhaustion** — Workspace ran out of disk space (28G/30G) during `npm install` | Cleared npm cache (`npm cache clean --force`) freeing 1.2GB |

---

## 7. Current Working Features

### ✅ Live and Working

| Feature | URL | Status |
|---------|-----|--------|
| **Homepage Hero** | https://paw-palace-six.vercel.app/ | ✅ Full hero with background image, headline, subheadline, 2 CTAs, scroll indicator |
| **Header** | All pages | ✅ Sticky, responsive, hamburger menu on mobile (<640px) |
| **Footer** | All pages | ✅ 4-column desktop, single-column mobile, contact info, social links |
| **Services Page** | /services | ✅ Full implementation with 3 core services, add-ons, wobble animation, localStorage |
| **Booking Page** | /booking | ✅ Multi-step form, Resend email integration, localStorage persistence |
| **Blog Listing** | /blog | ✅ 4 posts with category filtering, images, excerpts, "Read Article" links |
| **Blog Article (1 of 4)** | /blog/vancouver-grooming-cost-2026 | ✅ Full article with content, likes button, back link |
| **Design System** | All pages | ✅ Inline styles using design-tokens.ts (colors, fonts, spacing, shadows) |
| **Security Headers** | All pages | ✅ HSTS, CSP, X-Frame-Options, etc. via next.config.ts |
| **Vercel Auto-Deploy** | — | ✅ Connected to GitHub, auto-deploys on push |

### ❌ Not Working / Incomplete

| Feature | Issue | Priority |
|---------|-------|----------|
| **Blog articles (3 of 4)** | Empty page.tsx files — 404 error | 🔴 High |
| **Comments API** | File-based storage won't persist on Vercel | 🟡 Medium |
| **Likes API** | File-based storage won't persist on Vercel | 🟡 Medium |
| **About page** | Empty shell | 🟡 Medium |
| **Contact page** | Empty shell | 🟡 Medium |
| **Gallery page** | Empty shell | 🟡 Medium |
| **Blog page** | Uses `<style jsx>` which may not work with static export | 🟡 Medium |
| **Legal pages** | Empty shells (privacy, terms, cookies, accessibility) | 🟢 Low |
| **Shop page** | Empty shell (Phase 2) | 🟢 Low |

---

## 8. Design System Reference

### Colors (from `src/lib/design-tokens.ts`)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#C67B5C` | Warm Terracotta — headings, accents |
| `secondary` | `#D4C4A8` | Sand Beige — backgrounds |
| `accent` | `#D4A855` | Warm Gold — CTA buttons |
| `background` | `#FFF7ED` | Soft Cream — page background |
| `textDark` | `#3D2B1F` | Rich Brown — body text |
| `textMuted` | `#8B7355` | Warm Grey — secondary text |
| `success` | `#6B8F71` | Sage Green — success states |
| `ctaHover` | `#A85C3F` | Deep Terracotta — button hover |

### Fonts

| Token | Font Family | Usage |
|-------|-------------|-------|
| `heading` | `'Playfair Display', serif` | H1, H2, H3 |
| `body` | `'DM Sans', sans-serif` | Body text, buttons |
| `accent` | `'Nunito', sans-serif` | Badges, playful elements |

### Breakpoints

| Token | Value | Usage |
|-------|-------|-------|
| `mobile` | `639px` | Mobile breakpoint |
| `tablet` | `640px` | Tablet breakpoint |
| `desktop` | `1024px` | Desktop breakpoint |

---

*Build journal maintained by Hermes Agent — OWL*
*For questions or updates, refer to the repo at https://github.com/hekayaconcepts/paw-palace*
