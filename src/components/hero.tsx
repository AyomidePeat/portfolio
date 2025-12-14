'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ClientImage } from './ClientImage';

interface HeroProps {
  isAnimated: boolean;
}

export function Hero({ isAnimated }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null); // Ref for the container to track mouse
  const [isClient, setIsClient] = useState(false);

  // New state for 3D rotation values
  const [rotation, setRotation] = useState({ x: 0, y: 0, scale: 1 });

  // --- INTERACTIVE HOVER LOGIC (NEW AND IMPROVED) ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageWrapperRef.current) return;

    const { clientX, clientY } = e;
    const rect = imageWrapperRef.current.getBoundingClientRect();

    // Calculate center of the element
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate position relative to the center (-1 to 1)
    const x = (clientX - centerX) / (rect.width / 2);
    const y = (clientY - centerY) / (rect.height / 2);

    // Max rotation in degrees (adjust this value for sensitivity)
    const MAX_ROTATION = 10;

    // Calculate rotation: tilt up/down (X-axis) and left/right (Y-axis)
    // Invert Y rotation so moving mouse down causes the top of the image to tilt away (natural 3D)
    const rotateY = x * MAX_ROTATION;
    const rotateX = y * -MAX_ROTATION;

    setRotation({
      x: rotateX,
      y: rotateY,
      scale: 1.05, // Slightly larger scale than before for a bigger pop
    });
  };

  const handleMouseLeave = () => {
    // Smoothly return to original state
    setRotation({ x: 0, y: 0, scale: 1 });
  };
  // ---------------------------------------------------

  // --- EXISTING ANIMATION LOGIC ---
  useEffect(() => {
    setIsClient(true);
    // ... (Your existing intersection observer and initial animation logic here) ...
    // NOTE: Keep the rest of your original useEffect logic here for fade/slide animations
    if (isAnimated && sectionRef.current) {
      sectionRef.current.classList.add('animate-fade-in');
      sectionRef.current.dataset.animated = 'true';
      const children = sectionRef.current.querySelectorAll('.animate-child');
      children.forEach((child, index) => {
        child.classList.add(index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right');
        (child as HTMLElement).style.animationDelay = '0ms';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting && !el.dataset.animated) {
            el.dataset.animated = 'true';
            el.classList.add('animate-fade-in');

            const children = el.querySelectorAll('.animate-child');
            children.forEach((child, index) => {
              child.classList.add(index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right');
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
  // ----------------------------------

  return (
    <section ref={sectionRef} id="hero" className={`min-h-screen flex items-center justify-center bg-background relative ${isAnimated ? 'animate-fade-in' : ''}`}>
      <div className="container mx-auto px-6 py-24 pb-32 md:pb-24 max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 space-y-6 animate-child">
          <h1 className="font-sans text-5xl md:text-5xl font-bold tracking-tight text-primary animate-child">Oladipupo Peace</h1>
          <p className="text-lg md:text-2xl font-bold text-muted-foreground leading-relaxed text-balance animate-child">Software Engineer</p>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance animate-child">I build tech that works so naturally, you barely notice it.</p>
          <Link href="#about" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:bg-primary/80 font-sans text-lg tracking-tight">
            About me
          </Link>
        </div>

        {/* --- DYNAMIC INTERACTIVE IMAGE SECTION --- */}
        <div className="md:w-1/2 flex justify-end animate-child">
          {/* Outer container for perspective and mouse tracking */}
          <div
            ref={imageWrapperRef} // Attach ref here
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-64 h-64 md:w-80 md:h-80 group perspective-1000"
          >
            {/* 1. Enhanced Glow Layer - Intensifies and blurs on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-xl z-0 animate-pulse-glow transition-opacity duration-300 ${
                rotation.scale > 1 ? 'opacity-100 blur-3xl' : 'opacity-70 blur-xl'
              }`}
            ></div>

            {/* 2. Image Wrapper - Applies DYNAMIC transform style */}
            {isClient && (
              <div
                className="relative w-full h-full transform-gpu transition-all duration-200 ease-out rounded-full z-10"
                style={{
                  transformStyle: 'preserve-3d',
                  transitionProperty: 'transform, box-shadow',
                  transform: `scale(${rotation.scale}) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  boxShadow:
                    rotation.scale > 1
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 4px var(--primary-color-rgba-50)' // Use a cleaner shadow
                      : 'none',
                }}
              >
                <ClientImage
                  src="/images/peace.jpg"
                  alt="Oladipupo Peace Profile Picture"
                  className="rounded-full object-cover border-4 border-primary shadow-lg animate-rotate-slight !w-full !h-full"
                />
              </div>
            )}
          </div>
        </div>
        {/* -------------------------------------- */}
      </div>
    </section>
  );
}
