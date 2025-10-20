import React from 'react';

export interface Statistic {
  id: string;
  icon: React.ReactNode;
  value: string;
  description: string;
  endValue: number;
  suffix?: string;
}

export interface AnimatedCounterProps {
  endValue: number;
  duration?: number;
  suffix?: string;
}
