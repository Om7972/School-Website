import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classroomImg from '../assets/classroom-students-writing.png'
import hydraulicLiftImg from '../assets/hydraulic-lift-science-project.png'
import scoutGuideImg from '../assets/scout-guide-group.png'
import backpackImg from '../assets/backpack-distribution-washim.png'
import ganeshImg from '../assets/ganesh-chaturthi-celebration.png'
import celebrationImg from '../assets/school-celebration-rose.png'
const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'academic', name: 'Academic' },
    { id: 'events', name: 'Events' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'announcements', name: 'Announcements' }
  ]

  const newsArticles = [
    {
      id: 1,
      category: 'academic',
      date: 'December 10, 2024',
      title: 'Outstanding Board Results - Class 12 Students Excel',
      excerpt: 'Our Class 12 students have achieved remarkable results in the board examinations with 95% of students securing first division.',
      image: classroomImg,
      readTime: '3 min read',
      featured: true
    },
    {
      id: 2,
      category: 'events',
      date: 'December 8, 2024',
      title: 'Annual Science Fair 2024 - A Resounding Success',
      excerpt: 'The annual science fair showcased innovative projects from students across all grades, demonstrating creativity and scientific thinking.',
      image: hydraulicLiftImg,
      readTime: '4 min read',
      featured: false
    },
    {
      id: 3,
      category: 'achievements',
      date: 'December 5, 2024',
      title: 'Students Win Regional Mathematics Olympiad',
      excerpt: 'Our students secured top positions in the Regional Mathematics Olympiad, bringing pride to the school and community.',
      image: scoutGuideImg,
      readTime: '2 min read',
      featured: false
    },
    {
      id: 4,
      category: 'announcements',
      date: 'December 3, 2024',
      title: 'New Digital Learning Platform Launch',
      excerpt: 'We are excited to announce the launch of our new digital learning platform that will enhance the educational experience.',
      image: backpackImg,
      readTime: '5 min read',
      featured: false
    },
    {
      id: 5,
      category: 'events',
      date: 'November 30, 2024',
      title: 'Cultural Festival 2024 - Celebrating Diversity',
      excerpt: 'The annual cultural festival brought together students, parents, and teachers to celebrate our diverse cultural heritage.',
      image: ganeshImg,
      readTime: '3 min read',
      featured: false
    },
    {
      id: 6,
      category: 'academic',
      date: 'November 28, 2024',
      title: 'New STEM Lab Inauguration',
      excerpt: 'Our new state-of-the-art STEM laboratory was inaugurated, providing students with hands-on learning experiences.',
      image: celebrationImg,
      readTime: '4 min read',
      featured: false
    }
  ]

  const filteredNews = selectedCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory)

  const featuredArticle = newsArticles.find(article => article.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              School <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">News</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest news, events, achievements, and announcements from Narayana's Sec. & Higher Sec. School.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <span>{featuredArticle.date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 self-start">
                    Read Full Article →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews
              .filter(article => !article.featured || selectedCategory !== 'all')
              .map((article) => (
                <article key={article.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    {article.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our community and stay connected with all the latest happenings at Narayana's School.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/about-us"
              className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News 