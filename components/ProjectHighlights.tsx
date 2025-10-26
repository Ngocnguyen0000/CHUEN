
import React from 'react';
import { projectHighlights } from '../constants';
import { Project } from '../types';

interface ProjectHighlightsProps {
    onProjectClick: (project: Project) => void;
}

export const ProjectHighlights: React.FC<ProjectHighlightsProps> = ({ onProjectClick }) => {
    return (
        <section id="projects-highlight" className="py-24">
            <h2 className="text-center text-4xl font-bold uppercase tracking-widest mb-12">My Projects Highlight</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectHighlights.map((project) => (
                    <div 
                        key={project.id} 
                        onClick={() => onProjectClick(project)} 
                        className="group block text-left rounded-lg overflow-hidden relative cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#F9A826]/20 transition-all duration-500 transform hover:-translate-y-2"
                    >
                        <img 
                            src={project.imageUrl} 
                            alt={project.title} 
                            className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                            <p className="text-xs text-gray-400 uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{project.category}</p>
                            <h3 className="text-lg font-semibold text-white mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};