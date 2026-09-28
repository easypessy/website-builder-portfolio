import type { Project } from "./types";

export const copywriting: Project[] = [
  {
    slug: "clear-homepage-rewrite",
    liveUrl: "https://easywurld-studio-8u8s-two.vercel.app/copy-vault/",
    title: "The Clear Homepage",
    category: "Copywriting",
    industry: "Professional services",
    service: "Copywriting & Business Content",
    projectType: "Homepage rewrite",
    status: "Sample Project",
    year: "2026",
    weight: 2,
    summary: "A homepage that opened with twenty years of history and never named a problem.",
    challenge:
      "The first two hundred words were about the firm: founding date, office locations, a values list. A visitor with an urgent problem had to read all of it before discovering whether the firm could help.",
    approach:
      "Inverted the structure. The visitor's question first, the firm's credentials as supporting evidence afterwards. Credentials are more persuasive once the reader believes you understand them.",
    built: [
      "Full homepage rewrite, roughly 40% shorter",
      "Section headings rewritten as questions the visitor is asking",
      "Credential block moved below the fold and cut by half",
      "Call-to-action language tested against three alternatives",
    ],
    direction:
      "Before and after set side by side in the same typeface, so the reader judges the words rather than the design.",
    result:
      "Sample rewrite produced for demonstration; no live A/B data. The measurable change is length — 412 words down to 248 — and the position of the first client-facing sentence, moved from paragraph five to paragraph one.",
    takeaway: "Nobody reads your About section before they believe you can help them.",
    tags: ["Homepage", "Structure", "B2B"],
    visual: {
      archetype: "copy", bg: "#FFFFFF", ink: "#111214", accent: "#B4451F", muted: "#6F7378",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 0,
      words: ["BEFORE", "AFTER", "412 words", "248 words"],
    },
  },
  {
    slug: "morrow-menu-voice",
    title: "Morrow Menu Voice",
    category: "Copywriting",
    industry: "Restaurant",
    service: "Copywriting & Business Content",
    projectType: "Menu and voice guide",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "Between clinical ingredient lists and overwrought poetry.",
    challenge:
      "Menu descriptions swung between the two failure modes: bare component lists that sold nothing, and lyrical paragraphs that made ordering embarrassing. Staff also had no guidance for writing specials.",
    approach:
      "Found a middle register — specific, warm, honest about what arrives — and wrote it down as rules simple enough for a chef to apply at 4pm on a Tuesday.",
    built: [
      "Full menu rewrite, 34 dishes",
      "Voice guide with three rules and worked examples",
      "Specials template for kitchen staff",
      "Allergen phrasing that is clear without being alarming",
    ],
    direction:
      "Set as an actual menu page, in menu typography, because copy should be judged in the format it will live in.",
    result:
      "Sample work. No sales data. The practical outcome is that specials can be written by the kitchen without a copywriter.",
    takeaway: "Describe the dish, not the adjective.",
    tags: ["Hospitality", "Voice", "Templates"],
    visual: {
      archetype: "copy", bg: "#FBF5E9", ink: "#2B2015", accent: "#A8481F", muted: "#8A7B66",
      head: "'Fraunces', Georgia, serif", body: "'Inter', system-ui, sans-serif", variant: 1,
      words: ["Grilled mackerel", "burnt lemon, fennel", "Specials rule 1", "Say what arrives"],
    },
  },
  {
    slug: "northline-product-edit",
    title: "Northline Product Edit",
    category: "Copywriting",
    industry: "Fashion",
    service: "Copywriting & Business Content",
    projectType: "Product descriptions",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "Product copy with detail, restraint and an actual point of view.",
    challenge:
      "Descriptions were manufacturer specifications — fabric weight, care instructions, country of origin — with a sentence of adjectives on top. Returns were driven by fit surprises the copy could have prevented.",
    approach:
      "Every description answers three questions: what it's made of, how it sits on the body, and when you would actually wear it. The third is where returns are prevented and where most brands say nothing.",
    built: [
      "18 product descriptions in a consistent three-part structure",
      "Fit notes written from real measurements on real bodies",
      "Fabric behaviour described in use, not in specification",
      "House style sheet for future products",
    ],
    direction:
      "Small type, generous space, one product per screen. The restraint is the brand argument.",
    result:
      "Sample work. No returns data available. The structural intent is to answer the fit question before purchase rather than after.",
    takeaway: "Product copy that prevents a return is worth more than copy that wins a sale.",
    tags: ["Fashion", "E-commerce", "Returns"],
    visual: {
      archetype: "copy", bg: "#F6F4EF", ink: "#15120F", accent: "#8E6A4A", muted: "#857C72",
      head: "'Playfair Display', Georgia, serif", body: "'Inter', system-ui, sans-serif", variant: 2,
      words: ["Made of", "Sits like", "Wear it when", "Northline"],
    },
  },
  {
    slug: "carepath-service-pages",
    title: "Carepath Service Pages",
    category: "Copywriting",
    industry: "Healthcare",
    service: "Copywriting & Business Content",
    projectType: "Plain-language service copy",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "Clinical accuracy at a reading age of twelve.",
    challenge:
      "Service pages were written by clinicians for clinicians. Patients arrived anxious and left more anxious, having understood roughly a third of it, and then phoned to ask what it meant.",
    approach:
      "Rewrote for comprehension without losing accuracy — a harder constraint than it sounds, because removing hedging language can change clinical meaning. Every page was checked back against the original for accuracy.",
    built: [
      "Nine service pages rewritten and accuracy-checked",
      "Terminology pairs: the clinical term and the everyday one, together",
      "What happens, step by step, with realistic timings",
      "Explicit statement of what the service does not cover",
    ],
    direction:
      "Single column, 60-character measure, generous paragraph spacing. Nothing decorative — an anxious reader needs a clear path, not a designed experience.",
    result:
      "Sample work. No comprehension testing has been run. The stated goal is that a patient can describe the procedure to a family member after one read.",
    takeaway: "Simplifying clinical copy is an accuracy problem before it is a style one.",
    tags: ["Healthcare", "Plain language", "Accessibility"],
    visual: {
      archetype: "copy", bg: "#F7F9FA", ink: "#17232B", accent: "#1F7A8C", muted: "#6E7C84",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 3,
      words: ["What happens", "Step 1 of 4", "In plain words", "What it doesn't cover"],
    },
  },
  {
    slug: "brightline-email-series",
    title: "Brightline Email Series",
    category: "Copywriting",
    industry: "Education",
    service: "Copywriting & Business Content",
    projectType: "Welcome sequence",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "Five emails for people who downloaded a syllabus and went quiet.",
    challenge:
      "The existing sequence was five reminders of the same offer with escalating urgency, which reads as desperation and teaches people to unsubscribe.",
    approach:
      "Each email does one job and carries genuinely new information: a real lesson excerpt, the honest time commitment, a graduate's unedited account, the cost including what is not included, then a single clear close.",
    built: [
      "Five emails, each with a distinct job and new content",
      "Subject lines written to be accurate rather than clever",
      "One honest objection addressed per email",
      "A close that accepts 'no' as a complete answer",
    ],
    direction:
      "Plain text with minimal formatting. Marketing-designed emails in education signal a sales funnel; plain text signals a person.",
    result:
      "Sample sequence. No open or conversion data. The design principle is that every email must be worth reading even if the reader never enrols.",
    takeaway: "If an email has nothing new to say, not sending it is the better campaign.",
    tags: ["Email", "Sequences", "Education"],
    visual: {
      archetype: "copy", bg: "#FBF8F2", ink: "#1E1B17", accent: "#7B2D26", muted: "#7B746B",
      head: "'Playfair Display', Georgia, serif", body: "'Inter', system-ui, sans-serif", variant: 0,
      words: ["Email 1 of 5", "A real lesson", "What it costs", "No is fine"],
    },
  },
  {
    slug: "buildwise-about-story",
    title: "Buildwise About",
    category: "Copywriting",
    industry: "Construction",
    service: "Copywriting & Business Content",
    projectType: "Founder story",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "A founder story shaped into a reason to choose them.",
    challenge:
      "The About page was a chronology: founded, expanded, incorporated. True, and of no use to a homeowner deciding who to trust with a structural job.",
    approach:
      "Kept the facts and changed what they were evidence for. Twenty years became specific competence; a small team became direct access to the person doing the work; one honest account of a job that went wrong became the most credible paragraph on the site.",
    built: [
      "About page rewrite anchored on client-relevant evidence",
      "One candid account of a project that overran, and why",
      "Named team with actual trade qualifications",
      "Guarantee written in plain terms",
    ],
    direction:
      "Structural and plain. Concrete grey, black, a single yellow rule. One photograph of the actual team on an actual site.",
    result:
      "Sample work. The notable editorial decision is including a failure, which most trade sites omit and which buyers consistently say they look for.",
    takeaway: "Admitting one thing that went wrong makes everything else believable.",
    tags: ["Trades", "Trust", "Story"],
    visual: {
      archetype: "copy", bg: "#EDEDEA", ink: "#141414", accent: "#E0A800", muted: "#6E6E69",
      head: "'Archivo', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 1,
      words: ["20 years", "The job that overran", "Who does the work", "Our guarantee"],
    },
  },
  {
    slug: "quiet-hours-faq",
    title: "Quiet Hours FAQ",
    category: "Copywriting",
    industry: "Wellness",
    service: "Copywriting & Business Content",
    projectType: "Objection-handling FAQ",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "Answers to the questions people are too uncomfortable to ask.",
    challenge:
      "The existing FAQ answered administrative questions — parking, cancellation, payment methods — while the real hesitations went unaddressed because nobody had asked them out loud.",
    approach:
      "Collected the unspoken questions from practitioners, then answered them without overpromising. 'Will this work for me' is answered honestly, including the circumstances in which it might not.",
    built: [
      "Twelve questions drawn from practitioner experience, not analytics",
      "Answers that decline to promise outcomes",
      "Explicit note on when to seek a different service",
      "Confidentiality explained including its legal limits",
    ],
    direction:
      "Quiet typography, wide leading, no accordions — hiding an anxious reader's question behind a click is a small cruelty.",
    result:
      "Sample work. The editorial position is that honest limits build more confidence than confident claims.",
    takeaway: "The most useful FAQ answers the question nobody typed into the search box.",
    tags: ["Wellness", "FAQ", "Honesty"],
    visual: {
      archetype: "copy", bg: "#F1F4EF", ink: "#2C3833", accent: "#7E9C88", muted: "#7B8880",
      head: "'Outfit', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 2,
      words: ["Will this work for me?", "Sometimes it doesn't", "What stays private", "When to go elsewhere"],
    },
  },
];
