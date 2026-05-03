
## Scope

Edit only `src/components/landing/PerformanceManagementSection.tsx` — and only **Card 1** (the chart card). All other cards (WhatsApp, Especialistas, Relatórios), other sections, pages and global files stay untouched.

## What changes

### 1. New local component: `AnimatedPerformanceGraph`
Define inside the same file (or co-located) — not a global component, no new dependencies. Pure SVG + Tailwind + a small `<style>` block scoped to the component.

### 2. Replace Card 1 content

Remove:
- "e-commerce" eyebrow
- "Previsibilidade e picos de vendas para o seu e-commerce" title
- the current static SVG curve

Insert:

- **Title (top-left)**: `Predictable growth in calls, inquiries, and quote requests`
- **Three metric chips** (pill style, translucent bg, subtle border, small icon):
  - 📞 Calls +32%
  - 💬 Customer Inquiries +18%
  - 🧾 Quote Requests +24%
- **Top-right premium badge/tooltip**:
  - Small line: 🏆 Peak reached
  - Main text: `Highest call volume this quarter`
  - Glassmorphism, rounded ~16px, subtle mint accent, micro-float animation
- **Animated graph area** (bottom, full width of card)
- **Two floating bubbles** over the curve: 📞 (peak point) and 💬 (secondary point)
  - 48–56px circular glass bubbles, blur, mint glow, slow float animation

### 3. Graph (SVG) requirements

- viewBox `0 0 400 160`, `preserveAspectRatio="none"`, `width=100%`
- Path **starts at x≈0** (e.g. `M 0 130 …`) — no centering, no left padding that pushes start
- Two paths:
  - **Primary line**: cream/mint stroke (~2px), with `stroke-dasharray` + `stroke-dashoffset` line-draw animation on mount (~1.6s ease-out)
  - **Secondary line**: lower opacity, slight breathing animation
- **Filled area** under curve: linear gradient mint→transparent, low opacity, subtle shimmer (opacity oscillation 0.85↔1.0, 6s)
- **Vertical grid lines**: 4–5 lines, opacity ~0.06
- **Data points**: 2–3 small circles at peaks, with pulsing glow (radius/opacity keyframes)
- All decorative SVG marked `aria-hidden="true"`; metrics live as real text in DOM

### 4. Animations (scoped `<style>` inside component)

Implement at least 4 of:
- `lineDraw` (dashoffset → 0)
- `areaShimmer` (opacity breathing)
- `pointPulse` (r + opacity)
- `bubbleFloat` (translateY ±6px, 5–6s ease-in-out infinite, staggered delay between the two bubbles)
- `badgeFloat` (translateY ±3px, 4s)

All slow, subtle, GPU-friendly (transform/opacity only).

### 5. Palette (only within this card)

Use existing Agnus tokens already in the section: `hsl(168 100% 9%)`, `hsl(144 90% 16%)`, `hsl(36 89% 90%)`, `hsl(29 73% 71%)`. Add inline rgba mint accents `rgba(159,232,112,…)` and `rgba(126,224,181,…)` for glow/gradients. No blue, no global CSS changes.

### 6. Card container

Reuse existing card wrapper classes (border, rounded-3xl, backdrop-blur, hover transform) — keep grid layout intact so the other 3 cards are unaffected. Increase min-height slightly only if needed for graph + chips + badge (`md:min-h-[420px]`).

### 7. Responsive

- Mobile (<640px): chips wrap to 2 rows, badge moves below chips (still inside card), bubbles repositioned to safer % coordinates, graph height ~140px
- Desktop: title left, chips below title, badge absolute top-right, graph absolute/relative bottom, bubbles at ~30% and ~72% x-coords

### 8. Accessibility

- SVG `aria-hidden="true"`
- Visually-hidden description: "Performance graph showing increased calls, customer inquiries, and quote requests."
- Metric chips are real `<span>` text, readable by screen readers

### 9. Logging

Add `console.log('[AnimatedPerformanceGraph]', 'render')` on mount.

## Out of scope (explicitly untouched)

- Other 3 cards in PerformanceManagementSection
- Hero, Services, Testimonials, TrustGap, Process, Founder, FAQ, FinalCta, Footer, Header
- Other pages (`/`, `/indique-e-ganhe`, `/refer-and-earn`)
- `tailwind.config.ts`, `src/index.css`, global tokens
- No new npm dependencies

## Files to change

- `src/components/landing/PerformanceManagementSection.tsx` — replace Card 1 JSX + add `AnimatedPerformanceGraph` component and its scoped keyframes

## Acceptance checklist

- Card 1 shows new English title, 3 metric chips, top-right badge with required text
- Graph line animates drawing from left edge on first paint
- Exactly 2 floating emoji bubbles with float animation
- Pulsing data points + shimmering fill
- No "e-commerce" / "faturamento" text remains in the card
- No horizontal scroll at 375/390/430/768/1024/1440px
- Other cards and sections visually identical to before
