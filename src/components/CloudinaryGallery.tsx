"use client";

import { useEffect, useRef } from "react";

interface CloudinaryProps {
  year: string;
}

export default function CloudinaryGallery({ year }: CloudinaryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;

    function init() {
      if (cancelled || !containerRef.current) return;
      // @ts-expect-error cloudinary loaded globally
      const cl = window.cloudinary;
      if (!cl?.galleryWidget) return;

      containerRef.current.innerHTML = "";

      try {
        const g = cl.galleryWidget({
          cloudName: "dseuqftys",
          container: containerRef.current,
          mediaAssets: [{ tag: year, mediaType: "image" }],
          aspectRatio: "16:9",
          crop: "fill",
          click_action: "lightbox",
          carouselStyle: "indicators",
          theme: "minimal",
          enableZoom: false,
        });
        g.render();
      } catch (e) {
        console.error("Cloudinary gallery error:", e);
      }
    }

    // Stesso URL del vecchio sito che funzionava
    const existing = document.getElementById("cld-gallery-sdk");
    if (existing) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.id = "cld-gallery-sdk";
    script.src = "https://product-gallery.cloudinary.com/latest/all.js";
    script.async = true;
    script.onload = init;
    document.head.appendChild(script);

    return () => { cancelled = true; };
  }, [year]);

  return (
    <div
      ref={containerRef}
      style={{ minHeight: 480, background: "var(--color-bg-alt)", borderRadius: 12 }}
    />
  );
}