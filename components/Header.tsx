"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import NavIcon from "./NavIcon/NavIcon";
import "@/styles/globals.css";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full bg-transparent text-background z-999">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between py-4 px-4 lg:py-6 lg:px-8 z-999"
      >
        <a href="#" className="-m-1.5 p-1.5 text-xl font-bold text-background hover:text-accent transition-colors invisible lg:visible">
          No Grout About It
        </a>
        <div className="flex lg:hidden z-999">
          <button
            type="button"
            onClick={() => toggleMobileMenu()}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 z-999 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <NavIcon open={mobileMenuOpen} color={"accent"} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base/6 font-semibold text-background hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden z-50"
      >
        <DialogPanel className="fixed top-0 inset-y-0 right-0 z-50 w-full h-screen overflow-y-auto bg-transparent backdrop-blur-[5px] p-6 sm:max-w-[280px]">
          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => toggleMobileMenu()}
              className="w-10 rounded-md p-4 mr-2.5 z-999 cursor-pointer "
            >
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="flow-root mt-10">
            <div className="-my-6 divide-y divide-background-500 ">
              <div className="space-y-6 py-6 text-center ">
                {navigation.map((item, idx) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="opacity-0 -mx-3 block rounded-lg px-3 py-2 text-xl/7 sm:text-base/7 font-semibold text-background hover:text-accent duration-300 transition-all  hover:scale-105 drop-in"
                    style={{ animationDelay: `${idx * 0.12}s` }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 left-10 cursor-pointer">
              <EnvelopeIcon className="h-6 w-6 text-background transition-transform duration-300 hover:scale-125" />
              <span className="sr-only">Email</span>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
