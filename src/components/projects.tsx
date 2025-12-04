"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectsProps {
  isAnimated: boolean;
}

const projects = [
  
  {
    category: "Personal Project",
    title: "Monide",
    description: "MoniDe is a Flutter mobile app that provides real-time ATM status and location, helping bank customers avoid out-of-service or empty ATMs, save time, and improve their banking experience.",
    link: "https://github.com/AyomidePeat/monide",
    image: "/images/monide.png",
  },
  {
    category: "Freelance",
    title: "Hassala",
    description: "Hassala is a user-focused savings mobile app that helps individuals achieve their financial goals through structured savings options like automatic, target-based, and manual top-ups, while minimizing impulsive withdrawals and enabling users to earn interest on their deposits.",
    image: "/images/hasssala.png",
  },
  {
    category: "Freelance",
    title: "Chop Express",
    description: "Chop Express is a mobile app for ordering food online from local restaurants, drugs from pharmacies and supplies from supermarkets",
   
    image: "/images/appicon.png",
  },
  
  {
    category: "Personal Project",
    title: "Fashion Pro",
    description: "FashionPro is an app that helps tailors take their customers’ measurements virtually, using just a smartphone..",
    image: "/images/fashionpro.jpeg",
  },
  {
    category: "Freelance",
    title: "Leyou Exchange",
    description: "Leyou Exchange is an online platform that specializes in converting gift cards and cryptocurrency into cash.",
    image: "/images/leyou.jpeg",
  },
];

export function Projects({ isAnimated }: ProjectsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAnimated && sectionRef.current) {
      sectionRef.current.classList.add("animate-fade-in");
      sectionRef.current.dataset.animated = "true";
      const children = sectionRef.current.querySelectorAll(".animate-child");
      children.forEach((child) => {
        child.classList.add("animate-slide-in-right");
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
              child.classList.add("animate-slide-in-right");
              (child as HTMLElement).style.animationDelay = `${index * 80}ms`;
            });
          }
        });
      },
      { threshold: 0.2 }
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
      className={`min-h-screen border-t border-border px-6 py-24 opacity-0 transition-opacity duration-1000 ${isAnimated ? "animate-fade-in" : ""}`}
      id="projects"
    >
      <div className="mx-auto max-w-5xl">
      <h2 className="mb-16 font-sans text-5xl font-bold tracking-tight text-primary md:text-5xl animate-child">
      Selected Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl bg-background shadow-md hover:shadow-xl transition-transform duration-500 animate-child transform hover:-translate-y-2 hover:scale-105 hover:rotate-1 overflow-hidden"
            >
              {/* Project Image */}
              {project.image && (
                <div className="relative w-full h-48 md:h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-3">
                <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {project.category}
                </div>
                <h3 className="flex items-center gap-2 font-sans text-xl md:text-2xl font-bold text-primary tracking-tight">
                  {project.title}
                  {project.link && (
                    <ExternalLink className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  )}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground flex-1">
                  {project.description}
                </p>
                {project.link && (
                  <Link
                    href={project.link}
                    className="mt-2 inline-block text-primary font-medium hover:text-accent transition-colors text-sm md:text-base"
                  >
                    View Project
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="#contact"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:bg-primary/80 font-sans text-base tracking-tight"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
