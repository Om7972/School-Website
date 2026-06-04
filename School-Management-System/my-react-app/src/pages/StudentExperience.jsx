import React from 'react'
import { Link } from 'react-router-dom'

import heroImg from '../assets/student-certificates-scouts-guides.png'
import awardSaptashaktiImg from '../assets/student-award-saptashakti-sangam.png'
import annualResultImg from '../assets/annual-result-day.png'
import artActivityImg from '../assets/outdoor-art-activity.png'
import flagCeremonyImg from '../assets/flag-hoisting-ceremony.png'
import guestSpeakerImg from '../assets/guest-speaker-podium.png'
import chessImg from '../assets/chess-competition.png'
import heritageImg from '../assets/shri-narayanswami-maharaj.png'
import constitutionDayImg from '../assets/constitution-day-display.png'
import ribbonCuttingImg from '../assets/ribbon-cutting-inauguration.png'
import smartBoardImg from '../assets/smart-classroom-board.png'
import libraryLaptopsImg from '../assets/library-laptops-learning.png'

const StudentExperience = () => {
  const experienceCategories = [
    {
      id: 'academic',
      title: 'Academic Growth & Milestones',
      description:
        'From annual results to national observances, every milestone is celebrated with care and clarity.',
      items: [
        {
          image: annualResultImg,
          title: 'Annual Result Day 2023–24',
          caption:
            'A proud moment at M.S.S.E Primary School, Washim: a Class 5 student receives her annual results from her teacher as the chalkboard welcomes families to the 2023–24 result ceremony.',
          layout: 'landscape',
        },
        {
          image: constitutionDayImg,
          title: 'Indian Constitution Day',
          caption:
            'Students and teachers at Narayana\'s Kid\'s & MSSE Primary School, Washim, honour Samvidhan Divas on 26 November with a hand-drawn chalkboard featuring the Constitution of India and the Ashoka Chakra.',
          layout: 'landscape',
        },
        {
          image: chessImg,
          title: 'Chess & Strategic Thinking',
          caption:
            'Focused minds at Narayana\'s Sec. & Higher Sec. School during a chess competition held alongside Savitribai Phule Jayanti celebrations — building concentration, patience, and strategic skill.',
          layout: 'landscape',
        },
      ],
    },
    {
      id: 'achievements',
      title: 'Achievements & Recognition',
      description:
        'Hard work is honoured through medals, certificates, trophies, and ceremonies that inspire the whole school.',
      items: [
        {
          image: awardSaptashaktiImg,
          title: 'Saptashakti Sangam — Gold Medal',
          caption:
            'At Narayana\'s Kids Washim, a student is awarded a gold medal during Saptashakti Sangam, organised with Vidya Bharati Akhil Bharatiya Shiksha Sansthan — celebrating excellence and cultural values.',
          layout: 'portrait',
        },
        {
          image: heroImg,
          title: 'Scouts, Guides & Inter-School Success',
          caption:
            'Students display certificates and trophies after Scouts & Guides programmes and inter-school competitions, posed before the colourful Narayana\'s Kids Washim mural.',
          layout: 'landscape',
        },
        {
          image: ribbonCuttingImg,
          title: 'Inauguration & New Beginnings',
          caption:
            'A formal ribbon-cutting ceremony marks the opening of a new school space — students, teachers, and leaders come together to celebrate progress and community pride.',
          layout: 'landscape',
        },
      ],
    },
    {
      id: 'creative',
      title: 'Creative, Cultural & Expressive Learning',
      description:
        'Art, assemblies, and festivals give every child room to express, perform, and grow with confidence.',
      items: [
        {
          image: artActivityImg,
          title: 'Outdoor Art & Creativity',
          caption:
            'Primary students enjoy a vibrant outdoor painting session on the school courtyard — nurturing imagination, fine motor skills, and joyful collaboration in the open air.',
          layout: 'tall',
        },
        {
          image: guestSpeakerImg,
          title: 'Assemblies & Guest Addresses',
          caption:
            'Inspiring voices at Narayana\'s Kids: leaders and guests address students from the school podium, encouraging reflection, discipline, and ambition.',
          layout: 'square',
        },
        {
          image: flagCeremonyImg,
          title: 'Patriotic Celebrations',
          caption:
            'Teachers lead a solemn flag-hoisting ceremony with portraits of Goddess Saraswati and Bharat Mata — instilling national pride, respect, and cultural heritage in every student.',
          layout: 'tall',
        },
      ],
    },
    {
      id: 'modern',
      title: 'Modern Facilities & Digital Learning',
      description:
        'Smart classrooms and digital resources prepare learners for a confident, technology-enabled future.',
      items: [
        {
          image: smartBoardImg,
          title: 'Interactive Smart Classrooms',
          caption:
            'Our classrooms feature interactive flat panels and organised learning spaces — blending modern technology with the warmth of traditional school values.',
          layout: 'portrait',
        },
        {
          image: libraryLaptopsImg,
          title: 'Library & Digital Literacy',
          caption:
            'Students use Lenovo laptops in our well-stocked library — exploring Science, History, and General Knowledge while building digital literacy and independent research skills.',
          layout: 'landscape',
        },
      ],
    },
    {
      id: 'heritage',
      title: 'Values & Inspiration',
      description:
        'Spiritual guidance and ethical foundations shape the character behind every achievement.',
      items: [
        {
          image: heritageImg,
          title: 'Guided by Shri Narayanswami Maharaj',
          caption:
            'Our institution draws inspiration from Shri Narayanswami Maharaj — nurturing discipline, devotion, and service as students pursue academic and personal excellence.',
          layout: 'portrait',
        },
      ],
    },
  ]

  const imageHeightClass = (layout) => {
    switch (layout) {
      case 'tall':
        return 'h-80 sm:h-96'
      case 'portrait':
        return 'h-72 sm:h-80'
      case 'square':
        return 'h-64 sm:h-72'
      default:
        return 'h-56 sm:h-64'
    }
  }

  const objectPositionClass = (layout) => {
    switch (layout) {
      case 'tall':
        return 'object-cover object-center'
      case 'landscape':
        return 'object-cover object-[center_35%]'
      default:
        return 'object-cover object-center'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero — full-bleed with real campus photo */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <img
          src={libraryLaptopsImg}
          alt="Students using laptops in the school library at Narayana's"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/75 to-slate-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-white/15 backdrop-blur-md rounded-full text-white text-sm font-medium mb-6 border border-white/20">
              Student Experience · Washim
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
              Where Every Day Shapes a{' '}
              <span className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">
                Confident Learner
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              Step inside Narayana&apos;s Sec. &amp; Higher Sec. School and Narayana&apos;s Kids — from
              smart classrooms and library learning to medals, festivals, and community ceremonies.
              This is school life as our students actually live it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#experiences"
                className="bg-white text-indigo-700 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg text-center"
              >
                Explore Campus Life
              </a>
              <Link
                to="/admissions"
                className="border-2 border-white/90 text-white font-semibold py-3 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm"
              >
                Apply for Admission
              </Link>
            </div>
          </div>

          {/* Hero accent — achievement highlight */}
          <div className="hidden lg:block absolute bottom-16 right-8 w-72 xl:w-80">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/30 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={heroImg}
                alt="Students with certificates and trophies at Narayana's Kids Washim"
                className="w-full h-48 object-cover object-[center_30%]"
              />
              <div className="bg-white/95 backdrop-blur px-4 py-3">
                <p className="text-sm font-semibold text-slate-800">Celebrating Excellence</p>
                <p className="text-xs text-slate-600 mt-1">
                  Certificates, trophies &amp; Scouts &amp; Guides honours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick highlights strip */}
      <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Academic milestones', value: 'Result days & competitions' },
              { label: 'Co-curricular life', value: 'Art, chess & ceremonies' },
              { label: 'Modern learning', value: 'Smart boards & laptops' },
              { label: 'Values & culture', value: 'Festivals & patriotism' },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl px-5 py-4 shadow-lg border border-slate-100"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-slate-700 font-medium">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience sections */}
      <div id="experiences" className="scroll-mt-24">
        {experienceCategories.map((category) => (
          <section
            key={category.id}
            className={`py-16 px-4 sm:px-6 lg:px-8 ${category.id === 'heritage' ? 'bg-white' : ''}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                  {category.title}
                </h2>
                <p className="text-lg text-slate-600">{category.description}</p>
              </div>

              <div
                className={`grid gap-8 ${
                  category.items.length === 1
                    ? 'max-w-lg mx-auto'
                    : category.items.length === 2
                      ? 'md:grid-cols-2'
                      : 'md:grid-cols-2 lg:grid-cols-3'
                }`}
              >
                {category.items.map((item) => (
                  <article
                    key={item.title}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`relative overflow-hidden ${imageHeightClass(item.layout)}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={`w-full h-full ${objectPositionClass(item.layout)} transition-transform duration-500 group-hover:scale-105`}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60" />
                      <h3 className="absolute bottom-0 left-0 right-0 p-4 text-lg font-bold text-white drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-slate-600 text-sm leading-relaxed">{item.caption}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Related programmes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Explore More Student Programmes
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Personalized learning, wellness, service learning, and academic challenges — designed for
            every learner at Narayana&apos;s.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { to: '/personalized-learning', label: 'Personalized Learning' },
              { to: '/wellness-mindfulness', label: 'Wellness Hub' },
              { to: '/service-learning', label: 'Service Learning' },
              { to: '/academic-challenges', label: 'Academic Challenges' },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="bg-white/15 hover:bg-white/25 text-white font-medium py-2 px-5 rounded-lg border border-white/30 transition-colors duration-300 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudentExperience
