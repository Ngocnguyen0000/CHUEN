import React from 'react';
import { LinkedinIcon, GithubIcon, BehanceIcon, FacebookIcon, YoutubeIcon, TiktokIcon, InstagramIcon } from './icons/SocialIcons';

export const About: React.FC = () => {
    const socialLinks = [
        { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/nguyen-ngoc-b5558b299/' },
        { Icon: GithubIcon, href: 'https://github.com/Ngocnguyen0000' },
        { Icon: BehanceIcon, href: 'https://www.behance.net/ngocnguyen329' },
        { Icon: FacebookIcon, href: 'https://www.facebook.com/2n.Adk02/' },
        // { Icon: YoutubeIcon, href: '#' },
        // { Icon: TiktokIcon, href: '#' },
        // { Icon: InstagramIcon, href: '#' },
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
                    As a design and development specialist with a perfect blend of creative design skills and technical expertise, I offer a comprehensive and innovative perspective on design and development projects. I have worked on various design projects for social media platforms, posters, and print-on-demand (POD) designs. Currently, I am learning and becoming acquainted with projects ranging from user interface design to web and mobile application development. I have a deep understanding of the latest technologies and the ability to create visually appealing and effective design solutions.
                </p>

                {/* Social icons */}
                <div className="flex justify-center lg:justify-start items-center space-x-4 mb-8">
                    {socialLinks.map(({ Icon, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 p-3 rounded-full text-white hover:bg-[#F9A826] hover:text-black transition-all duration-300"
                        >
                            <Icon />
                        </a>
                    ))}
                </div>

                {/* Hire Me button */}
                <a  
                    href="https://www.linkedin.com/in/nguyen-ngoc-b5558b299/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#F9A826] text-black font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105"
                >
                    Hire Me
                </a>
            </div>
        </section>
    );
};
