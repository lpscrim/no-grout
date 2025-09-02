import Image from "next/image";

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
  return (
    <section className="section-dark bg-primary relative overflow-hidden">
      <div className="px-4 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto pt-24 pb-16">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-left w-full max-w-3xl mb-6">
            <span className="inline-block text-accent">Our Latest Work</span>
          </h2>
          <p className="text-lg max-w-xl text-background font-light text-left">
            Each project is custom tailored, based on each client needs. We are
            ready to take on any kind of projects, be that small or complex.
          </p>
        </div>
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-10">
          <div className="lg:block hidden absolute inset-0 bg-background top-[50%] h-[1px] w-[90%] mx-auto line-animate-horizontal"></div>
          <div className="lg:block hidden absolute inset-0 bg-background top-[50%] h-[1px] w-[90%] mx-auto line-animate-horizontal"></div>
          <div className="lg:block hidden absolute inset-0 bg-background top-[50%] h-[1px] w-[90%] mx-auto line-animate-horizontal"></div>

          <div className="lg:block hidden absolute inset-0 bg-background left-[50%] w-[1px] h-[40%] top-[56%] line-animate-vertical"></div>
          <div className="lg:block hidden absolute inset-0 bg-background left-[50%] w-[1px] h-[40%] top-[4%] line-animate-vertical"></div>
          {projects.map((project, idx) => (
            <div key={project.title} className="relative">
              {idx !== 0 && (
                <div className="block lg:hidden absolute bg-background -top-10 h-[1px] w-[90%] -translate-x-1/2 left-1/2 z-99 line-animate-horizontal"></div>
              )}
              <a
                id={`project-${idx}`}
                href={project.href}
                className="bg-secondary overflow-hidden flex flex-col group h-120"
              >
                <div className="relative w-full h-[80%]">
                  <Image
                    src={project.img}
                    alt={project.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 89vw, (max-width: 991px) 42vw, 48vw"
                  />
                </div>
                <div className=" bg-secondary p-6 flex-1 flex flex-col justify-between text-foreground group-hover:text-background z-10 h-[20%] overflow-hidden">
                  <div>
                    <div className="flex mb-2 justify-between gap-4">
                      <span className="text-xs uppercase">
                        {project.category}
                      </span>
                      <span className="text-xs">{project.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <a
            href="/en/projects"
            className="bg-accent text-foreground px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-secondary hover:text-background transition-colors"
          >
            view all projects
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="inline-block"
            >
              <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
