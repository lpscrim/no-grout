"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { client } from "@/sanity/lib/client"; // Adjust path as needed

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  type Project = {
    title: string;
    category: string;
    date: string;
    img: string;
    alt?: string;
  };

  
  function formatDateM(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { month: "long"});
  }
  function formatDateY(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { year: "numeric" });
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(date desc)[0...4]{
          title,
          category,
          date,
          "img": imageGallery[0].asset->url,
          "alt": imageGallery[0].alt
        }`
      )
      .then((data) => {
        setProjects(data);
        setLoading(false);
      });
  }, []);

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
  }, [projects]);

  return (
    <section
      id="projects"
      className="section-dark bg-primary relative overflow-hidden"
    >
      <div className="px-6 sm:px-8 lg:px-20 max-w-screen-xl mx-auto py-18 md:py-24 lg:py-30">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-left w-full max-w-3xl mb-6">
            <span className="inline-block text-accent my-10">
              Our Latest Work
            </span>
          </h2>
          <p className="text-lg max-w-2xl text-background font-light text-left ">
            Each project is custom tailored, based on each client needs. We are
            ready to take on any kind of projects, be that small or complex.
            <br />
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        { loading ? (
          <div className="flex flex-col justify-center items-center h-96">
            <span className="text-xl text-secondary animate-pulse">
              Loading projects...
            </span>
            <svg className="animate-spin mx-auto mt-5 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        ) : (
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-y-25 my-20">
          <div className="lg:block hidden absolute inset-0 bg-accent top-[50%] h-[1px] w-[70%] mx-auto line-animate-horizontal"></div>
          <div className="lg:block hidden absolute inset-0 bg-accent left-[50%] w-[1px] h-[40%] top-[60%] line-animate-vertical"></div>
          <div className="lg:block hidden absolute inset-0 bg-accent left-[50%] w-[1px] h-[40%] top-[5%] line-animate-vertical"></div>

          {projects.map((project, idx) => (
            <div
              key={project.title + idx}
              className="relative w-[90%] sm:w-[80%] md:w-[65%] lg:w-[90%] mx-auto "
            >
              {idx !== 0 && (
                <div
                  ref={(el) => {
                    lineRefs.current[idx] = el;
                  }}
                  className="block lg:hidden absolute bg-accent -top-10 h-[1px] w-[70%] -translate-x-1/2 left-1/2 opacity-0 line-animate-horizontal"
                ></div>
              )}
              <Link
                id={`project-${idx}`}
                href={`/projects/#${project.title.replace(/\s+/g, "-").toLowerCase()}`}
                className={`overflow-hidden flex flex-col group h-100 rounded-xs`}
              >
                <div className="relative w-full h-[80%]">
                  <Image
                    src={project.img}
                    alt={project.alt || project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-[1px]"
                  />
                </div>
                <div className={`${idx % 2 ? "bg-secondary" : "bg-secondary"} lg:bg-secondary  px-6 py-4  flex-1 flex flex-col justify-between text-foreground  group-hover:brightness-110 transition-all duration-500 z-10 h-[20%] overflow-hidden`}>
                  <div>
                    <div className="flex mb-1 justify-between gap-4">
                      <span className="text-xs uppercase">
                        {formatDateM(project.date)}
                      </span>
                      <span className="text-sm">{formatDateY(project.date)}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div> )}
        <div className="flex justify-center mt-12">
          <Link
            href="/#"
            className="bg-secondary text-foreground px-6 py-4 rounded-full text-sm font-semibold flex items-center gap-2 hover:brightness-110 transition-brightness duration-500"
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
