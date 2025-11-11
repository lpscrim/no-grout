import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";
import { useEffect, useRef } from "react";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  date: string;
  body?: PortableTextBlock[];
  images?: ProjectImage[];
}

interface ProjectSectionProps {
  project: Project;
  projIdx: number;
  fixedIdx: number | null;
  projectRef: (el: HTMLDivElement | null) => void;
  activeIdx: number;
  menuOpen: boolean;
  infoOpen: boolean;
  handleThumbClick: (projIdx: number, imgIdx: number) => void;
  handleMenuToggle: (projIdx: number) => void;
  handleInfoOpen: (open: boolean) => void;
  scrollToProject: (idx: number) => void;
  projectsLength: number;
  formatDate: (dateString: string) => string;
}

export default function ProjectSection({
  project,
  projIdx,
  fixedIdx,
  projectRef,
  activeIdx,
  menuOpen,
  handleThumbClick,
  handleMenuToggle,
  scrollToProject,
  projectsLength,
  formatDate,
  infoOpen,
  handleInfoOpen,
}: ProjectSectionProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentActiveIdxRef = useRef(activeIdx);

  // Update ref when activeIdx changes
  useEffect(() => {
    currentActiveIdxRef.current = activeIdx;
  }, [activeIdx]);

  // Auto-cycle through images when this project is active/fixed
  useEffect(() => {
    if (fixedIdx === projIdx && project.images && project.images.length > 1) {
      intervalRef.current = setInterval(() => {
        const nextIdx =
          (currentActiveIdxRef.current + 1) % project.images!.length;
        handleThumbClick(projIdx, nextIdx);
      }, 10000);
    }

    // Cleanup interval when project is no longer active or component unmounts
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
        restartTimeoutRef.current = null;
      }
    };
  }, [fixedIdx, projIdx, project.images, handleThumbClick]);

  // Stop cycling when user manually selects an image
  const handleManualThumbClick = (imgIdx: number) => {
    // Clear existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Clear any pending restart timeout
    if (restartTimeoutRef.current) {
      clearTimeout(restartTimeoutRef.current);
      restartTimeoutRef.current = null;
    }

    handleThumbClick(projIdx, imgIdx);

    restartTimeoutRef.current = setTimeout(() => {
      if (fixedIdx === projIdx && project.images && project.images.length > 1) {
        intervalRef.current = setInterval(() => {
          const nextIdx =
            (currentActiveIdxRef.current + 1) % project.images!.length;
          handleThumbClick(projIdx, nextIdx);
        }, 10000);
      }
      restartTimeoutRef.current = null; // Clear the ref since timeout completed
    }, 10000);
  };

  return (
    <div
      ref={projectRef}
      id={project.title.replace(/\s+/g, "-").toLowerCase()}
      className="relative bg-accent w-full xl:max-w-[1230px] h-[100svh] xl:h-[90svh] xl:rounded-sm overflow-hidden flex "
    >
      {/* Fixed header */}
      {fixedIdx === projIdx && (
        <div
          id="fixedHeader"
          className="fixed w-full top-15 lg:top-20 right-0 z-50 flex justify-end pointer-events-none transition-all bg-black/20 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none pb-18"
          style={{ height: "60px" }}
        >
          <div className="px-8 py-4 text-center inline-block sm:bg-black/10 sm:backdrop-blur-sm sm:rounded-xs h-20">
            <h6 className="text-xl sm:text-2xl 2xl:text-3xl font-semibold text-background">
              {project.title}
            </h6>
            <h6 className="text-md 2xl:text-lg text-right text-background/95">
              {formatDate(project.date)}
            </h6>
          </div>
        </div>
      )}

      {/* Sticky header*/}
      {fixedIdx !== projIdx && (
        <div
          className="sticky top-5 right-0 z-40 flex justify-end pointer-events-none w-full transition-all"
          style={{ height: "60px" }}
        >
          <div className="px-8 py-4 text-center inline-block">
            <h6 className="text-xl sm:text-2xl 2xl:text-3xl font-semibold text-background">
              {project.title}
            </h6>
            <h6 className="text-md text-right text-background/95">
              {formatDate(project.date)}
            </h6>
          </div>
        </div>
      )}

      {/* Info button*/}
      {fixedIdx === projIdx && project.body && (
        <div className="flex group w-50 py-20 justify-end fixed top-[39.2lvh] right-4 xl:right-8 z-50 pointer-events-auto">
          <div className="hidden group-hover:flex flex-row mr-1 mb-1.5 animate-pulse text-xs text-background/90 pointer-events-none items-end tracking-[5]">
            <p>about-&gt;</p>
          </div>
          <button
            type="button"
            className="mt-1 md:mt-2 xl:mt-4 md:mr-0.5 flex items-center justify-center rounded-full bg-primary hover:bg-secondary transition-colors shadow cursor-pointer"
            onClick={() => {
              handleInfoOpen(!infoOpen);
              if (menuOpen) handleMenuToggle(projIdx);
            }}
            aria-label="Show project info"
          >
            <InformationCircleIcon className="w-6 h-6 md:w-7 md:h-7 text-background" />
          </button>
        </div>
      )}

      {/* Navigation buttons */}
      <button
        className="fixed top-[43lvh] right-4 xl:right-8 z-50 text-background hover:text-secondary transition-colors text-3xl sm:text-2xl font-normal  cursor-pointer"
        onClick={() => {
          if (fixedIdx !== null && fixedIdx > 0) {
            const prevIdx = fixedIdx - 1;
            scrollToProject(prevIdx);
          }
        }}
        aria-label="Previous project"
      >
        <ArrowUpIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>
      <button
        className="fixed top-[56lvh] right-4 xl:right-8  z-50 text-background hover:text-secondary transition-colors text-3xl sm:text-2xl font-normal cursor-pointer"
        onClick={() => {
          if (fixedIdx === null) {
            scrollToProject(0);
          } else if (fixedIdx < projectsLength - 1) {
            const nextIdx = fixedIdx + 1;
            scrollToProject(nextIdx);
          }
        }}
        aria-label="Next project"
      >
        <ArrowDownIcon className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Side menu */}
      <div
        className={`absolute left-0 top-0 h-full transition-all z-60 duration-300 ${
          menuOpen ? "w-27 " : "w-2 sm:w-5 lg:w-7"
        }`}
      >
        <div
          className={`flex flex-col h-full transition-all shadow-lg ${
            menuOpen ? "bg-primary/80" : "bg-primary/50"
          }`}
        >
          <button
            className="group absolute top-1/2 -translate-y-1/2 left-full z-999 bg-accent/90 hover:bg-secondary transition-all rounded-r-full py-3 shadow cursor-pointer pointer-events-auto"
            onClick={() => {
              handleMenuToggle(projIdx);
              handleInfoOpen(false);
            }}
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-all duration-300  text-foreground group-hover:text-background ${
                menuOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 26 26"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
            <span
              className="text-base font-bold rotate-180 duration-300 text-foreground group-hover:text-background transition-all"
              style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
            >
              {menuOpen ? `close` : `more pics`}
            </span>
          </button>

          {/* Thumbnails */}
          <div
            className={`overflow-y-auto mx-auto mt-10 transition-opacity  ${
              menuOpen
                ? "opacity-100 delay-100 duration-300"
                : "opacity-0 duration-100"
            }`}
          >
            {project.images?.map((img: ProjectImage, imgIdx: number) => (
              <button
                key={img.src + "-" + imgIdx}
                className={`block w-21 h-15 m-3 rounded overflow-hidden border-2 ${
                  activeIdx === imgIdx ? "border-accent" : "border-transparent"
                }`}
                onClick={() => {
                  if (menuOpen) {
                    handleManualThumbClick(imgIdx);
                  }
                }}
                aria-label={`Show ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt || `Project image ${imgIdx + 1}`}
                  width={112}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Info Overlay */}
      {infoOpen && fixedIdx === projIdx && (
        <div className="mx-auto z-20 flex items-center justify-center slide-in-right">
          <div className="relative bg-accent/90 rounded-sm max-w-lg w-full mx-14 shadow-2xl text-foreground">
            <button
              className="absolute top-3 right-3 text-secondary hover:text-foreground cursor-pointer"
              onClick={() => handleInfoOpen(false)}
              aria-label="Close info"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <div className="px-8 pt-10 pb-18 text-base xl:text-xl">
              <h3 className=" font-bold mb-1">{project.title}</h3>
              <div className=" whitespace-pre-line">
                {project.body ? (
                  <PortableText value={project.body} />
                ) : (
                  "No additional information."
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main image */}
      {(project.images?.length ?? 0) > 0 && (
        <Image
          src={project.images![activeIdx].src}
          alt={
            project.images![activeIdx].alt || `Project image ${activeIdx + 1}`
          }
          fill
          className="object-cover transition-all duration-500"
          priority
        />
      )}
    </div>
  );
}
