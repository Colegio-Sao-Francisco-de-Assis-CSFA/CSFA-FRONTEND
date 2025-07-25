'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Segmento } from '../types'; // Importando o tipo Segmento

interface SegmentCardProps {
    segment: Segmento;
    index: number; // Usado para a key, embora o 'url' do segmento seja melhor para keys únicas
}

const SegmentCard = ({ segment, index }: SegmentCardProps) => {
    // Determine if the card should be clickable or visually disabled
    const isDisabled = segment.produto === 'disable';

    const cardClasses = `
        block relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg transition-all duration-500 overflow-hidden border border-gray-100
        ${isDisabled
            ? 'opacity-60 cursor-not-allowed grayscale'
            : 'hover:shadow-2xl hover:border-gray-200 transform hover:-translate-y-1 hover:scale-[1.02] group'
        }
    `;

    const imageOverlayClasses = `
        absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center transition-all duration-500
        ${isDisabled ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
    `;

    const content = (
        <>
            {/* Decorative gradient overlay for enabled cards */}
            {!isDisabled && (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            )}

            {/* Image container with enhanced effects */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={segment.banner}
                    alt={`${segment.url.replace(/-/g, ' ')} Banner`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={`transition-all duration-700 ${
                        isDisabled
                            ? 'filter brightness-75'
                            : 'group-hover:scale-110 group-hover:rotate-1'
                    }`}
                />

                {/* Status overlay */}
                <div className={imageOverlayClasses}>
                    <div className={`
                        px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-500
                        ${isDisabled
                            ? 'bg-red-500/20 border-red-300/50 text-red-100'
                            : 'bg-white/20 border-white/30 text-white transform scale-90 group-hover:scale-100'
                        }
                    `}>
                        <span className="text-lg font-semibold flex items-center gap-2">
                            {isDisabled ? (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M6.09 15.91L17.91 8.09"/>
                                    </svg>
                                    Não Disponível
                                </>
                            ) : (
                                <>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                                    </svg>
                                    Ver Cursos
                                </>
                            )}
                        </span>
                    </div>
                </div>

                {/* Modern corner accent for enabled cards */}
                {!isDisabled && (
                    <>
                        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 transition-all duration-500 rounded-t-2xl"></div>
                    </>
                )}

                {/* Disabled state overlay */}
                {isDisabled && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </div>
                )}
            </div>

            {/* Content section with enhanced styling */}
            <div className="relative p-6 space-y-3">
                {/* Subtle background pattern for enabled cards */}
                {!isDisabled && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                )}

                <div className="relative z-10">
                    <h2 className={`
                        text-2xl font-bold mb-3 leading-tight capitalize transition-colors duration-300
                        ${isDisabled
                            ? 'text-gray-500'
                            : 'text-gray-800 group-hover:text-gray-900'
                        }
                    `}>
                        {segment.url.replace(/-/g, ' ')}
                    </h2>

                    <p className={`
                        text-sm leading-relaxed transition-colors duration-300
                        ${isDisabled
                            ? 'text-gray-400'
                            : 'text-gray-600 group-hover:text-gray-700'
                        }
                    `}>
                        {segment.metadescricao}
                    </p>
                </div>

                {/* Modern bottom accent line for enabled cards */}
                {!isDisabled && (
                    <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                )}
            </div>

            {/* Floating action indicator for enabled cards */}
            {!isDisabled && (
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                    </svg>
                </div>
            )}
        </>
    );

    if (isDisabled) {
        // If disabled, render as a div instead of Link
        return (
            <div className={cardClasses}>
                {content}
            </div>
        );
    } else {
        // If available, render as a Link
        return (
            <Link href={`/segmentos/${segment.url}`} key={index} className={cardClasses}>
                {content}
            </Link>
        );
    }
};

export default SegmentCard;