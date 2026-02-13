import HeroSection from '../components/HeroSection'
import InfoSection from '../components/infosection'
import FeaturedSection from '../components/FeaturedSection'
import EnquiryForm from '../components/enquiry'
import InfoButton from '../components/infobutton'
import Gallery from '../components/gallery'
import Achievements from '../components/achievements'
import StatsSection from '../components/StatsSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
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

export default Home 