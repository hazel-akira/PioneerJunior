// src/pages/NursingCare.tsx
import { Helmet } from 'react-helmet-async';

import InfoCard from '../components/InfoCard';

const cards = [
  {
    title: '24/7 Certified Nursing Care',
    description: 'We provide personalized nursing care tailored to meet the unique needs of each student .Our skilled nurses are committed to delivering high-quality healthcare with compassion and respect.', 
    imageSrc: '/images/stethoscope.jpg',
  },
  {
    title: 'Doctors that care',
    description: 'We have regular clinics days run every by highly qualified, local doctors. Our mission is to provide a safe and nurturing environment for all patients.  ', 
    imageSrc: '/images/doc.webp',
  },
  {
    title: 'Fully Stocked Medicine',
    description: 'We provide free of charge medication to our students for minor injuries and illness. Our clinic is fully stocked with the appropriate medications to meet your childs need', 
    imageSrc: '/images/med.webp',
  },
  {
    title: 'Emergency Response Team',
    description: 'Our on-campus Fire & St John’s Ambulance team - working with local police and fire stations - ensures a safe environment.', 
    imageSrc: '/images/Fire-engine.jpg',
  },
];

const NursingCare: React.FC = () => {
  return (  <>  <Helmet>
  <title> Nursing Care | St Paul Thomas Academy</title>
</Helmet>
  <div className="min-h-screen flex font-sans flex-col bg-[#062747]">


    {/* Hero */}
    <section
      className="relative h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/nurse.webp')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-60" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-sans font-bold text-white">
          Nursing Care
        </h1>
      </div>
    </section>

    {/* Info Cards */}
    <main className="flex-grow py-16 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
        {cards.map((c, i) => (
          <InfoCard 
            key={i}
            title={c.title}
            description={c.description}
            imageSrc={c.imageSrc}
          />
        ))}
      </div>
    </main>
{/* Calls to Action */}
<section className="flex flex-col mt-10 font-sans sm:flex-row gap-4 justify-center pb-16">
        <a
          href="/safety"
          rel="noopener"
          className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
      Safety And Security
        </a>
      
      </section>

  </div>
  </>
);
}


export default NursingCare;
