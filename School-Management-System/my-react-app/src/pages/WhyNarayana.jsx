import React from 'react'
import { Link } from 'react-router-dom'
import curriculumImg from '../assets/curriculum-collaborative-learning.png'
import infraImg from '../assets/infra-smartboard-classroom.png'
import labsImg from '../assets/lab-digital-whiteboard-waves.png'

const WhyNarayana = () => {
  const rightCurriculum = {
    title: "The Right Curriculum",
    description: "Our comprehensive curriculum is designed to foster critical thinking, creativity, and practical knowledge that prepares students for real-world challenges.",
    items: [
      {
        title: "Digital Learning",
        description: "State-of-the-art digital learning platforms that provide interactive content, personalized learning paths, and 24/7 access to educational resources.",
        href: "/digital-learning",
        icon: (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      },
      {
        title: "Innovation Lab",
        description: "Cutting-edge laboratory facilities for STEM education, robotics, coding, and hands-on experimentation that sparks innovation.",
        href: "/innovation-lab",
        icon: (
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        )
      },
      {
        title: "Innovative Academic Programs",
        description: "Well-structured academic programs that combine traditional learning with modern methodologies to ensure comprehensive understanding.",
        href: "/innovative-academic-programs",
        icon: (
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      },
      {
        title: "Thematic Learning Program",
        description: "Integrated thematic learning approach that connects different subjects and promotes holistic understanding of concepts.",
        href: "/thematic-learning-program",
        icon: (
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        )
      }
    ]
  }

  const rightFaculty = {
    title: "The Right Faculty",
    description: "Our experienced and dedicated faculty members are committed to nurturing each student's potential and guiding them towards excellence.",
    features: [
      {
        title: "Highly Qualified Teachers",
        description: "All our teachers hold advanced degrees and certifications in their respective fields, ensuring quality education."
      },
      {
        title: "Experienced Educators",
        description: "Years of teaching experience combined with continuous professional development to stay updated with latest teaching methodologies."
      },
      {
        title: "Student-Centered Approach",
        description: "Our faculty focuses on individual attention and personalized learning to help each student achieve their best."
      },
      {
        title: "Mentorship Programs",
        description: "Dedicated mentorship programs where teachers guide students not just academically but also in character building."
      }
    ]
  }

  const rightEnvironment = {
    title: "The Right Environment",
    description: "A nurturing and stimulating environment that fosters learning, creativity, and personal growth.",
    items: [
      {
        title: "School Infrastructure",
        description: "Modern infrastructure with spacious classrooms, well-equipped laboratories, libraries, and recreational facilities that support comprehensive learning.",
        href: "/school-infrastructure",
        image: infraImg,
        imageAlt: "Teacher using a smartboard in a primary classroom at M.S.S.E. School Washim",
        icon: (
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        )
      },
      {
        title: "Our Labs",
        description: "State-of-the-art science, computer, and innovation labs equipped with latest technology and equipment for hands-on learning experiences.",
        href: "/our-labs",
        image: labsImg,
        imageAlt: "Students learning with an interactive WAVES digital whiteboard",
        icon: (
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )
      }
    ]
  }

  const rightApproach = {
    title: "The Right Approach",
    description: "A balanced approach that combines academic rigor with holistic development, ensuring students are well-prepared for future challenges.",
    principles: [
      {
        title: "Holistic Development",
        description: "We focus on developing students academically, physically, emotionally, and socially to create well-rounded individuals."
      },
      {
        title: "Interactive Learning",
        description: "Engaging teaching methods that encourage active participation, critical thinking, and collaborative learning."
      },
      {
        title: "Personalized Attention",
        description: "Small class sizes and individual attention ensure that each student's unique needs and learning styles are addressed."
      },
      {
        title: "Continuous Assessment",
        description: "Regular assessments and feedback mechanisms help track progress and provide timely interventions when needed."
      }
    ]
  }

  const rightSkills = {
    title: "The Right Skills",
    description: "We equip students with essential 21st-century skills that go beyond academics and prepare them for success in life.",
    skills: [
      {
        title: "Critical Thinking",
        description: "Developing analytical and problem-solving abilities to tackle complex challenges."
      },
      {
        title: "Communication",
        description: "Enhancing verbal and written communication skills for effective expression and collaboration."
      },
      {
        title: "Leadership",
        description: "Building leadership qualities through various activities, projects, and responsibilities."
      },
      {
        title: "Creativity",
        description: "Fostering creativity and innovation through arts, projects, and creative problem-solving."
      },
      {
        title: "Digital Literacy",
        description: "Preparing students for the digital age with technology skills and digital citizenship."
      },
      {
        title: "Teamwork",
        description: "Encouraging collaboration and teamwork through group projects and activities."
      }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              Why <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Narayana</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover what makes Narayana's Sec. & Higher Sec. School the right choice for your child's educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* The Right Curriculum */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{rightCurriculum.title}</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">{rightCurriculum.description}</p>
            </div>

            <div className="relative mb-12 rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-200/80 group">
              <img
                src={curriculumImg}
                alt="Students collaborating with laptops, globes, and creative projects at Narayana's Kids Washim"
                className="w-full h-56 sm:h-72 md:h-80 object-cover object-[center_40%] transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm font-medium text-blue-100 mb-1">Hands-on, integrated learning</p>
                <p className="text-lg font-semibold max-w-2xl">
                  Technology, geography, literacy, and creativity come together in every classroom — preparing students for real-world challenges.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {rightCurriculum.items.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className="group flex items-start space-x-4 p-6 rounded-xl hover:bg-blue-50 transition-colors duration-300 border border-transparent hover:border-blue-100"
                >
                  <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-700">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                    <span className="inline-flex items-center mt-3 text-sm font-medium text-blue-600">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Right Faculty */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{rightFaculty.title}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{rightFaculty.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rightFaculty.features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Right Environment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{rightEnvironment.title}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{rightEnvironment.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {rightEnvironment.items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-xl flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* The Right Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{rightApproach.title}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{rightApproach.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {rightApproach.principles.map((principle, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{principle.title}</h3>
                  <p className="text-slate-600">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Right Skills */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{rightSkills.title}</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{rightSkills.description}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rightSkills.skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{skill.title}</h3>
                </div>
                <p className="text-slate-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Narayana Difference
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us and give your child the advantage of quality education, expert guidance, and holistic development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Apply for Admissions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhyNarayana

