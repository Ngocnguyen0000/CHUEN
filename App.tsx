import React, { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { ProjectHighlights } from './components/ProjectHighlights'
import { Resume } from './components/Resume'
import { Projects } from './components/Projects'
import { ProjectModal } from './components/ProjectModal'
import { Project } from './types'

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="bg-[#212121] text-gray-200 font-sans leading-relaxed">
      <Header />
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-8">
        <main>
          <Hero />
          <div id="about-me" className="pt-24">
            <About />
          </div>
          <ProjectHighlights onProjectClick={handleProjectClick} />

          <div id="design" className="pt-24">
            <Projects onProjectClick={handleProjectClick} />
          </div>
          <div id="resume" className="pt-24">
            <Resume />
          </div>
        </main>
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  )
}

export default App
