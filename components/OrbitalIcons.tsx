'use client'

import { useState, useEffect } from 'react'
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiNextdotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiTailwindcss,
  SiHtml5
} from 'react-icons/si'

interface TechIcon {
  icon: any
  name: string
  color: string
}

const technologies: TechIcon[] = [
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
]

export default function OrbitalIcons() {
  const [radius, setRadius] = useState(140)
  const centerX = 0
  const centerY = 0

  useEffect(() => {
    const getRadius = () => {
      if (window.innerWidth < 640) return 140 // Mobile
      if (window.innerWidth < 768) return 200 // Small tablets
      if (window.innerWidth < 1024) return 250 // Tablets
      return 280 // Desktop
    }
    
    const handleResize = () => {
      setRadius(getRadius())
    }
    
    setRadius(getRadius())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-visible">
      <div className="relative w-full h-full animate-spin-slow">
        {technologies.map((tech, index) => {
          const angle = (index * 360) / technologies.length - 90 // -90 para empezar arriba
          const radian = (angle * Math.PI) / 180
          const x = centerX + radius * Math.cos(radian)
          const y = centerY + radius * Math.sin(radian)
          const Icon = tech.icon

          return (
            <div
              key={tech.name}
              className="absolute animate-counter-spin"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
            >
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-gray-900/90 backdrop-blur-sm border border-primary-600/50 md:border-2 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
                style={{
                  boxShadow: `0 0 10px ${tech.color}40, 0 0 20px ${tech.color}20, inset 0 0 5px ${tech.color}10`,
                }}
                title={tech.name}
              >
                <Icon
                  className="text-sm sm:text-base md:text-xl lg:text-2xl"
                  style={{ color: tech.color }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

