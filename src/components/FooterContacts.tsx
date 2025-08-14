
import { HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

const FooterContact: React.FC = () => (
  <div>
    <h4 className="text-[#f4a024] uppercase font-bold mb-4 tracking-wide">
      Contact Us
    </h4>
    <ul className="space-y-3 text-sm">
      <li className="flex items-center">
        <HiPhone className="text-[#f4a024] mr-2 h-5 w-5 flex-shrink-0" />
        <a href="tel:+254205038228" className="hover:text-[#f4a024] transition-colors">
          020 503 8065
        </a>
      </li>
      <li className="flex items-center">
        <HiMail className="text-[#f4a024] mr-2 h-5 w-5 flex-shrink-0" />
        <a href="mailto:admissions@pioneerschools.ac.ke" className="hover:text-[#f4a024] transition-colors">
          admissions@pioneerschools.ac.ke
        </a>
      </li>
      <li className="flex items-start">
        <HiLocationMarker className="text-[#f4a024] mr-2 h-5 w-5 flex-shrink-0 mt-1" />
        <div className="leading-relaxed text-sm">
          P.O. BOX 625-10205 MARAGUA<br/>
          Along Kenol–Sagana Road, Samar Location,<br/>
          Ichagaki Ward, Maragua, Murang'a County
        </div>
      </li>
    </ul>
  </div>
);

export default FooterContact;
