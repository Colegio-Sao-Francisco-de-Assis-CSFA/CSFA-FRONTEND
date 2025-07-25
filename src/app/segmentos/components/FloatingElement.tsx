'use client';

import React, { useState, useEffect } from 'react';

interface FloatingElementProps {
    children: React.ReactNode; // Tipo para aceitar qualquer elemento React como filho
    delay?: number;
    duration?: number;
}

const FloatingElement = ({ children, delay = 0, duration = 6 }: FloatingElementProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const animate = () => {
            setPosition({
                x: Math.sin(Date.now() * 0.001 + delay) * 20,
                y: Math.cos(Date.now() * 0.0015 + delay) * 15
            });
        };

        const interval = setInterval(animate, 50);
        return () => clearInterval(interval);
    }, [delay]);

    return (
        <div
            className="absolute opacity-10 pointer-events-none"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
            {children}
        </div>
    );
};

export default FloatingElement;
