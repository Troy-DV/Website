import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WorkTimeline from "@/components/WorkTimeline";
import { projects, entries } from "@/lib/buildlog";

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="max-w-[1180px] mx-auto px-6 py-16 wide:px-14 wide:py-24">
          <div className="flex items-center gap-[14px] text-xs tracking-[0.24em] uppercase text-gold font-semibold mb-6">
            Work · Build Log
            <span className="h-px w-14 bg-gold" />
          </div>
          <h1 className="font-serif font-medium text-[38px] leading-[1.1] tracking-[-0.015em] wide:text-[54px]">
            Everything I&apos;ve built, in order.
          </h1>
          <div className="mt-12 wide:mt-14">
            <WorkTimeline projects={projects} entries={entries} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
