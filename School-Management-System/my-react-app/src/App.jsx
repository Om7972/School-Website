import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ChatWidget from './components/ChatWidget'
import { capturePageView } from './lib/posthog'
import Home from './pages/Home'
import Contact from './pages/Contact'
import AboutNarayan from './pages/AboutNarayan'
import AboutUs from './pages/AboutUs'
import ChairmanMessage from './pages/ChairmanMessage'
import NarayanaInitiatives from './pages/NarayanaInitiatives'
import News from './pages/News'
import Awards from './pages/Awards'
import SchoolSong from './pages/SchoolSong'
import SocialOutreach from './pages/SocialOutreach'
import SchoolBrochure from './pages/SchoolBrochure'
import Careers from './pages/Careers'
import Blogs from './pages/Blogs'
import Alumni from './pages/Alumni'
import BrochureForm from './pages/BrochureForm'
import JobApplication from './pages/JobApplication'
import AlumniNetworkForm from './pages/AlumniNetworkForm'
import WhyNarayana from './pages/WhyNarayana'
import Admissions from './pages/Admissions'
import DigitalLearning from './pages/DigitalLearning'
import InnovationLab from './pages/InnovationLab'
import InnovativeAcademicPrograms from './pages/InnovativeAcademicPrograms'
import ThematicLearningProgram from './pages/ThematicLearningProgram'
import SchoolInfrastructure from './pages/SchoolInfrastructure'
import OurLabs from './pages/OurLabs'
import AdmissionsAY2026 from './pages/AdmissionsAY2026'
import FeeStructure from './pages/FeeStructure'
import PersonalizedLearning from './pages/PersonalizedLearning'
import SocialImpactService from './pages/SocialImpactService'
import WellnessMindfulness from './pages/WellnessMindfulness'
import AcademicChallenges from './pages/AcademicChallenges'
import StudentExperience from './pages/StudentExperience'

function PostHogPageViewTracker() {
  const location = useLocation()

  useEffect(() => {
    capturePageView(location.pathname, location.search)
  }, [location.pathname, location.search])

  return null
}

function App() {
  return (
    <Router>
      <PostHogPageViewTracker />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-narayan" element={<AboutNarayan />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/chairman-message" element={<ChairmanMessage />} />
            <Route path="/initiatives" element={<NarayanaInitiatives />} />
            <Route path="/news" element={<News />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/school-song" element={<SchoolSong />} />
            <Route path="/social-outreach" element={<SocialOutreach />} />
            <Route path="/brochure" element={<SchoolBrochure />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/brochure-form" element={<BrochureForm />} />
            <Route path="/job-application" element={<JobApplication />} />
            <Route path="/alumni-network-form" element={<AlumniNetworkForm />} />
            <Route path="/why-narayana" element={<WhyNarayana />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/digital-learning" element={<DigitalLearning />} />
            <Route path="/innovation-lab" element={<InnovationLab />} />
            <Route path="/innovative-academic-programs" element={<InnovativeAcademicPrograms />} />
            <Route path="/thematic-learning-program" element={<ThematicLearningProgram />} />
            <Route path="/school-infrastructure" element={<SchoolInfrastructure />} />
            <Route path="/our-labs" element={<OurLabs />} />
            <Route path="/admissions-ay-2026" element={<AdmissionsAY2026 />} />
            <Route path="/fee-structure" element={<FeeStructure />} />
            <Route path="/personalized-learning" element={<PersonalizedLearning />} />
            <Route path="/service-learning" element={<SocialImpactService />} />
            <Route path="/wellness-mindfulness" element={<WellnessMindfulness />} />
            <Route path="/academic-challenges" element={<AcademicChallenges />} />
            <Route path="/student-experience" element={<StudentExperience />} />
          </Routes>
        </main>
        <ChatWidget />
      </div>
    </Router>
  )
}

export default App