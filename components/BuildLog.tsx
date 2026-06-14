import Link from "next/link";

type Entry = {
  date: string;
  tag: string;
  status: "wip" | "ship";
  title: string;
  body: string;
  stack: string[];
};

const entries: Entry[] = [
  {
    date: "Now · June 2026",
    tag: "In Progress",
    status: "wip",
    title: "troydevries.com",
    body: "This site. Built from scratch with Claude Code (Opus), directed and refined by me. The build itself is the case study, documented stage by stage here.",
    stack: ["next.js", "tailwind", "claude code", "vercel"],
  },
  {
    date: "May 2026",
    tag: "Shipped",
    status: "ship",
    title: "Ignite: daily research automation",
    body: "Added scheduled cron workflows with 25 automated research queries delivered to Slack at 8am ET. Tuned spend caps and fixed subagent auto-approval in cron context.",
    stack: ["openrouter", "tavily", "cron"],
  },
  {
    date: "Apr 2026",
    tag: "Shipped",
    status: "ship",
    title: "Ignite v1: agent goes live",
    body: "Deployed the full agent on Railway with Slack as the interface, multi-model routing, and an Obsidian knowledge vault synced to GitHub.",
    stack: ["railway", "slack", "github"],
  },
  {
    date: "2025",
    tag: "Shipped",
    status: "ship",
    title: "Page one Google ranking",
    body: "Built and ranked a local business website to the first page of Google using structured content and AI-assisted SEO. No agency, no ad spend.",
    stack: ["seo", "content"],
  },
];

export default function BuildLog() {
  return (
    <section className="bg-paper-2 border-t border-b border-hairline">
      <div className="max-w-[1180px] mx-auto px-6 py-16 wide:px-14 wide:py-[88px]">
        <div className="flex flex-col items-start gap-[10px] mb-12 wide:flex-row wide:items-baseline wide:justify-between">
          <h2 className="font-serif font-medium text-[38px]">Build log</h2>
          <Link
            href="/work"
            className="font-mono text-xs text-muted no-underline tracking-[0.1em]"
          >
            FULL CHANGELOG <span className="text-gold">→</span>
          </Link>
        </div>

        <div className="relative pl-9">
          <span className="absolute left-[7px] top-2 bottom-2 w-[1.5px] bg-hairline" />
          {entries.map((entry) => (
            <div key={entry.title} className="relative pb-10 last:pb-0">
              <span
                className={
                  entry.status === "wip"
                    ? "absolute left-[-36px] top-[6px] w-[15px] h-[15px] rounded-full bg-paper-2 border-[3.5px] border-paper-2 shadow-[0_0_0_1.5px_var(--color-gold)] animate-blink"
                    : "absolute left-[-36px] top-[6px] w-[15px] h-[15px] rounded-full bg-gold-bright border-[3.5px] border-paper-2 shadow-[0_0_0_1.5px_var(--color-gold)]"
                }
              />
              <div className="flex items-center gap-[14px] mb-2">
                <span className="font-mono text-[11.5px] text-muted tracking-[0.12em] uppercase">
                  {entry.date}
                </span>
                <span
                  className={
                    entry.status === "wip"
                      ? "font-mono text-[10px] tracking-[0.14em] uppercase px-[9px] py-[3px] rounded border border-gold text-gold"
                      : "font-mono text-[10px] tracking-[0.14em] uppercase px-[9px] py-[3px] rounded border border-gold text-gold bg-[rgba(227,179,71,0.08)]"
                  }
                >
                  {entry.tag}
                </span>
              </div>
              <h3 className="font-serif font-medium text-[23px] mb-2">
                {entry.title}
              </h3>
              <p className="text-muted text-[14.5px] leading-[1.65] max-w-[72ch]">
                {entry.body}
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {entry.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10.5px] text-muted border border-hairline rounded px-[9px] py-[3px] bg-paper"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
