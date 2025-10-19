
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
            <div className="grid md:grid-cols-3 gap-8">
                {projectHighlights.map((project) => (
                    <button onClick={() => onProjectClick(project)} key={project.id} className="group block text-left">
                        <div className="overflow-hidden rounded-lg mb-4">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</p>
                        <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-[#F9A826] transition-colors underline decoration-transparent group-hover:decoration-current">
                            {project.title}
                        </h3>
                    </button>
                ))}
            </div>
        </section>
    );
};