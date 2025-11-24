"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import AnimatedOnView from "@/components/Functions/AnimatedOnView";
import { useEffect, useState } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-[105lvh] flex justify-center items-center overflow-hidden section-light bg-accent"
    >
      <div className="absolute inset-0">
        <ParallaxBanner
          layers={[{ image: "/hall2.svg", speed: isMobile ? 0 : -50 }]}
          className="min-h-[150lvh] w-full blur-sm"
        />
      </div>
      <div>
        <AnimatedOnView animationClass="opacity-0 slide-in-right">
          <div className="relative rounded-xs my-auto z-10 bg-accent p-18 w-[90vw] sm:w-[80vw] lg:w-[65vw] xl:w-[45vw] flex flex-col justify-center text-left">
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
