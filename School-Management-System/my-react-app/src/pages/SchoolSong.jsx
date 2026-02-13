import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SchoolSong = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const songInfo = {
    title: "Narayana's Anthem",
    subtitle: "Our School Song",
    composer: "Music by: School Music Department",
    lyrics: "Lyrics by: School Community",
    duration: "3:45"
  }

  const lyrics = [
    {
      verse: "Verse 1",
      lines: [
        "Narayana, our beloved school,",
        "Where knowledge flows like a golden rule.",
        "With wisdom's light, we learn and grow,",
        "Building futures, row by row."
      ]
    },
    {
      verse: "Chorus",
      lines: [
        "Narayana, Narayana,",
        "Our guiding star, our alma mater.",
        "Excellence, integrity, and care,",
        "These are the values we always share."
      ]
    },
    {
      verse: "Verse 2",
      lines: [
        "From classrooms bright to playgrounds wide,",
        "We discover talents deep inside.",
        "Teachers guide us with loving hands,",
        "Preparing us for life's demands."
      ]
    },
    {
      verse: "Bridge",
      lines: [
        "Together we stand, united and strong,",
        "In Narayana's family, we all belong.",
        "With courage and hope, we face each day,",
        "Learning, growing, finding our way."
      ]
    },
    {
      verse: "Final Chorus",
      lines: [
        "Narayana, Narayana,",
        "Our guiding star, our alma mater.",
        "Excellence, integrity, and care,",
        "These are the values we always share.",
        "Forever proud, forever true,",
        "Narayana, we belong to you!"
      ]
    }
  ]

  const songHistory = [
    {
      year: "2009",
      event: "Song Creation",
      description: "The school song was composed and written by the school community during the founding year."
    },
    {
      year: "2010",
      event: "First Performance",
      description: "The anthem was first performed during the inaugural annual day celebration."
    },
    {
      year: "2015",
      event: "Recording",
      description: "Professional recording of the school song was completed with student choir."
    },
    {
      year: "2020",
      event: "Digital Release",
      description: "The song was made available digitally for students and alumni worldwide."
    }
  ]

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
    // Here you would integrate with actual audio player
  }

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.value)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              School <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Song</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our school anthem that unites us all, celebrating the spirit, values, and pride of Narayana's 
              Sec. & Higher Sec. School.
            </p>
          </div>
        </div>
      </section>

      {/* Audio Player Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-2">{songInfo.title}</h2>
              <p className="text-lg text-slate-600 mb-4">{songInfo.subtitle}</p>
              <div className="flex justify-center space-x-6 text-sm text-slate-500">
                <span>{songInfo.composer}</span>
                <span>{songInfo.lyrics}</span>
                <span>Duration: {songInfo.duration}</span>
              </div>
            </div>

            {/* Audio Player */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-center mb-6">
                <button
                  onClick={handlePlayPause}
                  className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  {isPlaying ? (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={handleTimeUpdate}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-slate-600">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="text-center">
              <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-700 transition-colors duration-300 flex items-center mx-auto">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Song
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lyrics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Song Lyrics</h2>
            <p className="text-lg text-slate-600">
              The complete lyrics of our school anthem, celebrating our values and community spirit.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            {lyrics.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">
                  {section.verse}
                </h3>
                <div className="space-y-3">
                  {section.lines.map((line, lineIndex) => (
                    <p key={lineIndex} className="text-lg text-slate-700 text-center leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Song History */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Song History</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The journey of our school song from its creation to becoming a symbol of our school's identity.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
            
            <div className="space-y-12">
              {songHistory.map((event, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">{event.event}</h3>
                      <p className="text-slate-600">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Fun Facts</h2>
            <p className="text-lg text-slate-600">
              Interesting facts about our school song and its significance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">3:45</h3>
              <p className="text-slate-600">Duration in minutes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">500+</h3>
              <p className="text-slate-600">Students sing daily</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">5</h3>
              <p className="text-slate-600">Verses in the song</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">16+</h3>
              <p className="text-slate-600">Years of tradition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience Our School Spirit
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Listen to our anthem and feel the pride and unity that defines our school community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about-us"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Learn About Us
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

export default SchoolSong 