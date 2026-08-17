"use client";

import { useEffect, useState } from "react";

export function useTestimonialSlider(totalSlides: number, intervalMs = 6000) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (n: number) => {
    setCurrentSlide(((n % totalSlides) + totalSlides) % totalSlides);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, intervalMs);
    return () => clearInterval(id);
  }, [totalSlides, intervalMs]);

  return { currentSlide, nextSlide, prevSlide, goToSlide };
}
