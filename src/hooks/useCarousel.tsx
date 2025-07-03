"use client";

import { useState, useEffect, useCallback } from 'react';

interface UseCarouselProps {
  slidesCount: number;
  autoPlay?: boolean;
  interval?: number;
  isMobile?: boolean;
}

const useCarousel = ({
  slidesCount,
  autoPlay = true,
  interval = 4000,
  isMobile = false
}: UseCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlayActive, setAutoPlayActive] = useState(autoPlay);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setAutoPlayActive(false);
    if (autoPlay) {
      setTimeout(() => setAutoPlayActive(true), interval);
    }
  }, [autoPlay, interval]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slidesCount);
  }, [currentSlide, slidesCount, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slidesCount) % slidesCount);
  }, [currentSlide, slidesCount, goToSlide]);

  useEffect(() => {
    if (!autoPlayActive) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlayActive, interval, nextSlide]);

  return {
    currentSlide,
    goToSlide,
    nextSlide,
    prevSlide,
    setAutoPlayActive,
    isMobile
  };
};

export default useCarousel;