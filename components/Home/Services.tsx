"use client";

import React, { useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Wall Tiling",
    description: "Professional wall tiling for kitchens, bathrooms, and more.",
    image: "/hall.jpg",
  },
  {
    title: "Floor Tiling",
    description: "Durable and stylish floor tiling solutions for any space.",
    image: "/kitchen.jpg",
  },
  {
    title: "Groutless Tiling",
    description: "Modern groutless tiling for a seamless finish.",
    image: "/hall.jpg",
  },
  {
    title: "Tile Repairs",
    description: "Expert tile repairs to restore your surfaces.",
    image: "/kitchen.jpg",
  },
  {
    title: "Waterproofing",
    description: "Comprehensive waterproofing for wet areas.",
    image: "/hall.jpg",
  },
];

export default function Services() {
  // Start with first image
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  // Use last hovered index always
  const imageSrc = services[hoveredIdx].image;

  return (
    <section id="services" className=" bg-accent section-light">
      <div className="px-6 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto py-24 lg:py-32">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 lg:mb-16 mt-10 text-center text-secondary">
          Our Services
        </h2>
        <p className="text-lg max-w-xl text-foreground font-light text-center mx-auto mb-20">
          Each project is custom tailored, based on each client needs. We are
          ready to take on any kind of projects, be that small or complex
        </p>
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center items-center h-[350px] sm:h-[700px]">
            <Image
              src={imageSrc}
              width={500}
              height={800}
              alt="Service Example"
              className="w-full max-w-xl h-[350px] rounded-xs sm:h-[700px] object-cover transition-all duration-300"
            />
          </div>
          <ul className="grid gap-8">
            {services.map((service, idx) => (
              <li
                key={service.title}
                className="bg-background/50 hover:bg-background/70 p-6  rounded-xs cursor-pointer transition-all duration-200 "
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={() => setHoveredIdx(idx)}
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
