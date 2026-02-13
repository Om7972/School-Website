import React from 'react'
import { Link } from 'react-router-dom'

const NarayanaInitiatives = () => {
  const initiatives = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Digital Learning Platform",
      description: "Comprehensive online learning system with interactive content, virtual classrooms, and personalized learning paths.",
      features: ["24/7 Access", "Interactive Content", "Progress Tracking", "Parent Portal"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation Lab",
      description: "State-of-the-art laboratory for STEM education, robotics, coding, and hands-on learning experiences.",
      features: ["STEM Projects", "Robotics", "Coding Classes", "3D Printing"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Character Development Program",
      description: "Comprehensive program focusing on moral values, leadership skills, and social responsibility.",
      features: ["Leadership Training", "Community Service", "Values Education", "Peer Mentoring"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Sports Excellence Program",
      description: "Comprehensive sports program promoting physical fitness, teamwork, and competitive spirit.",
      features: ["Multiple Sports", "Professional Coaching", "Inter-school Competitions", "Fitness Training"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
        </svg>
      ),
      title: "Career Guidance Initiative",
      description: "Professional career counseling and guidance to help students make informed decisions about their future.",
      features: ["Career Counseling", "Skill Assessment", "Industry Visits", "Higher Education Guidance"]
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community Outreach Program",
      description: "Social responsibility initiatives that connect students with the community and promote civic engagement.",
      features: ["Social Service", "Environmental Awareness", "Health Camps", "Literacy Programs"]
    }
  ]

  const upcomingEvents = [
    {
      date: "15 Dec 2024",
      title: "Science Fair 2024",
      description: "Annual science exhibition showcasing student innovations and projects."
    },
    {
      date: "20 Dec 2024",
      title: "Sports Meet",
      description: "Inter-house sports competition promoting fitness and teamwork."
    },
    {
      date: "25 Dec 2024",
      title: "Cultural Festival",
      description: "Celebration of arts, music, and cultural diversity."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Narayana <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Initiatives</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our innovative programs and initiatives designed to provide comprehensive education 
              and prepare students for the challenges of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Key Initiatives</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Innovative programs that go beyond traditional education to create well-rounded individuals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{initiative.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{initiative.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 mb-3">Key Features:</h4>
                  {initiative.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Impact</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Numbers that reflect the success and reach of our initiatives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-slate-600">Students Enrolled</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <p className="text-slate-600">Expert Teachers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <p className="text-slate-600">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">16+</div>
              <p className="text-slate-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Stay updated with our latest events and activities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="text-sm font-semibold text-blue-600 mb-2">{event.date}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
                <p className="text-slate-600">{event.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of Our Initiatives
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us in creating innovative learning experiences and shaping the future of education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Get Involved
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

export default NarayanaInitiatives 