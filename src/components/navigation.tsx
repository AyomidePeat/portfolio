"use client";

import Link from "next/link";

export function Navigation() {
  return (
    <>
      <nav className="fixed top-0 left-10 right-10 z-50 bg-background/80 backdrop-blur-md animate-fade-in hidden md:block">
        <div className="px-2 py-4 flex items-center justify-between">
          <Link
            href="#home"
            className="font-sans text-xl font-bold text-primary tracking-tight animate-underline-hover hover:text-accent transition-colors"
          >
            Oladipupo Peace
          </Link>
          <ul className="flex space-x-6 text-foreground">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className="font-sans text-lg tracking-tight capitalize animate-underline-hover hover:text-accent transition-colors"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md md:hidden">
        <div className="px-2 py-4">
          <ul className="flex justify-around bg-background/90 p-2">
            {["home", "about", "experience", "projects", "contact"].map((section) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className="font-sans text-lg tracking-tight capitalize animate-underline-hover hover:text-accent transition-colors"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}