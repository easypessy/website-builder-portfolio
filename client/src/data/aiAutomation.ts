import type { Project } from "./types";

export const aiAutomation: Project[] = [
  {
    slug: "after-hours-reception",
    liveUrl: "/demo/after-hours-reception/index.html",
    title: "After-hours Reception",
    category: "AI Automation",
    industry: "Dental practice",
    service: "AI Business Automation",
    projectType: "AI receptionist",
    status: "Concept Project",
    year: "2026",
    weight: 3,
    summary: "Capturing the enquiries that arrive after the practice closes.",
    challenge:
      "A large share of enquiries arrive between 6pm and midnight, when nobody is at the desk. By morning the caller has usually booked with whichever practice answered first. Voicemail does not solve this; people don't leave them.",
    approach:
      "A bounded assistant that does exactly three things: answer logistics questions from the practice's own information, capture the reason for contact, and book a call-back slot. It is explicitly forbidden from clinical advice and says so in plain words when asked.",
    built: [
      "Conversation design with a hard clinical-advice refusal boundary",
      "Knowledge base limited to hours, location, fees, insurers, parking",
      "Call-back scheduling against real front-desk availability",
      "Morning digest summarising every overnight conversation",
    ],
    direction:
      "The interface is deliberately plain text on white with a visible 'not a clinician' notice. No avatar, no personality, no typing animation pretending to think. In healthcare, an assistant that appears human is a liability.",
    result:
      "Concept workflow. No live deployment and therefore no capture-rate data. The designed benefit is that an out-of-hours enquiry becomes a scheduled call-back rather than a missed call.",
    takeaway: "The value is in capturing the enquiry, not in answering everything.",
    tags: ["Healthcare", "Boundaries", "Out-of-hours"],
    visual: {
      archetype: "chat", bg: "#F7F9FA", ink: "#152026", accent: "#1F7A8C", muted: "#6D7E86",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 0,
      words: ["Are you open Saturday?", "We open 9–2 on Saturdays.", "Book a call-back", "Not a clinician"],
    },
  },
  {
    slug: "market-lane-assistant",
    liveUrl: "/demo/market-lane-assistant/index.html",
    title: "Market Lane Assistant",
    category: "AI Automation",
    industry: "Retail",
    service: "AI Business Automation",
    projectType: "AI sales assistant",
    status: "Concept Project",
    year: "2026",
    weight: 2,
    summary: "A product finder that cannot invent stock it doesn't have.",
    challenge:
      "Staff spent much of the day answering 'do you have this in my size' by walking to the stockroom. Generic chatbots made this worse by confidently describing products the shop had never carried.",
    approach:
      "Retrieval is restricted to the shop's own catalogue export, refreshed nightly. If an item isn't in the export, the assistant says it isn't stocked and offers the nearest match — it has no mechanism to answer otherwise.",
    built: [
      "Catalogue-grounded retrieval with a strict no-invention rule",
      "Out-of-stock handling that offers substitutions, not apologies",
      "Size and fit answers drawn from real product attributes",
      "Escalation to a staff member with conversation context attached",
    ],
    direction:
      "Utility over personality. Compact layout, product cards inside the conversation, real photographs and live prices. Short answers — a shop assistant who monologues is a bad shop assistant.",
    result:
      "Concept workflow. Demonstrates grounding as the primary design constraint rather than an afterthought.",
    takeaway: "An assistant is only as trustworthy as the data it is forbidden to leave.",
    tags: ["Retail", "Grounding", "Catalogue"],
    visual: {
      archetype: "chat", bg: "#FFFFFF", ink: "#1B1A18", accent: "#B5533C", muted: "#78736C",
      head: "'Outfit', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 1,
      words: ["Do you have this in 42?", "Yes — 2 left in store.", "Reserve it", "From live catalogue"],
    },
  },
  {
    slug: "estateflow-lead-qualification",
    liveUrl: "https://easywurld-studio-8u8s-two.vercel.app/estateflow/",
    title: "EstateFlow Lead Desk",
    category: "AI Automation",
    industry: "Real estate",
    service: "AI Business Automation",
    projectType: "Lead qualification workflow",
    status: "Concept Project",
    year: "2026",
    weight: 2,
    summary: "Sorting property enquiries by fit before an agent spends time on them.",
    challenge:
      "Agents were spending the first ten minutes of every call establishing budget, area, timeline and finance status — information that determines whether the call was worth making at all.",
    approach:
      "A WhatsApp-first qualification flow that asks the four questions conversationally, tolerates vague answers, and routes the result: qualified leads to an agent with a summary, everything else to a nurture list. It never quotes prices or gives valuation advice.",
    built: [
      "Four-question qualification sequence tolerant of partial answers",
      "Budget banding that accepts ranges and 'not sure'",
      "Routing rules: agent handoff, nurture, or polite decline",
      "Summary card delivered to the agent before the first call",
    ],
    direction:
      "WhatsApp-native. The workflow diagram is the deliverable here: a left-to-right flow with decision diamonds and explicit failure paths, drawn plainly enough that a non-technical agency owner can audit it.",
    result:
      "Concept workflow. No live lead data. The intended benefit is that agents start calls already knowing the answers to the first four questions.",
    takeaway: "Qualification is a routing problem, not a sales problem.",
    tags: ["Property", "WhatsApp", "Routing"],
    visual: {
      archetype: "workflow", bg: "#F5F7F4", ink: "#18281F", accent: "#2E7D52", muted: "#6E7D72",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 0,
      words: ["Enquiry", "Qualify", "Route", "Agent"],
    },
  },
  {
    slug: "bookflow-appointments",
    liveUrl: "https://easywurld-studio-8u8s-two.vercel.app/bookflow/",
    title: "BookFlow Appointments",
    category: "AI Automation",
    industry: "Salon & clinic",
    service: "AI Business Automation",
    projectType: "Booking and reminder workflow",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary: "Booking, rescheduling and reminders without a receptionist in the loop.",
    challenge:
      "No-shows and last-minute reschedules were being handled by phone tag. Each one consumed staff time twice — once to rebook, once to fill the gap.",
    approach:
      "The assistant owns the whole appointment lifecycle: book, confirm, remind at 24 hours, offer the slot to a waitlist if cancelled. The waitlist offer is the part that actually recovers revenue, and it runs without anyone being asked.",
    built: [
      "Booking against live calendar availability",
      "24-hour and 2-hour reminder sequence",
      "Cancellation detection with automatic waitlist offer",
      "Reschedule flow that never double-books",
    ],
    direction:
      "A state diagram rather than a chat transcript — booked, confirmed, cancelled, refilled — because the interesting design work here is the transitions, not the wording.",
    result:
      "Concept workflow. No measured no-show reduction, as it has not run live. The mechanism it demonstrates is gap recovery.",
    takeaway: "The money in booking automation is in refilling cancellations, not in taking bookings.",
    tags: ["Scheduling", "Waitlist", "Lifecycle"],
    visual: {
      archetype: "workflow", bg: "#FAF7FB", ink: "#2A1F33", accent: "#7A4FBF", muted: "#7A7080",
      head: "'Outfit', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 1,
      words: ["Booked", "Confirmed", "Cancelled", "Refilled"],
    },
  },
  {
    slug: "vendorreply-order-capture",
    liveUrl: "https://easywurld-studio-8u8s-two.vercel.app/vendorreply/",
    title: "VendorReply",
    category: "AI Automation",
    industry: "E-commerce",
    service: "AI Business Automation",
    projectType: "Order capture from social DMs",
    status: "Concept Project",
    year: "2026",
    weight: 2,
    summary: "Turning Instagram and WhatsApp messages into structured orders.",
    challenge:
      "A vendor selling through social DMs was reconstructing orders from scrolled-back conversations: item, size, colour, address, payment proof, all scattered across a thread. Mistakes were frequent and expensive.",
    approach:
      "The assistant reads the thread and fills a structured order card, asking only for what is missing. Payment proof is flagged for human verification — never auto-confirmed, because that is where fraud enters.",
    built: [
      "Thread parsing into a structured order record",
      "Targeted follow-up for missing fields only",
      "Payment-proof flag requiring human confirmation",
      "Daily order export in a format a bookkeeper can use",
    ],
    direction:
      "Split-screen artwork: the messy conversation on one side, the clean order card on the other. That contrast is the entire value proposition and needs no explanation.",
    result:
      "Concept workflow. Demonstrates structured extraction from unstructured chat, with a deliberate human checkpoint at the payment step.",
    takeaway: "Automate the transcription, not the trust decision.",
    tags: ["Social commerce", "Extraction", "Human-in-the-loop"],
    visual: {
      archetype: "workflow", bg: "#FFF9F2", ink: "#2B1D12", accent: "#D97706", muted: "#83725F",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 2,
      words: ["DM thread", "Extract", "Order card", "Verify payment"],
    },
  },
  {
    slug: "carepath-internal-assistant",
    liveUrl: "/demo/carepath-internal-assistant/index.html",
    title: "Carepath Internal Desk",
    category: "AI Automation",
    industry: "Healthcare admin",
    service: "AI Business Automation",
    projectType: "Internal knowledge assistant",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary: "Helping staff find the current version of a policy, not last year's.",
    challenge:
      "Policies, rotas and referral procedures lived across a shared drive, three email threads and one person's memory. New staff asked colleagues, colleagues guessed, and occasionally the guess was out of date.",
    approach:
      "An internal-only assistant restricted to approved documents, which always returns the document name and revision date with its answer. If two versions conflict it surfaces both rather than choosing — resolving conflicts is a human job.",
    built: [
      "Document-scoped retrieval with mandatory source citation",
      "Revision-date surfacing on every answer",
      "Conflict detection between document versions",
      "Access control mirroring existing staff permissions",
    ],
    direction:
      "Deliberately unglamorous: a search field, an answer, and a citation line. Institutional grey and a single blue link colour. Anything more decorative would undermine the point, which is verifiability.",
    result:
      "Concept workflow. No deployment. The designed benefit is that every answer is checkable against a named source.",
    takeaway: "For internal knowledge, the citation matters more than the answer.",
    tags: ["Internal", "Knowledge", "Governance"],
    visual: {
      archetype: "chat", bg: "#F4F5F7", ink: "#1C2026", accent: "#2557A7", muted: "#6E747E",
      head: "'Inter Tight', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 2,
      words: ["Which referral form?", "Form R-12 (rev. Mar 2026)", "Source: Policy 4.2", "Two versions found"],
    },
  },
  {
    slug: "follow-up-loop",
    liveUrl: "/demo/follow-up-loop/index.html",
    title: "Follow-up Loop",
    category: "AI Automation",
    industry: "Professional services",
    service: "AI Business Automation",
    projectType: "Customer follow-up workflow",
    status: "Concept Project",
    year: "2026",
    weight: 1,
    summary: "The three messages after the first conversation that nobody ever sends.",
    challenge:
      "Warm enquiries were going cold not because of price but because nobody followed up. The owner intended to, then didn't, and after two weeks it felt awkward to try.",
    approach:
      "A light three-touch sequence with genuinely different content each time — a relevant example, a practical answer to the question they asked, then a single direct close. Any reply cancels the sequence immediately and hands to a human.",
    built: [
      "Three-touch cadence at day 2, day 6 and day 14",
      "Each touch carries new information, never a bump",
      "Instant sequence cancellation on any human reply",
      "Explicit opt-out honoured permanently",
    ],
    direction:
      "Shown as a timeline with the actual message text at each step, so the reader can judge the tone rather than trust a description of it.",
    result:
      "Concept workflow. No response-rate data. What it demonstrates is a follow-up pattern that does not rely on the owner remembering.",
    takeaway: "Follow-up fails for lack of a system, not for lack of intent.",
    tags: ["Sales", "Sequences", "Tone"],
    visual: {
      archetype: "workflow", bg: "#F6F5F2", ink: "#20211E", accent: "#5B7553", muted: "#75766F",
      head: "'Outfit', system-ui, sans-serif", body: "'Inter', system-ui, sans-serif", variant: 3,
      words: ["Day 2", "Day 6", "Day 14", "Reply → stop"],
    },
  },
];
