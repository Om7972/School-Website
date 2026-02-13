import React from 'react'
import { Link } from 'react-router-dom'

const ChairmanMessage = () => {
  const achievements = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Educational Excellence",
      description: "Over 16 years of academic excellence with consistent board results"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Student Development",
      description: "Holistic development programs nurturing future leaders"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Infrastructure",
      description: "State-of-the-art facilities and modern learning environments"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Cutting-edge technology and innovative teaching methodologies"
    }
  ]

  const visionPoints = [
    "To create a nurturing environment where every child can thrive and reach their full potential",
    "To develop well-rounded individuals with strong academic foundations and character",
    "To prepare students for the challenges of the 21st century with relevant skills",
    "To foster a culture of continuous learning and personal growth",
    "To build a community of responsible global citizens"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Chairman's <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Message</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A personal message from our Chairman about the vision, values, and future of Narayana's Sec. & Higher Sec. School.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman Profile */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Chairman Image */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Shri. Anil Dhumkekar</h2>
                <p className="text-blue-600 font-semibold mb-4">Chairman & Founder</p>
                <p className="text-slate-600 text-sm">
                  With over 35 years of experience in education, Shri. Anil Dhumkekar has dedicated his life to 
                  transforming the educational landscape and empowering future generations.
                </p>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">A Message from the Chairman</h3>
                
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    Dear Parents, Students, and Well-wishers,
                  </p>
                  
                  <p>
                    It gives me immense pleasure to welcome you to Narayana's Sec. & Higher Sec. School. 
                    As the Chairman and Founder of this institution, I am proud to share our journey of 
                    excellence in education that spans over 16 years.
                  </p>
                  
                  <p>
                    Our school was established with a simple yet powerful vision: to create an educational 
                    environment where every child can discover their potential, develop their talents, and 
                    grow into confident, responsible individuals. We believe that education is not just about 
                    academic excellence, but about nurturing the whole person – mind, body, and spirit.
                  </p>
                  
                  <p>
                    At Narayana's, we have always emphasized the importance of character building alongside 
                    academic achievement. Our students are not just prepared for exams; they are prepared 
                    for life. We instill in them values of integrity, compassion, leadership, and social 
                    responsibility that will guide them throughout their lives.
                  </p>
                  
                  <p>
                    Our commitment to innovation in education has led us to embrace modern teaching 
                    methodologies, integrate technology into our curriculum, and create learning experiences 
                    that are both engaging and effective. We understand that the world is changing rapidly, 
                    and we prepare our students to adapt and thrive in this dynamic environment.
                  </p>
                  
                  <p>
                    As we look to the future, our vision remains clear: to be a leading educational 
                    institution that shapes future leaders and contributes positively to society. We 
                    continue to invest in our infrastructure, enhance our teaching methods, and expand 
                    our programs to provide the best possible education for our students.
                  </p>
                  
                  <p>
                    I invite you to join us in this journey of educational excellence. Together, we can 
                    create a brighter future for our children and our community.
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="font-semibold text-slate-800">Warm regards,</p>
                    <p className="font-bold text-blue-600">Shri. Anil Dhumkekar</p>
                    <p className="text-sm text-slate-600">Chairman & Founder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Key Achievements</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Milestones that reflect our commitment to educational excellence and student development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{achievement.title}</h3>
                <p className="text-slate-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vision for the Future</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Our roadmap for continued growth and excellence in education.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Our Commitment</h3>
                <ul className="space-y-3">
                  {visionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-200 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-blue-100">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Looking Ahead</h3>
                <p className="text-blue-100 leading-relaxed">
                  As we move forward, we remain committed to our core values while embracing innovation 
                  and change. We will continue to invest in technology, expand our programs, and create 
                  opportunities for our students to excel in all areas of life.
                </p>
                <p className="text-blue-100 leading-relaxed mt-4">
                  Our goal is to not just educate students, but to inspire them to become lifelong learners, 
                  responsible citizens, and leaders who will make a positive impact on the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            Join Our Educational Family
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Experience the difference that quality education and dedicated leadership can make in your child's life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/about-us"
              className="border-2 border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChairmanMessage 