import Image from "next/image";
import { ArrowDownIcon, ArrowUpIcon, InformationCircleIcon, XMarkIcon  } from "@heroicons/react/24/solid";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  date: string;
  body?: string;
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
      className="relative w-full h-[100lvh] xl:h-[90lvh] xl:rounded-md overflow-hidden flex "
    >
      {/* Navigation buttons */}
      <button
        className="fixed top-[43lvh] right-4 xl:right-2 z-50 text-background hover:text-secondary transition-colors text-3xl sm:text-2xl font-normal  cursor-pointer"
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
        className="fixed top-[56lvh] right-4 xl:right-2  z-50 text-background hover:text-secondary transition-colors text-3xl sm:text-2xl font-normal cursor-pointer"
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
      {/* Fixed header */}
      {fixedIdx === projIdx && (
        <div
          className="fixed top-15 lg:top-20 right-0 xl:right-10 z-50 flex justify-end pointer-events-none w-full transition-all"
          style={{ height: "60px" }}
        >
          <div className="px-8 py-4 text-center inline-block">
            <h6 className="text-2xl font-semibold text-background">
              {project.title}
            </h6>
            <h6 className="text-md text-right text-background/95">
              {formatDate(project.date)}
            </h6>
            {/* Info button*/}
            <div className="flex justify-end fixed top-[48.5lvh] right-4.5 xl:right-2 z-50 pointer-events-auto">
              <button
                type="button"
                className="mt-2 flex items-center justify-center rounded-full bg-secondary hover:bg-foreground transition-colors shadow cursor-pointer"
                onClick={() => handleInfoOpen(true)}
                aria-label="Show project info"
              >
                <InformationCircleIcon className="w-5 h-5 text-background" />
              </button>
            </div>
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
      {/* Side menu */}
      <div
        className={`absolute left-0 top-0 h-full z-20 transition-all duration-300 ${
          menuOpen ? "w-27 lg:w-40" : "w-2 sm:w-5 lg:w-7"
        }`}
      >
        <div
          className={`flex flex-col h-full transition-all shadow-lg ${
            menuOpen ? "bg-primary/80" : "bg-primary/50"
          }`}
        >
          <button
            className="absolute top-1/2 -translate-y-1/2 left-full  bg-accent/90 rounded-r-full py-2 shadow cursor-pointer"
            onClick={() => handleMenuToggle(projIdx)}
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-300 ${
                menuOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 26 26"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
            <span
              className="text-xs font-semibold rotate-180  text-foreground"
              style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
            >
              see more
            </span>
          </button>
          {/* Thumbnails */}
          <div
            className={`overflow-y-auto mx-auto mt-20 transition-opacity  ${
              menuOpen
                ? "opacity-100 delay-100 duration-300"
                : "opacity-0 duration-100"
            }`}
          >
            {project.images?.map((img: ProjectImage, imgIdx: number) => (
              <button
                key={img.src + "-" + imgIdx}
                className={`block w-21 h-15 lg:w-28 lg:h-20 m-3 rounded overflow-hidden border-2 ${
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
      {/* Info Overlay */}
      {infoOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 px-20 z-[999] flex items-center justify-center ">
          <div className="relative bg-background/90 rounded-sm px-8 py-20 max-w-lg w-full mx-4 shadow-2xl text-foreground">
            <button
              className="absolute top-3 right-3 text-secondary hover:text-accent cursor-pointer"
              onClick={() => handleInfoOpen(!infoOpen)}
              aria-label="Close info"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold mb-1">{project.title} Info</h3>
            <h4 className="text-md italic mb-4">
              {formatDate(project.date)}
            </h4>
            <div className="text-base whitespace-pre-line">
              {project.body ? project.body : "No additional information."}
            </div>
          </div>
        </div>
      )}
      {/* Main image */}
      {(project.images?.length ?? 0) > 0 && (
        <Image
          src={project.images![activeIdx].src}
          alt={project.images![activeIdx].alt}
          fill
          className="object-cover transition-all duration-500"
          priority
        />
      )}
    </div>
  );
}
