"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

interface ContactProps {
  isAnimated: boolean;
}

export function Contact({ isAnimated }: ContactProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []); // Empty dependency array since observer setup is static

  const contactLinks = [
    { href: "mailto:ayomidepeat@gmail.com", icon: Mail, label: "ayomidepeat@gmail.com", external: false },
    { href: "https://github.com/ayomidepeat", icon: Github, label: "GitHub", external: true },
    { href: "https://linkedin.com/in/oladipupopeace", icon: Linkedin, label: "LinkedIn", external: true },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen border-t border-border px-6 py-24 opacity-0 transition-opacity duration-1000"
      id="contact"
      aria-label="Contact Information"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-16 font-sans text-5xl font-bold tracking-tight text-primary md:text-5xl animate-child">
          Get in Touch
        </h2>
        <div className="space-y-12">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl animate-child">
            If you would like to discuss a project or just say hi, I’m always down to chat. Feel free to reach out
            through any of the channels below.
          </p>
          <div className="flex flex-wrap gap-8">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.external ? `Visit my ${link.label} profile` : `Email me at ${link.label}`}
                className="flex items-center gap-3 text-lg animate-underline-hover animate-scale-hover hover:text-accent transition-colors animate-child font-sans tracking-tight md:text-xl"
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-24 border-t border-border pt-8 text-center text-sm text-muted-foreground animate-child">
          <p>© {new Date().getFullYear()} — Oladipupo Peace. All rights reserved</p>
        </div>
      </div>
    </section>
  );
}