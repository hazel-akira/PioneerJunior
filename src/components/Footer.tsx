import React from 'react'
import {
  Home,
  Users,
  GraduationCap,
  UserCheck,
 
  Building2,
  UserPlus,
  DollarSign,
  Navigation,
  Key,
  Phone,
  Mail,
  MapPin

} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Footer: React.FC = () => (
  <footer className="bg-[#525357] text-white font-sans shadow-lg px-10">
    <div className="max-w-9xl mx-auto py-6">
      {/* Top Separator */}
      <div className="w-full border-t-2 border-white mt-0.5 mb-0.5 text-left" />

      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Quick Links */}
        <div>
          <h3 className=" text-[#b9782a] text-xl font-bold uppercase tracking-wide mb-2">
            Quick Links
            </h3>

          <ul className="space-y-2 text-base">
            {[
              { to: '/', icon: <Home size={14} />, label: 'Home' },
              { to: '/think', icon: <Users size={14} />, label: 'Think' },
              { to: '/pathways', icon: <GraduationCap size={14} />, label: 'Think Pathways' },
              { to: '/boarding', icon: <UserCheck size={14} />, label: 'Think Boarding' },
              { to: '/talent', icon: <Building2 size={14} />, label: ' Think Talent' }, 
              { to: '/join', icon: <UserPlus size={14} />, label: ' Join Us' }, 
              { to: '/location', icon: <Navigation size={14} />, label: 'Location' },
              { to: '/fees', icon: <DollarSign size={14} />, label: 'Fees' },            
              { to: '/access', icon: <Key size={14} />, label: 'Get Access' },
            ].map(item => (
              <li key={item.label}>
                <NavLink
                 to={item.to} 
                 className="flex items-center space-x-1 hover:text-white"
                 >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className=" text-[#b9782a] text-xl font-bold uppercase tracking-wide mb-2">
            Contact Us 
            </h3>
            <div className="space-y-2 text-base">
             {/* Phone */}
              <div className="flex items-center space-x-2 ">
               <Phone size={14} />
                <a href="tel:+254205038228" className=' hover:text-white'><span> 020 5038228</span></a>
              </div>

             {/* Email */}
               <div className="flex items-center space-x-2  ">
             <Mail size={16} />               
                  <a href=" mailto:admissions@pioneerjunioracademy.co.ke" className='hover:text-white '>  <span>  admissions@pioneerjunioracademy.co.ke</span></a>
              </div>

            {/* Address */}
              <div className="flex items-start space-x-2 "> <MapPin size={24} />
                <a href="https://maps.app.goo.gl/oUQbvDr7T3PNzCSC7 " className=' hover:text-white'>
               <p> P.O. BOX 217-10205 MARAGUA</p>
              <p>
                    off Kenol-Murang'a Road,
                    Samar Location, Ichagaki,
                    Murang'a County
                </p>
                </a>    
    </div>
  </div>
</div>

        {/* Our Schools Section */}
      <div>
        <h3 className="text-[#b9782a] text-xl font-bold uppercase tracking-wide mb-2">
          Our Schools
        </h3>
        <ul className="space-y-2 text-base">
          {[
            { to: 'https://www.pioneergroupofschools.co.ke/', label: 'Pioneer Group Of Schools' },
            { to: 'https://www.pioneergirlsschool.co.ke/', label: 'Pioneer Girls School' },
            { to: 'https://www.pioneergirlsjunioracademy.co.ke/', label: 'Pioneer Girls Junior Academy' },
            { to: 'https://www.stpaulthomasacademy.co.ke/', label: 'St Paul Thomas Academy' },
            { to: 'https://pioneerschools.ac.ke/', label: 'Pioneer School' },
            { to: 'https://piu.ac.ke/', label: 'Pioneer International University' },
          ].map(school => (
            <li key={school.label}>
              <a
                href={school.to}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {school.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

       {/* Our Socials Section */}
      <div>
        <h3 className="text-[#b9782a] text-xl font-bold uppercase tracking-wide mb-2">
          Our Socials
        </h3>
        <div className="flex flex-wrap gap-4">
          {[
            { src: '/images/tt.webp', alt: 'TikTok', href: 'https://www.tiktok.com/@stpaulthomasacademy' },
            { src: '/images/ig.webp', alt: 'Instagram', href: 'https://www.instagram.com/stpaulthomasacademy/' },
            { src: '/images/x.webp', alt: 'Twitter', href: 'https://twitter.com/PGSKenya' },
            { src: '/images/fb.webp', alt: 'Facebook', href: 'https://www.facebook.com/St-Paul-Thomas-Academy-107086338226802' },
            { src: '/images/li.webp', alt: 'LinkedIn', href: 'https://www.linkedin.com/company/st-paul-thomas-academy/' },
            { src: '/images/yt.webp', alt: 'YouTube', href: 'https://www.youtube.com/channel/UCfLkVtiaT2qq4P29qgJ1-2g' },
          ].map((icon, i) => (
            <a
              key={i}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full flex items-center justify-center transition-transform hover:scale-110"
              aria-label={icon.alt}
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="w-6 h-6 object-contain"
              />
            </a>
          ))}
        </div>
        <div className="mt-2 text-base space-y-1">
          <p>Regulated by the Ministry of Education Kenya</p>
          <p>(P/A/1977/09)</p>
          <p>Licensed by Murang'a County</p>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className=" mt-6 pt-2">
      {/* Center just the text background */}
      <div className="flex justify-center">
        <h2 className="px-4 py-2 bg-[#b9782a] fo rounded-full font-bold text-white text-2xl ">
          Vitae Abudantae | Life In Abundance
        </h2>
      </div>
      {/* Links row */}
      <div className="flex flex-wrap items-center justify-center mt-2 text-sm text-white space-x-2 font-bold">
        <a href="/privacy" className="hover:text-white">Privacy Policy</a>
        <span>|</span>
        <a href="/disclaimer" className="hover:text-white">Disclaimer</a>
        <span>|</span>
        <a href="/sitemap" className="hover:text-white">Sitemap</a>
        <span>|</span>
        <span>Copyright © 2025. All rights reserved.</span>
      </div>
    </div>
  </div>
  
  </footer>

)

export default Footer
