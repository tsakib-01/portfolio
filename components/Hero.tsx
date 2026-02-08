'use client'

import { FaFileAlt, FaArrowDown } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="hero min-h-screen bg-base-200 pt-20">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="avatar mb-8">
            <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="/profile.jpg" alt="Profile" />
            </div>
          </div>
          <h1 className="text-5xl font-bold">Tasnim Sakib</h1>
          <p className="py-6 text-xl">
            Full Stack Developer | SEO Specialist
          </p>
          <p className="mb-6 text-base-content/70">
            Passionate about creating beautiful, functional, and user-friendly applications. 
            I turn ideas into reality through clean code and innovative solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* Resume Button */}
            <a 
              className="group relative inline-block focus:outline-none focus:ring mt-5" 
              href="/resume.pdf" 
              download
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">
                <div className="text-black flex items-center gap-3">
                  <FaFileAlt />
                  <p>RESUME</p>
                </div>
              </span>
            </a>

            {/* My Work Button */}
            <a 
              href="#projects"
              className="group relative inline-flex items-center overflow-hidden rounded border-2 border-primary px-10 py-3 text-primary font-semibold focus:outline-none focus:ring active:text-primary mt-5 scroll-smooth"
            >
              <span className="absolute -start-full transition-all group-hover:start-4">
                <FaArrowDown className="size-5 rtl:rotate-180" />
              </span>
              <span className="text-sm font-medium transition-all group-hover:ms-4">
                My Work
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}