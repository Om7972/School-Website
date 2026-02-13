import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SchoolBrochure = () => {
  const navigate = useNavigate()
  const [selectedSection, setSelectedSection] = useState('overview')

  const handleDownloadPDF = () => {
    navigate('/brochure-form?action=download')
  }

  const handleViewOnline = () => {
    navigate('/brochure-form?action=view')
  }

  const brochureSections = [
    { id: 'overview', name: 'Overview', icon: '🏫' },
    { id: 'academics', name: 'Academics', icon: '📚' },
    { id: 'facilities', name: 'Facilities', icon: '🏢' },
    { id: 'programs', name: 'Programs', icon: '🎯' },
    { id: 'admissions', name: 'Admissions', icon: '📝' }
  ]

  const schoolInfo = {
    name: "Narayana's Sec. & Higher Sec. School",
    established: "2009",
    location: "Washim, Maharashtra",
    type: "Co-educational",
    grades: "Class 1 to Class 12",
    board: "State Board of Maharashtra",
    strength: "500+ students",
    teachers: "50+ qualified teachers"
  }

  const facilities = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Smart Classrooms",
      description: "Technology-enabled classrooms with interactive whiteboards and digital learning tools."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Library",
      description: "Well-stocked library with books, digital resources, and study spaces."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Science Labs",
      description: "Modern laboratories for Physics, Chemistry, and Biology with latest equipment."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Sports Complex",
      description: "Multi-purpose sports facilities including playground, indoor games, and fitness center."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-3 3m3-3l3 3m0 0v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4m6 0h-6m6 0l3-3m-3 3l-3-3" />
        </svg>
      ),
      title: "Computer Lab",
      description: "Fully equipped computer laboratory with latest technology and software."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Medical Room",
      description: "First-aid facilities and regular health check-ups for students."
    }
  ]

  const programs = [
    {
      title: "Academic Excellence",
      description: "Comprehensive curriculum with focus on core subjects and skill development.",
      features: ["State Board Curriculum", "Regular Assessments", "Remedial Classes", "Career Guidance"]
    },
    {
      title: "Sports & Physical Education",
      description: "Holistic development through various sports and physical activities.",
      features: ["Multiple Sports", "Inter-school Competitions", "Fitness Training", "Sports Scholarships"]
    },
    {
      title: "Cultural Activities",
      description: "Platform for artistic expression and cultural development.",
      features: ["Music & Dance", "Art & Craft", "Cultural Festivals", "Talent Shows"]
    },
    {
      title: "Technology Integration",
      description: "Modern learning with technology-enabled education.",
      features: ["Digital Learning", "Computer Education", "Online Resources", "Smart Classrooms"]
    }
  ]

  const admissionInfo = {
    process: [
      "Submit application form with required documents",
      "Entrance test for higher classes",
      "Interview with parents and student",
      "Document verification and fee payment",
      "Orientation and school uniform distribution"
    ],
    documents: [
      "Birth certificate",
      "Previous school records",
      "Transfer certificate (if applicable)",
      "Passport size photographs",
      "Address proof",
      "Income certificate (for fee concession)"
    ],
    contact: {
      phone: "+91-1234567890",
      email: "admissions@narayana.edu.in",
      address: "Narayana's School, Washim, Maharashtra"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              School <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Brochure</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive information about Narayana's Sec. & Higher Sec. School - our programs, 
              facilities, and everything you need to know about joining our educational family.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Download Our Brochure</h2>
            <p className="text-lg text-slate-600 mb-8">
              Get the complete school brochure in PDF format with detailed information about our programs, 
              facilities, and admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleDownloadPDF}
                className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF (2.5 MB)
              </button>
              <button 
                onClick={handleViewOnline}
                className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {brochureSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setSelectedSection(section.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                  selectedSection === section.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                }`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Overview Section */}
          {selectedSection === 'overview' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">School Overview</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">{schoolInfo.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Established:</span>
                      <span className="font-semibold">{schoolInfo.established}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Location:</span>
                      <span className="font-semibold">{schoolInfo.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Type:</span>
                      <span className="font-semibold">{schoolInfo.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Grades:</span>
                      <span className="font-semibold">{schoolInfo.grades}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Board:</span>
                      <span className="font-semibold">{schoolInfo.board}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Student Strength:</span>
                      <span className="font-semibold">{schoolInfo.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Teaching Staff:</span>
                      <span className="font-semibold">{schoolInfo.teachers}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    To provide comprehensive education that nurtures academic excellence, character development, 
                    and leadership skills. We are committed to creating an environment where every student can 
                    discover their potential and develop into responsible, confident, and successful individuals.
                  </p>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To be a leading educational institution that shapes future leaders through innovative learning 
                    methodologies, comprehensive development programs, and a commitment to excellence.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Facilities Section */}
          {selectedSection === 'facilities' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">School Facilities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                      {facility.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{facility.title}</h3>
                    <p className="text-slate-600">{facility.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Programs Section */}
          {selectedSection === 'programs' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Academic Programs</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {programs.map((program, index) => (
                  <div key={index} className="border border-slate-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{program.title}</h3>
                    <p className="text-slate-600 mb-4">{program.description}</p>
                    <ul className="space-y-2">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Admissions Section */}
          {selectedSection === 'admissions' && (
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">Admission Information</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Admission Process</h3>
                  <ol className="space-y-3">
                    {admissionInfo.process.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-slate-600">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Required Documents</h3>
                  <ul className="space-y-2">
                    {admissionInfo.documents.map((document, index) => (
                      <li key={index} className="flex items-center text-slate-600">
                        <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {document}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                    <h4 className="text-lg font-bold text-slate-800 mb-4">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-slate-600">{admissionInfo.contact.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-slate-600">{admissionInfo.contact.email}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-slate-600">{admissionInfo.contact.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our School?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Download our brochure and get in touch with us to begin your child's educational journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/about-us"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SchoolBrochure 