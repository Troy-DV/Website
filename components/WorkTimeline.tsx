"use client";

import { useState } from "react";
import type { Entry, MajorEntry, MinorEntry, Project } from "@/lib/buildlog";

type Props = {
  projects: Project[];
  entries: Entry[];
};

const ALL = "all";

const chipBase =
  "inline-flex items-center gap-[8px] font-mono text-[13px] tracking-[0.04em] px-[18px] py-2.5 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-paper";
const chipActive = "bg-navy text-paper";
const chipInactive = "border border-hairline text-navy hover:border-gold";

const projectTagPill =
  "font-mono text-[10px] tracking-[0.14em] uppercase px-[9px] py-[3px] rounded border border-hairline text-muted bg-paper-2";

export default function WorkTimeline({ projects, entries }: Props) {
  const [active, setActive] = useState<string>(ALL);

  const labelFor = (slug: string) =>
    projects.find((p) => p.slug === slug)?.label ?? slug;

  // "All" keeps the original newest-first order. A single-project view sorts
  // majors before minors; the sort is stable, so each group keeps its original
  // relative order.
  const filtered =
    active === ALL
      ? entries
      : entries
          .filter((e) => e.project === active)
          .sort((a, b) => (a.type === b.type ? 0 : a.type === "major" ? -1 : 1));

  const count = filtered.length;
  const statusText =
    active === ALL
      ? "Showing all updates"
      : `Showing ${labelFor(active)} · ${count} ${
          count === 1 ? "update" : "updates"
        }`;

  const countFor = (slug: string) =>
    entries.filter((e) => e.project === slug).length;

  const chips = [
    { key: ALL, label: "All", count: entries.length },
    ...projects.map((p) => ({
      key: p.slug,
      label: p.label,
      count: countFor(p.slug),
    })),
  ];

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
        {chips.map((chip) => {
          const isActive = active === chip.key;
          return (
            <button
              key={chip.key}
              type="button"
              onClick={() => setActive(chip.key)}
              aria-pressed={isActive}
              className={`${chipBase} ${isActive ? chipActive : chipInactive}`}
            >
              <span
                className={`w-[7px] h-[7px] rounded-full shrink-0 ${
                  isActive ? "bg-gold-bright" : "bg-gold"
                }`}
              />
              <span>{chip.label}</span>
              <span
                className={`text-[10px] leading-none px-[6px] py-[2px] rounded-full min-w-[16px] text-center ${
                  isActive ? "bg-paper/15 text-paper" : "bg-muted/15 text-muted"
                }`}
              >
                {chip.count}
              </span>
            </button>
          );
        })}
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
      <div className="flex flex-col gap-[6px]">
        <div className="flex flex-wrap items-center gap-[14px]">
          <span className="font-mono text-[11.5px] text-muted tracking-[0.12em] uppercase">
            {entry.date}
          </span>
          <span className={projectTagPill}>{projectLabel}</span>
        </div>
        <span className="text-muted text-[14.5px] leading-[1.65]">
          {entry.text}
        </span>
      </div>
    </div>
  );
}
