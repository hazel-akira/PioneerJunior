
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// pages / components
import Home from './pages/Home'
//import Transform from './pages/Transform'
import History from './components/History'
import Leadership from './pages/Leadership'

import Nurture from './pages/Nurture'
import Nurturing from './pages/nurturing'
import TailorMadeLeadershipPathways from './pages/TailorMadeLeadershipPathways'
//import SchoolOfSTEM from './pages/SchoolOfStem'
//import SchoolOfSocialSciences from './pages/SchoolOfSocialSciences'
//import SchoolOfArtsAndSportsScience from './pages/SchoolOfArtsAndSportsScience'
import Seafarers from './pages/Seafarers'
import Aviator from './pages/YoungAirCadet'
import StudyLife from './pages/StudyLife'
//import BoardingLife from './pages/BoardingLife'
import Farm2Fork from './pages/Farm2Fork'
import NursingCare from './pages/NursingCare'
import Chaplaincy from './pages/Chaplaincy'
import JoinUs from './pages/JoinUs'
import Form3 from './components/Form3'
import Grade4 from './components/grade4'
import Grade5 from './components/Grade5'
import Fees from './components/Fees'
//import FeeInfo from './components/grade4Fees'
import LocationPage from './components/LocationPage'
import GetAccess from './pages/GetAccess'
import CalendarOfEvents from './pages/CalendarOfEvents'
import StudentAccess from './pages/StudentAccess'
import StaffAccess from './pages/StaffAccess'
import InfoCard from './components/InfoCard'
import PrivacyPolicyPage from './pages/PrivacyPolicy'
import Disclaimer from './pages/Disclaimer';
import PerformancePage from './pages/perfomance'
import NotFound from './pages/NotFound'
import { Floating } from './components/Floating'
import Grade4Fees from './components/grade4Fees'
import Grade5Fees from './components/Grade5Fees'
import Grade6Fees from './components/grade6fees'
import TermsAndConditions from './pages/TermsAndConditions'
import Sitemap from './components/Sitemap'
import WhoWeAre from './pages/WhoWeAre'
import JoinGrade6 from './components/grade6'
import AdmissionsPolicy from './components/AdmissionPolicy'
import YoungAirCadet from './pages/YoungAirCadet'
import CodingLife from './pages/Coding'
import Talent from './pages/Talent'
import BandLife from './pages/Band'
import ScoutsLife from './pages/Scouts'
import ChessMasters from './pages/Chess'
import SwimmersLife from './pages/Swimmers'
import SkatingLife from './pages/Skating'
import Cycling from './pages/Cycling'
import BasketballLife from './pages/Basketball'
import FootballLife from './pages/Football'
import Chef from './pages/Chef'
import Golf from './pages/Golf'
import HomeFromHome from './pages/HomeFromHome'
import Discipline from './pages/Discipline'
import SafetyAndSecurity from './pages/SafetyAndSecurity'

export default function App() {
  return (
    <>
    <Routes>
      {/* All routes share the same Layout */}
      <Route path='/' element={<Layout />}>
        {/* index route ⇒ / */}
        <Route index element={<Home />} />

        {/* top‐level pages */}
        <Route path='/who' element={<WhoWeAre />} />
        <Route path='/history' element={<History />} />
        <Route path='/leadership' element={<Leadership />} />
  
       
        <Route path='/nurturing' element={<Nurturing/>} />
        <Route path='/tailor-made-leadership-pathways' element={<TailorMadeLeadershipPathways />} />

        {/* schools 
        <Route path='school-of-science-technology-engineering-and-mathematics' element={<SchoolOfSTEM />} />
        <Route path='school-of-social-sciences' element={<SchoolOfSocialSciences />} />
        <Route path='school-of-arts-and-sports-science' element={<SchoolOfArtsAndSportsScience />} />
*/}
        {/* special programs */}
        <Route path='seafarers' element={<Seafarers />} />
        <Route path='aviator' element={<Aviator />} />

       {/* Nurture */}
        <Route path='/nurture' element={<Nurture/>} />
        <Route path='homefromhome' element={<HomeFromHome />} />
        <Route path='discipline' element={<Discipline />} />
        <Route path='safety' element={<SafetyAndSecurity />} />



        {/* study life */}
        <Route path='studylife' element={<StudyLife />} />
        <Route path='cadet' element={<YoungAirCadet />} />
        <Route path='farm-2-fork' element={<Farm2Fork />} />
        <Route path='nursing-care' element={<NursingCare />} />
        <Route path='chaplaincy' element={<Chaplaincy />} />
        <Route path='coding' element={<CodingLife />} />

          {/* talent */}
          <Route path='talent' element={<Talent />} />
          <Route path='band' element={<BandLife />} />
          <Route path='scouts' element={<ScoutsLife />} />
          <Route path='chess' element={<ChessMasters />} />
          <Route path='swimmers' element={<SwimmersLife />} />
          <Route path='skating' element={<SkatingLife />} />
          <Route path='cycling' element={<Cycling />} />
          <Route path='basket' element={<BasketballLife />} />
          <Route path='football' element={<FootballLife />} />
          <Route path='chef' element={<Chef />} />
          <Route path='golf' element={<Golf />} />

        {/* join */}
        <Route path='join' element={<JoinUs />} />
        <Route path='adm' element={<AdmissionsPolicy />} />
        <Route path='form3' element={<Form3 />} />
        <Route path='grade4' element={<Grade4 />} />
        <Route path='grade5' element={<Grade5 />} />
        <Route path='grade6' element={<JoinGrade6 />} />

        {/* utilities */}
        <Route path='fees' element={<Fees />} />
        <Route path='grade4fee' element={<Grade4Fees/>}/>
        <Route path='grade5fee' element={<Grade5Fees />} />
        <Route path='grade6fee' element={<Grade6Fees />} />
        <Route path='terms' element={<TermsAndConditions />} />

        {/* access */}
        <Route path='access' element={<GetAccess />} />
        <Route path='events' element={<CalendarOfEvents />} />
        <Route path='StuAccess' element={<StudentAccess />} />
        <Route path='staffAccess' element={<StaffAccess />} />
        <Route path='location' element={<LocationPage />} />

     
        
        {/* ad‐hoc info card */}
        <Route
          path='InfoCard'
          element={
            <InfoCard
              title='Sample Title'
              description='Sample description.'
              imageSrc='/public/images/hero.jpg'
            />
          }
        />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/perfomance" element={<PerformancePage/>}/>
        <Route path='/sitemap' element={<Sitemap/>}/>
        {/* 404 Not Found route */}
        <Route path="*" element={<NotFound />} />
      
      </Route>
  
    </Routes>
    <Floating />
    </>
  )
}
