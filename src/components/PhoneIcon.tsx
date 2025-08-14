
import { FaPhoneAlt } from 'react-icons/fa'; // or your preferred icon library

const PhoneIcon: React.FC = () => (
  <a
    href="tel:+254205038065"
    className="fixed bottom-6 left-6 w-14 h-14 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-blue-600"
  >
    <FaPhoneAlt className="w-6 h-6" />
  </a>
);

export default PhoneIcon;
