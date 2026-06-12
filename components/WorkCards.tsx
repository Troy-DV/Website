import Link from "next/link";

type Project = {
  label: string;
  title: string;
  body: string;
};

const projects: Project[] = [
  {
    label: "AI Agent",
    title: "Ignite",
    body: "An autonomous agent with multi-model routing, daily research sweeps, and a synced knowledge vault. Slack in, results out, every morning at 8.",
  },
  {
    label: "AI Dev",
    title: "This site",
    body: "Built from scratch using Claude Code with multi-model orchestration. The build itself is the case study: Next.js, Tailwind, Vercel, and the process documented in the build log.",
  },
  {
    label: "Web",
    title: "Page one, no agency",
    body: "Designed, built, and ranked a local business site to the first page of Google with structured content and AI-assisted SEO.",
  },
];

export default function WorkCards() {
  return (
    <section className="max-w-[1180px] mx-auto px-6 pt-2 pb-14 wide:px-14 wide:pt-4 wide:pb-20">
      <h2 className="font-serif font-medium text-[38px] mb-10">Selected work</h2>
      <div className="grid grid-cols-1 gap-[22px] wide:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.title}
            href="/work"
            className="group bg-paper-2 border border-hairline rounded-[18px] px-7 py-8 no-underline block transition-all duration-[280ms] ease-[ease] hover:bg-navy hover:border-navy hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(6,15,32,0.25)]"
          >
            <div className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-gold group-hover:text-gold-bright">
              {project.label}
            </div>
            <h3 className="font-serif font-medium text-2xl mt-[14px] mb-[10px] text-navy group-hover:text-paper">
              {project.title}
            </h3>
            <p className="text-muted text-[14.5px] leading-[1.65] group-hover:text-muted-d">
              {project.body}
            </p>
            <div className="mt-[22px] text-[13px] font-semibold text-navy group-hover:text-paper">
              Read the build{" "}
              <span className="text-gold group-hover:text-gold-bright">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
