import React, { useEffect, useState } from 'react'
import { Project } from '../types'

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

const CloseIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

// Removed carousel chevron icons since modal will only show the main image and the Link Demo button
const ChevronLeftIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)

const ChevronRightIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  // Gallery logic: use gallery if available, otherwise fallback to single image
  const images = project.gallery && project.gallery.length ? project.gallery : [project.imageUrl]
  const [currentIndex, setCurrentIndex] = useState(0)
  const hasMultipleImages = images.length > 1

  const goToPrevious = () => setCurrentIndex(i => (i === 0 ? images.length - 1 : i - 1))
  const goToNext = () => setCurrentIndex(i => (i === images.length - 1 ? 0 : i + 1))

  // keyboard navigation for gallery
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!hasMultipleImages) return
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [hasMultipleImages])

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="bg-[#1f1f1f] rounded-xl shadow-2xl w-full max-w-5xl mx-auto overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="md:w-1/2 w-full bg-gradient-to-b from-[#2a2a2a] to-[#1f1f1f] p-6 flex items-center justify-center relative">
            {hasMultipleImages && (
              <button
                onClick={goToPrevious}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 rounded-full text-white hover:bg-black/50"
              >
                <ChevronLeftIcon />
              </button>
            )}

            <img
              src={images[currentIndex]}
              alt={`${project.title} - ${currentIndex + 1}`}
              className="max-h-[60vh] w-full h-auto object-contain rounded-lg shadow-inner"
            />

            {hasMultipleImages && (
              <button
                onClick={goToNext}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 rounded-full text-white hover:bg-black/50"
              >
                <ChevronRightIcon />
              </button>
            )}
          </div>

          {/* Right: Content */}
          <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{project.category}</p>
                  <h2 id="project-modal-title" className="text-2xl md:text-3xl font-extrabold text-white mt-2">{project.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Close project details"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Optional description placeholder (if you add descriptions later) */}
              {project['description'] && (
                <p className="mt-4 text-gray-300 leading-relaxed">{(project as any).description}</p>
              )}
            </div>

            <div className="mt-6 flex items-center space-x-3">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-[#F9A826] text-black font-semibold rounded-full hover:bg-[#e08b0c] transition-colors"
                >
                  View Project
                </a>
              )}

              <button
                onClick={onClose}
                className="px-5 py-2 border border-gray-700 text-gray-300 rounded-full hover:border-gray-500 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
