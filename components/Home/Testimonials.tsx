"use client";

import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";

const featuredTestimonial = {
  body: "Integer id nunc sit semper purus. Bibendum at lacus ut arcu blandit montes vitae auctor libero. Hac condimentum dignissim nibh vulputate ut nunc. Amet nibh orci mi venenatis blandit vel et proin. Non hendrerit in vel ac diam.",
  author: {
    name: "Brenna Goyette",
    handle: "brennagoyette",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    logoUrl:
      "https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg",
  },
};

const testimonials = [
  [
    [
      {
        body: "Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.",
        author: {
          name: "Leslie Alexander",
          handle: "lesliealexander",
          imageUrl:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Quia dolorem qui et. Atque quo aliquid sit eos officia. Dolores similique laboriosam quaerat cupiditate.",
        author: {
          name: "Michael Foster",
          handle: "michaelfoster",
          imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Consequatur ut atque. Itaque nostrum molestiae id veniam eos cumque. Ut quia eum fugit laborum autem inventore ut voluptate.",
        author: {
          name: "Dries Vincent",
          handle: "driesvincent",
          imageUrl:
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.",
        author: {
          name: "Lindsay Walton",
          handle: "lindsaywalton",
          imageUrl:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.",
        author: {
          name: "Courtney Henry",
          handle: "courtneyhenry",
          imageUrl:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.",
        author: {
          name: "Tom Cook",
          handle: "tomcook",
          imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.",
        author: {
          name: "Whitney Francis",
          handle: "whitneyfrancis",
          imageUrl:
            "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
    [
      {
        body: "Molestias ea earum quos nostrum doloremque sed. Quaerat quasi aut velit incidunt excepturi rerum voluptatem minus harum.",
        author: {
          name: "Leonard Krasner",
          handle: "leonardkrasner",
          imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Architecto libero natus est. Est quam debitis officia enim atque et ut non. Sunt reiciendis quasi eaque. Itaque error ut et.",
        author: {
          name: "Floyd Miles",
          handle: "floydmiles",
          imageUrl:
            "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
      {
        body: "Temporibus ea molestiae impedit adipisci perspiciatis illo aliquid. Quis ut ratione et voluptatem et. Nostrum explicabo iste unde beatae.",
        author: {
          name: "Emily Selman",
          handle: "emilyselman",
          imageUrl:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Flatten testimonials for mobile logic
function flattenTestimonials(testimonials) {
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
      className="relative isolate bg-background py-18 md:py-24 lg:py-32 section-dark"
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
          <h2 className="text-4xl sm:text-5xl font-bold mb-18 lg:mb-20 mt-10 text-center text-primary">Reviews</h2>
        </div>
        
        {/* Desktop grid */}
        <div className="hidden sm:grid mx-auto mt-16 max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm text-foreground sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          {/* Featured testimonial */}
          <figure className="rounded-sm bg-primary/90 shadow-lg ring-1 ring-accent/30 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-foreground sm:p-12 sm:text-xl">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 px-6 py-4 sm:flex-nowrap">
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
                      key={testimonial.author.handle}
                      className="rounded-sm bg-background p-6 shadow-lg ring-1 ring-accent/20"
                    >
                      <blockquote className="text-foreground">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                         <div className="flex flex-row w-full items-center justify-between">
                <div className="font-semibold text-primary">
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
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4  px-6 py-4">
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
            </figcaption>
          </figure>
          {/* Other testimonials */}
          {visibleTestimonials.map((testimonial) => (
            <figure
              key={testimonial.author.handle}
              className="rounded-sm bg-background p-6 shadow-sm ring-1 ring-accent/20 w-full"
            >
              <blockquote className="text-foreground">
                <p>{`“${testimonial.body}”`}</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
               <div className="flex flex-row w-full items-center justify-between">
                <div className="font-semibold text-primary">
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
    </section>
  );
}
