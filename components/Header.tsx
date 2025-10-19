import React, { useState, useEffect } from 'react'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'ABOUT ME', href: '#about-me' },
    { name: 'PROJECTS', href: '#design' },
    { name: 'RESUME', href: '#resume' },

    // { name: 'DEVELOPER', href: '#design' },
  ]

  const headerClasses = `sticky top-0 z-50 w-full transition-all duration-300 ${
    isScrolled ? 'bg-[#212121]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
  }`

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-24">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-bold tracking-wider">2N</div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-widest text-gray-300 hover:text-[#F9A826] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nguyen-ngoc-b5558b299/"
              className="text-sm font-semibold uppercase tracking-widest border-2 border-[#F9A826] text-[#F9A826] px-6 py-2 rounded-full hover:bg-[#F9A826] hover:text-black transition-all duration-300"
            >
              Hire Me
            </a>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </div>
    </header>
  )
}
