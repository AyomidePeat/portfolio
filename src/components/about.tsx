"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutProps {
  isAnimated: boolean;
}

export function About({ isAnimated }: AboutProps) {
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
              (child as HTMLElement).style.animationDelay = `${index * 80}ms`;
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

  const skills = ["Flutter", "AWS Cloud", "Python", "Django"];

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen border-t border-border px-6 py-24 opacity-0 transition-opacity duration-1000 ${isAnimated ? "animate-fade-in" : ""}`}
      id="about"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 font-sans text-4xl md:text-6xl font-bold tracking-tight text-primary animate-child">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Profile Image & Skills */}
          <div className="w-full md:w-2/5 flex flex-col items-center md:items-start animate-child">
            <div className="relative w-64 h-64 md:w-72 md:h-72 group rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 animate-pulse-glow transition-all duration-700 rounded-xl" />
              {typeof window !== "undefined" && (
                <Image
                  src="/images/peace.jpg"
                  alt="Profile Picture"
                  width={288}
                  height={288}
                  className="relative object-cover border-4 border-primary shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl rounded-xl cursor-pointer"
                  priority
                  onError={(e) => {
                    console.error("Image failed to load:", e);
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              )}
            </div>

            {/* Skills */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium text-sm transition-all hover:bg-primary/50 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          
            {/* Education */}
            <div className="mt-2 text-sm font-semibold text-muted-foreground">
              B.Eng. Computer Engineering, 
            </div>
            <div className="mt-2 text-sm font-semibold text-muted-foreground">
              Federal University of Technology Akure
            </div>
          </div>
          
          {/* About Text */}
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg w-full md:w-3/5 animate-child">
            <p className="text-balance text-justify">
            I create software that  works effectively. I develop technology that stays out of your way. From Flutter apps that are easy to use to cloud systems that scale efficiently, I focus on ensuring every interaction is smooth, fast, and reliable.            </p>
            <p className="text-balance text-justify">
              I enjoy solving complex problems and turning them into experiences that feel effortless. The best technology isn&apos;t flashy; it&apos;s invisible, and human-centered.
            </p>
            <p className="text-balance text-justify">
              My background in Computer Engineering means I approach software development with a strong system-level mindset. I don&apos;t just write code; I create products that last. My work is guided by a solid understanding of the hardware and design principles that support it.
            </p>
            <p className="text-balance text-justify">
              When I&apos;m not coding, I try to disconnect and recharge: listening to music, or getting lost in a good book or podcast or anything that relaxes the mind.
            </p>
            <Link
              href="#experience"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:bg-primary/80 font-sans text-base tracking-tight"
            >
              My Professional Experience
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}