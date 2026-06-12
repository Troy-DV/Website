import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkCards from "@/components/WorkCards";
import BuildLog from "@/components/BuildLog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <WorkCards />
        <BuildLog />
      </main>
      <Footer />
    </>
  );
}
