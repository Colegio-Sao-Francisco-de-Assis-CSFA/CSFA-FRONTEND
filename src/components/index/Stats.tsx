"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Users, Calendar, BookOpen, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedCounterProps, Statistic } from './types';

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ endValue, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      setHasAnimated(true);

      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentValue = Math.floor(progress * endValue);

        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(endValue); // Ensure final value is exact
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, hasAnimated, endValue, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-blue-700 mb-2">
      {count}{suffix}
    </div>
  );
};

const StatsArea: React.FC = () => {
  const statistics: Statistic[] = [
    {
      id: 'students',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      value: '2500+',
      description: 'Alunos formados',
      endValue: 2500,
      suffix: '+'
    },
    {
      id: 'experience',
      icon: <Calendar className="w-8 h-8 text-blue-600" />,
      value: '41',
      description: 'Anos de experiência',
      endValue: 41
    },
    {
      id: 'approval',
      icon: <BookOpen className="w-8 h-8 text-blue-600" />,
      value: '98',
      description: 'Aprovação em vestibulares (%)',
      endValue: 98,
      suffix: '%'
    },
    {
      id: 'professionals',
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      value: '120+',
      description: 'Profissionais qualificados',
      endValue: 120,
      suffix: '+'
    }
  ];

  return (
    <section className="md:py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
        <motion.h2
              className="text-3xl font-bold text-blue-600 text-center"
          >
              Nossa excelência em números
              <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2"></span>
          </motion.h2>
        </div>

        <div className="flex flex-col md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                {stat.icon}
              </div>
              <AnimatedCounter
                endValue={stat.endValue}
                suffix={stat.suffix}
              />
              <div className="text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsArea;