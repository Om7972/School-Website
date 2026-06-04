import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/lab-digital-whiteboard-waves.png'
import curriculumImg from '../assets/curriculum-collaborative-learning.png'
import steamStudentImg from '../assets/digital-learning-steam-student.png'

const PersonalizedLearning = () => {
  const journeys = [
    {
      title: "Adaptive Learning Maps",
      description: "AI analyzes performance, interests, and goals to create personalized pathways that evolve with every assessment.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      image: heroImg
    },
    {
      title: "Skill Acceleration",
      description: "The platform detects strengths and provides deep-dive modules, advanced challenges, and leadership opportunities.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      image: curriculumImg
    },
    {
      title: "Holistic Growth",
      description: "AI-curated recommendations suggest reading, extracurriculars, mentorships, and wellness resources for balanced growth.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      image: steamStudentImg
    }
  ]

  const highlights = [
    {
      title: "Interest-Based Recommendations",
      description: "Weekly AI playlists for books, videos, clubs, and competitions that match the student's passions.",
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      title: "Progress Intelligence",
      description: "Dashboards visualize mastery levels, growth velocity, and offer micro-goals to keep learners motivated.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V7a4 4 0 118 0v4m-4 4v4m-6-4v4m-4-4v4m-2-4h18" />
        </svg>
      )
    },
    {
      title: "Family Insights",
      description: "Parents receive monthly summaries with actionable insights, suggested conversations, and celebration badges.",
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                AI-Powered Journeys
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Personalized Learning Paths for Every Student
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Our AI engine creates dynamic learning experiences tailored to each student's curiosities, performance, and future aspirations.
                From coursework to co-curricular pursuits, every recommendation is crafted to accelerate growth and spark joy in learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions-ay-2026"
                  className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Start Your Journey
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Students using an interactive digital whiteboard for personalized learning"
                  className="w-full h-[500px] object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How Personalized Paths Work</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The platform continuously learns from assessments, projects, and feedback to guide students through meaningful, goal-driven experiences.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {journeys.map((journey, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img src={journey.image} alt={journey.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center">
                    {journey.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{journey.title}</h3>
                  <p className="text-slate-600">{journey.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={curriculumImg}
                alt="Collaborative technology-enabled learning at Narayana's"
                className="w-full rounded-2xl shadow-2xl ring-1 ring-slate-200/80 object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Intelligent Recommendations</h2>
              <p className="text-lg text-slate-600 mb-8">
                Students receive curated suggestions every week—covering academic resources, passion projects, future-ready skills, and wellness prompts—to keep learning engaging.
              </p>
              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-1">{highlight.title}</h3>
                      <p className="text-slate-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Student Experience Dashboard</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                A unified hub for learners to plan, track, and celebrate their progress across academics, co-curriculars, and personal goals.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">360° Progress</h3>
                <p className="text-slate-600 text-sm">Visualize mastery, retention, and growth trends with actionable micro-goals generated by AI.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Passion Planner</h3>
                <p className="text-slate-600 text-sm">Curated experiences—clubs, competitions, volunteering—to build meaningful portfolios.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Mentor Insights</h3>
                <p className="text-slate-600 text-sm">Teachers and mentors leave voice notes, resources, and check-ins to sustain momentum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience AI-Powered Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join Narayana's Sec. & Higher Sec. School and unlock personalized journeys tailored to every learner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions-ay-2026"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link
              to="/fee-structure"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              View Fees
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PersonalizedLearning
