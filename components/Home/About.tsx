"use client";
import { ParallaxBanner } from "react-scroll-parallax";
import AnimatedOnView from "@/components/AnimatedOnView";

export default function About () {
    return (
        <section
        id="about"
        className="relative min-h-[100vh] flex justify-end items-start overflow-hidden section-light bg-accent"
      >
        <div className="absolute inset-0">
          <ParallaxBanner
            layers={[{ image: "/hall.jpg", speed: -50 }]}
            className="h-full w-full"
          />
        </div>
        <div>
          <AnimatedOnView animationClass="slide-in-right">
            <div className="relative min-h-[100vh] z-10 bg-accent p-6 w-[45vw] sm:w-[35vw] lg:w-[25vw] xl:w-[20vw] flex flex-col justify-center text-left">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                About Us
              </h2>
              <p className="text-lg text-foreground">
                We are a passionate tiling company dedicated to quality
                craftsmanship and beautiful results. Let us transform your
                space!
              </p>
            </div>
          </AnimatedOnView>
        </div>
      </section>
    )
}