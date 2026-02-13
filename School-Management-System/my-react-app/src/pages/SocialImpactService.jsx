import React from 'react'
import { Link } from 'react-router-dom'

const SocialImpactService = () => {
  const initiatives = [
    {
      title: "Community Projects",
      description: "AI matches students with NGOs, environmental campaigns, and social enterprises based on interests and availability.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Impact Tracking",
      description: "Students log hours, reflections, and outcomes in a digital portfolio that highlights measurable community impact.",
      image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Recognition & Badges",
      description: "Earn digital badges, certificates, and spotlight features during assemblies and social media showcases.",
      image: "https://images.unsplash.com/photo-1515169067865-5387ec356754?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    }
  ]

  const features = [
    {
      title: "Volunteer Marketplace",
      description: "Discover opportunities filtered by SDGs, causes, location, and required skills.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9l-6 6-6-6" />
        </svg>
      )
    },
    {
      title: "Impact Analytics",
      description: "Dashboards visualize hours contributed, beneficiaries impacted, and skills developed.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-4 0v4m-6-4v4m-4-4h18" />
        </svg>
      )
    },
    {
      title: "Mentor Support",
      description: "Service mentors guide students with project planning templates, reflection prompts, and feedback loops.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h10a4 4 0 100-8h-1.586a1 1 0 01-.707-.293l-1.414-1.414a1 1 0 00-.707-.293H9a1 1 0 00-.707.293L6.879 11.707a1 1 0 01-.707.293H7a4 4 0 00-4 4z" />
        </svg>
      )
    }
  ]

  const steps = [
    { number: "01", title: "Discover", description: "Browse curated volunteering, internship, and advocacy opportunities." },
    { number: "02", title: "Contribute", description: "Collaborate with peers, mentors, and community partners." },
    { number: "03", title: "Reflect", description: "Document impact, upload media, and share learnings." },
    { number: "04", title: "Celebrate", description: "Receive badges, certificates, and showcase experiences." }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                Social-Impact Service Learning
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Empowering Students to Lead Change
              </h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                The Service Learning Platform connects students with meaningful community initiatives and tracks every hour of impact.
                Learners build portfolios of compassion, leadership, and social innovation while transforming lives around them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions-ay-2026"
                  className="bg-white text-teal-600 font-semibold py-3 px-8 rounded-xl hover:bg-teal-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join the Movement
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-teal-600 transition-all duration-300"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                  alt="Service Learning"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Impactful Opportunities</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Students can contribute to causes that resonate with their passions while building real-world skills.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img src={initiative.image} alt={initiative.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">{initiative.title}</h3>
                  <p className="text-slate-600">{initiative.description}</p>
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
                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
                alt="Impact Analytics"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Platform Features</h2>
              <p className="text-lg text-slate-600 mb-8">
                Digital tools simplify project planning, collaboration, and impact measurement—making service learning purposeful and data-rich.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-1">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
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
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Service Learning Journey</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Guided steps ensure every project is purposeful, reflective, and celebrated.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md border border-slate-100">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-teal-600">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Build a Legacy of Impact
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Students graduate with portfolios that showcase empathy, leadership, and measurable change.
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

export default SocialImpactService
