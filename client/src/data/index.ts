import type { Category, Project } from "./types";
import { webDesign } from "./webDesign";
import { landingPages } from "./landingPages";
import { aiAutomation } from "./aiAutomation";
import { socialMedia } from "./socialMedia";
import { digitalMarketing } from "./digitalMarketing";
import { copywriting } from "./copywriting";
import { reports } from "./reports";

export * from "./types";

export const projects: Project[] = [
  ...webDesign,
  ...landingPages,
  ...aiAutomation,
  ...socialMedia,
  ...digitalMarketing,
  ...copywriting,
  ...reports,
];

export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const byCategory = (c: Category | "All") =>
  c === "All" ? projects : projects.filter((p) => p.category === c);

export const countFor = (c: Category | "All") => byCategory(c).length;

/** Related = same category first, then same industry, never itself. */
export function related(p: Project, n = 3): Project[] {
  const same = projects.filter((x) => x.slug !== p.slug && x.category === p.category);
  const industry = projects.filter(
    (x) => x.slug !== p.slug && x.category !== p.category && x.industry === p.industry,
  );
  return [...same, ...industry].slice(0, n);
}

export const featured = () => projects.filter((p) => (p.weight ?? 1) >= 2);
