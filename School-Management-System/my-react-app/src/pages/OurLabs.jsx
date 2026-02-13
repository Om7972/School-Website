import React from 'react'
import { Link } from 'react-router-dom'

const OurLabs = () => {
  const labs = [
    {
      title: "Physics Laboratory",
      description: "Well-equipped physics lab with modern instruments for experiments in mechanics, optics, electricity, and thermodynamics.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      equipment: ["Oscilloscopes", "Spectrometers", "Lasers", "Optical benches"]
    },
    {
      title: "Chemistry Laboratory",
      description: "Fully equipped chemistry lab with safety measures for conducting experiments in organic, inorganic, and physical chemistry.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      equipment: ["Analytical balances", "pH meters", "Spectrophotometers", "Fume hoods"]
    },
    {
      title: "Biology Laboratory",
      description: "Advanced biology lab with microscopes, models, and specimens for studying life sciences and conducting research.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      equipment: ["Microscopes", "Centrifuges", "Incubators", "Specimen collections"]
    },
    {
      title: "Computer Laboratory",
      description: "Modern computer lab with high-speed computers, software, and internet connectivity for IT education and programming.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      equipment: ["Desktop computers", "Software suites", "3D printers", "Robotics kits"]
    },
    {
      title: "Mathematics Laboratory",
      description: "Interactive math lab with models, software, and tools for making mathematics visual and engaging.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      equipment: ["Geometric models", "Graphing calculators", "Math software", "Measuring instruments"]
    },
    {
      title: "Language Laboratory",
      description: "State-of-the-art language lab with audio-visual equipment for enhancing communication and language skills.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      equipment: ["Audio systems", "Headphones", "Recording equipment", "Language software"]
    }
  ]

  const features = [
    "Latest equipment and technology",
    "Safety measures and protocols",
    "Experienced lab assistants",
    "Regular maintenance and upgrades",
    "Student-friendly environment",
    "Research opportunities"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                State-of-the-Art Laboratories
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Labs
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Our well-equipped laboratories provide students with hands-on learning experiences, enabling them to explore scientific concepts, conduct experiments, and develop practical skills in a safe and supportive environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Explore Labs
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Schedule a Visit
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Labs"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Laboratories</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive range of laboratories designed to support practical learning across all subjects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {labs.map((lab, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={lab.image}
                    alt={lab.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{lab.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">{lab.description}</p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-slate-800">Key Equipment:</h4>
                    <div className="flex flex-wrap gap-2">
                      {lab.equipment.map((item, itemIndex) => (
                        <span key={itemIndex} className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Lab Features</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our laboratories are designed to provide students with the best possible learning experience through modern equipment and safe, well-maintained facilities.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Lab Features"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Safety First</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Student safety is our top priority. All our laboratories follow strict safety protocols and guidelines.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Safety Equipment</h3>
                <p className="text-slate-600 text-sm">First aid kits, fire extinguishers, and emergency equipment in all labs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Safety Training</h3>
                <p className="text-slate-600 text-sm">Regular safety training sessions for students and staff</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Supervision</h3>
                <p className="text-slate-600 text-sm">Qualified lab assistants and teachers supervise all experiments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Hands-On Learning
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join us and gain practical experience in our state-of-the-art laboratories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-xl hover:bg-indigo-50 transition-colors duration-300"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-indigo-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurLabs

