// src/components/Layout.tsx
import { Helmet } from '@dr.pogodin/react-helmet'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
//import FloatingAdmissionTimer from './FloatingAdmissionTimer'  // ⬅️ import sticky timer

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Pioneer Junior Academy</title>
      </Helmet>

      {/* Navbar always at top */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Admissions Timer (sticky/fixed at bottom, hidden on "/") 
      <FloatingAdmissionTimer
        target="2025-09-30T23:59:59+03:00"
        start="2025-08-01T00:00:00+03:00"
        ctaText="Apply for Grade 10"
        ctaHref="https://enquireto.pioneergroupofschools.co.ke"
        heading="Grade 10 admissions close in"
      />*/}
    </div>
  )
}
