"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ClientImage } from "./ClientImage";
import { experiences } from "@/data/experienceData";

interface ExperienceProps {
  isAnimated: boolean;
}

export function Experience({ isAnimated }: ExperienceProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAnimated && sectionRef.current) {
      sectionRef.current.classList.add("animate-fade-in");
      sectionRef.current.dataset.animated = "true";
      const children = sectionRef.current.querySelectorAll(".animate-child");
      children.forEach((child) => {
        child.classList.add("animate-slide-in-left");
        (child as HTMLElement).style.animationDelay = "0ms";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            const children = entry.target.querySelectorAll(".animate-child");
            children.forEach((child, index) => {
              child.classList.add("animate-slide-in-left");
              (child as HTMLElement).style.animationDelay = `${index * 100}ms`;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const timeout = setTimeout(() => {
      if (sectionRef.current) observer.observe(sectionRef.current);
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [isAnimated]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`min-h-screen border-t border-border px-6 py-24 opacity-0 transition-opacity duration-1000 ${
        isAnimated ? "animate-fade-in" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl">
      <h2 className="mb-12 font-sans text-4xl md:text-6xl font-bold tracking-tight text-primary animate-child">
      Experience
        </h2>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, index) => (
            <Link
              key={index}
              href={`/experience/${exp.slug}`}
              className="group animate-child"
            >
              <div
                className="
                  relative flex flex-col h-full rounded-2xl 
                  bg-card/80 backdrop-blur-md border border-border/50 shadow-sm
                  transition-all duration-500 
                  hover:shadow-2xl hover:scale-[1.03] hover:bg-card/95
                "
              >
                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden rounded-t-2xl">
                  <ClientImage
                    src={exp.image}
                    alt={`${exp.company} Logo`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-start p-4">
                    <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                      {exp.company}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 flex-grow">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    {exp.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-primary/70">
                      {exp.date}
                    </p>
                    <span className="text-primary text-sm font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                      View Details →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 mt-16">
  <Link
    href="https://docs.google.com/document/d/1gQF_EHYSgmA5FIrl0h1Bp3gZIr4UmECdCCah_yjYebQ/edit?usp=sharing"
    className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:bg-primary/80 font-sans text-base tracking-tight"
  >
    View My CV
  </Link>

  <Link
    href="#projects"
    className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:bg-primary/80 font-sans text-base tracking-tight"
  >
    View My Projects
  </Link>
</div>

      </div>
    </section>
  );
}
