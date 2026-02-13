import React from 'react'
import teacher from '../assets/teacher.jpg'

const InfoSection = () => {
  const handleLearnMore = () => {
    // You can add more functionality here, like opening a modal or navigating to a detailed page
    console.log('Learn More clicked - InfoSection')
    // For now, we'll just show an alert or you can implement more functionality
    alert('Learn More About Our Approach - This could open a detailed page or modal')
  }

  return (
    <section id="info-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={teacher}
                alt="Teacher at Narayana Institute"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  
                </span>
                <br />
                More Than Grades
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We believe in nurturing not just academic excellence, but also character, creativity, and leadership skills that prepare students for life beyond the classroom.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Proven Excellence</h3>
                  <p className="text-slate-600">16+ years of academic excellence with consistently high results and student success stories.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Holistic Development</h3>
                  <p className="text-slate-600">Focus on academics, sports, arts, and character building for complete growth.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">Expert Faculty</h3>
                  <p className="text-slate-600">Highly qualified and experienced teachers dedicated to nurturing each student's potential.</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <button 
                onClick={handleLearnMore}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300 group cursor-pointer"
              >
                <span>Learn More About Our Approach</span>
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection