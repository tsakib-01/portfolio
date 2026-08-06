'use client'

import { FaGraduationCap, FaBriefcase, FaPaintBrush, FaCheckCircle } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="border-t-2 border-primary w-32 mx-auto mb-8"></div>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Computer Science & Engineering Graduate | Full Stack Developer | Graphic Designer | AI Digital Tasks & Annotation
          </p>
        </div>

        {/* Detailed Description Card */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="card bg-base-200 shadow-xl border border-primary/20">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Professional Profile
              </h3>
              <div className="space-y-4 text-base-content/80">
                <p>
                  Motivated and detail-oriented Computer Science and Engineering graduate from 
                  <span className="text-primary font-semibold"> North East University Bangladesh</span> with strong skills in web development, graphic design, and AI-related digital tasks. 
                </p>
                <p>
                  Experienced across modern web technologies (React, Next.js, Node.js, PHP, WordPress), software development (Python, C++), and creative media suites (Figma, Photoshop, Illustrator).
                </p>
                <p>
                  Passionate about technology, problem-solving, and contributing to innovative digital projects and AI data collection and annotation tasks with precision and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Education */}
          <div className="card bg-base-200 shadow-xl border border-base-300 hover:border-primary transition-colors">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaGraduationCap className="text-3xl text-primary" />
                </div>
                <div>
                  <h3 className="card-title text-xl">Education</h3>
                  <span className="text-xs text-primary font-medium">2022 - 2026</span>
                </div>
              </div>
              <div className="space-y-2 text-base-content/80">
                <p className="font-bold text-base-content">North East University Bangladesh</p>
                <p className="text-sm italic text-primary">B.Sc. in Computer Science & Engineering</p>
                <p className="text-xs text-base-content/70 mt-2">
                  <span className="font-semibold">Coursework:</span> Web Dev, Database Management, Software Engineering, AI, Computer Networks, Data Structures & Algorithms.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="card bg-base-200 shadow-xl border border-base-300 hover:border-primary transition-colors">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaBriefcase className="text-3xl text-primary" />
                </div>
                <h3 className="card-title text-xl">Work Experience</h3>
              </div>
              <ul className="space-y-4 text-xs sm:text-sm text-base-content/80">
                <li>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-base-content">Redhills Solicitor</span>
                    <span className="badge badge-sm badge-primary">2024 - 2025</span>
                  </div>
                  <p className="text-xs text-primary">Frontend Web Developer</p>
                  <p className="text-xs opacity-75 mt-0.5">Developed legal consultation site with appointment scheduling & responsive UI.</p>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-base-content">Microtimes</span>
                    <span className="badge badge-sm badge-primary">2022 - 2024</span>
                  </div>
                  <p className="text-xs text-primary">Web Developer</p>
                  <p className="text-xs opacity-75 mt-0.5">Built e-commerce site with product filtering & checkout system.</p>
                </li>
              </ul>
            </div>
          </div>

          {/* Creative & AI Experience */}
          <div className="card bg-base-200 shadow-xl border border-base-300 hover:border-primary transition-colors">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaPaintBrush className="text-3xl text-primary" />
                </div>
                <h3 className="card-title text-xl">Creative & AI</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-base-content/80">
                <li>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-base-content">Online Marketplace</span>
                    <span className="badge badge-sm badge-outline">2020 - 2021</span>
                  </div>
                  <p className="text-xs text-primary">Graphic Designer (Freelance)</p>
                  <p className="text-xs opacity-75 mt-0.5">Promotional banners & social graphics with Photoshop, Illustrator, Figma.</p>
                </li>
                <li className="pt-1">
                  <div className="flex items-center gap-2 text-base-content">
                    <FaCheckCircle className="text-primary text-xs" />
                    <span className="font-semibold text-xs">AI Data Collection & Annotation</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-base-content">
                    <FaCheckCircle className="text-primary text-xs" />
                    <span className="font-semibold text-xs">Fluent English & Remote Collaboration</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}