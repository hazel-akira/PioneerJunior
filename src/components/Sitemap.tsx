import React from 'react';

const sitemapLinks = [
  { href: '/', label: 'Home' },
  { href: '/think', label: 'Think' },
  { href: '/pathways', label: 'Think Pathways' },
  { href: '/detailed-pathways', label: 'Think Detailed Pathways' },
  { href: '/join', label: 'Join Us' },
  { href: '/grade7', label: 'Join Grade 7' },
  { href: '/grade8', label: 'Join Grade 8' },
  { href: '/grade9', label: 'Join Grade 9' },
  { href: '/fees', label: 'Fees' },
  { href: '/talent', label: 'Think Talent' },
  { href: '/boarding-life', label: 'Think Boarding' },
  { href: '/Performance', label: 'Performance' },
  { href: '/access', label: 'Get Access' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
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
      <div className="mt-12 pt-4 border-t  border-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#df8811]">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white border border-[#df8811] rounded-lg p-4">
            <h3 className="font-semibold text-[#083056] mb-2">Admissions</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/grade7" className="hover:text-[#df8811]">Grade 7 Entry</a></li>
              <li><a href="/grade8" className="hover:text-[#df8811]">Grade 8 Entry</a></li>
              <li><a href="/grade9" className="hover:text-[#df8811]">Grade 9 Entry</a></li>
            </ul>
          </div>
          
          <div className="bg-white border border-[#df8811] rounded-lg p-4">
            <h3 className="font-semibold text-[#083056] mb-2">Fee Structure</h3>
            <ul className="text-sm space-y-1">
              <li><a href="/grade7fee" className="hover:text-[#df8811]">Grade 7 Fees</a></li>
              <li><a href="/grade8fee" className="hover:text-[#df8811]">Grade 8 Fees</a></li>
              <li><a href="/grade9fee" className="hover:text-[#df8811]">Grade 9 Fees</a></li>
              <li><a className="hover:text-[#df8811]" href="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F">Enquire</a></li>
            </ul>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
);

export default Sitemap;