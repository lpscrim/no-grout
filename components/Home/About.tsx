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
        <AnimatedOnView animationClass="opacity-0 slide-in-right">
          <div className="relative min-h-[115vh] z-10 bg-accent p-6 w-[50vw] sm:w-[40vw] lg:w-[35vw] xl:w-[25vw] flex flex-col justify-center text-left">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-secondary">
              About Us
            </h2>
            <p className="text-lg text-foreground">
              My name is Andrew, and I run No Grout About It, a family tiling
              company. I have experience with all types of projects, including
              bathrooms, kitchens, conservatories, hallways, and repair work.
              <br />
              <br />
              I am committed to delivering the highest standards on every job
              and don`t consider the work finished until both the customer and I
              are completely satisfied. Quality and customer satisfaction are
              always my top priorities. Every Job is welcome!
              <br />
              <br />
            </p>
          </div>
        </AnimatedOnView>
      </div>
    </section>
  );
}
