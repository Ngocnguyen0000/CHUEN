
import React from 'react';

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

export const Hero: React.FC = () => {
    return (
        <section id="home" className="relative text-center py-20 md:py-32 overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-2xl max-h-2xl bg-[#F9A826]/20 rounded-full blur-3xl animate-pulse-slow pointer-events-none"></div>
            <div className="relative z-10">
                <h1 className="text-6xl md:text-8xl font-extrabold uppercase tracking-tighter mb-4 opacity-0 animate-fade-in-up">
                    Bich Ngoc
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-[#F9A826] tracking-wider mb-8 opacity-0 animate-fade-in-up animation-delay-200">
                    UX/UI DESIGNER & FRONT-END DEVELOPER
                </p>
                <p className="max-w-3xl mx-auto text-gray-400 mb-10 text-lg opacity-0 animate-fade-in-up animation-delay-400">
                    Crafting intuitive, beautiful, and user-centered digital experiences. Explore my journey through design and code.
                </p>
                <div className="opacity-0 animate-fade-in-up animation-delay-600">
                    <a href="#projects-highlight" className="inline-flex items-center bg-[#F9A826] text-black font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                        Explore Works <ArrowRightIcon />
                    </a>
                </div>
            </div>
        </section>
    );
};