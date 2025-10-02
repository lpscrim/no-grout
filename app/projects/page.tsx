import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="bg-accent section-light min-h-screen">
      <div className="mx-auto py-18 sm:py-24 lg:py-32 xl:px-10 ">
        <h2 className="text-4xl sm:text-5xl font-bold mb-18 lg:mb-20 mt-10 text-center text-secondary">
          Our Projects
        </h2>
        <div className="flex flex-col">
          <div className="relative w-full h-[90svh] xl:rounded-md overflow-hidden">
            <Image
              src="/hall.jpg"
              alt="Project 1"
              fill
              className="object-cover"
              priority
            />
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
