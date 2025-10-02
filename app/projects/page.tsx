'use client';
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const [activeTitleIdx, setActiveTitleIdx] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdxs, setActiveIdxs] = useState(projects.map(() => 0));
  const [menuOpens, setMenuOpens] = useState(projects.map(() => false));

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    // Hide overlay when above the first project
    if (projectRefs.current[0]) {
      triggers.push(
        ScrollTrigger.create({
          trigger: projectRefs.current[0],
          start: "top top+=80",
          onLeaveBack: () => setActiveTitleIdx(null),
          onEnter: () => setActiveTitleIdx(0),
        })
      );
    }

    // Show overlay for each project as it reaches the top
    projectRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      triggers.push(
        ScrollTrigger.create({
          trigger: ref,
          start: "top top+=80",
          end: "bottom top+=80",
          onEnter: () => setActiveTitleIdx(idx),
          onEnterBack: () => setActiveTitleIdx(idx),
        })
      );
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

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
      <div className="mx-auto py-18 sm:py-24 xl:px-10 ">
        <h2 className="text-4xl sm:text-5xl font-bold mb-18 lg:mb-20 mt-10 text-center text-secondary">
          Our Projects
        </h2>
        <p className="text-lg max-w-xl text-foreground font-light text-center mx-auto mb-16">
          A showcase of our recent tiling projects, demonstrating our expertise
          and attention to detail. Each project is custom tailored to meet our
          clients' needs and preferences.
        </p>
        {/* Fixed project title overlay */}
        {activeTitleIdx !== null && (
  <div className="fixed top-20 right-0 left-0 flex justify-center pointer-events-none z-50">
    <div className="bg-background/80 px-8 py-4 rounded-xl text-center shadow-lg inline-block">
      <h3 className="text-2xl font-semibold text-secondary">
        {projects[activeTitleIdx]?.title}
      </h3>
    </div>
  </div>
)}
        <div className="flex flex-col items-center gap-20">
          {projects.map((project, projIdx) => (
            <div
              ref={(el) => (projectRefs.current[projIdx] = el)}
              id={project.title.replace(/\s+/g, "-").toLowerCase()}
              key={project.title}
              className="relative w-full h-[100svh] xl:rounded-md overflow-hidden flex mb-10"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
