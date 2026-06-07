import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Alumni = () => {
  const navigate = useNavigate()
  const [selectedBatch, setSelectedBatch] = useState('all')
  const [selectedField, setSelectedField] = useState('all')

  const handleConnect = (alumni) => {
    // In a real application, this would open a contact form or messaging system
    alert(`Connecting with ${alumni.name}...\n\nEmail: ${alumni.email}\n\nYou can reach out to them directly or we can facilitate the connection.`)
  }

  const handleViewProfile = (alumni) => {
    // In a real application, this would navigate to a detailed profile page
    alert(`Profile of ${alumni.name}:\n\nPosition: ${alumni.currentPosition}\nCompany: ${alumni.company}\nLocation: ${alumni.location}\n\nAchievements:\n${alumni.achievements.join('\n')}\n\nStory: ${alumni.story}`)
  }

  const handleJoinNetwork = () => {
    navigate('/alumni-network-form')
  }

  const batchYears = [
    { id: 'all', name: 'All Batches' },
    { id: '2024', name: 'Class of 2024' },
    { id: '2023', name: 'Class of 2023' },
    { id: '2022', name: 'Class of 2022' },
    { id: '2021', name: 'Class of 2021' },
    { id: '2020', name: 'Class of 2020' }
  ]

  const fields = [
    { id: 'all', name: 'All Fields' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'medicine', name: 'Medicine' },
    { id: 'business', name: 'Business' },
    { id: 'arts', name: 'Arts & Humanities' },
    { id: 'science', name: 'Science' },
    { id: 'technology', name: 'Technology' }
  ]

  const alumniProfiles = [
    {
      id: 1,
      name: "Rahul Sharma",
      batch: "2024",
      field: "engineering",
      currentPosition: "Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: ["First Class with Distinction", "University Gold Medal", "Google Summer of Code Participant"],
      story: "Rahul graduated from our school in 2024 and went on to pursue Computer Science at IIT Bombay. He is now working as a Software Engineer at Google, contributing to innovative projects.",
      linkedin: "#",
      email: "rahul.sharma@email.com"
    },
    {
      id: 2,
      name: "Priya Patel",
      batch: "2023",
      field: "medicine",
      currentPosition: "Medical Student",
      company: "AIIMS Delhi",
      location: "New Delhi, India",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: ["NEET AIR 45", "School Topper", "Science Olympiad Winner"],
      story: "Priya's passion for medicine began during her school days. She secured AIR 45 in NEET and is now pursuing MBBS at AIIMS Delhi, one of India's premier medical institutions.",
      linkedin: "#",
      email: "priya.patel@email.com"
    },
    {
      id: 3,
      name: "Amit Kumar",
      batch: "2022",
      field: "business",
      currentPosition: "Management Consultant",
      company: "McKinsey & Company",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: ["CAT 99.8 percentile", "IIM Ahmedabad", "Dean's List"],
      story: "Amit's analytical skills and leadership qualities were evident during his school days. After graduating from IIM Ahmedabad, he joined McKinsey as a Management Consultant.",
      linkedin: "#",
      email: "amit.kumar@email.com"
    },
    {
      id: 4,
      name: "Neha Singh",
      batch: "2021",
      field: "arts",
      currentPosition: "Journalist",
      company: "The Times of India",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: ["English Literature Gold Medal", "Debate Champion", "School Magazine Editor"],
      story: "Neha's love for writing and communication was nurtured during her school years. She is now a successful journalist at The Times of India, covering important social issues.",
      linkedin: "#",
      email: "neha.singh@email.com"
    },
    {
      id: 5,
      name: "Vikram Desai",
      batch: "2020",
      field: "science",
      currentPosition: "Research Scientist",
      company: "ISRO",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: ["JEE Advanced AIR 120", "IIT Bombay", "PhD in Physics"],
      story: "Vikram's fascination with space and physics led him to pursue a career in research. He completed his PhD from IIT Bombay and now works as a Research Scientist at ISRO.",
      linkedin: "#",
      email: "vikram.desai@email.com"
    },
    {
      id: 6,
      name: "Anjali Mehta",
      batch: "2023",
      field: "technology",
      currentPosition: "Data Scientist",
      company: "Amazon",
      location: "Seattle, USA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      achievements: ["Mathematics Olympiad Winner", "Stanford University", "Machine Learning Expert"],
      story: "Anjali's mathematical prowess and analytical thinking were evident from her school days. She pursued Computer Science at Stanford and now works as a Data Scientist at Amazon.",
      linkedin: "#",
      email: "anjali.mehta@email.com"
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "Alumni Meet 2024",
      date: "January 15, 2025",
      time: "6:00 PM",
      location: "School Campus",
      description: "Annual alumni gathering to reconnect and share experiences.",
      type: "Networking"
    },
    {
      id: 2,
      title: "Career Guidance Session",
      date: "January 20, 2025",
      time: "3:00 PM",
      location: "Online",
      description: "Alumni sharing career insights with current students.",
      type: "Mentoring"
    },
    {
      id: 3,
      title: "Alumni Sports Tournament",
      date: "February 5, 2025",
      time: "9:00 AM",
      location: "School Ground",
      description: "Annual sports tournament for alumni and current students.",
      type: "Sports"
    }
  ]

  const filteredAlumni = alumniProfiles.filter(alumni => {
    const matchesBatch = selectedBatch === 'all' || alumni.batch === selectedBatch
    const matchesField = selectedField === 'all' || alumni.field === selectedField
    return matchesBatch && matchesField
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Alumni</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Celebrating the success stories of our former students who have gone on to achieve great things 
              in their careers and make a positive impact in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Alumni Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Alumni Network</h2>
            <p className="text-lg text-slate-600">
              Our growing community of successful alumni across various fields and industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-slate-600">Alumni Worldwide</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <p className="text-slate-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">25+</div>
              <p className="text-slate-600">Years of Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-slate-600">Employment Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Batch Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Filter by Batch</label>
                <select
                  value={selectedBatch}
                  onChange={(e) => setSelectedBatch(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {batchYears.map((batch) => (
                    <option key={batch.id} value={batch.id}>{batch.name}</option>
                  ))}
                </select>
              </div>

              {/* Field Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Filter by Field</label>
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {fields.map((field) => (
                    <option key={field.id} value={field.id}>{field.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Profiles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600">
              {filteredAlumni.length} alumni found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredAlumni.map((alumni) => (
              <div key={alumni.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-48">
                  <img
                    src={alumni.image}
                    alt={alumni.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Class of {alumni.batch}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{alumni.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{alumni.currentPosition}</p>
                  <p className="text-slate-600 text-sm mb-4">{alumni.company}, {alumni.location}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {alumni.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1">{alumni.story}</p>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <button
                      type="button"
                      onClick={() => handleConnect(alumni)}
                      className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] bg-blue-600 text-white font-semibold py-2.5 px-4 rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors duration-300 text-sm touch-manipulation"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Connect
                    </button>
                    <button
                      type="button"
                      onClick={() => handleViewProfile(alumni)}
                      className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] border-2 border-blue-600 text-blue-600 font-semibold py-2.5 px-4 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-colors duration-300 text-sm touch-manipulation"
                    >
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAlumni.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No alumni found</h3>
              <p className="text-slate-600">Try adjusting your filters or check back later for more profiles.</p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-slate-600">
              Join our alumni events to reconnect, network, and share experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-5 sm:p-6 flex flex-col">
                <div className="text-sm font-semibold text-blue-600 mb-2">{event.type}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{event.title}</h3>
                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-3 3m3-3l3 3m0 0v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4m6 0h-6m6 0l3-3m-3 3l-3-3" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 flex-1">{event.description}</p>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] mt-auto bg-blue-600 text-white font-semibold py-3 px-4 rounded-xl hover:bg-blue-700 active:bg-blue-800 transition-colors duration-300 touch-manipulation"
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Network Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Join Our Alumni Network</h2>
            <p className="text-lg text-slate-600">
              Stay connected with your alma mater and fellow alumni through our comprehensive network.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Networking</h3>
              <p className="text-slate-600">Connect with fellow alumni across industries and locations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mentoring</h3>
              <p className="text-slate-600">Guide current students and share your expertise.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2zm0 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Career Support</h3>
              <p className="text-slate-600">Access job opportunities and career development resources.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Events</h3>
              <p className="text-slate-600">Participate in alumni events and reunions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Connected
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our alumni network and stay connected with your alma mater and fellow graduates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center px-4 sm:px-0">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center min-h-[48px] w-full sm:w-auto bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-colors duration-300 touch-manipulation"
            >
              Contact Alumni Office
            </Link>
            <button
              type="button"
              onClick={handleJoinNetwork}
              className="inline-flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 active:bg-blue-50 transition-colors duration-300 touch-manipulation"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Join Alumni Network
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Alumni 