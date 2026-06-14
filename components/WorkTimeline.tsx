"use client";

import { useState } from "react";
import type { Entry, MajorEntry, MinorEntry, Project } from "@/lib/buildlog";

type Props = {
  projects: Project[];
  entries: Entry[];
};

const ALL = "all";

const chipBase =
  "font-mono text-[13px] tracking-[0.04em] px-[18px] py-2.5 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper";
const chipActive = "bg-navy text-paper";
const chipInactive = "border border-hairline text-navy hover:border-gold";

const projectTagPill =
  "font-mono text-[10px] tracking-[0.14em] uppercase px-[9px] py-[3px] rounded border border-hairline text-muted bg-paper-2";

export default function WorkTimeline({ projects, entries }: Props) {
  const [active, setActive] = useState<string>(ALL);

  const labelFor = (slug: string) =>
    projects.find((p) => p.slug === slug)?.label ?? slug;

  const filtered =
    active === ALL ? entries : entries.filter((e) => e.project === active);

  const count = filtered.length;
  const statusText =
    active === ALL
      ? "Showing all updates"
      : `Showing ${labelFor(active)} · ${count} ${
          count === 1 ? "update" : "updates"
        }`;

  return (
    <div>
      <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-gold mb-3">
        Pull a thread
      </div>

      <div
        role="group"
        aria-label="Filter updates by project"
        className="flex flex-wrap gap-[10px]"
      >
        <button
          type="button"
          onClick={() => setActive(ALL)}
          aria-pressed={active === ALL}
          className={`${chipBase} ${active === ALL ? chipActive : chipInactive}`}
        >
          All
        </button>
        {projects.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setActive(p.slug)}
            aria-pressed={active === p.slug}
            className={`${chipBase} ${
              active === p.slug ? chipActive : chipInactive
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <p
        aria-live="polite"
        className="font-mono text-[12px] tracking-[0.1em] text-muted mt-6"
      >
        {statusText}
      </p>

      <div className="relative pl-9 mt-9">
        {count === 0 ? (
          <p className="text-muted text-[14.5px] leading-[1.65]">
            No updates on this thread yet.
          </p>
        ) : (
          <>
            <span className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-hairline" />
            {filtered.map((entry) =>
              entry.type === "major" ? (
                <MajorRow
                  key={`${entry.project}-${entry.title}`}
                  entry={entry}
                  projectLabel={labelFor(entry.project)}
                />
              ) : (
                <MinorRow
                  key={`${entry.project}-${entry.text}`}
                  entry={entry}
                  projectLabel={labelFor(entry.project)}
                />
              )
            )}
          </>
        )}
      </div>
    </div>
  );
}

function MajorRow({
  entry,
  projectLabel,
}: {
  entry: MajorEntry;
  projectLabel: string;
}) {
  const inProgress = entry.status === "in-progress";
  const hasHref =
    entry.href != null && entry.href.trim() !== "" && entry.href !== "#";
  return (
    <div className="relative pb-10 last:pb-0">
      <span
        className={
          inProgress
            ? "absolute left-[-36px] top-[33px] w-[15px] h-[15px] rounded-full bg-paper border-[3.5px] border-paper shadow-[0_0_0_1.5px_var(--color-gold)] animate-blink"
            : "absolute left-[-36px] top-[33px] w-[15px] h-[15px] rounded-full bg-gold-bright border-[3.5px] border-paper shadow-[0_0_0_1.5px_var(--color-gold)]"
        }
      />
      <div className="bg-paper-2 border border-hairline rounded-[18px] p-7 transition-colors hover:border-gold">
        <div className="flex flex-wrap items-center gap-[14px] mb-2">
          <span className="font-mono text-[11.5px] text-muted tracking-[0.12em] uppercase">
            {entry.date}
          </span>
          <span className={projectTagPill}>{projectLabel}</span>
          <span
            className={
              inProgress
                ? "font-mono text-[10px] tracking-[0.14em] uppercase px-[9px] py-[3px] rounded border border-gold text-gold"
                : "font-mono text-[10px] tracking-[0.14em] uppercase px-[9px] py-[3px] rounded border border-gold text-gold bg-gold/10"
            }
          >
            {inProgress ? "In Progress" : "Shipped"}
          </span>
        </div>
        <h3 className="font-serif font-medium text-[23px] mb-2">{entry.title}</h3>
        <p className="text-muted text-[14.5px] leading-[1.65] max-w-[72ch]">
          {entry.description}
        </p>
        <div className="mt-3 flex gap-2 flex-wrap">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10.5px] text-muted border border-hairline rounded px-[9px] py-[3px] bg-paper"
            >
              {tag}
            </span>
          ))}
        </div>
        {hasHref && (
          <a
            href={entry.href ?? undefined}
            className="inline-block mt-4 text-[13px] font-semibold text-navy no-underline hover:text-gold"
          >
            Read the build <span className="text-gold">→</span>
          </a>
        )}
      </div>
    </div>
  );
}

function MinorRow({
  entry,
  projectLabel,
}: {
  entry: MinorEntry;
  projectLabel: string;
}) {
  return (
    <div className="relative pb-10 last:pb-0">
      <span className="absolute left-[-33px] top-[5px] w-[9px] h-[9px] rounded-full bg-gold" />
      <div className="flex flex-wrap items-center gap-[14px]">
        <span className="font-mono text-[11.5px] text-muted tracking-[0.12em] uppercase">
          {entry.date}
        </span>
        <span className={projectTagPill}>{projectLabel}</span>
        <span className="text-muted text-[14.5px] leading-[1.65]">
          {entry.text}
        </span>
      </div>
    </div>
  );
}
