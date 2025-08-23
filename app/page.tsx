import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="about" className="bg-accent min-h-[80vh]">
        <div className="w-full h-[0vh] bg-background">

        </div>
        <h2>About Us</h2>
        <p>We are a company dedicated to providing the best services.</p>
      </section>
    </main>
  );
}

