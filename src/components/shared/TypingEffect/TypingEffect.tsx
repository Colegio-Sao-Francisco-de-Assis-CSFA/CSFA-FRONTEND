// src/components/shared/TypingEffect.tsx
'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import TypingEffectProps from './types';



const TypingEffect: React.FC<TypingEffectProps> = ({
    sequence,
    className,
    wrap = 'span',
}) => {
    return (
        <TypeAnimation
            sequence={sequence}
            wrapper={wrap}
            speed={20}
            className={className}
            cursor={true}
            repeat={0}
        />
    );
};

export default TypingEffect;