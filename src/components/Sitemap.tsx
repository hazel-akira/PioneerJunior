import React from 'react';

const sitemapLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/Think-Pathways', label: 'Think Pathways' },
  { href: '/Think-Pathways/Think-Detailed-Pathways', label: 'Think Detailed Pathways' },
  { href: '/Join-us', label: 'Join Us' },
  { href: '/Join-us/Join-Grade-7', label: 'Join Grade 7' },
  { href: '/Join-us/Join-Grade-8', label: 'Join Grade 8' },
  { href: '/Join-us/Join-Grade-9', label: 'Join Grade 9' },
  { href: '/Fees', label: 'Fees' },
  { href: '/Fees/Grade-7-Fees', label: 'Grade 7 Fees' },
  { href: '/Fees/Grade-8-Fees', label: 'Grade 8 Fees' },
  { href: '/Fees/Grade-9-Fees', label: 'Grade 9 Fees' },
  { href: '/Student-Life', label: 'Student Life' },
  { href: '/Academic-Life', label: 'Academic Life' },
  { href: '/Performance', label: 'Performance' },
  { href: '/Get-Access', label: 'Get Access' },
  { href: '/Get-Access/CBA-Parent-Portal', label: 'CBA Parent Portal' },
  { href: '/Get-Access/KICD-Junior-School', label: 'KICD Junior School (CBC)' },
  { href: '/Get-Access/National-Curriculum-Policy', label: 'National Curriculum Policy' },
  { href: '/Get-Access/NEMIS-Portal', label: 'NEMIS Portal' },
  { href: '/Get-Access/Ministry-of-Education', label: 'Ministry of Education' },
  { href: '/Get-Access/KNEC-Portal', label: 'KNEC Portal' },
  { href: '/Book-A-Visit', label: 'Book A Visit' },
  { href: '/Book-A-Visit/Location', label: 'Visit Location' },
  { href: '/Contact-Us', label: 'Contact Us' },
  { href: '/Privacy-Policy', label: 'Privacy Policy' },
  { href: '/Terms-and-Conditions', label: 'Terms & Conditions' },
  { href: '/Disclaimer', label: 'Disclaimer' },
];

const Sitemap: React.FC = () => (
  <div className="bg-[#161e2e] text-white py-12">
    <div className="max-w-5xl mx-auto bg-[#ccccc5] text-[#083056] rounded-2xl shadow-lg p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#df8811]">
        Sitemap
      </h1>
      <p className="text-center mb-8 text-gray-600">
        Pioneer Junior Academy - Junior Secondary School (Grades 7-9)
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sitemapLinks.map(({ href, label }) => (
          <li
            key={href}
            className="border-l-4 border-[#df8811]  p-4 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1"
          >
            <a href={href} className="font-semibold hover:text-[#df8811]">
              {label}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Quick Links Section */}
      <div className="mt-12 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#df8811]">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white border border-[#df8811] rounded-lg p-4">
            <h3 className="font-semibold text-[#083056] mb-2">Admissions</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/Join-us/Join-Grade-7" className="hover:text-[#df8811]">Grade 7 Entry</a></li>
              <li><a href="/Join-us/Join-Grade-8" className="hover:text-[#df8811]">Grade 8 Entry</a></li>
              <li><a href="/Join-us/Join-Grade-9" className="hover:text-[#df8811]">Grade 9 Entry</a></li>
            </ul>
          </div>
          
          <div className="bg-white border border-[#df8811] rounded-lg p-4">
            <h3 className="font-semibold text-[#083056] mb-2">Fee Structure</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/Fees/Grade-7-Fees" className="hover:text-[#df8811]">Grade 7 Fees</a></li>
              <li><a href="/Fees/Grade-8-Fees" className="hover:text-[#df8811]">Grade 8 Fees</a></li>
              <li><a href="/Fees/Grade-9-Fees" className="hover:text-[#df8811]">Grade 9 Fees</a></li>
            </ul>
          </div>
          
          <div className="bg-white border border-[#df8811] rounded-lg p-4">
            <h3 className="font-semibold text-[#083056] mb-2">Resources</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/Get-Access/CBA-Parent-Portal" className="hover:text-[#df8811]">Parent Portal</a></li>
              <li><a href="/Get-Access/KICD-Junior-School" className="hover:text-[#df8811]">CBC Resources</a></li>
              <li><a href="/Get-Access/NEMIS-Portal" className="hover:text-[#df8811]">NEMIS Portal</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Sitemap;