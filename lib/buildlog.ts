// Single source of truth for the combined Work + Build Log timeline.

export type Project = {
  slug: string;
  label: string;
};

export type MajorEntry = {
  type: "major";
  project: string;
  status: "in-progress" | "shipped";
  date: string;
  title: string;
  description: string;
  tags: string[];
  // null until a real case study URL exists; "#" placeholders are not real links.
  href: string | null;
};

export type MinorEntry = {
  type: "minor";
  project: string;
  date: string;
  text: string;
};

export type Entry = MajorEntry | MinorEntry;

export const projects: Project[] = [
  { slug: "site", label: "troydevries.com" },
  { slug: "ignite", label: "Ignite" },
  { slug: "pageone", label: "Page one" },
];

// Pre-ordered newest first.
export const entries: Entry[] = [
  {
    type: "major",
    project: "site",
    status: "in-progress",
    date: "Now · Jun 2026",
    title: "troydevries.com",
    description:
      "Built from scratch with Claude Code, directed and refined by me. The build itself is the case study, documented stage by stage here.",
    tags: ["next.js", "tailwind", "vercel"],
    href: null,
  },
  {
    type: "minor",
    project: "site",
    date: "Jun 2026",
    text: "Shipped the About page and wired the footer links.",
  },
  {
    type: "minor",
    project: "site",
    date: "Jun 2026",
    text: "Added the TD monogram favicon and tidied the site copy.",
  },
  {
    type: "major",
    project: "ignite",
    status: "shipped",
    date: "May 2026",
    title: "Ignite: daily research",
    description:
      "Scheduled cron sweeps deliver 25 research queries to Slack every morning at 8am ET.",
    tags: ["openrouter", "tavily", "cron"],
    href: null,
  },
  {
    type: "minor",
    project: "ignite",
    date: "Apr 2026",
    text: "Ignite v1 went live on Railway with Slack as the interface.",
  },
  {
    type: "major",
    project: "pageone",
    status: "shipped",
    date: "2025",
    title: "Page one, no agency",
    description:
      "Ranked a local business site to the first page of Google with structured content and AI-assisted SEO.",
    tags: ["seo", "content"],
    href: null,
  },
];
