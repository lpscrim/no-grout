
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import ScrollToTopButton from "@/components/Functions/ScrollToTopButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <ScrollToTopButton />
      <Footer mode="dark" />
    </main>
  );
}
