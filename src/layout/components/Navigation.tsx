import { paths } from "@/config/paths";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Logo } from "./logo";
import { NavItem } from "./nav-item";

const navLinks = [
  { href: paths["about-me"].path, label: "About me" },
  { href: paths["digital-cv"].path, label: "Digital CV" },
  { href: paths.portfolio.path, label: "Portfolio" },
  { href: paths.contact.path, label: "Contact" },
];

interface Props {}

export const Navigation: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="fixed top-0 w-full bg-primary/70 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between h-20">
        <Logo />

        {/* Desktop links */}
        <div className="hidden lg:flex gap-8 text-lg pr-6">
          {navLinks.map(({ href, label }) => (
            <NavItem key={href} href={href} label={label} />
          ))}
        </div>

        {/* Burger button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="lg:hidden flex flex-col justify-center gap-1.5 pr-6 text-secondary"
        >
          <i className="fa-solid fa-bars text-2xl leading-none size-6"></i>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-1 px-4 pb-4">
          {navLinks.map(({ href, label }) => (
            <NavItem key={href} href={href} label={label} />
          ))}
        </div>
      </div>
    </nav>
  );
};
