"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Logs" },
  { href: "#contact", label: "Contact" },
];

export function ResponsiveNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="relative flex items-center gap-2">
      <nav
        aria-label="Main navigation"
        className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex"
      >
        {navigationLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="transition-colors hover:text-primary"
          >
            {label}
          </Link>
        ))}
      </nav>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Toggle color theme"
        title="Toggle color theme"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <Sun aria-hidden="true" className="hidden dark:block" />
        <Moon aria-hidden="true" className="block dark:hidden" />
      </Button>

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`absolute right-0 top-full z-50 mt-2 w-48 border border-border bg-background p-2 shadow-lg md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {navigationLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            {label}
          </Link>
        ))}
        <a
          href="/FOLAWE_OLUWOLE_FullstackDeveloper.pdf"
          download="resume_v4.pdf"
          onClick={() => setIsOpen(false)}
          className="mt-1 flex items-center gap-2 border-t border-border px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent"
        >
          <Download aria-hidden="true" className="size-4" />
          Download resume
        </a>
      </nav>
    </div>
  );
}
