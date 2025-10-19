
import React from 'react';

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

export const Hero: React.FC = () => {
    return (
        <section className="text-center py-20 md:py-32">
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wider mb-6">
                Welcome to my<br /> website!
            </h1>
            <p className="max-w-3xl mx-auto text-gray-400 mb-10 text-lg">
                This is a personal website where I showcase my individual projects related to coding and design, design files, and the resources I use. You can access and use these resources anytime you want, completely free of charge.
            </p>
            <a href="#projects-highlight" className="inline-flex items-center bg-[#F9A826] text-black font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                Explore Works <ArrowRightIcon />
            </a>
        </section>
    );
};
