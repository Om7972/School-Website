import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Blogs = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const handleReadMore = (post) => {
    // In a real application, this would navigate to a detailed blog post page
    alert(`Reading full article: ${post.title}\n\nAuthor: ${post.author}\nCategory: ${post.category}\n\nThis would open the complete article with full content, comments, and sharing options.`)
  }

  const handleReadFullArticle = (post) => {
    // In a real application, this would navigate to a detailed blog post page
    alert(`Reading full article: ${post.title}\n\nAuthor: ${post.author}\nCategory: ${post.category}\n\nThis would open the complete article with full content, comments, and sharing options.`)
  }

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'education', name: 'Education' },
    { id: 'student-life', name: 'Student Life' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'parenting', name: 'Parenting Tips' },
    { id: 'technology', name: 'Technology' }
  ]

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Education: Embracing Digital Learning",
      category: "education",
      author: "Dr. Priya Sharma",
      date: "December 15, 2024",
      readTime: "5 min read",
      excerpt: "Exploring how digital technologies are transforming the educational landscape and preparing students for the future workforce.",
      content: "Digital learning has revolutionized the way we approach education. With the integration of technology in classrooms, students are now able to access a wealth of information at their fingertips. This shift not only enhances learning experiences but also prepares students for a technology-driven world...",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Digital Learning", "Technology", "Education"],
      featured: true
    },
    {
      id: 2,
      title: "Building Character: The Role of Values in Education",
      category: "education",
      author: "Mrs. Anjali Deshmukh",
      date: "December 12, 2024",
      readTime: "4 min read",
      excerpt: "Understanding the importance of character development alongside academic excellence in modern education.",
      content: "Character education is fundamental to the holistic development of students. It goes beyond academic achievements to instill values such as integrity, empathy, and responsibility. These qualities are essential for students to become responsible citizens and future leaders...",
      image: "https://images.unsplash.com/photo-1523240797355-351f22f4f9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Character Development", "Values", "Holistic Education"]
    },
    {
      id: 3,
      title: "Student Spotlight: Meet Our Science Fair Winner",
      category: "achievements",
      author: "Mr. Rajesh Kumar",
      date: "December 10, 2024",
      readTime: "3 min read",
      excerpt: "Celebrating the innovative project that won first prize at our annual science fair.",
      content: "This year's science fair showcased incredible talent and creativity among our students. The winning project, 'Sustainable Energy Solutions for Rural India,' demonstrated not only scientific understanding but also social responsibility...",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Science Fair", "Innovation", "Student Achievement"]
    },
    {
      id: 4,
      title: "Parenting in the Digital Age: A Guide for Modern Parents",
      category: "parenting",
      author: "Dr. Meera Patel",
      date: "December 8, 2024",
      readTime: "6 min read",
      excerpt: "Practical tips for parents to navigate the challenges and opportunities of raising children in a digital world.",
      content: "Parenting in today's digital age presents unique challenges and opportunities. With children growing up surrounded by technology, parents need to find the right balance between digital engagement and traditional values...",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Parenting", "Digital Age", "Child Development"]
    },
    {
      id: 5,
      title: "The Art of Effective Study Techniques",
      category: "education",
      author: "Ms. Kavita Singh",
      date: "December 5, 2024",
      readTime: "4 min read",
      excerpt: "Discover proven study methods that can help students improve their academic performance and learning efficiency.",
      content: "Effective studying is not just about spending more time with books. It's about using the right techniques that align with how our brains naturally learn and retain information. This article explores various study methods...",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Study Techniques", "Academic Performance", "Learning"]
    },
    {
      id: 6,
      title: "Technology Integration in Our Classrooms",
      category: "technology",
      author: "Mr. Amit Verma",
      date: "December 3, 2024",
      readTime: "5 min read",
      excerpt: "How we're using technology to enhance learning experiences and prepare students for the future.",
      content: "Technology integration in education is not just about using computers in classrooms. It's about creating meaningful learning experiences that leverage digital tools to enhance understanding and engagement...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Technology", "Classroom Integration", "Digital Learning"]
    },
    {
      id: 7,
      title: "Celebrating Cultural Diversity in Our School",
      category: "student-life",
      author: "Mrs. Sunita Iyer",
      date: "November 30, 2024",
      readTime: "3 min read",
      excerpt: "How our school celebrates and promotes cultural diversity among students.",
      content: "Cultural diversity is one of our school's greatest strengths. We believe that exposure to different cultures enriches the learning experience and prepares students for a globalized world...",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Cultural Diversity", "Student Life", "Global Education"]
    },
    {
      id: 8,
      title: "The Importance of Physical Education in Student Development",
      category: "education",
      author: "Mr. Deepak Sharma",
      date: "November 28, 2024",
      readTime: "4 min read",
      excerpt: "Understanding the crucial role of physical education in overall student development and well-being.",
      content: "Physical education is often overlooked in discussions about academic success, but it plays a vital role in student development. Regular physical activity not only improves health but also enhances cognitive function...",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Physical Education", "Student Development", "Health"]
    }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
              School <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Insights, stories, and educational content from our school community. Stay updated with the latest 
              news, achievements, and educational perspectives.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Search Articles</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by title, content, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <svg className="absolute right-3 top-3 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
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
                    <span>{featuredPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleReadFullArticle(featuredPost)}
                    className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 self-start group"
                  >
                    <span className="flex items-center group-hover:translate-x-1 transition-transform">
                      Read Full Article
                      <svg className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Latest Articles</h2>
            <p className="text-lg text-slate-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter(post => !post.featured || selectedCategory !== 'all')
              .map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    {post.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-500">By {post.author}</span>
                      <button 
                        onClick={() => handleReadMore(post)}
                        className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 group"
                      >
                        <span className="flex items-center group-hover:translate-x-1 transition-transform">
                          Read More
                          <svg className="w-4 h-4 ml-1 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No articles found</h3>
              <p className="text-slate-600">Try adjusting your search criteria or check back later for new posts.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Subscribe to our blog newsletter to receive the latest articles and educational insights directly in your inbox.
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

      {/* Popular Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Popular Topics</h2>
            <p className="text-lg text-slate-600">
              Explore our most-read articles and trending topics in education.
            </p>
          </div>
          
                     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
             {categories.filter(cat => cat.id !== 'all').map((category) => {
               const articleCount = blogPosts.filter(post => post.category === category.id).length
               return (
                 <div key={category.id} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer">
                   <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                     {category.id === 'education' && '📚'}
                     {category.id === 'student-life' && '🎓'}
                     {category.id === 'achievements' && '🏆'}
                     {category.id === 'parenting' && '👨‍👩‍👧‍👦'}
                     {category.id === 'technology' && '💻'}
                   </div>
                   <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{category.name}</h3>
                   <div className="flex items-center justify-center space-x-2">
                     <span className="text-2xl font-bold text-blue-600">{articleCount}</span>
                     <span className="text-slate-600 text-sm">
                       {articleCount === 1 ? 'article' : 'articles'}
                     </span>
                   </div>
                   <div className="mt-4">
                     <button 
                       onClick={() => setSelectedCategory(category.id)}
                       className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors duration-300"
                     >
                       View Articles →
                     </button>
                   </div>
                 </div>
               )
             })}
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Share Your Story
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Are you a teacher, student, or parent with an interesting story to share? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Submit Article
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs 