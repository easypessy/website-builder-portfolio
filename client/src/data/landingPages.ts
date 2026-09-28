import type { Project } from "./types";

export const landingPages: Project[] = [
  {
    slug: "sunday-table-preorder",
    shot: "/shots/sunday-table-preorder.jpg",
    liveUrl: "/demo/sunday-table-preorder/index.html",
    title: "The Sunday Table",
    category: "Landing Pages",
    industry: "Food & beverage",
    service: "Landing Page Design",
    projectType: "Pre-order launch page",
    status: "Concept Project",
    year: "2026",
    weight: 2,
    summary: "One seasonal box, ten days to launch, one page to sell it.",
    challenge:
      "A small kitchen wanted to test demand for a seasonal produce box before committing to stock. They had no page, no list and no time. Anything that didn't serve a pre-order was a distraction they couldn't afford.",
    approach:
      "Single offer, single action, nothing else. The page opens with the box and the price, handles the three objections that kill food pre-orders (delivery area, what's actually inside, what if I'm not home), then asks once. No navigation at all — a nav bar on a launch page is an exit.",
    built: [
      "Hero with the product, price and cut-off date visible without scrolling",
      "Contents breakdown with substitution policy stated plainly",
      "Three-question objection block, then a single capture field",
      "Cut-off countdown tied to a real dispatch date, not a fake timer",
    ],
    direction:
      "Appetite-led. Cream paper, ink brown, a ripe tomato accent. One wide photograph, a narrow measure of copy, and a single button repeated twice. Deliberately plain typography so the food carries the page.",
    result:
      "Concept build with no live sales. What it demonstrates is a launch page that can be produced in a day and tests demand without inventory risk.",
    takeaway: "A landing page with two goals has none.",
    tags: ["Launch", "Single offer", "Food"],
    visual: {
      archetype: "landing", bg: "#FCF6EA", ink: "#3A2A18", accent: "#C0392B", muted: "#8A7A63",
      head: "'Fraunces', Georgia, serif", body: "'Inter', system-ui, sans-serif", variant: 0,
      words: ["The Sunday Table", "Seasonal box", "₦18,500", "Pre-order"],
    },
  },
  {
    slug: "quiet-hours-consult",
    shot: "/shots/quiet-hours-consult.jpg",
    liveUrl: "/demo/quiet-hours-consult/index.html",
    title: "Quiet Hours",
    category: "Landing Pages",
    industry: "Wellness",
    service: "Landing Page Design",
    projectType: "Consultation booking page",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary: "A therapy consultation page that answers fear before asking for a booking.",
    challenge:
      "Visitors were reaching the booking form still carrying unanswered worries — what happens in the first session, is it confidential, what if I can't afford to continue — and abandoning at the last step.",
    approach:
      "We interviewed the hesitations and ordered them by when they occur, then answered each one in sequence before the form appears. The call to action is deliberately small: a fifteen-minute call, not a course of treatment.",
    built: [
      "Objection sequence ordered by real hesitation timing",
      "What happens in session one, written step by step",
      "Fee transparency including the sliding scale",
      "Low-commitment first step instead of a full booking",
    ],
    direction:
      "Unhurried. Pale sage, slate ink, no accent colour above 40% saturation. Long line spacing, short paragraphs, generous top margin. No urgency mechanics anywhere — countdown timers on a therapy page are actively harmful.",
    result:
      "Concept build. The practical outcome is a page where the first ask costs the visitor almost nothing.",
    takeaway: "In wellness, reassurance converts better than pressure.",
    tags: ["Wellness", "Objection handling", "Low friction"],
    visual: {
      archetype: "landing", bg: "#F1F4EF", ink: "#2E3A34", accent: "#7E9C88", muted: "#7C8A82",
      head: "'Outfit', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 1,
      words: ["Quiet Hours", "Before you book", "15-minute call", "No obligation"],
    },
  },
  {
    slug: "atlas-crm-saas",
    shot: "/shots/atlas-crm-saas.jpg",
    liveUrl: "/demo/atlas-crm-saas/index.html",
    title: "Atlas CRM",
    category: "Landing Pages",
    industry: "SaaS",
    service: "Landing Page Design",
    projectType: "Product page",
    status: "Concept Project",
    year: "2026",
    weight: 2,
    summary: "A product story for a small team that hates bloated software.",
    challenge:
      "Competing against CRMs with two hundred features by listing your forty is a losing argument. The product's real advantage was that a new salesperson could use it within an hour, and no page had ever said that.",
    approach:
      "We led with the constraint as the feature: this does less, on purpose. The page shows the actual interface early — a real screen, not an abstract illustration — then a setup timeline, then pricing without a 'contact sales' tier.",
    built: [
      "Interface-first hero showing a real screen state",
      "Comparison framed on setup time rather than feature count",
      "Transparent three-tier pricing, no hidden enterprise tier",
      "Migration path from the two most common competitors",
    ],
    direction:
      "Interface-led and cool. Near-white, graphite ink, electric indigo accent used only on interactive elements. Tight grotesque type, 1px borders, mono for data labels. Product screenshots are the artwork.",
    result:
      "Concept build. Demonstrates positioning a smaller product without pretending it is a larger one.",
    takeaway: "If you can't win on feature count, change the axis of comparison.",
    tags: ["SaaS", "Pricing", "Product UI"],
    visual: {
      archetype: "landing", bg: "#FAFAFB", ink: "#16181D", accent: "#4636E0", muted: "#6F7480",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 2,
      words: ["Atlas CRM", "Set up in an hour", "See the screen", "From ₦12k/mo"],
    },
  },
  {
    slug: "brightline-course",
    shot: "/shots/brightline-course.jpg",
    liveUrl: "/demo/brightline-course/index.html",
    title: "Brightline Course Launch",
    category: "Landing Pages",
    industry: "Education",
    service: "Landing Page Design",
    projectType: "Course enrolment page",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary: "Turning a syllabus into a decision.",
    challenge:
      "The existing page was a module list. A module list tells a prospective student what they will sit through, not what they will be able to do afterwards, and certainly not whether it is worth the fee.",
    approach:
      "We rewrote every module as a capability — 'you will be able to…' — and put the outcome before the curriculum. Time commitment is stated in hours per week, honestly, including the weeks that are heavier.",
    built: [
      "Outcome-led module rewrite",
      "Honest weekly time commitment table",
      "Instructor credibility block with real teaching history",
      "Refund and deferral terms stated on the page, not in a PDF",
    ],
    direction:
      "Academic but not stuffy. Warm ivory, deep ink, a single oxblood accent. A transitional serif for headings and a clean sans for the tables — the mix reads as institution rather than infomercial.",
    result:
      "Concept build, no enrolment figures. The design intent is to let a candidate self-select out early, which protects completion rates.",
    takeaway: "Sell the capability, not the curriculum.",
    tags: ["Education", "Copy structure", "Enrolment"],
    visual: {
      archetype: "landing", bg: "#FBF8F2", ink: "#1E1B17", accent: "#7B2D26", muted: "#7A736A",
      head: "'Playfair Display', Georgia, serif", body: "'Inter', system-ui, sans-serif", variant: 3,
      words: ["Brightline", "You will be able to…", "6 hrs / week", "Enrol"],
    },
  },
  {
    slug: "homebase-workshop-event",
    shot: "/shots/homebase-workshop-event.jpg",
    liveUrl: "/demo/homebase-workshop-event/index.html",
    title: "Homebase Workshop",
    category: "Landing Pages",
    industry: "Local business",
    service: "Landing Page Design",
    projectType: "Event registration page",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary: "An event page designed for a parent registering one-handed at 11pm.",
    challenge:
      "Registration was a six-field form on a page that buried the date, the address and whether children could come. The audience was busy parents on phones — the least forgiving context there is.",
    approach:
      "Everything a parent needs to decide sits in the first screen: date, time, place, cost, childcare, parking. Registration is three fields. The map is a static image with a directions link, not an embedded widget that costs 400KB.",
    built: [
      "Decision block: date, place, cost, childcare, parking",
      "Three-field registration with no account creation",
      "Static map image with a native directions handoff",
      "Calendar file download on confirmation",
    ],
    direction:
      "Practical and bright. Chalk background, ink charcoal, a clear signal blue for actions. Large tap targets, 18px body minimum, high-contrast labels. Nothing decorative — this page is a utility.",
    result:
      "Concept build. The practical outcome is a registration that can be completed in under thirty seconds on a phone.",
    takeaway: "Design for the worst context your audience will use, not the best.",
    tags: ["Events", "Mobile-first", "Local"],
    visual: {
      archetype: "landing", bg: "#FFFFFF", ink: "#1A1D21", accent: "#1E64C8", muted: "#6B7178",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 0,
      words: ["Homebase Workshop", "Sat 14 Mar · 10am", "Children welcome", "Register"],
    },
  },
  {
    slug: "aster-property-single",
    shot: "/shots/aster-property-single.jpg",
    liveUrl: "/demo/aster-property-single/index.html",
    title: "Aster Property",
    category: "Landing Pages",
    industry: "Real estate",
    service: "Landing Page Design",
    projectType: "Single-property page",
    status: "Concept Project",
    year: "2026",
    weight: 2,
    summary: "One building, one story, one viewing request.",
    challenge:
      "A design-led development was being marketed on a portal alongside ordinary stock, where its architecture read as merely expensive. It needed its own page that could justify the premium.",
    approach:
      "We treated it as a small publication rather than a listing: the architect's reasoning, the materials, the light at different hours, the street. Specifications come last, because by then the reader is looking for confirmation rather than comparison.",
    built: [
      "Narrative scroll with art-directed photography per section",
      "Materials and finishes detail with named suppliers",
      "Floor plans with human-scale annotations",
      "Single viewing request form, no brochure gate",
    ],
    direction:
      "Architectural restraint. Warm concrete, near-black ink, a thin bronze rule as the only ornament. Very large type for a very small amount of copy. Asymmetric layout with deliberate empty columns.",
    result:
      "Concept build. Demonstrates an approach for any property that loses value by being compared on a grid.",
    takeaway: "Premium products need their own context; a portal grid is a price comparison.",
    tags: ["Property", "Narrative", "Premium"],
    visual: {
      archetype: "landing", bg: "#E9E7E2", ink: "#17181A", accent: "#8C6A3F", muted: "#77787B",
      head: "'Archivo', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 1,
      words: ["Aster", "Ikoyi", "Light at 4pm", "Request a viewing"],
    },
  },
  {
    slug: "first-step-finance-lead",
    shot: "/shots/first-step-finance-lead.jpg",
    liveUrl: "/demo/first-step-finance-lead/index.html",
    title: "First Step Finance",
    category: "Landing Pages",
    industry: "Financial services",
    service: "Landing Page Design",
    projectType: "Lead-generation page",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary: "A reassuring lead page for people who find finance intimidating.",
    challenge:
      "Financial pages default to either jargon or false cheer, and both signal that something is being hidden. The audience — first-time borrowers — needed to understand the process before submitting anything personal.",
    approach:
      "We wrote the whole page at a reading age of twelve without being patronising, showed the four steps of the process with realistic timings, and stated exactly what a credit check does and does not do to a score.",
    built: [
      "Four-step process with honest timings",
      "Plain-language glossary inline, not in a separate page",
      "Eligibility self-check before any personal data is requested",
      "Explicit statement of what happens to submitted information",
    ],
    direction:
      "Calm institutional. Soft grey-blue, deep navy ink, a muted green for confirmation states only. Strictly one column, no columns competing for attention, and a form that never shows more than three fields at a time.",
    result:
      "Concept build with no application data. The design intent is informed consent before data capture.",
    takeaway: "In regulated categories, clarity is a conversion tactic and a compliance one.",
    tags: ["Finance", "Plain language", "Trust"],
    visual: {
      archetype: "landing", bg: "#F4F6F8", ink: "#152238", accent: "#2F7A5B", muted: "#6C7A8C",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 2,
      words: ["First Step", "Check eligibility", "No credit impact", "4 steps"],
    },
  },
];
