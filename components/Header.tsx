"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import NavIcon from "./NavIcon/NavIcon";
import "@/styles/globals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navigation = [
  { name: "Projects", href: "/#projects" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerMode, setHeaderMode] = useState<"light" | "dark">("dark");
  const headerRef = useRef<HTMLElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll(".section-light, .section-dark")
    );
    console.log("Sections found:", sections);
    sections.forEach((section: Element) => {
      const isLight = section.classList.contains("section-light");
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        onEnter: () => setHeaderMode(isLight ? "light" : "dark"),
        onEnterBack: () => setHeaderMode(isLight ? "light" : "dark"),
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const textClass = headerMode === "light" ? "foreground" : "background";
  const hoverClass = headerMode === "light" ? "background" : "accent";
  const menuBack = headerMode === "light" ? "bg-accent/25" : "bg-black/25";

  return (
    <header
      ref={headerRef}
      className={`fixed w-full z-999 transition-color duration-500 text-${textClass} bg-transparent ${
        headerMode === "light" ? "lg:bg-accent" : "lg:bg-primary"
      }`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-4 px-4 lg:py-6 lg:px-8 z-999"
      >
        <Link
          href="#"
          className={`-m-1.5 p-1.5 text-xl font-bold invisible lg:visible hover:text-${hoverClass} transition-colors`}
        >
          No Grout About It
        </Link>
        <div className="flex lg:hidden z-999">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 z-999 cursor-pointer "
          >
            <span className="sr-only">Open main menu</span>
            <NavIcon
              open={mobileMenuOpen}
              color={textClass}
              hoverColor={hoverClass}
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base/6 font-semibold transition-colors 
      ${headerMode === "light" ? "hover:text-secondary" : "hover:text-accent"}`}
              onClick={(e) => {
                setMobileMenuOpen(false);

                const sectionId = item.href.replace("/#", "");
                const section = document.getElementById(sectionId);
                if (section) {
                  e.preventDefault();
                  const yOffset = 5;
                  const y =
                    section.getBoundingClientRect().top +
                    window.pageYOffset +
                    yOffset;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden z-50"
      >
        <DialogPanel
          className={`fixed top-0 inset-y-0 right-0 z-50 w-full ${menuBack} h-screen overflow-y-auto backdrop-blur-[7px] p-6 lg:max-w-[280px]`}
        >
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="w-10 rounded-md p-4 mr-2.5 z-999 cursor-pointer "
            >
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="flow-root mt-[32vh] ">
            <div className="-my-6 divide-y divide-background-500 ">
              <div className="space-y-12 py-6 text-center ">
                {navigation.map((item, idx) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`opacity-0 -mx-3 block rounded-lg px-3 py-2 text-3xl sm:text-4xl font-semibold duration-200 transition-color drop-in text-${textClass} hover:text-${hoverClass}`}
                    style={{
                      animationDelay: `${idx * 0.12}s`,
                    }}
                    onClick={(e) => {
                      setMobileMenuOpen(false);

                      const sectionId = item.href.replace("/#", "");
                      const section = document.getElementById(sectionId);
                      if (section) {
                        e.preventDefault();
                        const yOffset = 5;
                        const y =
                          section.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 left-10 cursor-pointer">
              <Link href="mailto:example@example.com">
                <EnvelopeIcon
                  className={`h-6 w-6 transition-all duration-300 hover:scale-125 text-${textClass} hover:text-${hoverClass}`}
                />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
