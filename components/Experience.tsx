'use client'

import Image from 'next/image'
import { FaBriefcase, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa'
import { useLanguage } from '@/context/LanguageContext'

interface ExperienceItem {
  titleKey: string
  company: string
  periodKey: string
  descKey: string
  type: 'employment' | 'internship'
  logo?: string
}

const experiences: ExperienceItem[] = [
  {
    type: 'employment',
    titleKey: 'exp.apparel.title',
    company: 'APPAREL LINKS',
    periodKey: 'exp.apparel.period',
    descKey: 'exp.apparel.desc',
    logo: '/apparellinks.png',
  },
  {
    type: 'employment',
    titleKey: 'exp.imagen.title',
    company: 'IMAGEN Y COLOR',
    periodKey: 'exp.imagen.period',
    descKey: 'exp.imagen.desc',
    logo: '/imagen-y-color.jpg',
  },
  {
    type: 'employment',
    titleKey: 'exp.besteco.title',
    company: 'BEST ECO DESIGN',
    periodKey: 'exp.besteco.period',
    descKey: 'exp.besteco.desc',
    logo: '/bestecodesign.jpeg',
  },
  {
    type: 'internship',
    titleKey: 'exp.bantrab.title',
    company: 'BANTRAB',
    periodKey: 'exp.bantrab.period',
    descKey: 'exp.bantrab.desc',
    logo: '/bantrab.jpg',
  },
  {
    type: 'internship',
    titleKey: 'exp.myapp.title',
    company: 'MYAPPSOFTWARE',
    periodKey: 'exp.myapp.period',
    descKey: 'exp.myapp.desc',
    logo: '/myappsoftware.jpg',
  },
  {
    type: 'internship',
    titleKey: 'exp.byte.title',
    company: 'BYTE',
    periodKey: 'exp.byte.period',
    descKey: 'exp.byte.desc',
    logo: '/byte.jpg',
  },
  {
    type: 'internship',
    titleKey: 'exp.viscosity.title',
    company: 'VISCOSITY',
    periodKey: 'exp.viscosity.period',
    descKey: 'exp.viscosity.desc',
    logo: '/viscocity.jpg',
  },
]

export default function Experience() {
  const { t } = useLanguage()
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
              {t('exp.tag')}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            {t('exp.title')}
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-primary-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            {t('exp.description')}
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {/* Employment Section */}
          <div>
            <div className="flex items-center mb-6 sm:mb-8">
              <FaBriefcase className="text-primary-400 text-2xl sm:text-3xl mr-3" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{t('exp.employment')}</h3>
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
                            {t(exp.titleKey)}
                          </h4>
                          <p className="text-primary-400 text-sm sm:text-base font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <FaCalendarAlt className="mr-2 text-primary-400" />
                        <span>{t(exp.periodKey)}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {t(exp.descKey)}
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
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{t('exp.internships')}</h3>
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
                            {t(exp.titleKey)}
                          </h4>
                          <p className="text-primary-400 text-sm sm:text-base font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-400 text-xs sm:text-sm">
                        <FaCalendarAlt className="mr-2 text-primary-400" />
                        <span>{t(exp.periodKey)}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {t(exp.descKey)}
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
