"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProjectSection from "@/components/Projects/ProjectSection";

gsap.registerPlugin(ScrollTrigger);

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  date: string;
  images?: ProjectImage[];
}

export default function ProjectsClient({ projects }: { projects: Project[] }) {
  const [fixedIdx, setFixedIdx] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIdxs, setActiveIdxs] = useState<number[]>(projects.map(() => 0));
  const [menuOpens, setMenuOpens] = useState<boolean[]>(projects.map(() => false));
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
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

   {/* useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    projects.forEach((project, projIdx) => {
      if (!menuOpens[projIdx] && project.images && project.images.length > 1) {
        timers[projIdx] = setInterval(() => {
          setActiveIdxs((prev) =>
            prev.map((val, idx) =>
              idx === projIdx
                ? (val + 1) % project.images!.length
                : val
            )
          );
        }, 10000);
      }
    });
    return () => {
      timers.forEach((timer) => timer && clearInterval(timer));
    };
  }, [projects, menuOpens]);
  */}

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

  const handleInfoOpen = (open: boolean) => {
    setInfoOpen(open);
  }

  const scrollToProject = (idx: number) => {
    const el = projectRefs.current[idx];
    if (el) {
      let offset = 0;
      if (window.innerWidth >= 1280) { 
        offset = 70;
      }
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  }

  return (
    <main className="bg-accent section-dark min-h-[100svh]">
      <div className="mx-auto lg:py-17 xl:px-10 "> {/* Adjusted padding - py-18 md:py-24 */}
        {/*<h2 className="text-4xl sm:text-5xl font-bold mb-18 lg:mb-20 mt-10 text-center text-secondary">
          Our Projects
        </h2>
        <p className="text-lg max-w-xl text-foreground font-light text-center mx-auto mb-16">
          A showcase of our recent tiling projects, demonstrating our expertise
          and attention to detail. Each project is custom tailored to meet our
          clients&#39; needs and preferences.
        </p>*/}
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
              handleInfoOpen={handleInfoOpen}
              infoOpen={infoOpen}
              handleThumbClick={handleThumbClick}
              handleMenuToggle={handleMenuToggle}
              scrollToProject={scrollToProject}
              projectsLength={projects.length}
              formatDate={formatDate}
            />
          ))}
        </div>
      </div>
    </main>
  );
}