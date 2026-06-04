import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/wellness-festival-celebration.png'
import assemblyImg from '../assets/social-impact-assembly.png'

const WellnessMindfulness = () => {
  const tools = [
    {
      title: "Daily Mood Journals",
      description: "Students log feelings with emoji sliders, prompts, and gratitude notes that generate personalized wellness tips.",
      icon: (
        <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132a1 1 0 00-1.555.832V14.5a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        </svg>
      )
    },
    {
      title: "Mindfulness Studio",
      description: "Guided meditations, breathwork, yoga flows, and affirmations streamed daily on the platform.",
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1" />
        </svg>
      )
    },
    {
      title: "Counseling Access",
      description: "Book virtual or on-campus appointments, join group circles, and access emergency support instantly.",
      icon: (
        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2m0 4h.01M19 11a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    }
  ]

  const resources = [
    "Self-care challenges and reflection prompts",
    "Peer support circles moderated by counselors",
    "Sleep hygiene plans and digital detox reminders",
    "Parent guides to support student wellbeing",
    "Weekly resilience webinars and podcasts"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-rose-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                Wellness & Mindfulness Hub
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Nurturing Happy, Resilient Learners
              </h1>
              <p className="text-xl text-rose-100 mb-8 leading-relaxed">
                Our hub supports emotional wellbeing with daily mindfulness journeys, mood tracking, and on-demand counseling.
                Students explore inner calm, develop coping skills, and cultivate a balanced mindset for life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions-ay-2026"
                  className="bg-white text-rose-600 font-semibold py-3 px-8 rounded-xl hover:bg-rose-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore the Hub
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-rose-600 transition-all duration-300"
                >
                  Speak to a Counselor
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Happy students celebrating a colourful school festival at Narayana's Kids"
                  className="w-full h-[500px] object-cover object-[center_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Supportive Tools</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Students access research-backed practices and professional support to stay mindful, motivated, and connected.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-rose-50 rounded-xl flex items-center justify-center mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{tool.title}</h3>
                <p className="text-slate-600">{tool.description}</p>
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
                src={assemblyImg}
                alt="Calm, attentive students during a school gathering"
                className="w-full rounded-2xl shadow-2xl ring-1 ring-slate-200/80 object-cover aspect-[4/3] object-[center_40%]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Resources for Every Mood</h2>
              <p className="text-lg text-slate-600 mb-8">
                The hub adapts to students' emotional needs, offering curated resources and live support whenever they need it most.
              </p>
              <div className="space-y-4">
                {resources.map((resource, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 text-lg">{resource}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-purple-50 to-rose-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Wellness Journey</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Simple steps to help every learner stay mindful and emotionally resilient.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {["Check-In", "Reflect", "Recharge", "Connect"].map((stage, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md border border-slate-100">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-rose-600">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{stage}</h3>
                  <p className="text-sm text-slate-600">
                    {stage === 'Check-In' && 'Log moods and mindfulness goals each morning.'}
                    {stage === 'Reflect' && 'Review insights, gratitude notes, and stress triggers.'}
                    {stage === 'Recharge' && 'Follow guided meditations and breathwork exercises.'}
                    {stage === 'Connect' && 'Book time with counselors or join supportive circles.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-rose-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Thrive with Mindfulness & Care
          </h2>
          <p className="text-xl text-rose-100 mb-8">
            From calm mornings to open conversations—discover a school culture rooted in empathy and emotional intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions-ay-2026"
              className="bg-white text-rose-600 font-semibold py-3 px-8 rounded-xl hover:bg-rose-50 transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-rose-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WellnessMindfulness
