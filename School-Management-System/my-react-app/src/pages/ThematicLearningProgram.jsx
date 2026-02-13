import React from 'react'
import { Link } from 'react-router-dom'

const ThematicLearningProgram = () => {
  const themes = [
    {
      title: "Environmental Sustainability",
      description: "Explore environmental issues, climate change, and sustainable practices through interdisciplinary learning.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subjects: ["Science", "Geography", "Social Studies"]
    },
    {
      title: "Global Citizenship",
      description: "Understand cultures, societies, and global issues to become responsible world citizens.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subjects: ["History", "Civics", "Languages"]
    },
    {
      title: "Innovation & Technology",
      description: "Learn about technological advancements and their impact on society and daily life.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subjects: ["Science", "Mathematics", "Computer Science"]
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive understanding of physical and mental health, nutrition, and well-being.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      subjects: ["Biology", "Physical Education", "Life Skills"]
    }
  ]

  const benefits = [
    "Holistic understanding of concepts",
    "Improved retention through connections",
    "Real-world application of knowledge",
    "Enhanced critical thinking skills",
    "Better problem-solving abilities",
    "Increased student engagement"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                Integrated Learning
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Thematic Learning Program
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Our thematic learning approach integrates multiple subjects around central themes, helping students make connections between different areas of knowledge and understand how concepts relate to real-world situations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="bg-white text-green-600 font-semibold py-3 px-8 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Thematic Learning"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Learning Themes</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our diverse range of thematic learning units that connect different subjects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {themes.map((theme, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{theme.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{theme.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {theme.subjects.map((subject, subIndex) => (
                      <span key={subIndex} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Benefits of Thematic Learning</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our thematic learning approach offers numerous advantages that enhance the educational experience and promote deeper understanding.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Thematic Learning Benefits"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">How Thematic Learning Works</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A structured approach to integrated learning that makes education more meaningful and engaging.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Theme Selection</h3>
              <p className="text-slate-600 text-sm">Choose a central theme that connects multiple subjects.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Integration</h3>
              <p className="text-slate-600 text-sm">Integrate concepts from different subjects around the theme.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Application</h3>
              <p className="text-slate-600 text-sm">Apply knowledge through projects and real-world scenarios.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Reflection</h3>
              <p className="text-slate-600 text-sm">Reflect on learning and make connections to other themes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Integrated Learning
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join our thematic learning program and discover how different subjects connect to create meaningful learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-green-600 font-semibold py-3 px-8 rounded-xl hover:bg-green-50 transition-colors duration-300"
            >
              Enroll Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-green-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThematicLearningProgram

