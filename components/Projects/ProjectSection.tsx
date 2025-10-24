import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PortableTextBlock } from "@portabletext/types";

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
  return (
    <div
      ref={projectRef}
      id={project.title.replace(/\s+/g, "-").toLowerCase()}
      className="relative w-full max-w-[1200px] h-[100lvh] xl:h-[90lvh] xl:rounded-md overflow-hidden flex "
    >
      {/* Fixed header */}
      {fixedIdx === projIdx && (
        <div
          className="fixed w-full 2xl:w-30 top-15 lg:top-20 right-0 xl:right-22 2xl:right-8 3xl:right-15 z-50 flex justify-end pointer-events-none transition-all"
          style={{ height: "60px" }}
        >
          <div className="px-8 py-4 text-center inline-block">
            <h6 className="text-2xl font-semibold text-background">
              {project.title}
            </h6>
            <h6 className="text-md text-right text-background/95">
              {formatDate(project.date)}
            </h6>
          </div>
        </div>
      )}

      {/* Sticky header*/}
      {fixedIdx !== projIdx && (
        <div
          className="sticky top-0 right-0 z-40 flex justify-end pointer-events-none w-full transition-all"
          style={{ height: "60px" }}
        >
          <div className="px-8 py-4 text-center inline-block">
            <h6 className="text-2xl font-semibold text-background">
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
        <div className="flex group animate-pulse justify-end fixed top-[49lvh] right-4 xl:right-8 z-50 pointer-events-auto">
          <span className="ml-3 px-3 py-1 rounded text-accent/90 text-sm font-semibold transition-opacity duration-1600 delay-300 opacity-0 group-hover:opacity-100">
            more info {'->'}
          </span>
          <button
            type="button"
            className="mt-1 flex items-center justify-center rounded-full bg-secondary hover:bg-foreground transition-colors shadow cursor-pointer"
            onClick={() => {
              handleInfoOpen(!infoOpen);
              if (menuOpen) handleMenuToggle(projIdx);
            }}
            aria-label="Show project info"
          >
            <InformationCircleIcon className="w-6 h-6 text-background" />
          </button>
          {/* Fade-in textbox */}
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
        <ArrowUpIcon className="w-6 h-6" />
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
        <ArrowDownIcon className="w-6 h-6" />
      </button>
      {/* Side menu */}
      <div
        className={`absolute left-0 top-0 h-full z-20 transition-all duration-300 ${
          menuOpen ? "w-27 " : "w-2 sm:w-5 lg:w-7"
        }`}
      >
        <div
          className={`flex flex-col h-full transition-all shadow-lg ${
            menuOpen ? "bg-primary/80" : "bg-primary/50"
          }`}
        >
          <button
            className="group absolute top-1/2 -translate-y-1/2 left-full z-999 bg-accent/90 hover:bg-secondary transition-all rounded-r-full py-2 shadow cursor-pointer pointer-events-auto"
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
              className={`transition-all duration-300 text-foreground group-hover:text-background ${
                menuOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 26 26"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
            <span
              className="text-sm lg:text-base font-bold rotate-180 duration-300 text-foreground group-hover:text-background transition-all"
              style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
            >
              see more
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
                    handleThumbClick(projIdx, imgIdx);
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
              className="absolute top-3 right-3 text-secondary hover:text-accent cursor-pointer"
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
