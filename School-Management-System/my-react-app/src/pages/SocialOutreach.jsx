import React from 'react'
import { Link } from 'react-router-dom'
import awarenessMarchImg from '../assets/narayana-kids-awareness-march.png'
import backpackImg from '../assets/backpack-distribution-washim.png'

const SocialOutreach = () => {
  const programs = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Community Service",
      description: "Regular community service programs involving students, teachers, and parents in various social initiatives.",
      activities: ["Elder Care Visits", "Orphanage Support", "Community Clean-up", "Food Distribution"],
      impact: "500+ families benefited"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Environmental Awareness",
      description: "Comprehensive environmental programs promoting sustainability and eco-friendly practices.",
      activities: ["Tree Plantation", "Waste Management", "Energy Conservation", "Water Harvesting"],
      impact: "1000+ trees planted"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Health Camps",
      description: "Regular health check-up camps and awareness programs for students and community members.",
      activities: ["Medical Check-ups", "Dental Care", "Eye Care", "Health Education"],
      impact: "2000+ people served"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Literacy Programs",
      description: "Educational outreach programs to promote literacy and learning in underprivileged communities.",
      activities: ["Adult Education", "Child Literacy", "Digital Literacy", "Skill Development"],
      impact: "300+ adults educated"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Disaster Relief",
      description: "Emergency response and relief programs during natural disasters and humanitarian crises.",
      activities: ["Emergency Aid", "Fundraising", "Volunteer Support", "Rehabilitation"],
      impact: "Emergency response team"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Youth Empowerment",
      description: "Programs focused on empowering young people with leadership skills and social responsibility.",
      activities: ["Leadership Training", "Career Guidance", "Life Skills", "Mentoring"],
      impact: "500+ youth empowered"
    }
  ]

  const recentEvents = [
    {
      date: "December 15, 2024",
      title: "Winter Clothing Drive",
      description: "Collected and distributed warm clothing to underprivileged families in the community.",
      participants: "200+ students",
      impact: "500+ families helped"
    },
    {
      date: "December 10, 2024",
      title: "Health Awareness Camp",
      description: "Organized comprehensive health check-up camp for senior citizens in the locality.",
      participants: "50+ volunteers",
      impact: "300+ people served"
    },
    {
      date: "December 5, 2024",
      title: "Tree Plantation Drive",
      description: "Students planted 500+ saplings in collaboration with local environmental organizations.",
      participants: "300+ students",
      impact: "500+ trees planted"
    }
  ]

  const impactStats = [
    { number: "5000+", label: "People Helped", icon: "👥" },
    { number: "1000+", label: "Trees Planted", icon: "🌳" },
    { number: "50+", label: "Programs Conducted", icon: "📋" },
    { number: "1000+", label: "Volunteer Hours", icon: "⏰" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Social <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Outreach</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Making a positive impact in our community through various social responsibility programs, 
              environmental initiatives, and humanitarian efforts.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Impact</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to social responsibility and community development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community in Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Community in Action</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Students and teachers leading outreach initiatives that make a real difference in Washim.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/80">
              <img
                src={awarenessMarchImg}
                alt="Students holding Narayana's Kids banner during a water conservation awareness march"
                className="w-full h-80 lg:h-[420px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Environmental Awareness March</h3>
                <p className="text-sm text-slate-100">
                  Students spread messages on water conservation and responsible citizenship across the community.
                </p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/80">
              <img
                src={backpackImg}
                alt="Teachers and students with newly distributed school backpacks"
                className="w-full h-80 lg:h-[420px] object-cover object-[center_40%] transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">School Supply Distribution</h3>
                <p className="text-sm text-slate-100">
                  Supporting every learner with essential resources so they can begin the year prepared and confident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive social outreach programs that address various community needs and promote sustainable development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  {program.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{program.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">Key Activities:</h4>
                    <ul className="space-y-1">
                      {program.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="flex items-center text-sm text-slate-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm font-semibold text-blue-600">{program.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Recent Events</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Latest social outreach activities and their impact on the community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
                <div className="text-sm font-semibold text-blue-600 mb-2">{event.date}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
                <p className="text-slate-600 mb-4">{event.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Participants:</span>
                    <span className="font-semibold text-slate-800">{event.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Impact:</span>
                    <span className="font-semibold text-green-600">{event.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join us in making a positive difference in our community. Every contribution matters.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Volunteer</h3>
                <p className="text-blue-100">Join our volunteer programs and contribute your time and skills.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Donate</h3>
                <p className="text-blue-100">Support our initiatives through donations and contributions.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-3">Partner</h3>
                <p className="text-blue-100">Collaborate with us on community development projects.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
              >
                Contact Us
              </Link>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Join Our Programs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Together, we can create a better, more sustainable future for our community and the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about-us"
              className="bg-white text-green-600 font-semibold py-3 px-8 rounded-xl hover:bg-green-50 transition-colors duration-300"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SocialOutreach 