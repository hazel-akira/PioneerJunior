
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageSrc, link }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#093056] mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      {link && (
        <a
          href={link}
          className="inline-block text-sm font-medium text-[#f4a024] hover:underline"
        >
          Learn more →
        </a>
      )}
    </div>
  </motion.div>
);

export default InfoCard;
