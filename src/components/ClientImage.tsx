// components/ClientImage.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ClientImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ClientImage({ src, alt, className }: ClientImageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Don't render on SSR

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      onError={(e) => {
        (e.target as HTMLImageElement).src = "/images/placeholder.png";
      }}
    />
  );
}
