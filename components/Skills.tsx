  'use client'

  import { FaReact, FaNodeJs, FaGithub, FaPython, FaHtml5, FaCss3Alt} from 'react-icons/fa'
  import { HiTrendingUp } from "react-icons/hi";
  import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiVercel, SiPostman, SiWordpress, SiDaisyui, SiGoogleanalytics, SiPagespeedinsights , SiSemrush  } from 'react-icons/si'
  // import { TbSeo } from 'react-icons/tb'
  import { BiLogoVisualStudio } from "react-icons/bi";

  export default function Skills() {
    const skillCategories = [
      {
        category: 'Frontend',
        skills: [
          { name: 'HTML', icon: <FaHtml5 className="text-6xl" />, color: 'text-orange-500' },
          { name: 'CSS', icon: <FaCss3Alt className="text-6xl" />, color: 'text-blue-500' },
          { name: 'React', icon: <FaReact className="text-6xl" />, color: 'text-info' },
          { name: 'Next.js', icon: <SiNextdotjs className="text-6xl" />, color: 'text-neutral' },
          { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-6xl" />, color: 'text-info' },
          { name: 'DaisyUI', icon: <SiDaisyui className="text-6xl" />, color: 'text-primary' },
        ]
      },
      {
        category: 'Backend',
        skills: [
          { name: 'Node.js', icon: <FaNodeJs className="text-6xl" />, color: 'text-success' },
          { name: 'Express.js', icon: <SiExpress className="text-6xl" />, color: 'text-neutral' },
          { name: 'MongoDB', icon: <SiMongodb className="text-6xl" />, color: 'text-success' },
          { name: 'Python', icon: <FaPython className="text-6xl" />, color: 'text-warning' },
        ]
      },
      {
        category: 'Dev Tools',
        skills: [
          { name: 'VS Code', icon: <BiLogoVisualStudio className="text-6xl" />, color: 'text-info' },
          { name: 'GitHub', icon: <FaGithub className="text-6xl" />, color: 'text-neutral' },
          { name: 'Vercel', icon: <SiVercel className="text-6xl" />, color: 'text-neutral' },
          { name: 'Postman', icon: <SiPostman className="text-6xl" />, color: 'text-error' },
          { name: 'WordPress', icon: <SiWordpress className="text-6xl" />, color: 'text-info' },
        ]
      },
      {
        category: 'SEO Tools',
        skills: [
          { name: 'Google Analytics', icon: <SiGoogleanalytics className="text-6xl" />, color: 'text-warning' },
          // { name: 'PageSpeed Insights', icon: <FaSearchengin className="text-6xl" />, color: 'text-info' },
              { name: 'Semrush', icon: <SiSemrush className="text-6xl" />, color: 'text-orange-500' },
              { name: 'Google Trends', icon: <HiTrendingUp  className="text-6xl" />, color: 'text-error' },
        
          { name: 'Pagespeedinsights', icon: <SiPagespeedinsights  className="text-6xl" />, color: 'text-info' },
          // { name: 'SEO Analyzer', icon: <TbSeo className="text-6xl" />, color: 'text-success' },
        ]
      }
    ]

    return (
      <section id="skills" className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">My <span className="text-primary">Skills</span></h2>
            {/* <div className="border-t-2 border-white w-32 mx-auto mb-8"></div> */}
          
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16 max-w-6xl mx-auto">
              <h3 className="text-2xl font-semibold text-center mb-8 text-primary">{category.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="card-body items-center text-center">
                      <div className={skill.color}>
                        {skill.icon}
                      </div>
                      <h3 className="card-title text-lg mt-2">{skill.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }