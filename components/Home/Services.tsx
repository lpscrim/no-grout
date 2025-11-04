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
  {
    title: "Floor Heating",
    description: "Comprehensive heating for floor areas.",
    image: "/hall.jpg",
  },
  {
    title: "Floor stuff",
    description: "Comprehensive stuff for floor areas.",
    image: "/hall.jpg",
  },
  {
    title: "Floor things",
    description: "Comprehensive things for floor areas.",
    image: "/hall.jpg",
  },
];

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);
  const imageSrc = services[hoveredIdx].image;

  return (
    <section id="services" className=" bg-accent section-light">
      <div className="px-6 sm:px-8 lg:px-16 max-w-screen-xl mx-auto py-18">
        <h2 className="text-4xl sm:text-5xl font-bold mb-14 mt-10 text-center text-secondary">
          Our Services
        </h2>
         <p className="text-lg max-w-xl text-foreground font-light text-center mx-auto mb-16">
          Each project is custom tailored, based on each client needs. We are
          ready to take on any kind of projects, be that small or complex
        </p>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center items-center h-[300px] lg:h-[550px]">
            <Image
              src={imageSrc}
              width={500}
              height={800}
              alt="Service Example"
              className="w-full max-w-xl h-[350px] rounded-xs lg:h-[550px] object-cover transition-all duration-300"
            />
          </div>
          <ul className="grid grid-cols-2 lg:grid-cols-2 gap-2 xl:gap-2.5 max-w-xl mx-auto">
            {services.map((service, idx) => (
              <li
                key={service.title}
                className={`bg-background/50 p-4 lg:p-5 rounded-xs cursor-pointer transition-all duration-200 ${hoveredIdx === idx ? " bg-background/70" : "bg-background/50"}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={() => setHoveredIdx(idx)}
              >
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-foreground">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
