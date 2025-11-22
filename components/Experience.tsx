'use client'

import Image from 'next/image'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
  type: 'employment' | 'internship'
  logo?: string
}

const experiences: ExperienceItem[] = [
  {
    type: 'employment',
    title: 'Project Manager & Full Stack Developer',
    company: 'BEST ECO DESIGN',
    period: 'Feb 2025 - Present',
    description: 'I led software development project for U.S.-based company as a Project Manager, overseeing a team and solutions using the MERN stack and SCRUM methodology and full stack developer.',
  },
  {
    type: 'employment',
    title: 'Freelance Web Developer',
    company: 'IMAGEN Y COLOR',
    period: 'May 2025- Present',
    description: 'Freelance web developer with experience in HTML, CSS, JavaScript, and PostgreSQL databases, developing a project with AWS cloud integration for a company operating in Guatemala and providing system maintenance.',
    logo: '/imagen-y-color.jpg',
  },
  {
    type: 'internship',
    title: 'Development Intern',
    company: 'BANTRAB',
    period: 'May 2025 - Aug 2025',
    description: 'I participated in the creation of an application in the area of Digital Innovations using Microsoft Power Apps with SQL Server.',
    logo: '/bantrab.jpg',
  },
  {
    type: 'internship',
    title: 'Cloud Solutions Intern',
    company: 'MYAPPSOFTWARE',
    period: 'May 2024 - Aug 2024',
    description: 'I learned concepts related to cloud solutions using Amazon Web Services (AWS).',
    logo: '/myappsoftware.jpg',
  },
  {
    type: 'internship',
    title: 'Frontend Developer Intern',
    company: 'BYTE',
    period: 'May 2023 - Aug 2023',
    description: 'I collaborated on a project utilizing Angular Material, focusing on creating user-friendly interface for web application. (Frontend)',
    logo: '/byte.jpg',
  },
  {
    type: 'internship',
    title: 'Development Intern',
    company: 'VISCOSITY',
    period: 'May 2022 - Aug 2022',
    description: 'I contributed to the development project using Oracle APEX, enhancing the company\'s workflow and user interface.',
    logo: '/viscocity.jpg',
  },
]

export default function Experience() {
  const employment = experiences.filter(exp => exp.type === 'employment')
  const internships = experiences.filter(exp => exp.type === 'internship')

  return (
    <section
      id="experience"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-600 rounded-full mr-2 sm:mr-3"></div>
            <span className="text-primary-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
              My Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Work Experience
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-primary-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            A timeline of my professional experience and internships that have shaped my career.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Employment Section */}
          <div>
            <div className="flex items-center mb-6 sm:mb-8">
              <FaBriefcase className="text-primary-400 text-2xl sm:text-3xl mr-3" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Employment</h3>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {employment.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 sm:pl-8 border-l-2 border-primary-600/30 hover:border-primary-600 transition-colors"
                >
                  <div className="absolute -left-2 sm:-left-2.5 top-0 w-4 h-4 sm:w-5 sm:h-5 bg-primary-600 rounded-full border-2 border-gray-900"></div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-primary-600/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        {exp.logo && (
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white/10 border border-gray-700 p-2">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-primary-400 text-sm sm:text-base font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <FaCalendarAlt className="mr-2 text-primary-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships Section */}
          <div>
            <div className="flex items-center mb-6 sm:mb-8">
              <FaGraduationCap className="text-primary-400 text-2xl sm:text-3xl mr-3" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Internships</h3>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {internships.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 sm:pl-8 border-l-2 border-primary-600/30 hover:border-primary-600 transition-colors"
                >
                  <div className="absolute -left-2 sm:-left-2.5 top-0 w-4 h-4 sm:w-5 sm:h-5 bg-primary-600 rounded-full border-2 border-gray-900"></div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-primary-600/50 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        {exp.logo && (
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white/10 border border-gray-700 p-2">
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              fill
                              className="object-contain"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h4>
                          <p className="text-primary-400 text-sm sm:text-base font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <FaCalendarAlt className="mr-2 text-primary-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
