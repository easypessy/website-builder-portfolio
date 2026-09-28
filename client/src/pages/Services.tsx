import { Link } from "wouter";
import { CATEGORIES, countFor } from "@/data";
import { Seo, Reveal, WA } from "@/components/site/Layout";

const DETAIL: Record<string, { blurb: string; items: string[]; deliver: string }> = {
  "Digital Marketing": {
    blurb:
      "The thinking that should exist before anything is designed: who you're for, what you say, where you say it and what happens next.",
    items: ["Marketing strategy", "Audience research", "Positioning", "Content strategy",
      "Campaign planning", "Customer journey mapping", "Brand messaging", "Marketing systems"],
    deliver: "A written strategy you can act on without us — not a deck we present and take away.",
  },
  "Web Design": {
    blurb:
      "Business, service and local websites built around the three questions your visitors actually arrive with.",
    items: ["Business websites", "Corporate sites", "Service websites", "Local business sites",
      "E-commerce-style sites", "Portfolio websites", "Responsive build", "Content editing setup"],
    deliver: "A working, responsive site you own, with the content structured so you can update it.",
  },
  "Landing Pages": {
    blurb:
      "One offer, one action. Pages for launches, campaigns and lead generation where every section earns its place.",
    items: ["Lead-generation pages", "Product launches", "Service pages", "Campaign pages",
      "Event registration", "Sales pages", "Consultation booking", "Offer pages"],
    deliver: "A single page, built to convert, with the objections handled before the ask.",
  },
  "AI Automation": {
    blurb:
      "Practical assistants and workflows with explicit boundaries. We design what they refuse to do before what they do.",
    items: ["AI receptionists", "Customer support assistants", "Sales assistants",
      "Lead qualification", "Appointment workflows", "Order capture", "Internal knowledge desks",
      "Follow-up sequences"],
    deliver: "A documented workflow, the conversation design, and the rules that keep it honest.",
  },
  "Social Media": {
    blurb:
      "A content system sized to the time you actually have, not the time a content plan assumes.",
    items: ["Social strategy", "Content pillars", "Content calendars", "Campaign concepts",
      "Caption frameworks", "Grid direction", "Templates for non-designers", "Handover training"],
    deliver: "A calendar, templates and rules your team can run after we leave.",
  },
  "Copywriting": {
    blurb:
      "Plain, specific words for websites, offers, emails and products. Written to be read, not to sound impressive.",
    items: ["Website copy", "Landing-page copy", "Sales copy", "Product descriptions",
      "Service descriptions", "Email sequences", "Brand messaging", "FAQ and objection copy"],
    deliver: "Final copy in a document you can paste, plus a short voice guide for future writing.",
  },
  "Reports & Presentations": {
    blurb:
      "Business documents people finish reading, designed for where they will actually be read.",
    items: ["Business reports", "Seminar and project reports", "Proposals", "Pitch decks",
      "Training presentations", "Executive summaries", "Briefing documents", "Document templates"],
    deliver: "A designed document and a reusable template so the next one takes an hour.",
  },
};

export default function Services() {
  return (
    <>
      <Seo
        title="Services — Strategy, Web Design, Copy & AI Automation | Easywurld"
        description="Digital marketing strategy, web design, landing pages, AI business automation, social media management, copywriting and business reports for small businesses."
        path="/services"
      />
      <section style={{ paddingBottom: 30 }}>
        <div className="wrap">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 style={{ maxWidth: "16ch" }}>Seven services that work as one.</h1>
            <p className="lead" style={{ maxWidth: "54ch", marginTop: 18 }}>
              Most small businesses don't need seven suppliers. They need strategy, design,
              words and systems that agree with each other. That's the whole argument for
              keeping these together.
            </p>
          </Reveal>
        </div>
      </section>

      {CATEGORIES.map((c, i) => {
        const d = DETAIL[c];
        const alt = i % 2 === 1;
        return (
          <section key={c} style={{ background: alt ? "var(--beige)" : "transparent", paddingBlock: "clamp(48px,6vw,84px)" }}>
            <div className="wrap">
              <Reveal>
                <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.4fr", gap: 56 }} className="svc-detail">
                  <div>
                    <p className="eyebrow">0{i + 1}</p>
                    <h2 style={{ fontSize: "var(--t-xl)", maxWidth: "14ch" }}>{c}</h2>
                    <Link href={`/work?c=${encodeURIComponent(c)}`} className="textlink">
                      {countFor(c)} projects →
                    </Link>
                  </div>
                  <div>
                    <p style={{ fontSize: "var(--t-md)", color: "var(--ink)" }}>{d.blurb}</p>
                    <ul style={{
                      listStyle: "none", padding: 0, margin: "22px 0",
                      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px",
                    }}>
                      {d.items.map((it) => (
                        <li key={it} style={{
                          fontSize: "var(--t-sm)", color: "var(--ink-2)",
                          paddingLeft: 16, position: "relative",
                        }}>
                          <span style={{
                            position: "absolute", left: 0, top: "0.72em", width: 8, height: 1,
                            background: "var(--accent)",
                          }} />
                          {it}
                        </li>
                      ))}
                    </ul>
                    <div className="note"><p><strong>You get:</strong> {d.deliver}</p></div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section style={{ background: "var(--green)", color: "var(--beige)" }}>
        <div className="wrap grid-2">
          <div>
            <p className="eyebrow" style={{ color: "#9FB3A6" }}>Pricing</p>
            <h2 style={{ color: "var(--paper)", maxWidth: "14ch" }}>What it costs</h2>
          </div>
          <div>
            <p style={{ color: "#C3D2C8" }}>
              We don't publish fixed prices, because a landing page for a launch and a
              seven-page service site are not the same job. What we will do is give you a
              number before any work starts, in writing, with what's included and what isn't.
            </p>
            <p style={{ color: "#C3D2C8" }}>
              Send a short description of the problem on WhatsApp and you'll get a range the
              same day, or an honest answer that it isn't something we should take on.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-wa" style={{ marginTop: 10 }}>
              Ask for a range
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
