import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/curriculum-collaborative-learning.png'
import thematicImg from '../assets/thematic-classroom-writing.png'

const InnovativeAcademicPrograms = () => {
  const programs = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Integrated Curriculum",
      description: "Seamlessly combines traditional subjects with modern teaching methodologies for comprehensive learning."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Project-Based Learning",
      description: "Hands-on projects that encourage critical thinking, collaboration, and real-world application of knowledge."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaborative Learning",
      description: "Group activities and team projects that foster communication skills and peer learning."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Assessment & Evaluation",
      description: "Continuous assessment methods that track progress and provide timely feedback for improvement."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Accelerated Learning",
      description: "Advanced programs for gifted students to excel beyond standard curriculum requirements."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Flexible Scheduling",
      description: "Adaptive timetable that accommodates different learning styles and individual student needs."
    }
  ]

  const highlights = [
    "Comprehensive coverage of all core subjects",
    "Integration of technology in every subject",
    "Regular workshops and guest lectures",
    "Research-oriented assignments",
    "Interdisciplinary project work",
    "Preparation for competitive examinations"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                Academic Excellence
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Innovative Academic Programs
              </h1>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Our innovative academic programs are designed to provide students with a well-rounded education that combines rigorous academics with practical application, preparing them for success in higher education and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Programs
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
                >
                  Get Information
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Students engaged in collaborative learning with technology and creative activities"
                  className="w-full h-[500px] object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Program Features</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Discover the key features that make our academic programs innovative and effective.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{program.title}</h3>
                <p className="text-slate-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={thematicImg}
                alt="Students focused on writing and classroom work"
                className="w-full rounded-2xl shadow-2xl ring-1 ring-slate-200/80 object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Program Highlights</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our innovative academic programs offer comprehensive learning experiences that go beyond traditional classroom teaching.
              </p>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 text-lg">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Structure */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Curriculum Structure</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A well-structured curriculum that balances theoretical knowledge with practical application.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-600">60%</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Core Subjects</h3>
              <p className="text-slate-600">Comprehensive coverage of mathematics, sciences, languages, and social studies.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">25%</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Practical Application</h3>
              <p className="text-slate-600">Hands-on projects, experiments, and real-world problem-solving activities.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">15%</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">Enrichment Programs</h3>
              <p className="text-slate-600">Extracurricular activities, workshops, and specialized training programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Excel Academically?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our innovative academic programs and experience education that prepares you for future success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-xl hover:bg-purple-50 transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-purple-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InnovativeAcademicPrograms

