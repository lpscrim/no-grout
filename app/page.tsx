
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <main className="bg-primary">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}
