import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/challenge-students-trophies.png'
import thematicImg from '../assets/thematic-classroom-writing.png'
import curriculumImg from '../assets/curriculum-collaborative-learning.png'

const AcademicChallenges = () => {
  const challengeTypes = [
    {
      title: "Quiz Leagues",
      description: "Weekly adaptive quizzes across subjects award XP points, streak badges, and house credits.",
      image: thematicImg
    },
    {
      title: "Innovation Hackathons",
      description: "Collaborative design sprints challenge students to solve real-world problems with creative prototypes.",
      image: heroImg
    },
    {
      title: "Debates & Public Speaking",
      description: "Structured debates, model UN simulations, and storytelling nights with AI-powered feedback.",
      image: curriculumImg
    },
    {
      title: "Coding & Robotics Challenges",
      description: "Sprint-based coding tournaments, robo-soccer leagues, and AI model-building contests.",
      image: "https://images.unsplash.com/photo-1581093458791-9e58c0e49c27?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
    }
  ]

  const leaderboardHighlights = [
    {
      title: "Real-Time Standings",
      description: "Individual and team leaderboards update live with points, badges, and challenge streaks.",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V3H7v6M3 9h18v12H3z" />
        </svg>
      )
    },
    {
      title: "Reward Marketplace",
      description: "Redeem points for mentorship sessions, lab access, school merchandise, and exclusive workshops.",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 1v8m0 0v1" />
        </svg>
      )
    },
    {
      title: "AI Feedback Coach",
      description: "Performance analytics highlight strengths, knowledge gaps, and personalized practice missions.",
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-4 0v4m-6-4v4m-4-4h18" />
        </svg>
      )
    }
  ]

  const timeline = [
    { season: "Quarter 1", focus: "Knowledge Sprint", events: "Cross-curricular quiz league, hackathon season" },
    { season: "Quarter 2", focus: "Creativity Quest", events: "Design thinking challenge, storytelling showdown" },
    { season: "Quarter 3", focus: "Innovation Arena", events: "AI coding marathon, robotics derby" },
    { season: "Quarter 4", focus: "Leadership Summit", events: "Debate league finals, entrepreneurship pitch" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                Gamified Academic Challenges
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Learn, Compete, and Celebrate Wins
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                Students participate in a vibrant ecosystem of quizzes, hackathons, debates, and coding contests.
                Gamified elements keep motivation high while AI feedback helps every learner level up their skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions-ay-2026"
                  className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-xl hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Join the Arena
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Host a Challenge
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImg}
                  alt="Narayana's Kids students proudly holding competition trophies"
                  className="w-full h-[500px] object-cover object-[center_40%]"
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Competitions for Every Passion</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Diverse challenge formats let students experiment, collaborate, and showcase their talents across disciplines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challengeTypes.map((challenge, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img src={challenge.image} alt={challenge.title} className="w-full h-40 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{challenge.title}</h3>
                  <p className="text-slate-600 text-sm">{challenge.description}</p>
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
                src={thematicImg}
                alt="Students engaged in focused academic work"
                className="w-full rounded-2xl shadow-2xl ring-1 ring-slate-200/80 object-cover aspect-[4/3]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Leaderboards & Rewards</h2>
              <p className="text-lg text-slate-600 mb-8">
                The gamified dashboard celebrates progress while inspiring healthy competition and teamwork.
              </p>
              <div className="space-y-6">
                {leaderboardHighlights.map((highlight, index) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Annual Challenge Calendar</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Every season brings new quests, themes, and opportunities to earn badges and shine.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md border border-slate-100">
                  <div className="text-sm font-semibold text-indigo-600 mb-2">{item.season}</div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{item.focus}</h3>
                  <p className="text-sm text-slate-600">{item.events}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Unlock the Joy of Friendly Competition
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Challenge yourself, collaborate with peers, and celebrate achievements in an energetic, supportive environment.
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

export default AcademicChallenges
