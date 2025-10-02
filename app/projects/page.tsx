'use client';
import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Modern Hall",
    images: [
      { src: "/hall.jpg", alt: "Hall Main" },
      { src: "/hall2.jpg", alt: "Hall Alt 1" },
      { src: "/hall3.jpg", alt: "Hall Alt 2" },
    ],
  },
  {
    title: "Kitchen Renovation",
    images: [
      { src: "/kitchen.jpg", alt: "Kitchen Main" },
      { src: "/kitchen2.jpg", alt: "Kitchen Alt 1" },
      { src: "/kitchen3.jpg", alt: "Kitchen Alt 2" },
    ],
  },
  {
    title: "Luxury Bathroom",
    images: [
      { src: "/bathroom.jpg", alt: "Bathroom Main" },
      { src: "/bathroom2.jpg", alt: "Bathroom Alt 1" },
      { src: "/bathroom3.jpg", alt: "Bathroom Alt 2" },
    ],
  },
];

export default function Projects() {
  // Track active image for each project
  const [activeIdxs, setActiveIdxs] = useState(projects.map(() => 0));
  const [menuOpens, setMenuOpens] = useState(projects.map(() => false));

  const handleThumbClick = (projIdx: number, imgIdx: number) => {
    setActiveIdxs((prev) =>
      prev.map((val, idx) => (idx === projIdx ? imgIdx : val))
    );
  };

  const handleMenuToggle = (projIdx: number) => {
    setMenuOpens((prev) =>
      prev.map((open, idx) => (idx === projIdx ? !open : open))
    );
  };

  return (
    <section id="projects" className="bg-accent section-light min-h-screen">
      <div className="mx-auto py-18 sm:py-24 lg:py-32 xl:px-10 ">
        <h2 className="text-4xl sm:text-5xl font-bold mb-18 lg:mb-20 mt-10 text-center text-secondary">
          Our Projects
        </h2>
        <div className="flex flex-col items-center gap-20">
          {projects.map((project, projIdx) => (
            <div
              key={project.title}
              className="relative w-full h-[90svh] xl:rounded-md overflow-hidden flex mb-10"
            >
              {/* Side menu */}
              <div
                className={`absolute left-0 top-0 h-full z-20 transition-all duration-500 ${
                  menuOpens[projIdx] ? "w-40" : "w-5 sm:w-10"
                }`}
              >
                <div className="flex flex-col h-full bg-primary/80 shadow-lg">
                  {/* Arrow button */}
                  <button
                    className="absolute top-1/2 left-full -translate-y-1/2 bg-accent rounded-r-full p-2 shadow cursor-pointer"
                    onClick={() => handleMenuToggle(projIdx)}
                    aria-label="Toggle menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-300 ${
                        menuOpens[projIdx] ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  </button>
                  {/* Thumbnails */}
                  <div
                    className={`overflow-y-auto mt-16 transition-opacity duration-300 ${
                      menuOpens[projIdx] ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {project.images.map((img, imgIdx) => (
                      <button
                        key={img.src}
                        className={`block w-28 h-20 m-2 rounded overflow-hidden border-2 ${
                          activeIdxs[projIdx] === imgIdx
                            ? "border-accent"
                            : "border-transparent"
                        }`}
                        onClick={() => handleThumbClick(projIdx, imgIdx)}
                        aria-label={`Show ${img.alt}`}
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={112}
                          height={80}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              {/* Main image */}
              <Image
                src={project.images[activeIdxs[projIdx]].src}
                alt={project.images[activeIdxs[projIdx]].alt}
                fill
                className="object-cover transition-all duration-500"
                priority
              />
              {/* Project title overlay */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-background/80 px-8 py-4 rounded-xl text-center shadow-lg">
                <h3 className="text-2xl font-semibold text-secondary">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
