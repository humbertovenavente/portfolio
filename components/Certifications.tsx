'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

interface Certification {
  title: string
  issuer: string
  year: number
  image: string
}

const certifications: Certification[] = [
  {
    title: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    year: 2026,
    image: '/certificate-psm1.png',
  },
  {
    title: 'PMI Authorized PMP Exam Prep',
    issuer: 'Project Management Institute (PMI)',
    year: 2025,
    image: '/certificate-pmi.png',
  },
  {
    title: 'Odoo for programmers',
    issuer: 'Udemy',
    year: 2025,
    image: '/certificate-odoo.jpg',
  },
  {
    title: 'Managing virtual project teams',
    issuer: 'The Open University',
    year: 2025,
    image: '/certificate-openuniversity.jpg',
  },
]

export default function Certifications() {
  const { t } = useLanguage()

  return (
    <section
      id="certifications"
      className="py-20 bg-gray-800 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-600 rounded-full mr-2 sm:mr-3"></div>
            <span className="text-primary-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
              {t('cert.tag')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('cert.title')}
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-primary-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            {t('cert.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700 hover:border-primary-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/20"
            >
              {/* Certificate Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-900">
                <Image
                  src={cert.image}
                  alt={`${cert.title} - ${cert.issuer}`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-primary-400 text-sm sm:text-base font-medium">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {cert.year}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
