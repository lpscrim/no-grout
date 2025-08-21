"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
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
    <header className="bg-primary text-accent z-999">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 z-999"
      >
        <a href="#" className="-m-1.5 p-1.5 text-xl font-bold ">
          No Grout About It
        </a>
        <div className="flex lg:hidden z-999">
          <button
            type="button"
            onClick={() => toggleMobileMenu()}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 z-999 cursor-pointer"
          >
            <span className="sr-only">Open main menu</span>
            <NavIcon open={mobileMenuOpen} color='secondary' />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-accent"
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

          <DialogPanel className="fixed top-0 inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary p-6 sm:max-w-[280px]">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => toggleMobileMenu()}
                className="w-10 rounded-md p-4 mr-2.5 z-999 cursor-pointer "
              >
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="mt-8 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-accent hover:bg-secondary/10 transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
      </Dialog>
    </header>
  );
}
