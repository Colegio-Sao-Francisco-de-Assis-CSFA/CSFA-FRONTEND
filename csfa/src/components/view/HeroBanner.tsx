"use client";

// components/HeroBannerCarousel.tsx
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselItem {
  id: string;
  image: string;
  alt: string;
  link?: string;
  title?: string;
  description?: string;
}

interface HeroBannerCarouselProps {
  items: CarouselItem[];
  autoPlayInterval?: number;
  hasText?: boolean;
  className?: string;
}

const HeroBannerCarousel = ({
  items,
  autoPlayInterval = 5000,
  hasText = false,
  className,
}: HeroBannerCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    if (autoPlayInterval) {
      const intervalId = setInterval(goToNext, autoPlayInterval);
      return () => clearInterval(intervalId);
    }
  }, [autoPlayInterval, items.length, isTransitioning]);

  if (!items.length) return null;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        className
      )}
    >
      <div className="relative h-[250px] md:h-[400px] lg:h-[700px] w-full">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          const ItemContent = () => (
            <>
              <div
                className={cn(
                  "absolute inset-0 transition-opacity duration-500 ease-in-out",
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
              >
                <div className="absolute inset-0" />
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                />
              </div>

              {hasText && item.title && (
                <div
                  className={cn(
                    "absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10",
                    "transition-all duration-500 ease-in-out",
                    isActive
                      ? "opacity-100 transform translate-y-0"
                      : "opacity-0 transform translate-y-8 pointer-events-none"
                  )}
                >
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 drop-shadow-lg">
                    {item.title}
                  </h2>
                  {item.description && (
                    <p className="max-w-lg text-sm md:text-base drop-shadow-md">
                      {item.description}
                    </p>
                  )}
                </div>
              )}
            </>
          );

          return item.link ? (
            <a
              key={item.id}
              href={item.link}
              className="block h-full w-full"
              aria-label={item.alt}
            >
              <ItemContent />
            </a>
          ) : (
            <div key={item.id} className="h-full w-full">
              <ItemContent />
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
        onClick={goToPrevious}
        disabled={isTransitioning}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white rounded-full h-10 w-10"
        onClick={goToNext}
        disabled={isTransitioning}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              activeIndex === index
                ? "bg-white w-6"
                : "bg-white/60 hover:bg-white/80"
            )}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setActiveIndex(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBannerCarousel;