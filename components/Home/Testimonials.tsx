"use client";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const featuredTestimonial = {
  body: "Excellent job and excellent, responsive customer service Highly recommended!",
  author: {
    name: "Gill MacAskill",
    job: "Retile shower tray , add splash back tiles in kitchen",
    date: "18 Apr 2025",
    location: "Edinburgh",
  },
};

const testimonials = [
  [
    [
      {
        body: "Andrew was great, did a good job, dealt with some unforeseen problems and was reliable",
        author: {
          name: "Sarah",
          job: "Retile around bathroom",
          date: "8 Jul 2024",
          location: "Edinburgh",
        },
      },
      {
        body: "Andrew done a great job of tiling our bathroom floor and shower area. Tricky cuts on the tile over tray but he made light work of it and it looks great. There when he said and good communication 👍",
        author: {
          name: "Customer",
          job: "New / replacement tiles - New tiling: 15 - 30m² - Tiles purchased, lay only **Customer description** Looking to get a bathroom tiled- 8m2 floor tiles- tiles are 60cmX60cm Floor to be tiled into tile over shower tray 8m2 wall tiles- Straight stack tiles around shower 5cmX20cm tiles. Shower pocket, tiled with 30cmx60cm tiles All materials are on site inc. adhesive, tiles and trims. Looking to get done asap. Thanks.",
          date: "17 Feb 2023",
        },
      },
      {
        body: "Great guy. very professional and reliable. Came back to sort problomatic tiles and left my self and the client very happy. many thanks",
        author: {
          name: "Customer",
          job: "New / replacement tiles - New tiling: 15 - 30m² - Tiles purchased, lay only **Customer description** Metro tiles 100 x 300. Large floor and wall tiles 300 x 600. total of roughly 18 sqm. a few cuts to accomadate shower thermostat and pan.",
          date: "4 May 2022",
        },
      },
    ],
    [
      {
        body: "Really great job by Andrew who communicated well, turned up exactly when he said he would and did a great job. No hesitation in recommending him!",
        author: {
          name: "abrookes_71",
          job: "Kitchen tiling",
          date: "11 Apr 2022",
          location: "Edinburgh",
        },
      },
      {
        body: "Andrew was quick to arrange to meet at the site and follow on with a quote which I have accepted.",
        author: {
          name: "ronald1968",
          job: "Tiling area around shop window",
          date: "27 Feb 2022",
          location: "Edinburgh",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Andrew did an outstanding job tiling our front hallway. Andrew`s high standards and attention to the smallest details, plus flexibility over timing of the job due to supplier issues with the tiles meant that the work was completed both beautifully and hassle-free for us. I would highly recommend him.",
        author: {
          name: "vanessa79700",
          job: "Front porch and stairwell",
          date: "27 Jan 2022",
          location: "Edinburgh",
        },
      },
      {
        body: "Did a very good job. Would totally recommend.",
        author: {
          name: "elaine_726",
          job: "Retile bathroom floor",
          date: "29 Nov 2021",
          location: "Edinburgh",
        },
      },
    ],
    [
      {
        body: "Andrew tiled our bathroom and en-suite floors brilliantly we couldn`t be happier with his level of workmanship, very professional and tidy and didn`t stop grafting at all , thanks again.",
        author: {
          name: "barry17694",
          job: "En-suite and Bathroom floor tiling",
          date: "9 Aug 2021",
          location: "Perth",
        },
      },
      {
        body: "Very friendly and efficient...job was just as I ask for...will be getting Andrew back to do another job soon",
        author: {
          name: "karen53908",
          job: "Floor tiler",
          date: "2 Jun 2021",
          location: "Lanark",
        },
      },
      {
        body: "Excellent work, would definitely use again.",
        author: {
          name: "francesca78302",
          job: "Tile a kitchen",
          date: "25 May 2021",
          location: "Livingston",
        },
      },
    ],
  ],
];

interface Author {
  name: string;
  date?: string;
  job?: string;
  location?: string;
}

interface Testimonial {
  body: string;
  author: Author;
}

type Testimonials = Testimonial[][][];

function classNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

// Flatten testimonials for mobile logic
function flattenTestimonials(testimonials: Testimonials): Testimonial[] {
  return testimonials.flat(2);
}

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const flatTestimonials = flattenTestimonials(testimonials);

  // Show only first 3 on mobile unless showAll is true
  const visibleTestimonials = showAll
    ? flatTestimonials
    : flatTestimonials.slice(0, 3);

  return (
    <section
      id="testimonials"
      className="relative isolate bg-accent/30 py-18 section-light md:section-dark"
    >
      {/* Decorative backgrounds */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-gradient-to-tr from-accent to-secondary"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="-ml-88 aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-gradient-to-tr from-accent to-secondary xl:mr-[calc(50%-12rem)] xl:ml-0"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-18 lg:mb-16 mt-10 text-center text-primary">
            Reviews
          </h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid mx-auto mt-16 max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm text-foreground sm:mt-18 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {/* Featured testimonial */}
          <figure className="rounded-sm bg-primary/90 shadow-lg ring-1 ring-accent/30 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-foreground sm:px-12 sm:text-xl">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-col items-left gap-x-4 gap-y-4 p-4 sm:flex-nowrap">
              <div className="flex flex-row w-full items-center justify-between">
                <div className="font-semibold text-background">
                  {featuredTestimonial.author.name}
                </div>
                <div className="flex gap-x-1 text-yellow-400">
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                </div>
              </div>
              <div className="font-semibold flex flex-row justify-between text-xs text-foreground/70">
                <div>{featuredTestimonial.author.location}</div>
                <div>{featuredTestimonial.author.date}</div>
              </div>
            </figcaption>
          </figure>
          {/* Other testimonials in columns */}
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                      ? "xl:row-span-2"
                      : "xl:row-start-1",
                    "space-y-8"
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.date}
                      className="rounded-sm bg-secondary/30 p-4 shadow-lg ring-1 ring-accent/20"
                    >
                      <blockquote className="text-foreground">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="flex flex-col mt-6 items-left gap-x-4">
                        <div className="flex flex-row w-full items-center justify-between">
                          <div className="font-semibold text-primary">
                            {testimonial.author.name}
                          </div>
                          <div className="flex gap-x-1 text-yellow-400">
                            <StarIcon
                              aria-hidden="true"
                              className="size-3 flex-none"
                            />
                            <StarIcon
                              aria-hidden="true"
                              className="size-3 flex-none"
                            />
                            <StarIcon
                              aria-hidden="true"
                              className="size-3 flex-none"
                            />
                            <StarIcon
                              aria-hidden="true"
                              className="size-3 flex-none"
                            />
                            <StarIcon
                              aria-hidden="true"
                              className="size-3 flex-none"
                            />
                          </div>
                        </div>
                        <div className="font-semibold flex flex-row justify-between text-xs text-foreground/70">
                          <div>{testimonial.author.location}</div>
                          <div>{testimonial.author.date}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Mobile: show only featured + first 3, expandable */}
        <div className="sm:hidden mt-12 flex flex-col items-center gap-8">
          {/* Featured testimonial */}
          <figure className="rounded-sm bg-primary/90 shadow-lg ring-1 ring-accent/30 w-full">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-foreground">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-col items-left gap-x-4 gap-y-4  px-6 py-4">
              <div className="flex flex-row w-full items-center justify-between">
                <div className="font-semibold text-background">
                  {featuredTestimonial.author.name}
                </div>
                <div className="flex gap-x-1 text-yellow-400">
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                  <StarIcon aria-hidden="true" className="size-3 flex-none" />
                </div>
              </div>
              <div className="font-semibold flex flex-row justify-between text-xs text-foreground/70">
                <div>{featuredTestimonial.author.location}</div>
                <div>{featuredTestimonial.author.date}</div>
              </div>
            </figcaption>
          </figure>
          {/* Other testimonials */}
          {visibleTestimonials.map((testimonial) => (
            <figure
              key={testimonial.author.date}
              className="rounded-sm bg-secondary/30 p-6 shadow-sm ring-1 ring-accent/20 w-full"
            >
              <blockquote className="text-foreground">
                <p>{`“${testimonial.body}”`}</p>
              </blockquote>
              <figcaption className="mt-6 flex flex-col items-left gap-x-4">
                <div className="flex flex-row w-full items-center justify-between">
                  <div className="font-semibold text-primary">
                    {testimonial.author.name}
                  </div>
                  <div className="flex gap-x-1 text-yellow-400">
                    <StarIcon aria-hidden="true" className="size-3 flex-none" />
                    <StarIcon aria-hidden="true" className="size-3 flex-none" />
                    <StarIcon aria-hidden="true" className="size-3 flex-none" />
                    <StarIcon aria-hidden="true" className="size-3 flex-none" />
                    <StarIcon aria-hidden="true" className="size-3 flex-none" />
                  </div>
                </div>
                <div className="font-semibold flex flex-row justify-between text-xs text-foreground/70">
                  <div>{testimonial.author.location}</div>
                  <div>{testimonial.author.date}</div>
                </div>
              </figcaption>
            </figure>
          ))}
          {flatTestimonials.length > 3 && (
            <button
              className="mt-2 px-6 py-2 rounded bg-primary text-background font-semibold cursor-pointer shadow hover:bg-secondary transition"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "See less reviews" : "See more reviews"}
            </button>
          )}
        </div>
      </div>
      <Link href="/testimonials" className="absolute bottom-4 right-4 text-sm text-secondary hover:underline hover:text-foreground transition-all">
        See more at MyBuilder.com
      </Link>
    </section>
  );
}
