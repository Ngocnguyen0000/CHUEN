import React, { useState, useEffect, useMemo } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive?: boolean }> = ({ href, children, isActive }) => (
  <a
    href={href}
    className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
      isActive ? 'bg-[#F9A826] text-black shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'
    }`}
  >
    {children}
  </a>
);

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about-me', id: 'about-me' },
    { name: 'Service', href: '#projects-highlight', id: 'projects-highlight' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Project', href: '#projects', id: 'projects' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ], []);

  useEffect(() => {
    const navIds = navLinks.map(link => link.id);
    const sections = navIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
      .sort((a, b) => a.offsetTop - b.offsetTop);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 150;

      let currentSectionId = '';
      
      for (const section of sections) {
          if (section.offsetTop - offset <= scrollY) {
              currentSectionId = section.id;
          } else {
              break;
          }
      }
      
      const activeLink = navLinks.find(link => link.id === currentSectionId);
      if (activeLink) {
        setActiveSection(activeLink.name);
      } else {
        setActiveSection('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const navLinksLeft = navLinks.slice(0, 3);
  const navLinksRight = navLinks.slice(3);

  return (
    <header className="sticky top-0 z-50 w-full py-4 transition-all duration-300">
      <div className="container mx-auto flex justify-center px-4">
        <div className="bg-black/80 backdrop-blur-md rounded-full flex items-center justify-between p-2 shadow-lg ring-1 ring-white/10">
          <nav className="hidden md:flex items-center space-x-1">
            {navLinksLeft.map((link) => (
              <NavLink key={link.name} href={link.href} isActive={activeSection === link.name}>
                {link.name}
              </NavLink>
            ))}
          </nav>
          
          <div className="px-4">
             <a href="#home" className="flex items-center gap-3 text-white text-xl font-bold">
                <div className="w-10 h-10 bg-[#F9A826] rounded-full flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                    2N
                </div>
                <span className="hidden sm:inline-block whitespace-nowrap">Bich Ngoc</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinksRight.map((link) => (
              <NavLink key={link.name} href={link.href} isActive={activeSection === link.name}>
                {link.name}
              </NavLink>
            ))}
          </nav>
          
           {/* A minimal placeholder for a potential mobile menu icon */}
           <div className="md:hidden flex items-center justify-center w-10 h-10">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
             </svg>
           </div>
        </div>
      </div>
    </header>
  );
};
