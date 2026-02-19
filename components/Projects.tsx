'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaFileAlt, FaChalkboardTeacher, FaYoutube } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

interface Project {
  titleKey: string
  descKey: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  documentUrl?: string
  presentationUrl?: string
  videoUrl?: string
  image?: string
  images?: string[]
}

const projects: Project[] = [
  {
    titleKey: 'proj.makeup.title',
    descKey: 'proj.makeup.desc',
    technologies: ['TypeScript', 'React', 'Google Cloud Platform', 'Next.js', 'PostgreSQL'],
    liveUrl: 'http://karlalehnhoffmakeup.com/',
    images: [
      '/makeup-ecommerce-1.png',
      '/makeup-ecommerce-2.png',
      '/makeup-ecommerce-3.png',
      '/makeup-ecommerce-4.png',
    ],
  },
  {
    titleKey: 'proj.ontask.title',
    descKey: 'proj.ontask.desc',
    technologies: ['Web Application Development', 'MERN Stack', 'Docker', 'Amazon Web Services'],
    liveUrl: 'https://ontasktech.com/',
    images: [
      '/ontasktech-1.png',
      '/ontasktech-2.png',
      '/ontasktech-3.png',
      '/ontasktech-4.png',
    ],
  },
  {
    titleKey: 'proj.fashion.title',
    descKey: 'proj.fashion.desc',
    technologies: ['Artificial Intelligence', 'Python', 'TensorFlow', 'scikit-learn', 'OpenCV', 'Flask', 'Docker', 'Google Cloud Storage'],
    liveUrl: 'http://34.27.35.82/',
    documentUrl: 'https://drive.google.com/file/d/16ZdpfNuGyr1xAyzQmNj5YQ2dCB_5xyOZ/view?usp=sharing',
    presentationUrl: 'https://gamma.app/docs/FashionSense-AI-itdvsdth0yme9qq',
    images: [
      '/fashionsense-1.png',
      '/fashionsense-2.png',
      '/fashionsense-3.png',
      '/fashionsense-4.png',
    ],
  },
  {
    titleKey: 'proj.jenkins.title',
    descKey: 'proj.jenkins.desc',
    technologies: ['Continuous Integration', 'Continuous Delivery'],
    videoUrl: 'https://www.youtube.com/watch?si=UQR7bFkCgsy9LGu0&v=Tl8NPgBh3cA&feature=youtu.be',
    images: [
      '/jenkins-1.png',
      '/jenkins-2.png',
    ],
  },
  {
    titleKey: 'proj.odoo.title',
    descKey: 'proj.odoo.desc',
    technologies: ['Odoo', 'Automation', 'Slack', 'Trello', 'Power BI'],
    videoUrl: 'https://www.youtube.com/watch?si=q_QzB2M-YWLeqiNr&v=uMqZmjazQdk&feature=youtu.be',
    image: '/odoo-logo.jpg',
  },
]

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative h-48 sm:h-64 group/carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`${title} - Image ${index + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
        aria-label="Previous image"
      >
        <FaChevronLeft className="text-sm" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity z-10"
        aria-label="Next image"
      >
        <FaChevronRight className="text-sm" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-6'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
          {title}
        </h3>
      </div>
    </div>
  )
}

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section
      id="projects"
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-600 rounded-full mr-2 sm:mr-3"></div>
            <span className="text-primary-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
              {t('proj.tag')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('proj.title')}
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-primary-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            {t('proj.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const title = t(project.titleKey)
            return (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-primary-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/20 flex flex-col"
              >
                {/* Project Image */}
                {project.images && project.images.length > 0 ? (
                  <ImageCarousel images={project.images} title={title} />
                ) : project.image ? (
                  <div className="relative h-48 sm:h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {title}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-48 sm:h-64 bg-gradient-to-br from-primary-600/30 via-primary-500/20 to-primary-400/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary-600/20">
                        {title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                        {title}
                      </h3>
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                    {t(project.descKey)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-primary-600/20 text-primary-300 px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-primary-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-4 justify-center">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-primary-400 transition-colors group/link text-sm sm:text-base active:scale-95"
                      >
                        <FaGithub className="mr-2 group-hover/link:scale-110 transition-transform" />
                        <span>{t('proj.code')}</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative group/demo text-white transition-all flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-[3deg] will-change-transform duration-300 shadow-lg hover:shadow-xl h-12 sm:h-14 text-base sm:text-lg pl-[4.5rem] sm:pl-[5rem] pr-4 sm:pr-6 bg-primary-600 shadow-primary-600/30 hover:shadow-primary-600/50 hover:bg-primary-500 active:scale-95"
                      >
                        <div className="absolute left-0 top-0 mt-1 ml-1 bg-white text-slate-950 p-[0.35rem] bottom-1 group-hover/demo:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300 h-10 w-12 sm:h-12 sm:w-12 flex items-center justify-center">
                          <FaExternalLinkAlt className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                        <div>{t('proj.playDemo')}</div>
                        <div className="bg-primary-400 absolute flex rounded-full animate-ping opacity-75 h-4 w-4 sm:h-5 sm:w-5 -top-2 -right-2"></div>
                        <div className="bg-primary-500 absolute flex rounded-full scale-[90%] h-4 w-4 sm:h-5 sm:w-5 -top-2 -right-2"></div>
                      </a>
                    )}
                    {project.documentUrl && (
                      <a
                        href={project.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-primary-400 transition-colors group/link text-sm sm:text-base active:scale-95"
                      >
                        <FaFileAlt className="mr-2 group-hover/link:scale-110 transition-transform" />
                        <span>{t('proj.document')}</span>
                      </a>
                    )}
                    {project.presentationUrl && (
                      <a
                        href={project.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-primary-400 transition-colors group/link text-sm sm:text-base active:scale-95"
                      >
                        <FaChalkboardTeacher className="mr-2 group-hover/link:scale-110 transition-transform" />
                        <span>{t('proj.presentation')}</span>
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-400 hover:text-primary-400 transition-colors group/link text-sm sm:text-base active:scale-95"
                      >
                        <FaYoutube className="mr-2 group-hover/link:scale-110 transition-transform" />
                        <span>{t('proj.video')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
