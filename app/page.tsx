import AnimatedOnView from "@/components/AnimatedOnView";
import Hero from "@/components/Home/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <section
        id="about"
        className="relative min-h-[100vh] flex  justify-end items-start overflow-hidden section-light"
      >
        <Image
          src="/hall.jpg"
          alt="Tiling background"
          width={1920}
          height={1080}
          priority
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <AnimatedOnView animationClass="slide-in-right">
          <div className="relative min-h-[100vh] z-10 bg-accent p-6 max-w-[45vw] sm:max-w-[35vw] lg:max-w-[25vw] w-full flex flex-col justify-center text-left">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              About Us
            </h2>
            <p className="text-lg text-foreground">
              We are a passionate tiling company dedicated to quality
              craftsmanship and beautiful results. Let us transform your space!
            </p>
          </div>
        </AnimatedOnView>

        <div
          className="absolute inset-0 z-0 pointer-events-none transition-colors invisible"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0, 0.6) 0%, rgba(238, 210, 204, 0.2) 15%, rgba(238, 210, 204, 0) 50%)",
          }}
        />
      </section>
    </main>
  );
}
