import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Careers = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const handleApplyNow = (job) => {
    navigate(`/job-application?title=${encodeURIComponent(job.title)}&id=${job.id}`)
  }

  const handleViewDetails = (job) => {
    // For now, we'll show an alert with job details
    // In a real application, this could open a modal or navigate to a detailed view
    alert(`Job Details for ${job.title}:\n\nDescription: ${job.description}\n\nRequirements:\n${job.requirements.join('\n')}\n\nResponsibilities:\n${job.responsibilities.join('\n')}`)
  }

  const jobCategories = [
    { id: 'all', name: 'All Positions' },
    { id: 'teaching', name: 'Teaching' },
    { id: 'administration', name: 'Administration' },
    { id: 'support', name: 'Support Staff' },
    { id: 'technology', name: 'Technology' }
  ]

  const jobListings = [
    {
      id: 1,
      title: "Senior Mathematics Teacher",
      category: "teaching",
      type: "Full-time",
      location: "Washim, Maharashtra",
      experience: "3-5 years",
      salary: "₹25,000 - ₹35,000",
      description: "We are looking for an experienced Mathematics teacher to join our senior secondary section.",
      requirements: [
        "Master's degree in Mathematics",
        "B.Ed. qualification",
        "Minimum 3 years of teaching experience",
        "Strong communication skills",
        "Experience with modern teaching methodologies"
      ],
      responsibilities: [
        "Teach Mathematics to Class 9-12 students",
        "Develop innovative lesson plans",
        "Conduct regular assessments",
        "Participate in school activities",
        "Mentor students"
      ],
      postedDate: "2024-12-15",
      deadline: "2024-12-30"
    },
    {
      id: 2,
      title: "Science Lab Assistant",
      category: "support",
      type: "Full-time",
      location: "Washim, Maharashtra",
      experience: "1-2 years",
      salary: "₹15,000 - ₹20,000",
      description: "Support the science department in maintaining laboratories and assisting teachers.",
      requirements: [
        "Bachelor's degree in Science",
        "Basic knowledge of laboratory equipment",
        "Attention to detail",
        "Good organizational skills"
      ],
      responsibilities: [
        "Maintain laboratory equipment",
        "Prepare materials for experiments",
        "Assist teachers during practical sessions",
        "Ensure safety protocols",
        "Manage inventory"
      ],
      postedDate: "2024-12-10",
      deadline: "2024-12-25"
    },
    {
      id: 3,
      title: "IT Coordinator",
      category: "technology",
      type: "Full-time",
      location: "Washim, Maharashtra",
      experience: "2-4 years",
      salary: "₹30,000 - ₹40,000",
      description: "Manage IT infrastructure and support digital learning initiatives.",
      requirements: [
        "Bachelor's degree in Computer Science/IT",
        "Experience with educational technology",
        "Network administration skills",
        "Problem-solving abilities"
      ],
      responsibilities: [
        "Manage school IT infrastructure",
        "Support digital learning platforms",
        "Train staff on technology use",
        "Maintain computer labs",
        "Troubleshoot technical issues"
      ],
      postedDate: "2024-12-08",
      deadline: "2024-12-23"
    },
    {
      id: 4,
      title: "Administrative Assistant",
      category: "administration",
      type: "Full-time",
      location: "Washim, Maharashtra",
      experience: "1-3 years",
      salary: "₹18,000 - ₹25,000",
      description: "Provide administrative support to the school management.",
      requirements: [
        "Bachelor's degree in any discipline",
        "Proficiency in MS Office",
        "Good communication skills",
        "Organizational abilities"
      ],
      responsibilities: [
        "Handle administrative tasks",
        "Manage student records",
        "Coordinate with parents",
        "Assist in event planning",
        "Maintain office documentation"
      ],
      postedDate: "2024-12-05",
      deadline: "2024-12-20"
    },
    {
      id: 5,
      title: "Physical Education Teacher",
      category: "teaching",
      type: "Full-time",
      location: "Washim, Maharashtra",
      experience: "2-4 years",
      salary: "₹20,000 - ₹28,000",
      description: "Lead physical education programs and sports activities.",
      requirements: [
        "Bachelor's degree in Physical Education",
        "B.Ed. qualification",
        "Experience in sports coaching",
        "First aid certification"
      ],
      responsibilities: [
        "Teach physical education classes",
        "Coach school sports teams",
        "Organize sports events",
        "Promote fitness awareness",
        "Maintain sports equipment"
      ],
      postedDate: "2024-12-03",
      deadline: "2024-12-18"
    }
  ]

  const benefits = [
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health coverage for employees and family"
    },
    {
      icon: "📚",
      title: "Professional Development",
      description: "Regular training and skill enhancement opportunities"
    },
    {
      icon: "🏖️",
      title: "Paid Leave",
      description: "Generous leave policy including holidays and vacations"
    },
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Attractive compensation package with regular increments"
    },
    {
      icon: "🎓",
      title: "Education Benefits",
      description: "Tuition fee concessions for employee children"
    },
    {
      icon: "🏃",
      title: "Wellness Programs",
      description: "Health and wellness initiatives for staff"
    }
  ]

  const filteredJobs = jobListings.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Join Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Be part of our mission to provide quality education and shape the future of young minds. 
              Explore exciting career opportunities at Narayana's Sec. & Higher Sec. School.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Search Jobs</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by job title or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg className="absolute right-3 top-3 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {jobCategories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Current Openings</h2>
            <p className="text-lg text-slate-600">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.experience}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2zm0 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2z" />
                        </svg>
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button 
                      onClick={() => handleApplyNow(job)}
                      className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-300 group"
                    >
                      <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Apply Now
                    </button>
                  </div>
                </div>

                <p className="text-slate-600 mb-6">{job.description}</p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start text-sm text-slate-600">
                          <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-slate-200">
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4 sm:mb-0">
                    <span>Posted: {new Date(job.postedDate).toLocaleDateString()}</span>
                    <span>Deadline: {new Date(job.deadline).toLocaleDateString()}</span>
                  </div>
                  <button 
                    onClick={() => handleViewDetails(job)}
                    className="border-2 border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300 group"
                  >
                    <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No jobs found</h3>
              <p className="text-slate-600">Try adjusting your search criteria or check back later for new openings.</p>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Work With Us?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive work environment that values your growth and well-being.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How to Apply</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Submit Application</h3>
                <p className="text-blue-100">Fill out the online application form with your details and resume.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interview Process</h3>
                <p className="text-blue-100">Participate in interviews and assessments as scheduled.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Join Our Team</h3>
                <p className="text-blue-100">Complete onboarding and start your journey with us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            If you don't see a position that matches your skills, send us your resume for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-300"
            >
              Contact HR
            </Link>
            <button className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Upload  Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers 