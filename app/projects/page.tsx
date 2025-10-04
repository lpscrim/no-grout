"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { client } from "@/sanity/lib/client";
import ProjectSection from "@/components/ProjectSection";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  interface ProjectImage {
    src: string;
    alt: string;
    // add other image properties if needed
  }

  interface Project {
    title: string;
    date: string;
    images?: ProjectImage[];
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [fixedIdx, setFixedIdx] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdxs, setActiveIdxs] = useState<number[]>([]);
  const [menuOpens, setMenuOpens] = useState<boolean[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(
        `*[_type == "post"] | order(date desc){
        title,
        date,
        "images": imageGallery[]{..., "src": asset->url, "alt": alt}
      }`
      )
      .then((data) => {
        setProjects(data);
        setActiveIdxs(data.map(() => 0));
        setMenuOpens(data.map(() => false));
        setLoading(false); 
      });
  }, []);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];
    projectRefs.current.forEach((ref, idx) => {
      if (!ref) return;
      triggers.push(
        ScrollTrigger.create({
          trigger: ref,
          start: "top top+=80",
          end: "bottom top+=80",
          onEnter: () => setFixedIdx(idx),
          onEnterBack: () => setFixedIdx(idx),
          onLeave: () => setFixedIdx(null),
          onLeaveBack: () => setFixedIdx(idx === 0 ? null : idx - 1),
        })
      );
    });
    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [projects]);

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

  const scrollToProject = (idx: number) => {
    const el = projectRefs.current[idx];
    if (el) {
      const offset = window.innerWidth < 1024 ? 0 : 80;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  }

  return (
    <main className="bg-accent section-light min-h-screen">
      <div className="mx-auto py-18 md:py-24 xl:px-10 ">
        <h2 className="text-4xl sm:text-5xl font-bold mb-18 lg:mb-20 mt-10 text-center text-secondary">
          Our Projects
        </h2>
        <p className="text-lg max-w-xl text-foreground font-light text-center mx-auto mb-16">
          A showcase of our recent tiling projects, demonstrating our expertise
          and attention to detail. Each project is custom tailored to meet our
          clients&#39; needs and preferences.
        </p>
        {loading ? (
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
          <div className="flex flex-col items-center gap-2 md:gap-20">
            {projects.map((project, projIdx) => (
              <ProjectSection
                key={project.title}
                project={project}
                projIdx={projIdx}
                fixedIdx={fixedIdx}
                projectRef={(el) => {
                  projectRefs.current[projIdx] = el;
                }}
                activeIdx={activeIdxs[projIdx]}
                menuOpen={menuOpens[projIdx]}
                handleThumbClick={handleThumbClick}
                handleMenuToggle={handleMenuToggle}
                scrollToProject={scrollToProject}
                projectsLength={projects.length}
                formatDate={formatDate}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
