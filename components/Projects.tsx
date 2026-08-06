'use client'

import { useState, useEffect } from 'react'
import { FaExternalLinkAlt, FaEye, FaDesktop, FaMobileAlt, FaRedo, FaTimes, FaLock, FaFilm } from 'react-icons/fa'

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  github: string | null
  live: string
  featured?: boolean
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')
  const [isLoading, setIsLoading] = useState(true)
  const [iframeKey, setIframeKey] = useState(0)

  const projects: Project[] = [
    {
      title: 'SkyFlix Streaming',
      description: 'A modern online movie & TV series streaming platform featuring a clean UI, rich entertainment content, and smooth video playback experience.',
      image: '/skyflix.jpg',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Blogger API', 'UI/UX'],
      github: null,
      live: 'https://skyflixstreaming.blogspot.com/',
      featured: true
    },
    {
      title: 'H&M Vehicle Hire',
      description: 'A professional vehicle services website offering MOT testing, servicing, and repairs. Built with modern web technologies for optimal user experience.',
      image: 'https://www.hmvehicle.co.uk/wp-content/uploads/2024/05/19-mercedes-car-png-image.png',
      tech: ['WordPress', 'PHP', 'CSS', 'SEO'],
      github: null,
      live: 'https://www.hmvehicle.co.uk/'
    },
    {
      title: 'Simple NoteApp',
      description: 'A clean and intuitive note-taking application with full CRUD functionality. Features include creating, editing, and organizing notes with a modern, user-friendly interface.',
      image: 'https://image2url.com/r2/default/images/1770568018912-d23b41ad-c5b5-4bce-a5f4-b6e7501bc915.png',
      tech: ['Node.js', 'React', 'Express'],
      github: 'https://github.com/tsakib-01/simplenoteapp',
      live: 'https://simplenoteapp-delta.vercel.app/'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, team features, and deadline tracking. Designed for productivity and team collaboration.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&auto=format&fit=crop',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with real-time data, forecasts, and interactive maps. Features location-based weather and customizable widgets.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop',
      tech: ['Next.js', 'TypeScript', 'OpenWeather API'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Portfolio Generator',
      description: 'AI-powered portfolio builder that helps developers create stunning portfolios in minutes. Includes templates and customization options.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      tech: ['Next.js', 'OpenAI API', 'Prisma'],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      title: 'Fitness Tracker',
      description: 'Comprehensive fitness tracking app with workout plans, progress charts, and nutrition tracking. Helps users achieve their fitness goals.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop',
      tech: ['React Native', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ]

  // Handle ESC key to close modal & prevent body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null)
      }
    }

    if (activeProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProject])

  const openPreview = (project: Project) => {
    setActiveProject(project)
    setIsLoading(true)
    setViewMode('desktop')
    setIframeKey((prev) => prev + 1)
  }

  const reloadIframe = () => {
    setIsLoading(true)
    setIframeKey((prev) => prev + 1)
  }

  return (
    <section id="projects" className="py-20 bg-base-100 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for web development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border ${
                project.featured ? 'border-primary/50 ring-1 ring-primary/20' : 'border-base-content/10'
              }`}
            >
              <figure className="relative h-48 overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3 bg-primary text-primary-content text-xs font-semibold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                    <FaFilm className="text-xs" /> Featured App
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  <button
                    onClick={() => openPreview(project)}
                    className="btn btn-primary btn-sm gap-2 shadow-lg"
                  >
                    <FaEye /> Instant Preview
                  </button>
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl flex items-center justify-between">
                  <span>{project.title}</span>
                </h3>
                <p className="text-sm opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="badge badge-primary badge-outline">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  <button
                    onClick={() => openPreview(project)}
                    className="btn btn-sm btn-outline btn-primary gap-2"
                  >
                    <FaEye className="text-base" /> Preview
                  </button>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary gap-2"
                  >
                    <FaExternalLinkAlt /> Open Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Window Preview Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop Click */}
          <div
            className="absolute inset-0"
            onClick={() => setActiveProject(null)}
          />

          <div className="relative bg-base-300 border border-base-content/20 rounded-2xl shadow-2xl w-full max-w-5xl h-[88vh] flex flex-col overflow-hidden z-10">
            {/* Modal Titlebar */}
            <div className="bg-base-200 px-4 py-3 border-b border-base-content/10 flex flex-wrap items-center justify-between gap-3">
              {/* Window Dots & Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActiveProject(null)}
                    className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 transition-colors"
                    title="Close preview"
                  />
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500" />
                </div>
                <span className="font-bold text-sm sm:text-base text-base-content flex items-center gap-2 ml-2">
                  {activeProject.title}
                  {activeProject.featured && (
                    <span className="badge badge-xs badge-primary">Featured</span>
                  )}
                </span>
              </div>

              {/* Viewport Mode Switcher & Tools */}
              <div className="flex items-center gap-2">
                <div className="join bg-base-100 p-0.5 rounded-lg border border-base-content/10">
                  <button
                    onClick={() => setViewMode('desktop')}
                    className={`join-item btn btn-xs gap-1.5 ${
                      viewMode === 'desktop' ? 'btn-primary' : 'btn-ghost'
                    }`}
                    title="Desktop view"
                  >
                    <FaDesktop /> <span className="hidden sm:inline">Desktop</span>
                  </button>
                  <button
                    onClick={() => setViewMode('mobile')}
                    className={`join-item btn btn-xs gap-1.5 ${
                      viewMode === 'mobile' ? 'btn-primary' : 'btn-ghost'
                    }`}
                    title="Mobile view"
                  >
                    <FaMobileAlt /> <span className="hidden sm:inline">Mobile</span>
                  </button>
                </div>

                <button
                  onClick={reloadIframe}
                  className="btn btn-ghost btn-xs btn-square"
                  title="Reload preview"
                >
                  <FaRedo className={isLoading ? 'animate-spin' : ''} />
                </button>

                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-xs btn-outline btn-primary gap-1"
                  title="Open live site in new tab"
                >
                  <FaExternalLinkAlt /> <span className="hidden sm:inline">Open Tab</span>
                </a>

                <button
                  onClick={() => setActiveProject(null)}
                  className="btn btn-sm btn-circle btn-ghost text-base-content/70 hover:text-base-content"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>

            {/* Address Bar */}
            <div className="bg-base-200/60 px-4 py-1.5 border-b border-base-content/5 flex items-center gap-2 text-xs text-base-content/70">
              <FaLock className="text-success text-xs" />
              <div className="bg-base-100 px-3 py-1 rounded-md flex-1 font-mono text-xs truncate border border-base-content/10">
                {activeProject.live}
              </div>
            </div>

            {/* Preview Frame Body */}
            <div className="flex-1 bg-neutral relative overflow-hidden flex items-center justify-center p-2 sm:p-4">
              {isLoading && (
                <div className="absolute inset-0 bg-base-300/90 z-20 flex flex-col items-center justify-center gap-3">
                  <span className="loading loading-spinner loading-lg text-primary"></span>
                  <p className="text-sm text-base-content/70 font-medium">
                    Loading live window for {activeProject.title}...
                  </p>
                </div>
              )}

              <div
                className={`h-full transition-all duration-300 bg-white rounded-lg shadow-2xl overflow-hidden ${
                  viewMode === 'mobile'
                    ? 'w-[375px] max-h-[700px] border-8 border-neutral-800 rounded-[32px] shadow-2xl'
                    : 'w-full h-full'
                }`}
              >
                <iframe
                  key={iframeKey}
                  src={activeProject.live}
                  title={`Live preview of ${activeProject.title}`}
                  className="w-full h-full border-0"
                  onLoad={() => setIsLoading(false)}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>
            </div>

            {/* Footer Bar */}
            <div className="bg-base-200 px-4 py-2 text-xs text-base-content/60 flex items-center justify-between border-t border-base-content/10">
              <span>Interactive live view mode</span>
              <span className="hidden sm:inline">
                If the site blocks embedding,{' '}
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline font-medium"
                >
                  click here to open in full tab
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}