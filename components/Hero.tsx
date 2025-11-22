'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaWhatsapp } from 'react-icons/fa'
import Typewriter from './Typewriter'
import OrbitalIcons from './OrbitalIcons'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const roles = [
    'Full Stack Developer',
    'Mobile App Developer',
    'Web Developer',
    'Junior Project Manager',
  ]

  const message = encodeURIComponent("Hello! I'm really happy to work with you. Let's create something amazing together and bring your ideas to life with innovative solutions.")

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/humbertovenavente',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/humberto-venavente-09873624a/',
      label: 'LinkedIn',
    },
    {
      icon: FaEnvelope,
      href: `mailto:humbertovenavente7@gmail.com?subject=Let's Work Together&body=${message}`,
      label: 'Email',
    },
    {
      icon: FaWhatsapp,
      href: `https://wa.me/50259697956?text=${message}`,
      label: 'WhatsApp',
    },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div
            className={`transition-all duration-1000 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-primary-400 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4 font-semibold">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-primary-400">Jose</span> Najar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 font-light min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem] lg:min-h-[4rem] flex items-center">
              <Typewriter texts={roles} speed={100} deleteSpeed={50} delayBetweenTexts={2000} />
            </p>

            <div className="flex items-center space-x-4 sm:space-x-6 mb-6 sm:mb-8">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600/20 hover:bg-primary-600 rounded-full flex items-center justify-center text-primary-400 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label={link.label}
                  >
                    <Icon className="text-sm sm:text-base" />
                  </a>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#projects"
                className="bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-primary-600/50 hover:scale-105 active:scale-95 text-center"
              >
                View Projects
              </a>
              <a
                href="/cv.pdf"
                download
                className="bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 border-2 border-primary-600 hover:border-primary-500 flex items-center justify-center gap-2 active:scale-95"
              >
                <FaDownload />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-br from-primary-600/30 to-primary-400/20 rounded-full blur-3xl"></div>
              
              {/* Photo container with orbital icons */}
              <div className="relative z-10">
                <div className="relative w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] mx-auto flex items-center justify-center">
                  {/* Orbital Icons */}
                  <OrbitalIcons />
                  
                  {/* Photo */}
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-400 rounded-full blur-2xl opacity-50"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-2 sm:border-4 border-primary-600/50 shadow-2xl">
                      <Image
                        src="/foto.jpg"
                        alt="Profile photo"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative letter in background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <span className="text-[300px] md:text-[400px] font-bold text-primary-600/5 select-none">
                  J
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
