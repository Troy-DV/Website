import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif font-medium text-[54px] tracking-[-0.015em]">
          About
        </h1>
        <p className="font-mono text-sm text-muted tracking-[0.1em] mt-4">
          Coming soon.
        </p>
      </main>
      <Footer />
    </>
  );
}
