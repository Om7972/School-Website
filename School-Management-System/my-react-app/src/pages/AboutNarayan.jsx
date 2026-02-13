import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infosection'
import FeaturedSection from '../components/FeaturedSection'
import EnquiryForm from '../components/enquiry'
import InfoButton from '../components/infobutton'
import Gallery from '../components/gallery'
import Achievements from '../components/achievements'
import StatsSection from '../components/StatsSection'
import Footer from '../components/Footer'

const AboutNarayan = () => {
  return (
    <div className="min-h-screen">
      {/* About Narayan Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Narayana
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Discover the inspiring journey of Narayan, a visionary educator who transformed education in India
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-lg">
                Learn More
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105">
                Watch Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Narayan's Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                The Visionary Behind Narayana
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Shri Anil Anant Dhumkekar, the founder of Narayana's Sec. & Higher Sec. School, is a renowned educationist and philanthropist. His journey began with a simple vision - to provide quality education to every child in India.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Starting from a small coaching center in 2005, Anil Dhumkekar Sir has built an educational empire that spans overall Washim city, serving millions of students and transforming the landscape of education in India.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">16+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Anil Anant Dhumkekar</h3>
                <p className="text-blue-100 mb-4">
                  "Education is not just about imparting knowledge, but about building character, fostering creativity, and nurturing dreams. Every child deserves the opportunity to excel."
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <div>
                    <div className="font-medium">Founder & Chairman</div>
                    <div className="text-sm text-blue-200">Narayana's Sec. & Higher Sec. School</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by Narayan's vision, we continue to innovate and excel in education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide world-class education that empowers students with knowledge, skills, and values necessary to become responsible global citizens and leaders of tomorrow.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and preferred educational institution, recognized for excellence in academics, innovation in teaching, and commitment to holistic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600">
              Celebrating excellence and achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Padma Shri Award</h3>
              <p className="text-gray-600">Highest civilian honor for contribution to education</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 19 16.5 19c-1.746 0-3.332-.523-4.5-1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Best Educational Institution</h3>
              <p className="text-gray-600">Recognized by multiple educational bodies</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence in Leadership</h3>
              <p className="text-gray-600">Leading educational transformation in India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Narayana's Legacy
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Two decades of educational excellence and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2009</div>
              <div className="text-blue-200">Founded First Center</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2010</div>
              <div className="text-blue-200">Expanded citywise</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2020</div>
              <div className="text-blue-200">Digital Transformation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">Today</div>
              <div className="text-blue-200">Global Recognition</div>
            </div>
          </div>
        </div>
      </section>

      <InfoSection />
      <StatsSection />
      <FeaturedSection />
      <EnquiryForm />
      <InfoButton />
      <Gallery />
      <Achievements />
      <Footer />
    </div>
  )
}

export default AboutNarayan 