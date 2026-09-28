import type { Project } from "./types";

export const reports: Project[] = [
  {
    slug: "field-notes-report",
    title: "Field Notes Report",
    category: "Reports & Presentations",
    industry: "Research",
    service: "Business Reports & Presentations",
    projectType: "Report system",
    status: "Sample Project",
    year: "2026",
    weight: 2,
    summary: "Sixty-page reports that nobody read past page three.",
    challenge:
      "Research was commissioned, delivered and shelved. The findings were sound; the format buried them. Decisions were being made in meetings by people who had read the first two pages.",
    approach:
      "Restructured around decisions rather than methodology: what to do, why, and the evidence — in that order. Method moved to an appendix, where the people who need it will still find it.",
    built: [
      "Decision summary as page one, one page maximum",
      "Chart standards: one idea per chart, labelled directly",
      "Section template with a standing 'so what' line",
      "One-page brief version generated from the same content",
    ],
    direction:
      "Borrowed from print journalism rather than corporate decks: a strong text column, generous margins, charts that sit inline. Ink on off-white, one accent for emphasis only.",
    result:
      "Sample system. No readership data. The structural change is that the recommendation appears before the evidence rather than after it.",
    takeaway: "A report nobody finishes is a report nobody commissioned.",
    tags: ["Reports", "Data", "Editorial"],
    visual: {
      archetype: "report", bg: "#FBFAF7", ink: "#17181A", accent: "#9A3B2E", muted: "#72757A",
      head: "'Playfair Display', Georgia, serif", body: "'Inter', system-ui, sans-serif", variant: 0,
      words: ["Field Notes", "Decision summary", "Evidence", "Appendix"],
    },
  },
  {
    slug: "civic-proposal-template",
    title: "Civic Proposal",
    category: "Reports & Presentations",
    industry: "Professional services",
    service: "Business Reports & Presentations",
    projectType: "Proposal template",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "A proposal template that gives a small team a consistent narrative.",
    challenge:
      "Every proposal was written from scratch by whoever had time, so quality varied with authorship and the pricing section was formatted differently each time. Clients noticed.",
    approach:
      "Built a template with a fixed argument — understanding, approach, team, timeline, price, terms — and wrote the connective tissue so only the specifics need changing.",
    built: [
      "Six-section proposal template with locked structure",
      "Pricing table with consistent inclusions and exclusions",
      "Standing terms page cleared for reuse",
      "Guidance notes for the author inside the template",
    ],
    direction:
      "Restrained and institutional. Navy and warm white, hairline rules, a single accent for the price line. Designed to print correctly, because proposals still get printed.",
    result:
      "Sample template. The practical outcome is consistency across authors rather than a higher win rate, which would require data to claim.",
    takeaway: "Consistency is the cheapest form of credibility.",
    tags: ["Proposals", "Templates", "B2B"],
    visual: {
      archetype: "report", bg: "#FFFFFF", ink: "#132033", accent: "#2C4A6E", muted: "#6B7480",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 1,
      words: ["Proposal", "Understanding", "Timeline", "Price"],
    },
  },
  {
    slug: "open-door-deck",
    title: "Open Door Enrolment Deck",
    category: "Reports & Presentations",
    industry: "Education",
    service: "Business Reports & Presentations",
    projectType: "Presentation design",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "A parents' evening deck that works in a bright hall.",
    challenge:
      "The existing slides were dense paragraphs at 14pt, projected in a room with the lights on. Parents at the back read nothing and the presenter ended up reading the slides aloud.",
    approach:
      "One idea per slide, minimum 28pt, high contrast. The detail moved to a printed handout, which is where detail belongs when the audience is in a room rather than at a desk.",
    built: [
      "24-slide deck with a one-idea-per-slide rule",
      "Accompanying two-page handout carrying the detail",
      "Presenter notes with timing per section",
      "High-contrast variant for poorly lit rooms",
    ],
    direction:
      "Ivory and navy with ochre accents. Very large type, wide margins, no logo on every slide. Charts redrawn as single comparisons rather than full data tables.",
    result:
      "Sample deck. Designed against the constraint of the actual room rather than the author's monitor.",
    takeaway: "Design slides for the back row or don't use slides.",
    tags: ["Presentation", "Education", "Legibility"],
    visual: {
      archetype: "report", bg: "#FCFAF4", ink: "#1C2A46", accent: "#D18A18", muted: "#757E90",
      head: "'Outfit', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 2,
      words: ["One idea", "28pt minimum", "Handout has detail", "Slide 7 / 24"],
    },
  },
  {
    slug: "aster-market-brief",
    title: "Aster Market Brief",
    category: "Reports & Presentations",
    industry: "Real estate",
    service: "Business Reports & Presentations",
    projectType: "Briefing document",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "A visual briefing document for a new property release.",
    challenge:
      "Agents were being briefed by email thread. By launch day, three of them were quoting different availability and two had the old price list.",
    approach:
      "A single briefing document with a version number and a date on every page, structured so an agent can find any fact in under ten seconds during a call.",
    built: [
      "Versioned brief with change log on page two",
      "Unit availability table designed for phone reading",
      "Objection-and-answer sheet for known concerns",
      "Printable one-page summary card",
    ],
    direction:
      "Stone and bronze, architectural photography, a strict two-column grid. Data set in a mono face so figures are unmistakable.",
    result:
      "Sample document. The useful mechanic is versioning: one source, dated, with changes listed.",
    takeaway: "If three people quote three prices, the problem is the document, not the people.",
    tags: ["Property", "Internal comms", "Versioning"],
    visual: {
      archetype: "report", bg: "#EDEBE6", ink: "#1A1B1D", accent: "#8C6A3F", muted: "#767881",
      head: "'Archivo', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 3,
      words: ["Brief v2.1", "Availability", "Objections", "28 Sep 2026"],
    },
  },
  {
    slug: "good-harvest-plan",
    title: "Good Harvest Season Plan",
    category: "Reports & Presentations",
    industry: "Food retail",
    service: "Business Reports & Presentations",
    projectType: "Operational planning document",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "A seasonal plan built to be used in a stockroom, not filed.",
    challenge:
      "Previous plans were slide decks that lived on a laptop. The people who needed them were on a shop floor with wet hands and no screen.",
    approach:
      "Designed for the wall. A3, printable in greyscale, one page per month, with the ordering deadlines as the most prominent element because those are what get missed.",
    built: [
      "Twelve monthly sheets, A3, greyscale-safe",
      "Ordering deadlines as the dominant element",
      "Seasonality chart by produce type",
      "Blank column for handwritten notes",
    ],
    direction:
      "Utilitarian: heavy rules, large numerals, high contrast, no photography. Legible at two metres under fluorescent light.",
    result:
      "Sample document. The design constraint was physical use, which changed almost every decision from what a digital-first plan would have been.",
    takeaway: "Ask where the document will physically be when it is read.",
    tags: ["Operations", "Print", "Planning"],
    visual: {
      archetype: "report", bg: "#F5F7F0", ink: "#1E2D1A", accent: "#6B8F3A", muted: "#77836D",
      head: "'Archivo', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 0,
      words: ["March", "Order by 12th", "In season", "Notes"],
    },
  },
  {
    slug: "northline-lookbook",
    title: "Northline Lookbook",
    category: "Reports & Presentations",
    industry: "Fashion",
    service: "Business Reports & Presentations",
    projectType: "Wholesale lookbook",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "A compact lookbook that also functions as an order form.",
    challenge:
      "Buyers were given a beautiful lookbook and a separate spreadsheet, then asked to cross-reference the two. Orders arrived with wrong style codes.",
    approach:
      "Merged them. Every image carries its style code, wholesale price and minimum quantity on the same spread, so the buyer never has to look away from the garment.",
    built: [
      "24-page lookbook with integrated order data",
      "Style code system consistent with the warehouse",
      "Size grid per style on the facing page",
      "Print and screen versions from one layout",
    ],
    direction:
      "Generous image pacing with a small, precise data block in a fixed position on every spread. Paper white, ink black, no accent — the garments provide the colour.",
    result:
      "Sample document. The change is structural: one artefact instead of two, which removes the transcription step where errors occurred.",
    takeaway: "Two documents that must be read together should be one document.",
    tags: ["Fashion", "Wholesale", "Print"],
    visual: {
      archetype: "report", bg: "#F7F5F1", ink: "#141210", accent: "#9A8468", muted: "#847C73",
      head: "'Playfair Display', Georgia, serif", body: "'Inter', system-ui, sans-serif", variant: 1,
      words: ["NL-204", "₦42,000 wholesale", "MOQ 6", "Spread 08"],
    },
  },
  {
    slug: "buildwise-project-report",
    title: "Buildwise Project Report",
    category: "Reports & Presentations",
    industry: "Construction",
    service: "Business Reports & Presentations",
    projectType: "Client progress report",
    status: "Sample Project",
    year: "2026",
    weight: 1,
    summary: "Progress information formatted for clients, not for the site team.",
    challenge:
      "Clients were receiving the internal progress report: trade abbreviations, programme references, variation codes. It generated anxious phone calls every fortnight asking what any of it meant.",
    approach:
      "A separate client-facing version derived from the same data — what happened, what is next, what needs a decision from you, and whether cost or date has moved. Four questions, answered every time.",
    built: [
      "Fortnightly client report template, two pages maximum",
      "Decision-required section placed first",
      "Plain-language progress photography with captions",
      "Cost and programme movement stated explicitly, including zero",
    ],
    direction:
      "Clear and unfussy. Grey, black, one yellow accent for the decisions block. Photographs are captioned in full sentences, which is unusual and immediately more useful.",
    result:
      "Sample template. The intent is fewer clarifying calls, though no call-volume data exists to claim it.",
    takeaway: "An internal document sent to a client is not a client report.",
    tags: ["Construction", "Client comms", "Templates"],
    visual: {
      archetype: "report", bg: "#EEEEEB", ink: "#151515", accent: "#E0A800", muted: "#6F6F6A",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 2,
      words: ["Decisions needed", "This fortnight", "Next fortnight", "Cost: no change"],
    },
  },
];
