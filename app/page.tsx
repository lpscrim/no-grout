import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import ScrollToTopButton from "@/components/Functions/ScrollToTopButton";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import Testimonials from "@/components/Home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <div className="fixed inset-0 min-h-screen w-full -z-1">
        <Image
          src="/hall2.svg"
          alt="Tiling Work"
          width={1920}
          height={1080}
          className="object-cover blur-xs"
        />
      </div>
      <About />
      <Projects />
      <Services />
      <div className="bg-background">
        <Testimonials />
      </div>
      <Contact />
      <ScrollToTopButton />
      <Footer mode="dark" />
    </main>
  );
}
