'use client'

import { useState, useEffect } from 'react'
import { FaFileAlt, FaArrowDown, FaDownload, FaEye, FaTimes, FaGraduationCap, FaBriefcase, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Hero() {
  const [showResumeModal, setShowResumeModal] = useState(false)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowResumeModal(false)
    }
    if (showResumeModal) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showResumeModal])

  return (
    <section id="home" className="hero min-h-screen bg-base-200 pt-20 relative">
      <div className="hero-content text-center">
        <div className="max-w-2xl mx-auto">
          <div className="avatar mb-6">
            <div className="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-2xl">
              <img src="/profile.jpg" alt="Profile" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Tasnim Anjum Sakib Barbhuiya
          </h1>
          
          <p className="py-4 text-lg sm:text-xl font-medium text-primary">
            Computer Science Graduate | Web Developer | Graphic Designer
          </p>
          
          <p className="mb-8 text-base-content/70 max-w-lg mx-auto leading-relaxed">
            Passionate about building responsive web applications, creative UI designs, and AI digital workflows. Turning innovative ideas into clean code.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            {/* View CV Button */}
            <button 
              onClick={() => setShowResumeModal(true)}
              className="btn btn-primary gap-2 shadow-lg hover:scale-105 transition-transform"
            >
              <FaEye className="text-lg" />
              View CV / Resume
            </button>

            {/* Download CV Button */}
            <a 
              href="/resume.pdf" 
              download="Tasnim_Sakib_Resume.pdf"
              className="btn btn-outline btn-primary gap-2 hover:scale-105 transition-transform"
            >
              <FaDownload />
              Download PDF
            </a>

            {/* My Work Button */}
            <a 
              href="#projects"
              className="btn btn-ghost gap-2 border border-base-content/20 scroll-smooth"
            >
              <FaArrowDown />
              My Work
            </a>
          </div>
        </div>
      </div>

      {/* Interactive CV Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
          {/* Backdrop Click */}
          <div 
            className="absolute inset-0" 
            onClick={() => setShowResumeModal(false)}
          />

          <div className="relative bg-base-100 border border-base-content/20 rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden z-10 text-left">
            {/* Modal Header */}
            <div className="bg-base-200 px-6 py-4 border-b border-base-content/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/20 p-2.5 rounded-lg text-primary">
                  <FaFileAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-base-content">Curriculum Vitae</h3>
                  <p className="text-xs text-base-content/60">Tasnim Anjum Sakib Barbhuiya</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a 
                  href="/resume.pdf" 
                  download="Tasnim_Sakib_Resume.pdf"
                  className="btn btn-sm btn-primary gap-2"
                >
                  <FaDownload /> Download PDF
                </a>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="btn btn-sm btn-circle btn-ghost"
                >
                  <FaTimes className="text-lg" />
                </button>
              </div>
            </div>

            {/* Modal Content - Styled Printable CV */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-base-100 text-base-content">
              {/* Header Info */}
              <div className="border-b border-base-content/10 pb-6 flex flex-col sm:flex-row justify-between sm:items-end gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-primary">
                    TASNIM ANJUM SAKIB BARBHUIYA
                  </h2>
                  <p className="text-sm font-semibold opacity-80 mt-1">
                    Computer Science & Engineering Graduate
                  </p>
                </div>
                <div className="text-xs sm:text-sm space-y-1 opacity-80">
                  <p className="flex items-center gap-2"><FaPhone className="text-primary" /> +8801747536594</p>
                  <p className="flex items-center gap-2"><FaEnvelope className="text-primary" /> tsakibxxx9111@gmail.com</p>
                  <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" /> Sylhet, Bangladesh</p>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-2">Summary</h3>
                <p className="text-sm opacity-90 leading-relaxed bg-base-200/50 p-4 rounded-xl border border-base-content/5">
                  Motivated and detail-oriented Computer Science and Engineering graduate with skills in web development, graphic design, and AI-related digital tasks. Experienced with various software tools and programming languages. Passionate about technology, problem-solving, and contributing to innovative digital projects and AI data collection and annotation tasks with accuracy and efficiency.
                </p>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FaBriefcase className="text-base" /> Experience
                </h3>
                <div className="space-y-6">
                  {/* Job 1 */}
                  <div className="border-l-2 border-primary/50 pl-4 py-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-base text-base-content">Redhills Solicitor</h4>
                      <span className="badge badge-sm badge-outline">2024 - 2025</span>
                    </div>
                    <p className="text-xs font-semibold text-primary mb-2">Frontend Web Developer</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm opacity-80 space-y-1">
                      <li>Developed a responsive legal consultation website.</li>
                      <li>Added appointment scheduling and contact features.</li>
                      <li>Improved overall user experience and navigation.</li>
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="border-l-2 border-primary/50 pl-4 py-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-base text-base-content">Microtimes</h4>
                      <span className="badge badge-sm badge-outline">2022 - 2024</span>
                    </div>
                    <p className="text-xs font-semibold text-primary mb-2">Web Developer</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm opacity-80 space-y-1">
                      <li>Built a responsive e-commerce website for browsing and purchasing electronic products.</li>
                      <li>Implemented product filtering, category navigation, and smooth checkout for users.</li>
                      <li>Assisted in improving website performance and usability across different devices.</li>
                    </ul>
                  </div>

                  {/* Job 3 */}
                  <div className="border-l-2 border-primary/50 pl-4 py-1">
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-base text-base-content">Online Marketplace</h4>
                      <span className="badge badge-sm badge-outline">2020 - 2021</span>
                    </div>
                    <p className="text-xs font-semibold text-primary mb-2">Graphic Designer (Freelance & Creative Projects)</p>
                    <ul className="list-disc list-inside text-xs sm:text-sm opacity-80 space-y-1">
                      <li>Designed social media posts, promotional banners, and digital marketing materials.</li>
                      <li>Worked with Adobe Photoshop, Illustrator, and Figma for creative design projects.</li>
                      <li>Created visually engaging and professional content with strong attention to detail.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FaGraduationCap className="text-base" /> Education
                </h3>
                <div className="border-l-2 border-primary/50 pl-4 py-1">
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-bold text-base text-base-content">North East University Bangladesh</h4>
                    <span className="badge badge-sm badge-primary">2022 - 2026</span>
                  </div>
                  <p className="text-xs font-semibold text-primary mb-2">Bachelor of Science in Computer Science & Engineering</p>
                  <p className="text-xs opacity-80">
                    <span className="font-semibold">Relevant Coursework:</span> Web Development, Database Management, Software Engineering, Artificial Intelligence, Computer Networks, Data Structures & Algorithms.
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div>
                <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-3">Skills & Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="bg-base-200 p-3 rounded-lg">
                    <p className="font-semibold text-primary mb-1">Development & Tools</p>
                    <p className="opacity-80">HTML, CSS, JavaScript, Python, C++, WordPress & Web Development</p>
                  </div>
                  <div className="bg-base-200 p-3 rounded-lg">
                    <p className="font-semibold text-primary mb-1">Design & Creative</p>
                    <p className="opacity-80">Photoshop, Illustrator, Figma, Graphic Design & Content Creation</p>
                  </div>
                  <div className="bg-base-200 p-3 rounded-lg">
                    <p className="font-semibold text-primary mb-1">Specialized & Office</p>
                    <p className="opacity-80">AI Data Collection & Annotation, Microsoft Excel, Word & PowerPoint, Google Workspace</p>
                  </div>
                  <div className="bg-base-200 p-3 rounded-lg">
                    <p className="font-semibold text-primary mb-1">Professional Skills</p>
                    <p className="opacity-80">Fluent English Communication, Problem-Solving, Teamwork, Time Management, Remote Collaboration</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-base-200 px-6 py-3 border-t border-base-content/10 flex justify-between items-center text-xs opacity-75">
              <span>Tasnim Anjum Sakib Barbhuiya — Resume</span>
              <a 
                href="/resume.pdf" 
                download="Tasnim_Sakib_Resume.pdf"
                className="text-primary hover:underline font-semibold"
              >
                Click to Download PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}