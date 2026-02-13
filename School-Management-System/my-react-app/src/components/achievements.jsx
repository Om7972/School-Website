import React, { useState } from 'react'
import troph1 from '../assets/troph1.jpg'
import troph2 from '../assets/troph2.jpg'
import troph3 from '../assets/troph3.jpg'

const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAchievement, setSelectedAchievement] = useState(null)

  const achievements = [
    {
      id: 1,
      image: troph1,
      title: "The Most Trusted Education Brand by Big Impact Awards 2025",
      description: "Narayana Institute was awarded as the Most Trusted Education Brand by Big Impact Awards 2025",
      awardName: "BIG IMPACT AWARDS"
    },
    {
      id: 2,
      image: troph2,
      title: "The Most Respected Education Brand in India 2024-25",
      description: "Narayana Institute was awarded as the Most Respected Education Brand in India 2024-25 by Education World",
      awardName: "EducationWorld"
    },
    {
      id: 3,
      image: troph3,
      title: "Most Trusted Brands of India 2024-25",
      description: "Narayana Institute was awarded the Most Trusted Brands of India 2024-25 by Marksmen Daily",
      awardName: "MOST TRUSTED BRANDS OF INDIA"
    },
    {
      id: 4,
      image: troph1, // Using troph1 as placeholder for 4th award
      title: "The Economic Times Best Education Brands Award 2024",
      description: "Narayana Education Network has been recognised as the Best Education Brands 2024 by The Economic Times",
      awardName: "NARAYANA EDUCATION NETWORK"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length)
  }

  const openModal = (achievement) => {
    setSelectedAchievement(achievement)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedAchievement(null)
  }

  const nextModalAchievement = () => {
    if (selectedAchievement) {
      const currentIndex = achievements.findIndex(item => item.id === selectedAchievement.id)
      const nextIndex = (currentIndex + 1) % achievements.length
      setSelectedAchievement(achievements[nextIndex])
    }
  }

  const prevModalAchievement = () => {
    if (selectedAchievement) {
      const currentIndex = achievements.findIndex(item => item.id === selectedAchievement.id)
      const prevIndex = (currentIndex - 1 + achievements.length) % achievements.length
      setSelectedAchievement(achievements[prevIndex])
    }
  }

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are honoured to be recognised for our commitment to quality
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-gray-50 rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 border border-gray-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white hover:bg-gray-50 rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-105 border border-gray-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Achievements Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100"
                  onClick={() => openModal(achievement)}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Award Name Banner */}
                    <div className="absolute top-0 left-0 right-0 bg-gray-800 text-white py-2 px-3 text-center">
                      <span className="text-xs font-medium">{achievement.awardName}</span>
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Click to view indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-2 shadow-md">
                        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                      {achievement.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center mt-8">
            <button className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300 group">
              <span>View All</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Modal/Lightbox */}
      {isModalOpen && selectedAchievement && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full max-h-[85vh] bg-white rounded-lg overflow-hidden shadow-xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gray-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevModalAchievement}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gray-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextModalAchievement}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110 border border-gray-200"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative h-80 md:h-96 overflow-hidden">
              <img
                src={selectedAchievement.image}
                alt={selectedAchievement.title}
                className="w-full h-full object-cover"
              />
              
              {/* Award Name Banner */}
              <div className="absolute top-0 left-0 right-0 bg-gray-800 text-white py-2 px-4 text-center">
                <span className="text-sm font-medium">{selectedAchievement.awardName}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {selectedAchievement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {selectedAchievement.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Achievements