export type Category =
  | "Web Design"
  | "Landing Pages"
  | "AI Automation"
  | "Social Media"
  | "Digital Marketing"
  | "Copywriting"
  | "Reports & Presentations";

export type Archetype =
  | "website"
  | "landing"
  | "chat"
  | "workflow"
  | "social"
  | "strategy"
  | "report"
  | "copy";

export type Status = "Client Project" | "Concept Project" | "Sample Project";

/** Per-project visual identity. Every project renders its own artwork from these
 *  tokens, so no two case studies share a palette, type pairing or composition. */
export interface Visual {
  archetype: Archetype;
  bg: string;
  ink: string;
  accent: string;
  muted: string;
  head: string;
  body: string;
  /** layout variant within the archetype (0-3) */
  variant: number;
  /** short words that appear inside the generated artwork */
  words: string[];
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  industry: string;
  service: string;
  projectType: string;
  status: Status;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  built: string[];
  direction: string;
  result: string;
  takeaway: string;
  tags: string[];
  visual: Visual;
  /** optional real screenshot path (used where genuine work exists) */
  shot?: string;
  /** editorial weight on the work index: 1 = standard, 2 = wide, 3 = feature */
  weight?: 1 | 2 | 3;
}

export const CATEGORIES: Category[] = [
  "Web Design",
  "Landing Pages",
  "AI Automation",
  "Social Media",
  "Digital Marketing",
  "Copywriting",
  "Reports & Presentations",
];
