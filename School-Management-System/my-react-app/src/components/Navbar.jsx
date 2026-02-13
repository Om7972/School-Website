import { useState, useEffect, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [isWhyNarayanaDropdownOpen, setIsWhyNarayanaDropdownOpen] = useState(false)
  const [isAdmissionsDropdownOpen, setIsAdmissionsDropdownOpen] = useState(false)
  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false)
  const [hoveredWhyItem, setHoveredWhyItem] = useState(null)
  const [hoveredExperienceItem, setHoveredExperienceItem] = useState(null)
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false)
  const [isMobileWhyOpen, setIsMobileWhyOpen] = useState(false)
  const [isMobileAdmissionsOpen, setIsMobileAdmissionsOpen] = useState(false)
  const [isMobileExperienceOpen, setIsMobileExperienceOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  const searchItems = useMemo(() => ([
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
    { name: 'About Narayana', href: '/about-narayan' },
    { name: 'About Us', href: '/about-us' },
    { name: "Chairman's Message", href: '/chairman-message' },
    { name: 'Narayana Initiatives', href: '/initiatives' },
    { name: 'News', href: '/news' },
    { name: 'Awards', href: '/awards' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Admissions AY 2026-27', href: '/admissions-ay-2026' },
    { name: 'Fee Structure', href: '/fee-structure' },
    { name: 'AI Personalized Learning Paths', href: '/personalized-learning' },
    { name: 'Social-Impact Service Learning', href: '/service-learning' },
    { name: 'Wellness & Mindfulness Hub', href: '/wellness-mindfulness' },
    { name: 'Gamified Academic Challenges', href: '/academic-challenges' },
    { name: 'Digital Learning', href: '/digital-learning' },
    { name: 'Innovation Lab', href: '/innovation-lab' },
    { name: 'Innovative Academic Programs', href: '/innovative-academic-programs' },
    { name: 'Thematic Learning Program', href: '/thematic-learning-program' },
    { name: 'School Infrastructure', href: '/school-infrastructure' },
    { name: 'Our Labs', href: '/our-labs' },
    { name: 'Careers', href: '/careers' },
    { name: 'Alumni', href: '/alumni' }
  ]), [])

  const aboutMenuItems = [
    { name: "About Us", href: "/about-us", icon: "🏫", description: "Learn about our school's history and values" },
    { name: "Chairman's Message", href: "/chairman-message", icon: "👨‍💼", description: "Message from our Chairman" },
    { name: "Narayana Initiatives", href: "/initiatives", icon: "🎯", description: "Our innovative programs and initiatives" },
    { name: "News", href: "/news", icon: "📰", description: "Latest news and updates" },
    { name: "Awards", href: "/awards", icon: "🏆", description: "Our achievements and recognitions" },
    { name: "School Song", href: "/school-song", icon: "🎵", description: "Our school anthem and lyrics" },
    { name: "Social Outreach", href: "/social-outreach", icon: "🤝", description: "Community service programs" },
    { name: "School Brochure", href: "/brochure", icon: "📋", description: "Download our school brochure" }
  ]

  const whyNarayanaItems = [
    {
      name: "The Right Curriculum",
      hasSubItems: true,
      subItems: [
        { name: "Digital Learning", href: "/digital-learning" },
        { name: "Innovation Lab", href: "/innovation-lab" },
        { name: "Innovative Academic Programs", href: "/innovative-academic-programs" },
        { name: "Thematic Learning Program", href: "/thematic-learning-program" }
      ]
    },
    {
      name: "The Right Faculty",
      hasSubItems: false,
      href: "/why-narayana"
    },
    {
      name: "The Right Environment",
      hasSubItems: true,
      subItems: [
        { name: "School Infrastructure", href: "/school-infrastructure" },
        { name: "Our Labs", href: "/our-labs" }
      ]
    },
    {
      name: "The Right Approach",
      hasSubItems: false,
      href: "/why-narayana"
    },
    {
      name: "The Right Skills",
      hasSubItems: false,
      href: "/why-narayana"
    }
  ]

  const experienceItems = [
    {
      name: "AI-Powered Personalized Learning Paths",
      description: "Dynamic journeys, AI recommendations, and holistic growth dashboards.",
      href: "/personalized-learning"
    },
    {
      name: "Social-Impact Service Learning Platform",
      description: "Volunteer matchmaking, impact tracking, and digital badges.",
      href: "/service-learning"
    },
    {
      name: "Wellness & Mindfulness Hub",
      description: "Mood journals, guided mindfulness, and counseling appointments.",
      href: "/wellness-mindfulness"
    },
    {
      name: "Gamified Academic Challenges & Competitions",
      description: "Quizzes, hackathons, leaderboards, and reward marketplace.",
      href: "/academic-challenges"
    }
  ]

  const admissionsItems = [
    { name: "Admissions for AY 2026-27", href: "/admissions-ay-2026" },
    { name: "Fee Structure", href: "/fee-structure" }
  ]

  // Close dropdown when route changes
  useEffect(() => {
    setIsAboutDropdownOpen(false)
    setIsWhyNarayanaDropdownOpen(false)
    setIsAdmissionsDropdownOpen(false)
    setIsExperienceDropdownOpen(false)
    setIsMobileMenuOpen(false)
    setIsMobileAboutOpen(false)
    setIsMobileWhyOpen(false)
    setIsMobileAdmissionsOpen(false)
    setIsMobileExperienceOpen(false)
    setHoveredWhyItem(null)
    setHoveredExperienceItem(null)
    setIsSearchOpen(false)
    setSearchQuery('')
  }, [location.pathname])

  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById('enquiry-form')
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToInfoSection = () => {
    const infoSection = document.getElementById('info-section')
    if (infoSection) {
      infoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSearchSubmit = () => {
    if (filteredSearchResults.length > 0) {
      const target = filteredSearchResults[0]
      setIsSearchOpen(false)
      setSearchQuery('')
      navigate(target.href)
    }
  }

  const handleSearchSelect = (href) => {
    setIsSearchOpen(false)
    setSearchQuery('')
    navigate(href)
  }

  const filteredSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toLowerCase()
    return searchItems
      .filter(item => item.name.toLowerCase().includes(query))
      .slice(0, 6)
  }, [searchItems, searchQuery])

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link
                to="/brochure"
                className="flex items-center space-x-2 text-xs hover:text-blue-200 transition-colors duration-200 hover:scale-105 transform"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="font-medium text-xs">Download Brochure</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 hover:bg-white/30 transition-all duration-200">
                  <input
                    type="text"
                    value={searchQuery}
                    onFocus={() => setIsSearchOpen(true)}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setIsSearchOpen(true)
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        handleSearchSubmit()
                      }
                    }}
                    onBlur={() => {
                      setTimeout(() => setIsSearchOpen(false), 150)
                    }}
                    placeholder="Search programs, pages, or features"
                    className="bg-transparent text-white placeholder-white/70 text-xs outline-none flex-1 min-w-[170px]"
                  />
                  <button
                    onClick={handleSearchSubmit}
                    className="ml-2 text-white/80 hover:text-white transition-colors"
                    type="button"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
                {isSearchOpen && filteredSearchResults.length > 0 && (
                  <div className="absolute right-0 mt-2 w-64 bg-white text-slate-700 rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                    {filteredSearchResults.map((item, index) => (
                      <button
                        key={item.href}
                        onMouseDown={(e) => {
                          e.preventDefault()
                          handleSearchSelect(item.href)
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-blue-50 transition-colors duration-150 ${index !== filteredSearchResults.length - 1 ? 'border-b border-slate-100' : ''}`}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={scrollToEnquiry}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-medium transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-200">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <div>
                <div className="text-sm font-bold">Narayana's Sec. & Higher Sec. School</div>
                <div className="text-xs text-blue-200">Since 2009</div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              {/* About Dropdown */}
              <div className="relative group">
                <button 
                  className="text-white hover:text-blue-200 transition-all duration-200 font-medium flex items-center space-x-1 text-sm"
                  onMouseEnter={() => setIsAboutDropdownOpen(true)}
                  onMouseLeave={() => setIsAboutDropdownOpen(false)}
                >
                  <span>About Narayana</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Enhanced Dropdown Menu */}
                {isAboutDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50 transform opacity-100 scale-100 transition-all duration-200"
                    onMouseEnter={() => setIsAboutDropdownOpen(true)}
                    onMouseLeave={() => setIsAboutDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <Link
                        to="/about-narayan"
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                      >
                        <span className="text-2xl">🏫</span>
                        <div>
                          <div className="font-semibold text-gray-800 group-hover:text-blue-600">About Narayan</div>
                          <div className="text-xs text-gray-500">Overview of our school</div>
                        </div>
                      </Link>
                    </div>
                    
                    <div className="py-2">
                      {aboutMenuItems.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200 group"
                        >
                          <span className="text-xl">{item.icon}</span>
                          <div>
                            <div className="font-medium text-gray-800 group-hover:text-blue-600">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Why Narayana Dropdown */}
              <div className="relative group">
                <Link
                  to="/why-narayana"
                  className="text-white hover:text-blue-200 transition-all duration-200 font-medium flex items-center space-x-1 text-sm"
                  onMouseEnter={() => setIsWhyNarayanaDropdownOpen(true)}
                  onMouseLeave={() => {
                    setIsWhyNarayanaDropdownOpen(false)
                    setHoveredWhyItem(null)
                  }}
                >
                  <span>Why Narayana</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isWhyNarayanaDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Why Narayana Dropdown Menu - Two Column Layout */}
                {isWhyNarayanaDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50 transform opacity-100 scale-100 transition-all duration-200"
                    onMouseEnter={() => setIsWhyNarayanaDropdownOpen(true)}
                    onMouseLeave={() => {
                      setIsWhyNarayanaDropdownOpen(false)
                      setHoveredWhyItem(null)
                    }}
                  >
                    <div className="grid grid-cols-2 gap-0">
                      {/* Left Column - Main Items */}
                      <div className="border-r border-gray-100">
                        {whyNarayanaItems.map((item, index) => (
                          <div
                            key={index}
                            className={`relative px-4 py-3 transition-colors duration-200 ${
                              hoveredWhyItem === index 
                                ? 'bg-gray-100' 
                                : 'hover:bg-gray-50'
                            }`}
                            onMouseEnter={() => setHoveredWhyItem(index)}
                          >
                            <Link to={item.href || "/why-narayana"} className="block">
                              <div className="flex items-center justify-between">
                                <span className={`text-sm ${hoveredWhyItem === index ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                                  {item.name}
                                </span>
                                {item.hasSubItems && (
                                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                )}
                              </div>
                              {hoveredWhyItem === index && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"></div>
                              )}
                            </Link>
                          </div>
                        ))}
                      </div>
                      
                      {/* Right Column - Sub Items */}
                      <div className="px-4 py-4 min-h-[240px]">
                        {hoveredWhyItem !== null && whyNarayanaItems[hoveredWhyItem]?.hasSubItems ? (
                          <div className="space-y-3">
                            {whyNarayanaItems[hoveredWhyItem].subItems.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.href}
                                className="block px-2 py-1.5 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        ) : hoveredWhyItem !== null ? (
                          <div className="flex items-center justify-center h-full text-sm text-gray-400">
                            <span>Click to learn more</span>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full text-sm text-gray-400">
                            <span>Hover over an item to see details</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Admissions Dropdown */}
              <div className="relative group">
                <Link
                  to="/admissions-ay-2026"
                  className="text-white hover:text-blue-200 transition-all duration-200 font-medium flex items-center space-x-1 text-sm"
                  onMouseEnter={() => setIsAdmissionsDropdownOpen(true)}
                  onMouseLeave={() => setIsAdmissionsDropdownOpen(false)}
                >
                  <span>Admissions</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isAdmissionsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                
                {/* Admissions Dropdown Menu */}
                {isAdmissionsDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-3 z-50 transform opacity-100 scale-100 transition-all duration-200"
                    onMouseEnter={() => setIsAdmissionsDropdownOpen(true)}
                    onMouseLeave={() => setIsAdmissionsDropdownOpen(false)}
                  >
                    {admissionsItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.href}
                        className="block px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Student Experience Dropdown */}
              <div className="relative group">
                <button
                  className="text-white hover:text-blue-200 transition-all duration-200 font-medium flex items-center space-x-1 text-sm"
                  onMouseEnter={() => setIsExperienceDropdownOpen(true)}
                  onMouseLeave={() => setIsExperienceDropdownOpen(false)}
                >
                  <span>Student Experience</span>
                  <svg className={`w-3 h-3 transition-transform duration-200 ${isExperienceDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isExperienceDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50 transform opacity-100 scale-100 transition-all duration-200"
                    onMouseEnter={() => setIsExperienceDropdownOpen(true)}
                    onMouseLeave={() => setIsExperienceDropdownOpen(false)}
                  >
                    <div className="px-4 py-2 border-b border-gray-100">
                      <div className="text-xs uppercase tracking-wider text-blue-500 font-semibold">Future Ready Experiences</div>
                    </div>
                    <div className="py-2">
                      {experienceItems.map((item, index) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className={`flex items-start space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200 ${index !== experienceItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                          <div>
                            <div className="font-medium text-gray-800 group-hover:text-blue-600">{item.name}</div>
                            <div className="text-xs text-gray-500">{item.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/careers" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Careers
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              <Link to="/blogs" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Blogs
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              <Link to="/alumni" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Alumni
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              
              <Link to="/contact" className="text-white hover:text-blue-200 transition-all duration-200 font-medium relative group text-sm">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-200 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-1 rounded-lg hover:bg-white/20 transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Enhanced Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-3 border-t border-blue-500">
              <div className="flex flex-col space-y-2">
                <Link to="/" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Home</Link>
                
                {/* Mobile About Section */}
                <div className="space-y-1">
                  <button 
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="w-full text-left text-white py-1 px-3 text-sm font-medium flex items-center justify-between"
                  >
                    <span>About Narayana</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isMobileAboutOpen && (
                    <div className="ml-4 space-y-1 bg-white/10 rounded-lg p-2">
                      <Link 
                        to="/about-narayan"
                        className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                      >
                        About Narayana
                      </Link>
                      {aboutMenuItems.map((item, index) => (
                        <Link 
                          key={index}
                          to={item.href} 
                          className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Mobile Why Narayana Section */}
                <div className="space-y-1">
                  <button 
                    onClick={() => setIsMobileWhyOpen(!isMobileWhyOpen)}
                    className="w-full text-left text-white py-1 px-3 text-sm font-medium flex items-center justify-between"
                  >
                    <span>Why Narayana</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileWhyOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isMobileWhyOpen && (
                    <div className="ml-4 space-y-1 bg-white/10 rounded-lg p-2">
                      <Link 
                        to="/why-narayana"
                        className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                      >
                        Why Narayana
                      </Link>
                      <Link 
                        to="/digital-learning"
                        className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                      >
                        Digital Learning
                      </Link>
                      <Link 
                        to="/innovation-lab"
                        className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                      >
                        Innovation Lab
                      </Link>
                      <Link 
                        to="/innovative-academic-programs"
                        className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                      >
                        Innovative Academic Programs
                      </Link>
                      <Link 
                        to="/thematic-learning-program"
                        className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                      >
                        Thematic Learning Program
                      </Link>
                      <Link 
                        to="/school-infrastructure"
                        className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                      >
                        School Infrastructure
                      </Link>
                      <Link 
                        to="/our-labs"
                        className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                      >
                        Our Labs
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Mobile Admissions Section */}
                <div className="space-y-1">
                  <button 
                    onClick={() => setIsMobileAdmissionsOpen(!isMobileAdmissionsOpen)}
                    className="w-full text-left text-white py-1 px-3 text-sm font-medium flex items-center justify-between"
                  >
                    <span>Admissions</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileAdmissionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isMobileAdmissionsOpen && (
                    <div className="ml-4 space-y-1 bg-white/10 rounded-lg p-2">
                      {admissionsItems.map((item, index) => (
                        <Link 
                          key={index}
                          to={item.href}
                          className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Student Experience Section */}
                <div className="space-y-1">
                  <button 
                    onClick={() => setIsMobileExperienceOpen(!isMobileExperienceOpen)}
                    className="w-full text-left text-white py-1 px-3 text-sm font-medium flex items-center justify-between"
                  >
                    <span>Student Experience</span>
                    <svg className={`w-4 h-4 transition-transform duration-200 ${isMobileExperienceOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {isMobileExperienceOpen && (
                    <div className="ml-4 space-y-1 bg-white/10 rounded-lg p-2">
                      {experienceItems.map((item, index) => (
                        <Link 
                          key={item.href}
                          to={item.href}
                          className="block text-blue-200 hover:text-white transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link to="/careers" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Careers</Link>
                <Link to="/blogs" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Blogs</Link>
                <Link to="/alumni" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Alumni</Link>
                <Link to="/contact" className="text-white hover:text-blue-200 transition-colors duration-200 py-1 px-3 rounded-lg hover:bg-white/10 text-sm">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar 