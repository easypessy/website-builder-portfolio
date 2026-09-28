import { Link } from "wouter";
import type { Project } from "@/data";
import Artwork from "./Artwork";

export default function ProjectCard({ p }: { p: Project }) {
  const w = p.weight ?? 1;
  return (
    <article className={`card ${w === 3 ? "card--w3" : w === 2 ? "card--w2" : ""}`}>
      <Link href={`/projects/${p.slug}`} aria-label={`${p.title} — ${p.category} case study`}>
        <div className="card-media">
          {p.shot ? (
            <img
              src={p.shot}
              alt={`${p.title} — screenshot of the live ${p.industry.toLowerCase()} site`}
              loading="lazy"
              width={1000}
              height={625}
            />
          ) : (
            <Artwork project={p} />
          )}
          {p.liveUrl && (
            <span className="live-tag">{p.liveUrl.endsWith(".pdf") ? "PDF document" : "Live build"}</span>
          )}
        </div>
        <div className="card-meta">
          <span className="card-cat">{p.category} · {p.industry}</span>
          <h3>{p.title}</h3>
          <p>{p.summary}</p>
          <span className="badge" data-s={p.status} style={{ marginTop: 8 }}>{p.status}</span>
        </div>
      </Link>
    </article>
  );
}
