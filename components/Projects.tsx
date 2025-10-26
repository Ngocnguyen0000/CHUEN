import React, { useState } from 'react';
import { allProjects } from '../constants';
import { Project, ProjectCategory } from '../types';

const categories = [
    ProjectCategory.UX_UI_DESIGN,
    ProjectCategory.DEVELOPER,
    ProjectCategory.GRAPHIC_DESIGN,
    ProjectCategory.DESIGN_POD,
];

const ProjectCard: React.FC<{ project: Project, onProjectClick: (project: Project) => void }> = ({ project, onProjectClick }) => (
    <div className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl hover:shadow-[#F9A826]/10 transition-all duration-300" onClick={() => onProjectClick(project)}>
        <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
             <h3 className="text-base font-semibold text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.title}
            </h3>
        </div>
    </div>
);

interface ProjectsProps {
    onProjectClick: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
    const [activeTab, setActiveTab] = useState<ProjectCategory | 'ALL'>('ALL');

    const filteredProjects = activeTab === 'ALL'
        ? allProjects
        : allProjects.filter(p => p.category === activeTab);

    return (
        <section className="py-20">
            <h2 className="text-5xl font-bold uppercase tracking-wider mb-12">Projects</h2>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-b border-gray-700 mb-8">
                <button
                    onClick={() => setActiveTab('ALL')}
                    className={`py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${activeTab === 'ALL' ? 'text-[#F9A826] border-b-2 border-[#F9A826]' : 'text-gray-400 hover:text-white'}`}
                >
                    All
                </button>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${activeTab === cat ? 'text-[#F9A826] border-b-2 border-[#F9A826]' : 'text-gray-400 hover:text-white'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} onProjectClick={onProjectClick} />
                ))}
            </div>
        </section>
    );
};