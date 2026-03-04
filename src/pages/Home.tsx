// src/pages/Home.tsx
import  { useState } from 'react';
import Hero from '../components/HeroSlider';
import Modal from '../components/Modal';
//import ExamBanner from "../components/ExamBanner";

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className=" min-h-[100vh] relative">
      

      {/* Hero Section */}
      <Hero />
     {/* <ExamBanner />
       Enquiry Modal */}
      <Modal
        show={showModal}
       
      
        imageSrc="/images/modal.jpg"
        enquiryUrl="https://enquireto.pioneergroupofschools.co.ke/main/register?school=pioneerjunioracademy.co.ke/SignIn?ReturnUrl=%2F"
        onClose={() => setShowModal(false)}
      />

    </div>
  );
};

export default Home;
