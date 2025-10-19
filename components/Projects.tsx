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
    <div className="group break-inside-avoid mb-6 cursor-pointer" onClick={() => onProjectClick(project)}>
        <div className="overflow-hidden rounded-lg mb-4">
            <div>
                <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                />
            </div>
        </div>
        <h3 className="text-base font-semibold text-white mt-1 text-center">
            <span className="hover:text-[#F9A826] transition-colors underline decoration-transparent group-hover:decoration-current">
                {project.title}
            </span>
        </h3>
    </div>
);

interface ProjectsProps {
    onProjectClick: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onProjectClick }) => {
    const [activeTab, setActiveTab] = useState<ProjectCategory | 'ALL'>('ALL');

    // Lọc project theo tab, 'ALL' hiển thị tất cả
    const filteredProjects = activeTab === 'ALL'
        ? allProjects
        : allProjects.filter(p => p.category === activeTab);

    return (
        <section className="py-20">
            <h2 className="text-5xl font-bold uppercase tracking-wider mb-12">Projects</h2>

            {/* Tabs lọc */}
            <div className="flex items-center space-x-8 border-b border-gray-700 mb-8">
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

            {/* Grid project */}
            <div className="columns-2 md:columns-3 gap-6">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} onProjectClick={onProjectClick} />
                ))}
            </div>
        </section>
    );
};
