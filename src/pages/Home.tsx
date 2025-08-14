// src/pages/Home.tsx
import  { useState } from 'react';
import Hero from '../components/HeroSlider';
import Modal from '../components/Modal';


const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="bg-white min-h-[90vh] relative">
      

      {/* Hero Section */}
      <Hero />

      {/* Enquiry Modal */}
      <Modal
        show={showModal}
        logoSrc="/images/favicon.webp"
        title="Apply for grade 10"
        imageSrc="/images/Modal.webp"
        enquiryUrl="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
        onClose={() => setShowModal(false)}
      />

    </div>
  );
};

export default Home;
