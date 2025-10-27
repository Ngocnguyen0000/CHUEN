
import React from 'react';
import { LinkedinIcon, GithubIcon, BehanceIcon, FacebookIcon } from './icons/SocialIcons';

const DesignIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F9A826]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
const CodeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F9A826]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const ToolIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#F9A826]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 16v-2m0-8v-2m4 6h2m-16 0h2m14-4h2M4 12h2m8-10V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m0 16v-2a2 2 0 002-2h4a2 2 0 002 2v2m-6-8a2 2 0 012-2h4a2 2 0 012 2v4a2 2 0 01-2 2h-4a2 2 0 01-2-2v-4z" /></svg>;


const SkillPill: React.FC<{ icon: React.ReactNode; name: string }> = ({ icon, name }) => (
  <div className="flex items-center gap-2 bg-gray-700/50 border border-gray-600 rounded-full px-4 py-2 text-sm text-gray-300">
    {icon}
    <span>{name}</span>
  </div>
);

export const About: React.FC = () => {
    const socialLinks = [
        { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/nguyen-ngoc-b5558b299/' },
        { Icon: GithubIcon, href: 'https://github.com/Ngocnguyen0000' },
        { Icon: BehanceIcon, href: 'https://www.behance.net/ngocnguyen329/projects' },
        { Icon: FacebookIcon, href: 'https://www.facebook.com/2n.Adk02/' },
    ];

    return (
        <section id="hire-me" className="py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0">
                <div className="absolute inset-0 bg-[#F9A826] rounded-full blur-3xl opacity-30"></div>
                <img 
                    src="./asset/image.png" 
                    alt="Bich Ngoc" 
                    className="relative w-full h-full object-cover rounded-full border-8 border-[#2d2d2d]"
                />
            </div>
            <div className="text-center lg:text-left">
                <h2 className="font-serif text-5xl md:text-6xl italic text-white mb-4">Hey, I'm Bích Ngọc</h2>
                <p className="text-gray-400 max-w-2xl mb-6">
                   I'm a passionate designer and developer, blending creative UI/UX with clean front-end code to build engaging digital products. My goal is to create intuitive interfaces and seamless user experiences, from initial concept to final deployment. I'm constantly learning and exploring new technologies to push the boundaries of design and development.
                </p>
                
                <div className="mb-8">
                    <h3 className="font-semibold text-white mb-4 text-center lg:text-left uppercase tracking-wider">Key Skills</h3>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                        <SkillPill icon={<DesignIcon />} name="UX/UI Design" />
                        <SkillPill icon={<CodeIcon />} name="Web Development" />
                        <SkillPill icon={<ToolIcon />} name="Figma & Adobe Suite" />
                    </div>
                </div>

                <div className="flex justify-center lg:justify-start items-center space-x-4 mb-8">
                    {socialLinks.map(({ Icon, href }, index) => (
                        <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-full text-white hover:bg-[#F9A826] hover:text-black transition-all duration-300 transform hover:scale-110">
                           <Icon />
                        </a>
                    ))}
                </div>
                <a href="#resume" className="inline-flex items-center bg-[#F9A826] text-black font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                    Hire Me
                </a>
            </div>
        </section>
    );
};