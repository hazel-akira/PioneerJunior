import React from 'react';
import { Link } from 'react-router-dom';

const sitemapLinks = [
  { href: '/', label: 'Home' },
  { href: '/Who-We-Are', label: 'Who We Are' },
  { href: '/Who-We-Are/Our-History', label: 'Our History' },
  { href: '/Who-We-Are/Governance', label: 'Governance' },
  { href: '/Student-Life', label: 'Student Life' },
  { href: '/Performance', label: 'Performance' },
  { href: '/Academic-Life', label: 'Academic Life' },
  { href: '/Join-Us', label: 'Join Us' },
  { href: '/Join-Us/Pilot-Training', label: 'Pilot Training' },
  { href: '/Join-Us/Maritime-Training', label: 'Maritime Training' },
  { href: '/Join-Us/Testimonials', label: 'Testimonials' },
  { href: '/fees', label: 'Fees' },
  { href: '/fees/form-1', label: 'Form 1 Fees' },
  { href: '/fees/form-2', label: 'Form 2 Fees' },
  { href: '/fees/form-3', label: 'Form 3 Fees' },
  { href: '/fees/form-4', label: 'Form 4 Fees' },
  { href: '/fees/Terms-and-Conditions', label: 'Terms & Conditions' },
  { href: '/Book-A-Visit', label: 'Book A Visit' },
  { href: '/Book-A-Visit/Location', label: 'Visit Location' },
  { href: '/Get-Access', label: 'Get Access' },
  { href: '/Get-Access/Calender-Of-Events', label: 'Calendar of Events' },
  { href: '/Get-Access/E-learning', label: 'E-learning' },
  { href: '/Get-Access/Library', label: 'Library' },
  { href: '/Privacy-Policy', label: 'Privacy Policy' },
  { href: '/Disclaimer', label: 'Disclaimer' },
];

const Sitemap: React.FC = () => (
  <div className="bg-[#083056] text-white py-12">
    <div className="max-w-5xl mx-auto bg-[#f9fafb] text-[#083056] rounded-2xl shadow-lg p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#df8811]">
        Sitemap
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sitemapLinks.map(({ href, label }) => (
          <li
            key={href}
            className="border-l-4  bg-white p-4 rounded-lg hover:shadow-md transition-transform hover:-translate-y-1"
          >
            <Link to={href} className="font-semibold hover:text-[#df8811]">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Sitemap;
