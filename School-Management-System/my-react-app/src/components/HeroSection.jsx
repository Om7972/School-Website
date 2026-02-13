import React from 'react'
import student from '../assets/student.jpg'

const HeroSection = () => {
  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById('enquiry-form')
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToInfoSection = () => {
    const infoSection = document.getElementById('info-section')
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-300 via-indigo-200 to-purple-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-200 via-blue-200 to-slate-200 rounded-full blur-2xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-800 leading-tight mb-4 tracking-tight drop-shadow-sm animate-fade-in-up">
              Welcome to
              <span className="block bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent mt-2 animate-gradient-x">
                Narayana's Sec. & Higher Sec. School
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-8 max-w-xl animate-fade-in-up delay-100">
              Empowering students with excellence in education, character building, and holistic development for over 16 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up delay-200">
              <button
                onClick={scrollToEnquiry}
                className="relative bg-white/70 backdrop-blur-md border border-blue-200 hover:border-blue-400 text-blue-700 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-blue-200/60 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="inline-flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Apply Now
                </span>
              </button>
              <button
                onClick={scrollToInfoSection}
                className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-indigo-200/60 transition-all duration-300 flex items-center gap-2 group"
              >
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 mr-2 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </span>
              </button>
            </div>
            {/* Key Features */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-md animate-fade-in-up delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">16+ Years Excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">Academic Excellence</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-slate-700 font-medium">Holistic Development</span>
              </div>
            </div>
          </div>

          {/* Right: Image Card */}
          <div className="flex justify-center lg:justify-end items-center animate-fade-in-up delay-200">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-400 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
                <img
                  src={student}
                  alt="Student at Narayana Institute"
                  className="w-[350px] h-[420px] object-cover object-top rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {/* Decorative Accent */}
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-300 to-indigo-400 rounded-full blur-md opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50 animate-fade-in-up delay-500">
        <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      </div>
    </section>
  )
}

export default HeroSection