'use client'

import { FaGraduationCap, FaBriefcase, FaUsers } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-8">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="border-t-2 border-primary w-32 mx-auto mb-8"></div>
          <p className="text-lg text-base-content/80 leading-relaxed">
            Full Stack Developer | SEO Specialist | Web Developer | 
            Creating Modern Web Applications | Building Responsive User Interfaces | 
            Optimizing Digital Presence | Passionate Problem Solver
          </p>
        </div>

        {/* Detailed Description Card */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="card bg-base-200 shadow-xl border border-primary/20">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Full Stack Developer & SEO Specialist
              </h3>
              <div className="space-y-4 text-base-content/80">
                <p>
                  I am a passionate Full Stack Developer and SEO Specialist, dedicated to creating innovative web 
                  experiences and exploring cutting-edge technologies. With expertise in modern web development 
                  frameworks and search engine optimization strategies.
                </p>
                <p>
                  Currently, I work as a <span className="text-primary font-semibold">Full Stack Developer</span>, where I help build and maintain 
                  modern web applications with seamless user experiences. Additionally, I specialize in 
                  <span className="text-primary font-semibold"> SEO optimization</span>, helping businesses improve their digital presence and search rankings.
                </p>
                <p>
                  Beyond my technical work, I am deeply committed to continuous learning and staying updated with 
                  the latest web technologies, best practices, and industry trends to deliver exceptional results 
                  for every project.
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
                <h3 className="card-title text-xl">Education</h3>
              </div>
              <ul className="space-y-3 text-base-content/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>Bachelor's in Computer Science and Engineering (pursuing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>Self-taught Full Stack Developer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>Certified SEO Specialist</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional */}
          <div className="card bg-base-200 shadow-xl border border-base-300 hover:border-primary transition-colors">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaBriefcase className="text-3xl text-primary" />
                </div>
                <h3 className="card-title text-xl">Professional</h3>
              </div>
              <ul className="space-y-3 text-base-content/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>Full Stack Web Developer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>SEO Specialist & Digital Marketing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>WordPress Developer</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Extra Curricular Activities */}
          <div className="card bg-base-200 shadow-xl border border-base-300 hover:border-primary transition-colors">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <FaUsers className="text-3xl text-primary" />
                </div>
                <h3 className="card-title text-xl">Interests</h3>
              </div>
              <ul className="space-y-3 text-base-content/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>Open Source Contributor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>Tech Blogger & Content Creator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">●</span>
                  <span>Continuous Learner</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}