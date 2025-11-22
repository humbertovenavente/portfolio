'use client'

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-600 rounded-full mr-2 sm:mr-3"></div>
            <span className="text-primary-400 text-xs sm:text-sm uppercase tracking-wider font-semibold">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Let's Work Together
          </h2>
          <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-primary-600 mx-auto mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto px-4">
            Have a project in mind? I'd love to hear about it. 
            I'm always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              Contact Information
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                  <FaEnvelope className="text-primary-400 text-lg sm:text-xl" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
                    Email
                  </h4>
                  <a
                    href="https://outlook.live.com/mail/0/deeplink/compose?to=humbertovenavente7@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base break-all sm:break-normal"
                  >
                    humbertovenavente7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                  <FaPhone className="text-primary-400 text-lg sm:text-xl" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
                    Phone
                  </h4>
                  <a
                    href="https://wa.me/50259697956"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm sm:text-base"
                  >
                    +502 5969 7956
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-600/20 rounded-lg flex items-center justify-center group-hover:bg-primary-600/30 transition-colors">
                  <FaMapMarkerAlt className="text-primary-400 text-lg sm:text-xl" />
                </div>
                <div className="ml-3 sm:ml-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
                    Location
                  </h4>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Guatemala, Guatemala
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I'm available for freelance projects and job opportunities. 
                If you have any questions or want to discuss a project, feel free to contact me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
