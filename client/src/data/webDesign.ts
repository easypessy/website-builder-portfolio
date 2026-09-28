import type { Project } from "./types";

export const webDesign: Project[] = [
  {
    slug: "northline-atelier",
    liveUrl: "https://easywurld-studio-8u8s-two.vercel.app/vanta-label/",
    title: "Northline Atelier",
    category: "Web Design",
    industry: "Fashion",
    service: "Web Design",
    projectType: "Editorial storefront",
    status: "Concept Project",
    year: "2026",
    weight: 3,
    summary:
      "A quiet, photography-led storefront for a small clothing label that sells three collections a year.",
    challenge:
      "Independent labels usually inherit a template built for supermarkets: dense grids, badges, countdown timers. Northline's garments are slow, expensive and photographed beautifully, and that template made them look like fast fashion. The brief was to make a shop that could hold a 4000px image without apologising for it.",
    approach:
      "We designed the image pacing before the interface. A collection page alternates full-bleed frames with narrow text columns, so the eye rests between garments. Navigation is a single line of text that never competes. Price appears once, in the same size as body copy, because haggling over prominence is how a luxury page starts to look cheap.",
    built: [
      "Collection and lookbook templates on a 12-column editorial grid",
      "Product page with a sticky size/fit rail and no upsell modules",
      "Type-only navigation with a slow-fade mega panel",
      "Image pipeline spec: AVIF, three breakpoints, art-directed crops",
    ],
    direction:
      "Off-white paper, ink black, one muted clay accent used only on hover. Headings in a high-contrast serif at generous sizes; body in a neutral grotesque at 17px. Almost no borders — separation is done with space, which is the most expensive-looking material available.",
    result:
      "No performance data — this is a concept build, not a live store. What it demonstrates is a workable pattern for image-heavy retail: the product page carries a single action and the imagery is never cropped to fit a card.",
    takeaway:
      "When the photography is the product, the interface's job is to disappear on time.",
    tags: ["Editorial", "E-commerce", "Photography"],
    visual: {
      archetype: "website",
      bg: "#F6F4EF",
      ink: "#14110E",
      accent: "#B4693F",
      muted: "#8A8175",
      head: "'Playfair Display', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
      variant: 0,
      words: ["NORTHLINE", "Collection 04", "Shop", "Lookbook"],
    },
  },
  {
    slug: "morrow-house",
    liveUrl: "https://easywurld-studio-8u8s-two.vercel.app/harvest-hearth/",
    title: "Morrow House",
    category: "Web Design",
    industry: "Restaurant",
    service: "Web Design",
    projectType: "Neighbourhood restaurant site",
    status: "Concept Project",
    year: "2026",
    weight: 2,
    summary:
      "A menu-first site for a thirty-cover restaurant that changes its dishes weekly.",
    challenge:
      "The kitchen answered the same three questions on the phone all night: are you open, what's on, can we book. The old site buried all three under a hero video and an 'our story' essay. Worse, the menu was a PDF that the chef couldn't update without emailing a developer.",
    approach:
      "We inverted the hierarchy. Hours, tonight's menu and the booking link sit in the first screen on mobile, before any photography. The menu became structured content the chef edits directly, with a 'changed today' marker so regulars can see what's new without reading the whole list.",
    built: [
      "Menu system with per-dish availability and a weekly changelog",
      "Above-the-fold hours block that reads live opening state",
      "Booking handoff to the existing reservation provider",
      "Seasonal notice slot for closures and private events",
    ],
    direction:
      "Warm paper stock, deep olive ink, terracotta accent. A humanist serif for dish names at a size you can read across a table, and generous leading throughout — the layout is closer to a printed menu than to a website. Food photography is used sparingly, four images total, because a menu that needs photos of every dish is a menu that isn't written well.",
    result:
      "Concept build. The measurable intent is a reduction in phone enquiries for hours and menu — the practical outcome is that the three most-asked questions are answerable in under five seconds on a phone.",
    takeaway:
      "A restaurant site works when the phone stops ringing for the wrong reasons.",
    tags: ["Hospitality", "Content editing", "Local"],
    visual: {
      archetype: "website",
      bg: "#FBF6EC",
      ink: "#22301F",
      accent: "#C2542B",
      muted: "#7E8672",
      head: "'Fraunces', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
      variant: 1,
      words: ["MORROW HOUSE", "Tonight", "Book a table", "Open until 23:00"],
    },
  },
  {
    slug: "cedar-advisory",
    liveUrl: "https://easywurld-studio-8u8s-two.vercel.app/northline/",
    title: "Cedar & Co. Advisory",
    category: "Web Design",
    industry: "Professional services",
    service: "Web Design",
    projectType: "Advisory practice site",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary:
      "A four-person advisory firm that kept losing pitches to competitors ten times its size.",
    challenge:
      "Their old site copied the language of large consultancies — 'global capabilities', stock photos of glass towers — which invited exactly the comparison they lose. Prospects arrived unable to tell what Cedar actually did, who would do it, or what it cost.",
    approach:
      "We stopped competing on scale and competed on specificity. Named people with real biographies. Engagement types with fee bands. Stated timelines. A page that says plainly what they decline to take on. Small firms win when the buyer can picture the first meeting.",
    built: [
      "Service architecture split by engagement type rather than industry",
      "Team pages with named leads and direct contact",
      "An engagement explainer with indicative fee bands and durations",
      "A 'work we don't take' section",
    ],
    direction:
      "Structured and typographic. Near-black on warm white, a single slate blue accent, 1px rules doing the organising. No photography of people in meetings. The grid is deliberately rigid — for an advisory firm, visible order is the aesthetic argument.",
    result:
      "Concept build. The practical outcome is a site where a prospect can determine fit, cost range and named contact without sending an email first.",
    takeaway:
      "A small firm's advantage is specificity; every page should spend it rather than hide it.",
    tags: ["B2B", "Typography", "Trust"],
    visual: {
      archetype: "website",
      bg: "#FFFFFF",
      ink: "#101418",
      accent: "#2C4A6E",
      muted: "#6B7480",
      head: "'Inter Tight', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      variant: 2,
      words: ["CEDAR & CO.", "Advisory", "Fees", "Who we are"],
    },
  },
  {
    slug: "fieldstone-build",
    title: "Fieldstone Build",
    category: "Web Design",
    industry: "Construction",
    service: "Web Design",
    projectType: "Contractor portfolio",
    status: "Concept Project",
    year: "2026",
    weight: 2,
    summary:
      "A builder whose best evidence — 600 site photographs — was sitting unused on a phone.",
    challenge:
      "Construction sites are judged on proof, and this builder had plenty: framing, pours, finishes, snagging. But the website showed four finished exteriors and a contact form. Prospective clients couldn't assess quality, and the firm kept being asked to price against contractors who cut corners.",
    approach:
      "We built the site around project chronology instead of a gallery. Each job is a sequence — survey, groundwork, structure, finish — with photographs and a short note per stage. This makes competence visible and, usefully, makes a low quote look suspicious by comparison.",
    built: [
      "Project timeline template with staged photography",
      "Trade and certification block with verifiable registration numbers",
      "Service-area map with realistic travel radius",
      "Enquiry form that asks for project stage and site address",
    ],
    direction:
      "Bold and structural. Concrete grey, high-contrast black, a safety-yellow accent used only for wayfinding. Condensed grotesque headings, wide tracking on labels, hard 90-degree corners everywhere. Nothing soft — the design borrows from site signage rather than from brochures.",
    result:
      "Concept build. The intended effect is qualification: enquiries arrive with stage and location already stated, so the builder can price or decline faster.",
    takeaway:
      "In trades, showing the middle of the job is more persuasive than showing the end of it.",
    tags: ["Trades", "Proof", "Local"],
    visual: {
      archetype: "website",
      bg: "#EDEDEA",
      ink: "#131313",
      accent: "#E0A800",
      muted: "#6E6E68",
      head: "'Archivo', Impact, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      variant: 3,
      words: ["FIELDSTONE", "Projects", "Stage 03", "Get a price"],
    },
  },
  {
    slug: "luma-skin-studio",
    title: "Luma Skin Studio",
    category: "Web Design",
    industry: "Beauty",
    service: "Web Design",
    projectType: "Treatment booking site",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary:
      "A results-focused skin clinic whose booking journey asked for commitment far too early.",
    challenge:
      "Skin treatment is a considered, slightly anxious purchase. The previous site opened with a booking widget, which meant first-time visitors had to choose a treatment they didn't understand before they could learn anything. Repeat clients were fine; new clients bounced.",
    approach:
      "We split the audience. Returning clients get a booking link in the header — one tap, done. New clients get a concern-led route: choose what's bothering you, read what the treatment actually involves, see the honest range of outcomes, then book. Two journeys, one site.",
    built: [
      "Concern-to-treatment mapping with plain-language explanations",
      "Practitioner credentials and treatment contraindications",
      "Split booking paths for new and returning clients",
      "Aftercare content accessible without an account",
    ],
    direction:
      "Calm and clinical without being cold. Soft sand background, deep plum ink, muted rose accent. A geometric sans throughout — no serif flourishes, because the credibility here is medical, not editorial. Generous spacing and short line lengths to keep a nervous reader moving.",
    result:
      "Concept build. No booking data exists. The design intent is to remove the need to understand the menu before understanding the problem.",
    takeaway:
      "When a purchase carries anxiety, reassurance has to come before the call to action.",
    tags: ["Health", "Booking", "UX writing"],
    visual: {
      archetype: "website",
      bg: "#F7F1EC",
      ink: "#3A2437",
      accent: "#C98B8B",
      muted: "#8D7A85",
      head: "'Outfit', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      variant: 0,
      words: ["LUMA", "Concerns", "Treatments", "Book"],
    },
  },
  {
    slug: "open-door-learning",
    title: "Open Door Learning",
    category: "Web Design",
    industry: "Education",
    service: "Web Design",
    projectType: "Enrolment site",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary:
      "A learning centre where parents and adult learners needed completely different answers from the same site.",
    challenge:
      "One navigation was serving two audiences with opposite questions. Parents want safeguarding, staff ratios, term dates and pickup logistics. Adult learners want cost, schedule flexibility and whether the certificate means anything. Merging them produced a site that half-answered both.",
    approach:
      "We forked the information architecture at the first click and refused to merge it again. Each path has its own language, its own proof and its own enquiry form. Shared pages — safeguarding policy, the building, the staff list — appear in both trees with different framing.",
    built: [
      "Dual-path IA with separate enrolment funnels",
      "Term calendar with downloadable dates",
      "Course pages stating hours, cost and accreditation plainly",
      "Safeguarding and policy hub",
    ],
    direction:
      "Friendly but orderly. Chalk white, ink navy, a bright ochre accent for wayfinding. Rounded sans headings that read as approachable rather than childish; strong numbering and clear section rules so a parent scanning on a phone at 10pm finds the date they need.",
    result:
      "Concept build. The practical outcome is that neither audience has to read content written for the other before reaching an enquiry form.",
    takeaway:
      "Two audiences with different questions need two paths, not one compromise.",
    tags: ["Education", "IA", "Dual audience"],
    visual: {
      archetype: "website",
      bg: "#FCFBF7",
      ink: "#1B2A44",
      accent: "#D98E14",
      muted: "#71798A",
      head: "'Outfit', system-ui, sans-serif",
      body: "'Inter', system-ui, sans-serif",
      variant: 1,
      words: ["OPEN DOOR", "For parents", "For adults", "Term dates"],
    },
  },
  {
    slug: "harbour-and-home",
    liveUrl: "https://easywurld-studio-8u8s-two.vercel.app/lotus-ridge/",
    title: "Harbour & Home",
    category: "Web Design",
    industry: "Real estate",
    service: "Web Design",
    projectType: "Property discovery site",
    status: "Concept Project",
    year: "2026",
    weight: 2,
    summary:
      "Property search that starts from how someone wants to live rather than from a bedroom count.",
    challenge:
      "Every portal filters on the same four fields, so every agency site feels identical and competes only on inventory. Buyers, meanwhile, describe what they want in completely different terms: near a good school, quiet street, room for a workshop, walkable to the market.",
    approach:
      "We kept the conventional filters — they're necessary — but led with lifestyle entry points that map onto them behind the scenes. 'Walkable' resolves to a location set; 'space to work' resolves to floor area plus an outbuilding flag. The buyer speaks their language, the database hears its own.",
    built: [
      "Lifestyle entry points mapped to structured filters",
      "Listing template with neighbourhood context and travel times",
      "Saved-search and viewing-request flow",
      "Honest photography policy: no wide-angle distortion",
    ],
    direction:
      "Editorial rather than transactional. Cool stone background, deep teal ink, brass accent. Large photography with a fixed aspect ratio across all listings so properties are compared fairly. A serif for place names and a grotesque for data — the split signals which parts are story and which are fact.",
    result:
      "Concept build. No enquiry data. The design demonstrates a search pattern that differentiates an agency without requiring more inventory.",
    takeaway:
      "If everyone filters on the same four fields, the only way to stand out is to change the question.",
    tags: ["Property", "Search UX", "Editorial"],
    visual: {
      archetype: "website",
      bg: "#EFEFEA",
      ink: "#15343A",
      accent: "#A57A2E",
      muted: "#6F8085",
      head: "'Fraunces', Georgia, serif",
      body: "'Inter', system-ui, sans-serif",
      variant: 2,
      words: ["HARBOUR & HOME", "Walkable", "Quiet street", "Room to work"],
    },
  },
];
