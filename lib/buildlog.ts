// Single source of truth for the combined Work + Build Log timeline.
// Data lives in buildlog.json so it can be edited without touching code.

import data from "./buildlog.json";

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

// Pre-ordered newest first. Data is sourced from buildlog.json.
export const projects = data.projects as Project[];
export const entries = data.entries as unknown as Entry[];
