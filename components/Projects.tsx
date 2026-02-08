'use client'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

export default function Projects() {
  const projects = [
    {
      title: 'H&M Vehicle Hire',
      description: 'A professional vehicle services website offering MOT testing, servicing, and repairs. Built with modern web technologies for optimal user experience.',
      image: 'https://www.hmvehicle.co.uk/wp-content/uploads/2024/05/19-mercedes-car-png-image.png',
      tech: ['WordPress', 'PHP', 'CSS', 'SEO'],
      github: null, // No GitHub repo for this project
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

  return (
    <section id="projects" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Featured <span className="text-primary">Projects</span></h2>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for development.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <figure className="relative h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{project.title}</h3>
                <p className="text-sm opacity-80">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="badge badge-primary badge-outline">{tech}</div>
                  ))}
                </div>
                <div className="card-actions justify-end mt-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline gap-2">
                      <FaGithub /> Code
                    </a>
                  )}
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary gap-2">
                    <FaExternalLinkAlt /> View Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}