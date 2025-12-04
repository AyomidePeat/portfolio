"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [animatedSections, setAnimatedSections] = useState(new Set<string>()); 

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.href.includes("#")) {
        e.preventDefault();
        const sectionId = target.href.split("#")[1];
        setActiveSection(sectionId);

        setTimeout(() => {
          setAnimatedSections((prev) => new Set(prev).add(sectionId));
        }, 300); // Adjust if needed
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, []);

  return (
    <main className="relative">
      <Navigation />

      {/* Sections */}
      <div className="pt-16">
        {activeSection === "home" && (
         <div className="h-screen">
            <div className="h-full overflow-y-auto scroll-smooth">
            <Hero isAnimated={animatedSections.has("home")} />
          </div>
          </div>
        )}

        {activeSection === "about" && (
           <div className="h-screen">
            <div className="h-full overflow-y-auto scroll-smooth">
            <About isAnimated={animatedSections.has("about")} />
          </div>
          </div>
        )}

        {activeSection === "experience" && (
          <div className="h-screen">
            <div className="h-full overflow-y-auto scroll-smooth">
              <Experience isAnimated={animatedSections.has("experience")} />
            </div>
            </div>
        )}

        {activeSection === "projects" && (
          <div className="h-screen">

            <div className="h-full overflow-y-auto scroll-smooth">
              <Projects isAnimated={animatedSections.has("projects")} />
            </div>
          </div>
        )}

        {activeSection === "contact" && (
          <div className="min-h-screen">
            <Contact isAnimated={animatedSections.has("contact")} />
          </div>
        )}
      </div>
    </main>
  );
}