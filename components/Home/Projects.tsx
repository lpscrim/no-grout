'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Elegant Cashmere Kitchen",
    category: "kitchen design",
    year: "2023",
    href: "/kitchen.jpg",
    img: "/kitchen.jpg",
    alt: "Elegant Cashmere Kitchen",
  },
  {
    title: "Classic White Kitchen",
    category: "kitchen design",
    year: "2023",
    href: "/kitchen.jpg",
    img: "/kitchen.jpg",
    alt: "Classic White Kitchen",
  },
  {
    title: "Modern Kitchen",
    category: "kitchen design",
    year: "2022",
    href: "/kitchen.jpg",
    img: "/kitchen.jpg",
    alt: "Modern Kitchen",
  },
  {
    title: "Modern Kitchen2",
    category: "kitchen design2",
    year: "2022",
    href: "/kitchen.jpg",
    img: "/kitchen.jpg",
    alt: "Modern Kitchen2",
  },
  
];

export default function Projects() {
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    lineRefs.current.forEach((line) => {
      if (line) {
        gsap.fromTo(
          line,
          { width: 0, opacity: 0 },
          {
            width: "90%",
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="projects" className="section-dark bg-primary relative overflow-hidden">
      <div className="px-6 sm:px-8 lg:px-16 max-w-screen-xl mx-auto py-24 lg:py-30">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-left w-full max-w-3xl mb-6">
            <span className="inline-block text-accent my-10">Our Latest Work</span>
          </h2>
          <p className="text-lg max-w-xl text-background font-light text-left ">
            Each project is custom tailored, based on each client needs. We are
            ready to take on any kind of projects, be that small or complex.
            <br />
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          </p>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-30 my-20">
                
                <div className="lg:block hidden absolute inset-0 bg-background top-[50%] h-[1px] w-[90%] mx-auto line-animate-horizontal"></div>

                <div className="lg:block hidden absolute inset-0 bg-background left-[50%] w-[1px] h-[40%] top-[56%] line-animate-vertical"></div>
                <div className="lg:block hidden absolute inset-0 bg-background left-[50%] w-[1px] h-[40%] top-[4%] line-animate-vertical"></div>
          
          {projects.map((project, idx) => (
            <div key={project.title} className="relative w-full sm:w-[80%] md:w-[70%] lg:w-[90%] mx-auto ">
              {idx !== 0 && (
                <div
                  ref={(el) => { lineRefs.current[idx] = el; }}
                  className="block lg:hidden absolute bg-background -top-10 h-[1px] w-[90%] -translate-x-1/2 left-1/2 opacity-0"
                ></div>
              )}
              <Link
                id={`project-${idx}`}
                href={project.href}
                className="bg-secondary overflow-hidden flex flex-col group h-100 rounded-xs"
              >
                <div className="relative w-full h-[80%]">
                  <Image
                    src={project.img}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className=" bg-secondary px-6 py-4  flex-1 flex flex-col justify-between text-foreground group-hover:text-background transition-all z-10 h-[20%] overflow-hidden">
                  <div >
                    <div className="flex mb-2 justify-between gap-4">
                      <span className="text-xs uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs">{project.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link
            href="/#"
            className="bg-accent text-foreground px-6 py-4 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-secondary hover:text-background transition-colors"
          >
           <h3>All projects</h3> 
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="inline-block mb-2"
            >
              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
