'use client'

import Image from 'next/image'
import { FaCode, FaPalette, FaMobile, FaRocket, FaDatabase, FaGitAlt, FaBox, FaLayerGroup, FaTasks } from 'react-icons/fa'
import {
  SiPython,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiHaskell,
  SiPhp,
  SiVuedotjs,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiAngular,
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiMongodb,
  SiMicrosoftsqlserver,
  SiMicrosoft,
  SiMicrosoftazure,
  SiVtex,
  SiPrometheus,
  SiJenkins,
  SiPostman,
  SiDrone,
  SiGrafana,
  SiSonarqube,
  SiGit,
  SiAmazonaws,
  SiGooglecloud,
  SiFlutter,
  SiKotlin,
} from 'react-icons/si'

interface Skill {
  name: string
  percentage: number
  icon: any
}

const skills: Skill[] = [
  { name: 'Frontend Development', percentage: 85, icon: FaCode },
  { name: 'Backend Development', percentage: 75, icon: FaDatabase },
  { name: 'UI/UX Design', percentage: 70, icon: FaPalette },
  { name: 'Mobile Development', percentage: 60, icon: FaMobile },
  { name: 'DevOps & Cloud', percentage: 80, icon: FaRocket },
  { name: 'Odoo', percentage: 75, icon: FaBox },
  { name: 'Git', percentage: 90, icon: FaGitAlt },
  { name: 'Low Code Apps', percentage: 75, icon: FaLayerGroup },
  { name: 'Project Management', percentage: 75, icon: FaTasks },
]

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-600 rounded-full mr-2 sm:mr-3"></div>
            <span className="text-primary-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
              Who I Am
            </span>
          </div>
        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
          {/* Left Side - Description */}
          <div className="flex items-center">
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-8 sm:p-10 border border-gray-700/50 shadow-2xl hover:shadow-primary-600/20 transition-all duration-300 hover:border-primary-600/30 w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent rounded-xl"></div>
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary-600 to-primary-400 rounded-full mr-4"></div>
                  <h3 className="text-primary-400 text-sm uppercase tracking-wider font-semibold">About Me</h3>
                </div>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed text-justify">
                  Computer Science and Systems Engineering student with hands-on experience in full-stack development, cloud integration (AWS, Google Cloud, and Azure), database management, low-code tools, and building AI-driven solutions. I develop efficient, scalable, results-oriented web applications using modern technologies such as JavaScript, the MERN stack, Oracle APEX, Power Apps, and application development best practices. I adapt quickly to new environments, solve technical problems with an analytical mindset, and contribute to collaborative projects through clear communication, strong ownership, and a solid focus on artificial intelligence.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - University Logo */}
          <div className="flex items-center">
            <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden border-2 border-gray-700/50 shadow-2xl hover:shadow-primary-600/20 transition-all duration-300 hover:border-primary-600/30 bg-white group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative w-full h-full">
                <Image
                  src="/universidad-del-istmo.jpg"
                  alt="Universidad del Istmo"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            My Work <span className="text-orange-500">Skills</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-gray-700/30 hover:border-orange-500/60 transition-all duration-300 group flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-1"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent rounded-xl transition-all duration-300"></div>
                  
                  <div className="relative z-10 w-full">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-gray-700/60 to-gray-800/60 rounded-xl flex items-center justify-center mb-4 group-hover:from-orange-500/20 group-hover:to-orange-600/10 transition-all duration-300 shadow-inner group-hover:scale-110">
                      <Icon className="text-orange-500 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h4 className="text-white font-semibold text-sm sm:text-base mb-5 group-hover:text-orange-400 transition-colors duration-300">
                      {skill.name}
                    </h4>
                    <div className="w-full bg-gray-700/60 rounded-full h-9 sm:h-10 overflow-hidden relative shadow-inner">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-orange-600 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2 sm:pr-3 shadow-lg"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <span className="text-white text-xs sm:text-sm font-bold drop-shadow-lg">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">
            Technologies I Work With
          </h3>
          
          <div className="space-y-12">
            {/* Programming Languages */}
            <div>
              <h4 className="text-xl font-semibold text-orange-500 mb-6">Programming Languages</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { name: 'Python', icon: SiPython, color: '#3776AB' },
                  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
                  { name: 'C', icon: SiC, color: '#A8B9CC' },
                  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
                  { name: 'Haskell', icon: SiHaskell, color: '#5D4F85' },
                  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
                ].map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all group hover:scale-105 h-full min-h-[120px]"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 flex-shrink-0">
                        <Icon className="text-3xl sm:text-4xl" style={{ color: tech.color }} />
                      </div>
                      <span className="text-white text-xs sm:text-sm text-center font-medium leading-tight">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Frameworks and libraries */}
            <div>
              <h4 className="text-xl font-semibold text-orange-500 mb-6">Frameworks and libraries</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
                  { name: 'React', icon: SiReact, color: '#61DAFB' },
                  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
                  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
                  { name: 'Express', icon: SiExpress, color: '#000000' },
                  { name: 'Angular Material', icon: SiAngular, color: '#DD0031' },
                  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
                  { name: 'Blazor', icon: FaLayerGroup, color: '#512BD4' },
                ].map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all group hover:scale-105 h-full min-h-[120px]"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 flex-shrink-0">
                        <Icon className="text-3xl sm:text-4xl" style={{ color: tech.color }} />
                      </div>
                      <span className="text-white text-xs sm:text-sm text-center font-medium leading-tight">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Mobile Applications */}
            <div>
              <h4 className="text-xl font-semibold text-orange-500 mb-6">Mobile Applications</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
                  { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
                ].map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all group hover:scale-105 h-full min-h-[120px]"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 flex-shrink-0">
                        <Icon className="text-3xl sm:text-4xl" style={{ color: tech.color }} />
                      </div>
                      <span className="text-white text-xs sm:text-sm text-center font-medium leading-tight">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Databases */}
            <div>
              <h4 className="text-xl font-semibold text-orange-500 mb-6">Databases</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
                  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
                  { name: 'Oracle', icon: SiOracle, color: '#F80000' },
                  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
                  { name: 'SQL Server', icon: SiMicrosoftsqlserver, color: '#CC2927' },
                ].map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all group hover:scale-105 h-full min-h-[120px]"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 flex-shrink-0">
                        <Icon className="text-3xl sm:text-4xl" style={{ color: tech.color }} />
                      </div>
                      <span className="text-white text-xs sm:text-sm text-center font-medium leading-tight">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Low-Code */}
            <div>
              <h4 className="text-xl font-semibold text-orange-500 mb-6">Low-Code</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { name: 'Power Apps', icon: SiMicrosoft, color: '#0078D4' },
                  { name: 'Oracle APEX', icon: SiOracle, color: '#F80000' },
                  { name: 'VTEX', icon: SiVtex, color: '#ED125F' },
                ].map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all group hover:scale-105 h-full min-h-[120px]"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 flex-shrink-0">
                        <Icon className="text-3xl sm:text-4xl" style={{ color: tech.color }} />
                      </div>
                      <span className="text-white text-xs sm:text-sm text-center font-medium leading-tight">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* CI/CD */}
            <div>
              <h4 className="text-xl font-semibold text-orange-500 mb-6">CI/CD</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
                  { name: 'Jenkins', icon: SiJenkins, color: '#D24939' },
                  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
                  { name: 'Drone', icon: SiDrone, color: '#212121' },
                  { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
                  { name: 'SonarQube', icon: SiSonarqube, color: '#4E9BCD' },
                ].map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all group hover:scale-105 h-full min-h-[120px]"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 flex-shrink-0">
                        <Icon className="text-3xl sm:text-4xl" style={{ color: tech.color }} />
                      </div>
                      <span className="text-white text-xs sm:text-sm text-center font-medium leading-tight">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-xl font-semibold text-orange-500 mb-6">Tools</h4>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
                {[
                  { name: 'Git', icon: SiGit, color: '#F05032' },
                  { name: 'Amazon Web Services', icon: SiAmazonaws, color: '#232F3E' },
                  { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
                  { name: 'Azure', icon: SiMicrosoftazure, color: '#0078D4' },
                ].map((tech) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-4 sm:p-5 bg-gray-800/50 rounded-lg border border-gray-700/50 hover:border-orange-500/50 transition-all group hover:scale-105 h-full min-h-[120px]"
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mb-3 flex-shrink-0">
                        <Icon className="text-3xl sm:text-4xl" style={{ color: tech.color }} />
                      </div>
                      <span className="text-white text-xs sm:text-sm text-center font-medium leading-tight">{tech.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center">
            Awards & Recognition
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                {/* ILAN Logo */}
                <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 relative rounded-lg overflow-hidden border border-gray-700/50 bg-white">
                  <Image
                    src="/ilan.jpg"
                    alt="ILAN Israel Innovation Network"
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Winner – ILAN 2025 Award (Innovative Project for Israel) · 2025
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    Distinction granted by the Israel Innovation Network to the project "Prototype with Neural Networks and Clustering to Predict Fashion Trends in Guatemala."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
