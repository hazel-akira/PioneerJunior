
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

// pages / components
import Home from './pages/Home'
//import Transform from './pages/Transform'
import History from './components/History'
import Leadership from './pages/Leadership'

import Nurture from './pages/Nurture'
import ThinkDifferent from './pages/ThinkDifferent'
import Pathways from './pages/TailorMadeLeadershipPathways'
import DetailedPathways from './pages/Detailedpathways'
//import SchoolOfSocialSciences from './pages/SchoolOfSocialSciences'
import Mandarin from './pages/Mandarin'
import Seafarers from './pages/Seafarers'

import StudyLife from './pages/StudyLife'
import BoardingLife from './pages/BoardingLife'
import Farm2Fork from './pages/Farm2Fork'
import NursingCare from './pages/NursingCare'
import Chaplaincy from './pages/Chaplaincy'
import Laundry from './pages/Laundry'
import JoinUs from './pages/JoinUs'
import Form3 from './components/Form3'

import Grade7 from './components/grade7'
import Grade8 from './components/grade8'
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
import Grade7Fees from './components/grade7Fees'
import Grade8Fees from './components/Grade8Fees'
import Grade9Fees from './components/grade9fees'
import TermsAndConditions from './pages/TermsAndConditions'
import Sitemap from './components/Sitemap'
import Think from './pages/Think'
import JoinGrade9 from './components/Grade9'
import AdmissionsPolicy from './components/AdmissionPolicy'
import YoungAirCadet from './pages/YoungAirCadet'
import CodingLife from './pages/Robotics'
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
import FarmingLife from './pages/Farmers'

export default function App() {
  return (
    <>
    <Routes>
      {/* All routes share the same Layout */}
      <Route path='/' element={<Layout />}>
        {/* index route ⇒ / */}
        <Route index element={<Home />} />

        {/* top‐level pages */}
        <Route path='/think' element={<Think />} />
        <Route path='/history' element={<History />} />
        <Route path='/leadership' element={<Leadership />} />
  
       
        <Route path='/different' element={<ThinkDifferent/>} />
        <Route path='/pathways' element={<Pathways />} />

        {/* schools 
        <Route path='school-of-science-technology-engineering-and-mathematics' element={<SchoolOfSTEM />} />*/}
        <Route path='mandarin' element={<Mandarin />} />
        <Route path='detailed-pathways' element={<DetailedPathways />} />

        {/* special programs */}
        <Route path='seafarers' element={<Seafarers />} />
  
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
        <Route path='Laundry' element={<Laundry />} />

        <Route path='boarding-life' element={<BoardingLife />} />

          {/* talent */}
          <Route path='talent' element={<Talent />} />
          <Route path='band' element={<BandLife />} />
          <Route path='scouts' element={<ScoutsLife />} />
          <Route path='chess' element={<ChessMasters />} />
          <Route path='swimmers' element={<SwimmersLife />} />
          <Route path='farmers' element={<FarmingLife />} />
          <Route path='skating' element={<SkatingLife />} />
          <Route path='cycling' element={<Cycling />} />
          <Route path='basket' element={<BasketballLife />} />
          <Route path='football' element={<FootballLife />} />
          <Route path='chef' element={<Chef />} />
          <Route path='golf' element={<Golf />} />
          <Route path='coding' element={<CodingLife />} />

        {/* join */}
        <Route path='join' element={<JoinUs />} />
        <Route path='adm' element={<AdmissionsPolicy />} />
        <Route path='form3' element={<Form3 />} />
        <Route path='grade7' element={<Grade7 />} />
        <Route path='grade8' element={<Grade8 />} />
        <Route path='grade9' element={<JoinGrade9 />} />

        {/* utilities */}
        <Route path='fees' element={<Fees />} />
        <Route path='grade7fee' element={<Grade7Fees/>}/>
        <Route path='grade8fee' element={<Grade8Fees />} />
        <Route path='grade9fee' element={<Grade9Fees />} />
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
