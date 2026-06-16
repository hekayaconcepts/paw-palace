# Paw Palace Pet Grooming — Masterpiece Build Plan

## 1. LEAD INTELLIGENCE

**Business:** Paw Palace Pet Groomin
**Lead ID:** CA-2026-06-10-012
**Location:** Vancouver, Canada
**Industry:** Dog Groomer
**Phone:** +1 (604) 722-2070
**Email:** Not available (to be found during build)
**Website:** None (confirmed no website)
**Google Maps:** https://maps.google.com/?cid=6059977217728605837
**Lead Score:** 90/100
**Qualification:** Rating 4.6 | Reviews 140
**Status:** New

**Key Insights:**
- 140 reviews with 4.6-star rating = strong social proof to leverage
- No website at all = first-mover advantage for their brand online
- Vancouver market = high pet ownership, premium service potential
- Name "Paw Palace" = implies luxury/premium positioning

---

## 2. REFERENCE ANALYSIS: wooof.com.au

**What I borrowed and why:**

| Element | From wooof.com.au | How We Adapt |
|---------|-------------------|--------------|
| **Hero text** | "Hey, you there. Your dog is stinky." — conversational, direct, humorous | Paw Palace hero: "Your dog deserves the royal treatment." — same conversational tone but aligned with "Palace" luxury branding |
| **Service-first navigation** | Clean nav: Home, About, Services, Blog, Contact, Careers | Same structure but add Shop (future ecommerce) |
| **Dual-location display** | Shows both Canberra and Sydney locations prominently | Vancouver-focused but structure supports multiple locations if they expand |
| **Social proof placement** | "What WOOOF clients are saying" section early on | Testimonials section above the fold on mobile |
| **Booking CTA** | "BOOK NOW" persistent in header and hero | Same — persistent gold CTA button |
| **Warm photography** | Real dog photos, natural lighting | Use warm, natural pet photography (stock photos we'll source) |

**What I did NOT borrow:**
- Their color scheme (too cool/blue for pet grooming)
- Their minimal text approach (we need more content for SEO)
- Their blog layout (we need a more magazine-style approach for content marketing)

---

## 3. DESIGN SYSTEM — "Warm Organic Luxury"

### Why This Style

I searched the ui-ux-agent skill databases across 16 CSV files with 67+ styles, 161 color palettes, 57 font pairings, and 99 UX guidelines. After analyzing the results, I settled on a **hybrid of three styles**:

**Primary: Nature Distilled** (from styles.csv)
- Muted earthy tones, organic materials, handmade warmth
- Best for: wellness brands, spa/beauty, sustainable products
- Why: Pet grooming IS wellness. This style communicates care, natural ingredients, and premium service.

**Secondary: Aurora UI** (from styles.csv)
- Vibrant gradients, smooth blends, luminous atmospheric effects
- Best for: premium products, lifestyle brands, hero sections
- Why: Adds the "wow factor" to hero sections and CTAs. The gradient warmth makes the site feel alive.

**Tertiary: Micro-interactions** (from styles.csv)
- Small animations, gesture-based, tactile feedback
- Best for: mobile apps, consumer apps, interactive components
- Why: Makes the site feel responsive and premium on mobile.

### Color Palette

| Role | Color | Hex | Source |
|------|-------|-----|--------|
| **Primary** | Warm Terracotta | `#C67B5C` | Nature Distilled |
| **Secondary** | Sand Beige | `#D4C4A8` | Nature Distilled |
| **Accent** | Warm Gold | `#D4A855` | Custom (bridges terracotta and cream) |
| **Background** | Soft Cream | `#FFF7ED` | Pet Tech App (warm variant) |
| **Text Dark** | Rich Brown | `#3D2B1F` | Custom (warm black) |
| **Text Muted** | Warm Grey | `#8B7355` | Custom |
| **Success** | Sage Green | `#6B8F71` | Custom (nature-inspired) |
| **CTA Hover** | Deep Terracotta | `#A85C3F` | Nature Distilled dark variant |

**Why these colors:**
- Terracotta + Sand = warmth, earthiness, approachability (pet owners are warm/emotional buyers)
- Gold accent = premium positioning (matches "Palace" in the name)
- Cream background = clean, pet-friendly (doesn't show pet hair in photos)
- Sage green = trust, nature, health (implies natural/organic grooming products)

### Typography

**Heading Font: Playfair Display** (serif, elegant)
- Source: ui-ux-agent typography database — serif fonts communicate trust and elegance
- Why: "Palace" demands elegance. Playfair Display has the luxury feel without being stuffy.

**Body Font: DM Sans** (geometric sans, rounded)
- Source: ui-ux-agent — "Claymorphism Mobile" pairing (Nunito + DM Sans)
- Why: Friendly, approachable, highly readable on mobile. The rounded edges feel soft and pet-friendly.

**Accent Font: Nunito** (rounded, playful)
- Source: ui-ux-agent — same pairing
- Why: For buttons, badges, and playful elements. The rounded forms feel friendly.

**Font Scale:**
- H1: 48px / 3rem (hero)
- H2: 36px / 2.25rem (section headings)
- H3: 24px / 1.5rem (card headings)
- Body: 16px / 1rem
- Small: 14px / 0.875rem

### UI Components Style

**Cards:**
- Border-radius: 16px (soft, pet-friendly rounded corners)
- Shadow: 0 4px 20px rgba(0,0,0,0.08) (soft, warm shadow)
- Background: #FFFFFF with subtle border: 1px solid rgba(199,123,92,0.1)

**Buttons (CTA):**
- Background: Warm Gold #D4A855
- Text: Rich Brown #3D2B1F
- Border-radius: 8px
- Hover: Deep Terracotta #A85C3F with subtle scale(1.02) transition
- Shadow: 0 2px 8px rgba(212,168,85,0.3)

**Navigation:**
- Sticky header with blur backdrop
- Logo left, nav center, CTA right (desktop)
- Hamburger menu on mobile with full-screen overlay
- Active section highlighted with gold underline

**Forms:**
- Input fields: cream background, terracotta focus border
- Labels: warm grey, uppercase, 12px
- Error states: soft red with icon
- Success states: sage green with checkmark

---

## 4. SITE MAP

```
HOME
├── Hero Section (full-width, conversational headline + CTA)
├── Services Preview (3-column grid, icons + short descriptions)
├── About Preview (image + 2-column text)
├── Testimonials Carousel (3 reviews, auto-rotate)
├── Blog Preview (3 latest posts, magazine grid)
├── Instagram Feed (6 images, link to Instagram)
└── Footer (full)

SERVICES
├── Hero (service-specific hero)
├── Service Cards (6-8 services with pricing)
│   ├── Basic Bath & Brush
│   ├── Full Grooming Package
│ ├── Puppy First Visit
│ ├── Nail Trimming
│ ├── Teeth Cleaning
│ ├── De-shedding Treatment
│ ├── Flea & Tick Treatment
│ └── Spa Package (premium)
├── Process Section (4-step grooming process)
├── FAQ Accordion (8-10 questions)
└── CTA (Book Now)

ABOUT
├── Hero (story-driven)
├── Our Story (2-column: text + image)
├── Team (groomer profiles with photos)
├── Values (4 pillars: Safety, Love, Quality, Fun)
├── Certifications & Awards
└── CTA (Meet the Team / Book Now)

GALLERY
├── Filterable Grid (by service type)
├── Lightbox View
├── Before/After Section
└── CTA (See Your Dog Here)

BLOG
├── Featured Post (large hero card)
├── Category Filters (Grooming Tips, Pet Health, Product Reviews, Behind the Scenes)
├── Post Grid (3-column masonry)
├── Sidebar (Search, Categories, Popular Posts, Newsletter Signup)
└── Single Post Template (share buttons, related posts, author bio)

SHOP (Phase 2 — Ecommerce)
├── Product Grid (filterable by category)
├── Product Pages (image gallery, description, reviews, add to cart)
├── Cart (slide-out drawer)
├── Checkout (streamlined, guest checkout)
└── Account (order history, pet profiles)

CONTACT
├── Contact Form (name, email, phone, pet name, service, message)
├── Map Embed (Google Maps)
├── Business Hours
├── Phone / Email
└── Social Links

BOOKING (embedded on all pages)
├── Step 1: Select Service
├── Step 2: Select Date/Time
├── Step 3: Pet Information
├── Step 4: Contact Information
├── Step 5: Confirmation
└── Calendar Integration (Google Calendar)

LEGAL
├── Privacy Policy
├── Terms of Service
├── Cookie Policy
└── Accessibility Statement
```

---

## 5. PAGE-BY-PAGE BUILD PLAN

### HOME PAGE

**Section 1: Hero**
- Full-width background image (happy dog being groomed, warm lighting)
- Overlay gradient: rgba(61,43,31,0.4) to transparent
- Headline: "Your Dog Deserves the Royal Treatment" (Playfair Display, 48px, white)
- Subheadline: "Premium pet grooming in Vancouver. Natural products. Happy dogs." (DM Sans, 18px)
- CTA Button: "Book Now" (gold, large, with paw icon)
- Secondary CTA: "View Services" (outline, white)
- Scroll indicator animation at bottom

**Section 2: Services Preview**
- Heading: "Our Services" (centered, Playfair Display)
- 3-column grid (desktop) / single column (mobile)
- Each card: icon (SVG paw), service name, short description, "Learn More" link
- Services shown: Full Grooming, Spa Treatment, Puppy First Visit
- Background: Soft Cream #FFF7ED

**Section 3: About Preview**
- 2-column layout (image left, text right on desktop, stacked on mobile)
- Image: groomer with dog (warm, natural lighting)
- Text: "Meet Paw Palace" heading, 2-3 paragraph story
- CTA: "Read Our Story" button
- Background: white

**Section 4: Testimonials**
- Heading: "Happy Tails from Happy Clients"
- Carousel of 3 testimonials (auto-rotate, manual dots)
- Each: quote text, star rating, client name, dog name + photo
- Background: Sand Beige #D4C4A8 (subtle)

**Section 5: Blog Preview**
- Heading: "From Our Blog"
- 3-column grid of latest posts
- Each: featured image, category badge, title, excerpt, "Read More"
- Background: white

**Section 6: Instagram Feed**
- Heading: "Follow Us @PawPalaceGrooming"
- 6-image grid (no gaps, hover overlay with heart icon)
- CTA: "Follow Us" button linking to Instagram
- Background: Soft Cream

**Section 7: Footer**
- 4-column layout (desktop) / stacked (mobile)
- Col 1: Logo + tagline + social icons
- Col 2: Quick Links (Home, Services, About, Blog, Contact)
- Col 3: Services (top 5 services)
- Col 4: Contact Info (phone, email, address, hours)
- Bottom bar: Copyright, Privacy Policy, Terms, Accessibility
- Background: Rich Brown #3D2B1F, text: white/cream

### SERVICES PAGE

**Section 1: Hero**
- Background: warm gradient (terracotta to sand)
- Heading: "Our Grooming Services"
- Subheadline: "From basic baths to full spa experiences"

**Section 2: Service Cards**
- 2-column grid (desktop) / single column (mobile)
- Each card: service name, description, price range, duration, "Book Now" button
- 8 services total (listed in site map above)
- Cards have hover effect (subtle lift + shadow increase)

**Section 3: Process Section**
- Heading: "What to Expect"
- 4-step horizontal process (icon + text per step)
- Step 1: Check-in & Consultation
- Step 2: Bath & Dry (natural products)
- Step 3: Grooming & Styling
- Step 4: Final Touches & Pickup
- Connecting line between steps (animated on scroll)

**Section 4: FAQ Accordion**
- Heading: "Frequently Asked Questions"
- 8-10 questions with expand/collapse
- Questions: pricing, duration, products used, pet anxiety, etc.
- Smooth accordion animation (300ms ease-out)

**Section 5: CTA**
- Full-width banner
- Heading: "Ready to Pamper Your Pup?"
- CTA: "Book Your Appointment" (gold button)

### ABOUT PAGE

**Section 1: Hero**
- Background image: team with dogs
- Heading: "Our Story"
- Subheadline: "Vancouver's premier pet grooming experience"

**Section 2: Story Section**
- 2-column: text + image
- Founding story, mission, values
- Warm, personal tone

**Section 3: Team**
- Grid of team member cards
- Each: photo, name, title, bio, certifications
- Hover: social links

**Section 4: Values**
- 4 pillars with icons
- Safety, Love, Quality, Fun
- Each with short description

**Section 5: Certifications**
- Logos of certifications/memberships
- Pet first aid, grooming certifications, business licenses

### BLOG PAGE

**Layout:** Magazine-style with sidebar

**Main Content:**
- Featured post (large card, full width)
- Category filter tabs (All, Grooming Tips, Pet Health, Product Reviews, Behind the Scenes)
- Post grid (3-column, masonry layout)
- Each post card: image, category badge, title, excerpt, date, read time
- Pagination (load more button)

**Sidebar:**
- Search bar
- Categories list
- Popular posts (5 most read)
- Newsletter signup form
- Social follow buttons

**Blog Post Template:**
- Full-width featured image
- Title, author, date, read time
- Share buttons (Facebook, Twitter, Pinterest, email)
- Content area (rich text, images, pull quotes)
- Author bio box
- Related posts (3 cards)
- Comments section (optional, Phase 2)

### CONTACT PAGE

**Section 1: Contact Form**
- Fields: Name, Email, Phone, Pet Name, Service (dropdown), Message
- Validation: real-time, inline error messages
- Submit: loading state → success message
- reCAPTCHA v3 (invisible, for spam prevention)

**Section 2: Map + Info**
- Google Maps embed (Paw Palace location)
- Business hours card
- Phone / Email card
- Address with "Get Directions" link

**Section 3: Social Links**
- Instagram, Facebook, TikTok icons
- Link to each platform

### BOOKING SYSTEM

**Type:** Multi-step form (embedded modal or dedicated page)

**Step 1: Service Selection**
- Visual cards for each service
- Shows price range and duration
- Select one or multiple

**Step 2: Date & Time**
- Calendar widget (disable past dates, Sundays, holidays)
- Time slots (30-min intervals, 8am-5pm)
- Shows availability

**Step 3: Pet Information**
- Pet name, breed, size (S/M/L/XL), age
- Special notes (anxiety, health issues, preferences)
- Photo upload (optional, for groomer reference)

**Step 4: Contact Information**
- Owner name, email, phone
- How did you hear about us? (dropdown)
- SMS reminders opt-in

**Step 5: Confirmation**
- Summary of all selections
- Total estimated price
- "Confirm Booking" button
- Success message with confirmation number

**Backend:**
- Form submissions → Resend email to Paw Palace
- Data stored in Supabase (for future CRM)
- Google Calendar API integration (Phase 2)

---

## 6. CYBERSECURITY BEST PRACTICES

### SSL/TLS
- HTTPS enforced (Vercel provides free SSL)
- HSTS header enabled
- All forms submitted over HTTPS

### Form Security
- reCAPTCHA v3 on all forms (invisible, no user friction)
- CSRF tokens on all form submissions
- Input sanitization (prevent XSS, SQL injection)
- Rate limiting on API routes (prevent abuse)

### Data Protection
- No sensitive data stored in plain text
- Supabase Row Level Security (RLS) enabled
- API keys stored in environment variables (never in code)
- Cookie consent banner (GDPR/CCPA compliant)

### Headers
- Content-Security-Policy (CSP) header
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=(self)

### Privacy
- Privacy Policy page (GDPR, CCPA, PIPEDA compliant)
- Cookie consent management
- No third-party tracking without consent
- Data retention policy (delete inactive data after 12 months)

### Backup & Recovery
- Daily database backups (Supabase auto-backup)
- Code backed up on GitHub
- Disaster recovery: redeploy from GitHub in < 5 minutes

---

## 7. RESPONSIVE DESIGN STRATEGY

**Breakpoints:**
- Mobile: 0-639px (single column, stacked)
- Tablet: 640-1023px (2-column where appropriate)
- Desktop: 1024px+ (full multi-column layouts)

**Mobile-First Approach:**
- Start with mobile styles, enhance with breakpoints
- Touch targets minimum 44x44px
- Font sizes scale down (H1: 32px mobile → 48px desktop)
- Images use srcset for responsive loading
- Navigation: hamburger menu with full-screen overlay
- Forms: full-width inputs, large buttons
- Test on: iPhone 12/13/14, Samsung Galaxy S21/S22, iPad

**Performance:**
- Images: WebP format, lazy loading, srcset
- Fonts: preloaded, font-display: swap
- CSS: critical CSS inlined, rest loaded async
- JS: code splitting, tree shaking
- Target: < 3s load time on 4G, < 1s on WiFi
- Lighthouse score: 90+ on all metrics

---

## 8. IMAGE REQUIREMENTS

**Total images needed: 25-30**

| Category | Count | Description |
|----------|-------|-------------|
| **Hero images** | 2 | Happy dog being groomed (warm lighting), team with dogs |
| **Service images** | 8 | One per service (bath, grooming, nail trim, teeth, spa, puppy, de-shedding, flea) |
| **Team photos** | 3-4 | Groomer headshots (warm, friendly, professional) |
| **Gallery/Before-After** | 6-8 | Before/after grooming transformations |
| **Testimonial photos** | 3-4 | Client dogs (with permission) or stock pet photos |
| **Blog featured images** | 4-6 | Pet care, grooming tips, behind the scenes |
| **About page** | 2 | Studio interior, team group photo |
| **Icons** | Custom | Paw print, scissors, bath, heart, star (SVG, not images) |

**Image Specifications:**
- Format: WebP (with JPEG fallback)
- Hero: 1920x1080px
- Service cards: 800x600px
- Team: 600x600px (square)
- Gallery: 1200x800px
- Blog: 800x450px (16:9)
- Optimized: < 200KB per image (hero < 500KB)

**Stock Photo Sources (free):**
- Unsplash (pet/dog photos)
- Pexels (grooming, pet care)
- Custom photography (recommended for team and studio)

---

## 9. TOOL STACK

| Tool | Purpose | Cost |
|------|---------|------|
| **Next.js 16** | Frontend framework | Free |
| **Vercel** | Hosting + deployment | Free tier |
| **GitHub** | Code repository | Free (public) |
| **Supabase** | Database + auth | Free tier |
| **Resend** | Email notifications | Free tier (100 emails/day) |
| **Vercel Blob** | Image/file storage | Free tier |
| **Google Fonts** | Typography | Free |
| **reCAPTCHA v3** | Form spam prevention | Free |
| **Google Maps Embed** | Location display | Free |
| **Tavily** | Research (already have key) | Already paid |

**Total monthly cost: $0**

---

## 10. DEVELOPMENT PHASE

### Phase 1: Foundation (Days 1-2)
- [ ] Create GitHub repo: `hekayaconcepts/paw-palace`
- [ ] Set up Next.js project with inline styles
- [ ] Configure Vercel deployment
- [ ] Set up Supabase project (database + auth)
- [ ] Create design system (colors, fonts, components)
- [ ] Build responsive header + footer

### Phase 2: Core Pages (Days 3-5)
- [ ] Home page (all sections)
- [ ] Services page
- [ ] About page
- [ ] Contact page
- [ ] Booking system (multi-step form)

### Phase 3: Content & Blog (Days 6-7)
- [ ] Blog listing page
- [ ] Blog post template
- [ ] 4-6 blog posts (SEO-optimized)
- [ ] Gallery page
- [ ] FAQ content

### Phase 4: Polish & Security (Days 8-9)
- [ ] SSL verification
- [ ] Security headers
- [ ] reCAPTCHA integration
- [ ] Privacy Policy + Terms pages
- [ ] Cookie consent banner
- [ ] Performance optimization (Lighthouse 90+)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Mobile testing (iOS, Android)

### Phase 5: Launch (Day 10)
- [ ] Connect domain (pawpalacegrooming.com or similar)
- [ ] Final QA on all pages
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics (Phase 2)
- [ ] Send preview link to Paw Palace for approval

### Phase 6: Handover (Post-approval)
- [ ] Transfer domain DNS to client
- [ ] Hand over GitHub repo access
- [ ] Document all credentials
- [ ] Train client on blog posting
- [ ] Set up maintenance plan

---

## 11. FUTURE ECOMMERCE (Phase 2)

**Pet Product Shop:**
- Product catalog (shampoos, brushes, treats, accessories)
- Shopping cart (Supabase + Stripe)
- Order management dashboard
- Inventory tracking
- Email notifications (order confirmation, shipping)

**Blog Monetization:**
- Affiliate links to pet products
- Sponsored content sections
- Newsletter with product recommendations

**Booking Enhancements:**
- Online payment (deposit at booking)
- Recurring appointments (monthly grooming)
- Pet profiles (medical notes, preferences)
- SMS reminders (Twilio integration)

---

## 12. SEO STRATEGY

**Target Keywords:**
- "dog grooming Vancouver"
- "pet grooming near me"
- "dog salon Vancouver BC"
- "mobile dog grooming Vancouver"
- "puppy grooming Vancouver"
- "dog spa Vancouver"

**On-Page SEO:**
- Unique title tags and meta descriptions per page
- H1 hierarchy (one per page)
- Alt text on all images
- Internal linking between services, blog, and booking
- Schema markup (LocalBusiness, Service, Review)

**Content Strategy:**
- 2 blog posts/week (grooming tips, pet health, product reviews)
- Target long-tail keywords
- Share on social media
- Build backlinks from local pet directories

---

*Build plan prepared by Hekaya Concepts — OWL Agent*
*Date: June 16, 2026*
*Reference: ui-ux-agent skill v2.5.0, wooof.com.au, Paw Palace lead data*
