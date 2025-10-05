"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import AnimatedOnView from "@/components/Functions/AnimatedOnView";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-[110lvh] flex justify-end items-start overflow-hidden section-light bg-accent"
    >
      <div className="absolute inset-0">
        <ParallaxBanner
          layers={[{ image: "/hall.jpg", speed: -50 }]}
          className="min-h-[200lvh] w-full"
        />
      </div>
      <div>
        <AnimatedOnView animationClass="slide-in-right">
          <div className="relative min-h-[115vh] z-10 bg-accent p-6 w-[50vw] sm:w-[40vw] lg:w-[35vw] xl:w-[25vw] flex flex-col justify-center text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-secondary">
              About Us
            </h2>
            <p className="text-lg text-foreground">
              We are a passionate tiling company dedicated to quality
              craftsmanship and beautiful results. Let us transform your space!
              <br /> <br />
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br /> <br />
              lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </AnimatedOnView>
      </div>
    </section>
  );
}
