
import { FaTiktok, FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';

const socialIcons = [
  { Icon: FaTiktok, href: '#' },
  { Icon: FaInstagram, href: '#' },
  { Icon: FaTwitter, href: '#' },
  { Icon: FaFacebook, href: '#' },
  { Icon: FaLinkedin, href: '#' },
  { Icon: FaYoutube, href: '#' },
];

const FooterSocials: React.FC = () => (
  <div>
    <h4 className="text-[#f4a024] uppercase font-bold mb-4 tracking-wide">Our Socials</h4>
    <div className="flex space-x-4 mb-4 text-2xl">
      {socialIcons.map(({ Icon, href }, idx) => (
        <a key={idx} href={href} className="hover:text-[#f4a024]">
          <Icon />
        </a>
      ))}
    </div>
    <p className="text-xs leading-snug">
      Regulated by the Ministry of Education Kenya (P/A/1977/09)<br />
      Licensed by Murang'a County
    </p>
  </div>
);

export default FooterSocials;
