# Easywurld — Master Brand Prompt

Paste-ready prompts for **carousels** (static slides) and **videos** (reels), plus the
brand rules every asset must follow. Each calendar entry in [`calendar/`](./calendar)
also carries its own filled-in prompt — this file is the master reference.

---

## 1. Brand card (feed this to any AI tool first if it accepts context)

> Easywurld is an independent digital studio in Lagos, Nigeria, giving small
> businesses marketing clarity. Services: digital marketing strategy, web design,
> landing pages, SEO, social media management, copywriting, business systems and
> reports. Slogan: "Simplify. Optimize. Grow." Process: Understand, Simplify, Build,
> Optimize. Visual style: flat, editorial, print-like. Warm cream background, deep
> green serif type, one terracotta accent. Honest, plain-spoken, no hype.

## 2. Palette (exact hex — sampled from the logo)

| Token | Hex | Role |
|---|---|---|
| Cream | `#FAE7C7` | **The background — always** (slides, video bg, page bg) |
| Leaf green | `#27473A` | Logo mark, buttons, primary brand elements |
| Deep green | `#0A4937` | Wordmark + headlines (the logo's main text) |
| Terracotta | `#9E4E2C` | **One** accent per asset — a tick, a dot, an underline |
| Ink | `#14170F` | Body/support text |
| Paper | `#FBF9F4` | Inverted panels, cards on dark |

## 3. Typography — the "one typography" rule

- **Fraunces** (high-contrast serif): the wordmark `EASYWURLD`, every headline, the
  slogan. **The sign and the slogan are always the same typeface.**
- **Inter** (sans): support lines, body copy.
- **JetBrains Mono**: labels, numbers, eyebrows, meta.
- Never set the wordmark or slogan on a different-coloured panel. One background:
  cream `#FAE7C7`. On deep-green panels use paper text + the light mark.

## 4. Logo

- **Mark:** a deep-green (`#27473A`) leaf whose stem becomes a circuit of small
  square nodes. Files: `client/public/brand/mark.png` (light bg),
  `client/public/brand/mark-light.png` (dark bg).
- **Wordmark:** `EASYWURLD` — Fraunces, deep green `#0A4937`, uppercase, slight
  tracking.
- **Slogan lockup (end cards / final slides):** mark + `EASYWURLD` + below it
  `SIMPLIFY. OPTIMIZE. GROW.` — same serif, same green, same cream background.
- Clear space around the lockup; never stretch, outline, gradient or recolour it.

## 5. MASTER CAROUSEL PROMPT (template)

Copy, fill the `[BRACKETS]`, paste. One prompt per slide.

```
Easywurld Instagram carousel slide [N] of 5, aspect ratio 4:5, flat warm-cream
background #FAE7C7, editorial print style, generous whitespace. Headline in a
high-contrast deep-green serif #0A4937 (Fraunces-like) reading exactly "[HEADLINE]".
Support line in clean dark sans-serif #14170F reading exactly "[SUPPORT LINE]".
[SLIDE-SPECIFIC LAYOUT, e.g.: "a numbered list of 3 short items, numerals in
JetBrains-mono style, deep green" / "a large terracotta #9E4E2C quotation mark as
the only accent" / "a simple before/after split, left labelled BEFORE in muted
grey, right labelled AFTER in deep green"]. The Easywurld logo mark — a deep-green
#27473A leaf with a circuit of small square nodes — small in the bottom-right
corner. No photographs, no gradients, no drop shadows, no other brand names or
logos, no decorative clutter. Any text must be spelled exactly as given.
--ar 4:5 --style raw
```

### Carousel anatomy (5 slides)

1. **Hook** — one big statement, no support line. Stops the scroll.
2–4. **Value** — one idea per slide, short. Lists, contrasts, checklists, numbers.
5. **CTA** — the action + logo lockup + slogan. Always the same cream background.

Text-safe zone: keep all text inside the central 80% vertically; the mark sits
bottom-right with clear space; never place text over the mark.

## 6. MASTER VIDEO PROMPT (template)

```
Easywurld short-form video, 9:16 vertical, [15–30] seconds, flat warm-cream
background #FAE7C7, calm kinetic typography. Headlines in a deep-green #0A4937
serif (Fraunces-like), support text in dark sans-serif #14170F, exactly one
terracotta #9E4E2C accent moment (a tick, an underline draw, a dot). The Easywurld
leaf-and-circuit logo mark (#27473A) held small in the bottom-right corner
throughout. Smooth ease-in-out motion, text animates in sequence, burned-in
captions. No stock footage, no people, no other brand names or logos, no neon,
no gradients. Structure: 0–3s hook "[HOOK]", then "[BODY BEAT 1]", "[BODY BEAT 2]",
final 3s end card: mark + EASYWURLD + "SIMPLIFY. OPTIMIZE. GROW." --ar 9:16
```

### Video anatomy

- **0–3s:** the hook — the single phrase that earns the watch.
- **3–(end−3)s:** 2–4 body beats, one idea each, on-screen text = the spoken words.
- **Final 3s:** end card — mark + `EASYWURLD` + slogan + "Link in bio".
- Always add captions (most watch without sound) and one terracotta accent max.

## 7. Tool cheat-sheet

| Tool | Use | Settings |
|---|---|---|
| Midjourney v6/v7 | Carousel slides, video keyframes | `--ar 4:5 --style raw --s 50` (slides) · `--ar 9:16` (frames) |
| DALL·E image tools | Carousel slides | Request a 4:5 portrait export when supported; otherwise generate a clean background and crop/overlay text in Canva |
| Adobe Firefly | Carousel slides | 4:5, "Poster / graphic design" look |
| Ideogram / Flux | Slides with exact text | Best text rendering for short headlines |
| Kling / Runway / Pika / Luma | Reels | Image-to-video from your generated stills, 9:16, 5–10s clips |
| CapCut / Canva | Assembly | Stitch clips, burn captions, overlay copy, add mark + end card |

If a generator mangles the text: generate the **background without text**, then
overlay the exact copy in Canva/CapCut in Fraunces (closest available serif).

## 8. Never-do list

- **No external brand, logo or name** — no other agency names or client logos.
  Exception: the fictional demo-project names (Northline Atelier, Morrow House,
  Cedar & Co., …) when the post is explicitly about that demo project, and then
  always labelled **concept / sample**.
- No fake testimonials, client names, or performance figures we can't evidence.
- No lorem ipsum or placeholder text in final art — real copy only.
- No stock-photo people, neon gradients, 3D chrome, lens flares, Comic-Sans energy.
  Flat, editorial, print-like.
- Wordmark and slogan: same typeface, same background, never on a coloured panel.
- One terracotta accent per asset. Never more.

## 9. Caption formula + CTA bank

**Formula:** hook line → 1–2 value lines → CTA → 3–5 relevant hashtags.

**CTA bank (rotate):**
- "See the work — link in bio."
- "WhatsApp us: 0905 069 0837."
- "Tell us what you're trying to solve — link in bio."
- "Save this for your next site review."
- "Start a project — link in bio."

**Hashtag bank (rotate 5–10 per post):**
`#Easywurld` `#SimplifyOptimizeGrow` `#LagosBusiness` `#LagosSME`
`#WebDesignNigeria` `#SEOLagos` `#DigitalMarketingNigeria` `#SmallBusinessTips`
`#LagosEntrepreneur` `#LagosCreatives` `#WebsiteDesign` `#SmallBusinessNigeria`
`#GrowYourBusiness` `#LagosTech` `#ContentThatConverts` `#MarketingClarity`

## 10. Links (real routes; no fabricated report)

- **Lighthouse / PageSpeed live test for the site:**
  `https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwebsite-builder-portfolio.vercel.app`
  This opens a real, live test. Scores depend on the run, device and network, so the
  site and calendar do not publish invented results. Confirm the site is deployed
  before sharing the link.
- **Site:** `https://website-builder-portfolio.vercel.app`
- **WhatsApp:** `https://wa.me/2349050690837`

## 11. Worked example (Day 1, 08:00 carousel, slide 1)

```
Easywurld Instagram carousel slide 1 of 5, aspect ratio 4:5, flat warm-cream
background #FAE7C7, editorial print style, generous whitespace. Headline in a
high-contrast deep-green serif #0A4937 (Fraunces-like) reading exactly "MEET
EASYWURLD". Support line in clean dark sans-serif #14170F reading exactly "Web
design & SEO for small businesses in Lagos, Nigeria". The Easywurld logo mark — a
deep-green #27473A leaf with a circuit of small square nodes — small in the
bottom-right corner. No photographs, no gradients, no drop shadows, no other brand
names or logos. --ar 4:5 --style raw
```
