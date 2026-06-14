import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="max-w-[1180px] mx-auto px-6 py-16 wide:px-14 wide:py-24">
          <h1 className="font-serif font-medium text-[38px] leading-[1.1] tracking-[-0.015em] wide:text-[54px]">
            About
          </h1>
          <div className="mt-8 max-w-[60ch] space-y-6 wide:mt-10">
            <p className="text-navy text-[20px] leading-[1.6]">
              I&apos;m Troy De Vries. I run operations by day, and I build AI
              tools because I genuinely enjoy the process of making something
              useful.
            </p>
            <p className="text-muted text-[17px] leading-[1.7]">
              Ten years of running operations, in fitness, hospitality, and food
              and beverage, taught me exactly where the time goes: the
              repetitive tasks, the scheduling, the organizing, the hundred
              small things certain jobs ask you to do all at once. AI is good at
              exactly those problems, so I started building tools to deal with
              them automatically.
            </p>
            <p className="text-muted text-[17px] leading-[1.7]">
              The projects I like most are the ones that give time back. My
              agent system, Ignite, runs research sweeps every morning and
              delivers the results to Slack before I have had coffee. This site
              documents its own build. The next project will probably automate
              something else I got tired of doing by hand.
            </p>
            <p className="text-muted text-[17px] leading-[1.7]">
              Most of what I know, I taught myself, which I think is its own
              qualification. No CS degree, just a habit of pulling things apart
              until they make sense and a strategic streak that shows up
              everywhere, including the games I play (chess, GeoGuessr, anything
              where planning beats reflexes).
            </p>
            <p className="text-muted text-[17px] leading-[1.7]">
              Born and raised in Grand Rapids, Michigan. Living in Knoxville,
              Tennessee since the end of 2025. Outside of work, I&apos;m usually
              hiking, lifting, or making music.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
