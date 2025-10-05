import Image from "next/image";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  date: string;
  images?: ProjectImage[];
}

interface ProjectSectionProps {
  project: Project;
  projIdx: number;
  fixedIdx: number | null;
  projectRef: (el: HTMLDivElement | null) => void;
  activeIdx: number;
  menuOpen: boolean;
  handleThumbClick: (projIdx: number, imgIdx: number) => void;
  handleMenuToggle: (projIdx: number) => void;
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
}: ProjectSectionProps) {
  return (
    <div
      ref={projectRef}
      id={project.title.replace(/\s+/g, "-").toLowerCase()}
      className="relative w-full h-[100lvh] xl:h-[90lvh] xl:rounded-md overflow-hidden flex "
    >
      {/* Navigation buttons */}
      <button
        className="fixed xl:hidden top-[43lvh] sm:top-[45%] right-4 z-50 text-background hover:text-accent transition-colors text-3xl sm:text-2xl font-normal  cursor-pointer"
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
        className="fixed xl:hidden top-[56lvh] sm:top-[55%] right-4 z-50 text-background hover:text-accent transition-colors text-3xl sm:text-2xl font-normal cursor-pointer"
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
          menuOpen ? "w-35 sm:w-40" : "w-2 sm:w-7 lg:w-10"
        }`}
      >
        <div
          className={`flex flex-col h-full transition-all shadow-lg ${
            menuOpen ? "bg-primary/80" : "bg-primary/60"
          }`}
        >
          <button
            className="absolute top-1/2 left-full -translate-y-1/2 bg-accent/90 rounded-r-full p-2 shadow cursor-pointer"
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
                menuOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
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
                className={`block w-28 h-20 m-3 rounded overflow-hidden border-2 ${
                  activeIdx === imgIdx
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