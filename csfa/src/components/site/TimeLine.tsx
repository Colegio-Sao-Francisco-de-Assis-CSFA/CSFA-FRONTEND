'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { Calendar, School, Monitor, Award, Trophy, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";

// Define strict types for our timeline events
interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  active: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ event, index, active }) => {
  return (
    <motion.div
      className={`min-w-[280px] md:min-w-[350px] flex-shrink-0 px-3 transition-all duration-300 ${active ? 'scale-105' : 'scale-95 opacity-80'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className={`bg-white p-6 rounded-2xl shadow-xl border-t-4 ${event.color} h-full transform transition-all duration-500`}>
        {/* Circular icon marker */}
        <div className={`w-14 h-14 rounded-full ${event.color} flex items-center justify-center text-white mb-5 shadow-lg mx-auto transform -translate-y-12 border-4 border-white`}>
          <div className="text-white">
            {event.icon}
          </div>
        </div>

        <div className="text-center -mt-8">
          <div className={`inline-block px-4 py-1.5 mb-4 text-sm font-bold text-white ${event.color} rounded-full`}>
            {event.year}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{event.title}</h3>
          <p className="text-gray-600">{event.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [timelineInView, setTimelineInView] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Define timeline data
  const timelineData: TimelineEvent[] = useMemo(() => [
    {
      id: 1,
      year: '1985',
      title: 'Foundation',
      description: 'School inauguration with only 3 classrooms and 45 students.',
      icon: <School size={24} />,
      color: 'bg-indigo-600',
    },
    {
      id: 2,
      year: '1992',
      title: 'Expansion',
      description: 'Campus expansion with new facilities and science labs.',
      icon: <Calendar size={24} />,
      color: 'bg-blue-500',
    },
    {
      id: 3,
      year: '2001',
      title: 'Digital Revolution',
      description: 'Implementation of technology in classrooms and computer lab.',
      icon: <Monitor size={24} />,
      color: 'bg-cyan-500',
    },
    {
      id: 4,
      year: '2010',
      title: 'Sports Center',
      description: 'Inauguration of sports complex with courts and swimming pool.',
      icon: <Trophy size={24} />,
      color: 'bg-teal-500',
    },
    {
      id: 5,
      year: '2018',
      title: 'Recognition',
      description: 'Award as one of the best educational institutions in the region.',
      icon: <Award size={24} />,
      color: 'bg-emerald-500',
    },
    {
      id: 6,
      year: 'Today',
      title: 'Continuous Innovation',
      description: 'Constant pedagogical and structural improvement to offer the best education.',
      icon: <Lightbulb size={24} />,
      color: 'bg-green-500',
    },
  ], []);

  // Check if on mobile device
  useEffect(() => {
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check when timeline section is visible
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setTimelineInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Triggers when 30% of section is visible
    );

    observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Handle mouse down for drag scrolling
  const handleMouseDown = (e: React.MouseEvent): void => {
    if (!contentRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - contentRef.current.offsetLeft);
    setScrollLeft(contentRef.current.scrollLeft);
  };

  // Handle touch start for mobile drag scrolling
  const handleTouchStart = (e: React.TouchEvent): void => {
    if (!contentRef.current) return;

    setIsDragging(true);
    setStartX(e.touches[0].pageX - contentRef.current.offsetLeft);
    setScrollLeft(contentRef.current.scrollLeft);
  };

  // Handle mouse move for drag scrolling
  const handleMouseMove = (e: React.MouseEvent): void => {
    if (!isDragging || !contentRef.current) return;

    e.preventDefault();
    const x = e.pageX - contentRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    contentRef.current.scrollLeft = scrollLeft - walk;
    updateCurrentIndex();
  };

  // Handle touch move for mobile drag scrolling
  const handleTouchMove = (e: React.TouchEvent): void => {
    if (!isDragging || !contentRef.current) return;

    const x = e.touches[0].pageX - contentRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    contentRef.current.scrollLeft = scrollLeft - walk;
    updateCurrentIndex();
  };

  // Handle mouse up/leave to stop dragging
  const handleDragEnd = (): void => {
    setIsDragging(false);
  };

  // Calculate current item index based on scroll position
  const updateCurrentIndex = (): void => {
    if (!contentRef.current) return;

    const contentWidth = contentRef.current.scrollWidth;
    const containerWidth = contentRef.current.clientWidth;
    const maxScroll = contentWidth - containerWidth;

    if (maxScroll <= 0) return;

    setScrollProgress(contentRef.current.scrollLeft / maxScroll);

    const itemWidth = isMobile ? 280 : 350;
    const padding = isMobile ? 4 : 16;
    const newIndex = Math.min(
      Math.floor((contentRef.current.scrollLeft + (itemWidth + padding) / 2) / (itemWidth + padding)),
      timelineData.length - 1
    );

    setCurrentIndex(newIndex);
  };

  // Handle wheel event specifically for horizontal scrolling
  const handleWheel = (e: React.WheelEvent): void => {
    if (!contentRef.current || !timelineInView) return;

    e.preventDefault();

    const contentWidth = contentRef.current.scrollWidth;
    const containerWidth = contentRef.current.clientWidth;
    const maxScroll = contentWidth - containerWidth;

    if (maxScroll <= 0) return;

    // Convert vertical scroll to horizontal
    const newScrollLeft = contentRef.current.scrollLeft + e.deltaY;

    contentRef.current.scrollTo({
      left: Math.max(0, Math.min(newScrollLeft, maxScroll)),
      behavior: 'smooth'
    });

    updateCurrentIndex();
  };

  // Scroll timeline to previous item
  const scrollToPrev = (): void => {
    if (currentIndex > 0 && contentRef.current) {
      const itemWidth = isMobile ? 280 : 350;
      const padding = isMobile ? 4 : 16;
      const newIndex = currentIndex - 1;

      contentRef.current.scrollTo({
        left: newIndex * (itemWidth + padding),
        behavior: 'smooth'
      });

      setCurrentIndex(newIndex);
    }
  };

  // Scroll timeline to next item
  const scrollToNext = (): void => {
    if (currentIndex < timelineData.length - 1 && contentRef.current) {
      const itemWidth = isMobile ? 280 : 350;
      const padding = isMobile ? 4 : 16;
      const newIndex = currentIndex + 1;

      contentRef.current.scrollTo({
        left: newIndex * (itemWidth + padding),
        behavior: 'smooth'
      });

      setCurrentIndex(newIndex);
    }
  };

  // Scroll to specific item when clicking on indicator
  const scrollToItem = (index: number): void => {
    if (contentRef.current) {
      const itemWidth = isMobile ? 280 : 350;
      const padding = isMobile ? 4 : 16;

      contentRef.current.scrollTo({
        left: index * (itemWidth + padding),
        behavior: 'smooth'
      });

      setCurrentIndex(index);
    }
  };

  // Regular scroll handling for the timeline container
  const handleContentScroll = (): void => {
    updateCurrentIndex();
  };

  // Framer Motion scroll animation for the header underline
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"]
  });

  const underlineWidth = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (

    <section
      ref={sectionRef}
      className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6 text-center">
            Our Journey
            <motion.span
              className="block h-1.5 bg-blue-600 mx-auto mt-3 rounded-full"
              style={{ width: underlineWidth }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.span>
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Explore the evolution of our institution over the years.
          </p>
        </motion.div>

        {/* Container for horizontal timeline */}
        <div className="relative">
          {/* Horizontal connection line */}
          <div className="absolute left-8 right-8 h-1 bg-blue-200 top-24 z-0"></div>

          {/* Desktop navigation buttons */}
          {!isMobile && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToPrev}
                disabled={currentIndex === 0}
                className={`absolute left-0 top-1/2 -translate-y-8 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all
                  ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50'}`}
                aria-label="Previous item"
              >
                <ChevronLeft size={20} className={currentIndex === 0 ? 'text-gray-400' : 'text-blue-600'} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToNext}
                disabled={currentIndex === timelineData.length - 1}
                className={`absolute right-0 top-1/2 -translate-y-8 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all
                  ${currentIndex === timelineData.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-50'}`}
                aria-label="Next item"
              >
                <ChevronRight size={20} className={currentIndex === timelineData.length - 1 ? 'text-gray-400' : 'text-blue-600'} />
              </motion.button>
            </>
          )}

          {/* Container with overflow for items */}
          <div
            ref={contentRef}
            className={`overflow-x-auto pb-12 pt-16 hide-scrollbar snap-x snap-mandatory ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onScroll={handleContentScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleDragEnd}
            onMouseUp={handleDragEnd}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleDragEnd}
            onTouchMove={handleTouchMove}
            onWheel={handleWheel}
          >
            {/* Items container */}
            <div className="flex flex-row pl-4 pr-16 md:pl-16 md:pr-32">
              {timelineData.map((event, index) => (
                <div key={event.id} className="snap-center">
                  <TimelineItem
                    event={event}
                    index={index}
                    active={index === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Position indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {timelineData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToItem(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-blue-200 hover:bg-blue-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to event ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Style to hide scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Timeline;