import React from 'react';
import { BehanceIcon, CanvaIcon, EmailIcon, GithubIcon, LinkedinIcon, LocationIcon, PhoneIcon, DownloadIcon } from './icons/SocialIcons';

const ResumeSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-12">
        <div className="flex items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F9A826] uppercase tracking-wider relative after:content-[''] after:block after:w-16 after:h-[3px] after:bg-[#F9A826] after:mt-1">
                {title}
            </h2>
            <div className="flex-grow h-px bg-gradient-to-r from-[#F9A826]/40 to-transparent ml-4"></div>
        </div>
        <div className="text-base leading-relaxed text-gray-300">{children}</div>
    </div>
);

const ProjectEntry: React.FC<{ 
    title: string; 
    link?: string; 
    linkText?: string; 
    description: string; 
    items: string[];
    technologies?: string[];
}> = ({ title, link, linkText, description, items, technologies = [] }) => (
    <div className="mb-8 bg-[#1a1a1a]/70 rounded-2xl p-6 border border-[#F9A826]/20 hover:border-[#F9A826]/60 backdrop-blur-sm shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[#F9A826]/20">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-3">
            <h3 className="font-semibold text-xl text-white">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-[#F9A826]/10 text-[#F9A826] text-xs font-medium rounded-full border border-[#F9A826]/30">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="space-y-1 text-gray-400">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                    <span className="text-[#F9A826] mt-1">•</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
        {(link || linkText) && (
            <div className="flex flex-wrap gap-3 pt-5">
                {link && (
                    <a 
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#F9A826] text-black font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#F9A826]/20 hover:scale-105"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        {linkText || 'View Project'}
                    </a>
                )}
                {/* <a 
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-transparent text-[#F9A826] border border-[#F9A826] font-medium rounded-lg transition-all duration-300 hover:bg-[#F9A826] hover:text-black"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Live Demo
                </a> */}
            </div>
        )}
    </div>
);

export const Resume: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#0d0d0d] via-[#111] to-[#1c1c1c] text-white">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 font-sans">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <div className="flex items-center gap-6">
                        <img 
                            src="/asset/image.png" 
                            alt="Ngoc Nguyen" 
                            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-[#F9A826]/60 shadow-lg shadow-[#F9A826]/10"
                        />
                        <div>
                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">Ngoc Nguyen</h1>
                            <p className="text-lg text-[#F9A826] mt-1 font-medium">UX/UI Designer</p>
                            <div className="flex items-center gap-3 mt-4">
                                <a 
                                    href="https://www.behance.net/ngocnguyen329/projects" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] text-gray-300 rounded-lg border border-gray-700 hover:bg-[#F9A826] hover:text-black hover:border-[#F9A826] transition-all duration-300"
                                >
                                    <BehanceIcon />
                                    <span className="font-medium text-sm">Behance</span>
                                </a>
                                <a 
                                    href="https://github.com/Ngocnguyen0000" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] text-gray-300 rounded-lg border border-gray-700 hover:bg-[#F9A826] hover:text-black hover:border-[#F9A826] transition-all duration-300"
                                >
                                    <GithubIcon />
                                    <span className="font-medium text-sm">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-0 text-sm space-y-3 text-gray-400 flex flex-col items-start md:items-end">
                        <div className="space-y-2">
                            <p className="flex items-center gap-2 md:justify-end w-full"><PhoneIcon className="w-4 h-4 text-[#F9A826]" /> 09xxxxxxx</p>
                            <p className="flex items-center gap-2 md:justify-end w-full"><LocationIcon className="w-4 h-4 text-[#F9A826]" />Da Nang</p>
                            <p className="flex items-center gap-2 md:justify-end w-full"><EmailIcon className="w-4 h-4 text-[#F9A826]" /> nguyenguyen000001@gmail.com</p>
                        </div>
                        <a 
                            href="/asset/resume/Bich_Ngoc_Resume.pdf" 
                            download="Bich_Ngoc_Resume.pdf"
                            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#F9A826] text-black font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#F9A826]/20 hover:scale-105 text-sm"
                        >
                            <DownloadIcon className="w-5 h-5" />
                            Download CV
                        </a>
                    </div>
                </div>

                <hr className="my-10 border-[#F9A826]/20" />
                
                {/* Sections */}
                <ResumeSection title="Summary">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Short-term: Gain hands-on experience and improve UX/UI skills such as wireframing, prototyping, and user research.</li>
                        <li>Long-term: Expand product design strategy knowledge and contribute greater value to user-centered experiences.</li>
                    </ul>
                </ResumeSection>

                <ResumeSection title="Technical Skills">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ProjectEntry
                            title="Programming Languages"
                            description="Core languages used for development and prototyping."
                            items={["Python", "C#", "HTML & CSS", "JavaScript"]}
                            technologies={["Python", "C#", "HTML", "CSS", "JS"]}
                        />
                        <ProjectEntry
                            title="Frameworks & Tools"
                            description="Libraries and frameworks used for frontend and backend tasks."
                            items={["Django", "WinForms", "Bootstrap"]}
                            technologies={["Django", "Bootstrap", "WinForms"]}
                        />
                        <ProjectEntry
                            title="Development Tools"
                            description="Version control, design and IDE tools I rely on." 
                            items={["GitHub", "Figma", "Photoshop", "VS Code"]}
                            technologies={["GitHub", "Figma", "PS", "VSCode"]}
                        />
                    </div>
                </ResumeSection>

                <ResumeSection title="Projects">
                    <ProjectEntry
                        title="Human Resource Management System"
                        description="A project to design HR management software for tracking schedules, shifts, salaries, and rewards."
                        items={[
                            "Designed UI in Figma, built features in C# WinForms.",
                            "Integrated scheduling with database backup and team coordination."
                        ]}
                        link="https://github.com/Ngocnguyen0000/Quanlynhansuquanketcaphe"
                        linkText="View on GitHub"
                    />
                    <ProjectEntry
                        title="Website Design Food"
                        description="Developed a food delivery website for restaurants in Da Nang."
                        items={["Technical: HTML, CSS, JS, Bootstrap"]}
                        link="https://spicy-dola-restaurants-web-design-github-io.vercel.app/"
                        linkText="Live Demo"
                    />
                    <ProjectEntry
                        title="My Little Website"
                        description="Personal portfolio project showcasing designs and projects."
                        items={["Technical: HTML, CSS, JS"]}
                        link="https://noc-noc.vercel.app/"
                        linkText="Live Demo"
                    />
                </ResumeSection>

                <ResumeSection title="Professional Experience">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProjectEntry
                            title="Club Khoi Nghiep Kinh Te – Designer"
                            description="Designed event media, social content and campaign visuals."
                            items={["Develop event concepts", "Collaborate with content creators", "Apply visual hierarchy & typography"]}
                            technologies={["Photoshop", "Illustrator", "Capcut", "Figma"]}
                        />
                        <ProjectEntry
                            title="Freelance - Design & Web Development"
                            description="Freelance projects for e-commerce websites and creative visuals." 
                            items={["Website design", "Product visuals & video editing", "Use AI for idea generation"]}
                            technologies={["HTML", "CSS", "JS", "Figma"]}
                        />
                    </div>
                </ResumeSection>

                <ResumeSection title="Education">
                    <div>
                        <div className="flex justify-between items-baseline">
                            <h3 className="font-bold text-white">Danang University of Economics</h3>
                            <p className="text-xs text-gray-400">October 2022 – Present</p>
                        </div>
                        <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
                            <li>Bachelor of Management Information Systems</li>
                            <li>Top 5 in Creative Idea Competition by The Economic Startup Club</li>
                        </ul>
                    </div>
                </ResumeSection>

                <ResumeSection title="Additional Information">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Languages: English – Intermediate (able to read technical documentation)</li>
                    </ul>
                </ResumeSection>
            </div>
        </section>
    );
};