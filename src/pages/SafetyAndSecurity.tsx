// src/pages/SafetyAndSecurity.tsx
import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

import InfoCard from '../components/InfoCard';

const cards = [
  {
    title: 'Security and Access',
    description: 'We prioritize the safety and security of our students, staff, and visitors through a comprehensive and proactive approach. i.e CCTV .The security measures are designed to create a secure learning environment where everyone can focus on education without concerns about safety.', 
    imageSrc: '/images/CCTV.jpg',
  },
  {
    title: 'First Aid and Safety Certified',
    description: 'Our school is Occupational health and safety certified, while our staff is trained to meet all kinds of first aid situations that may occur at the school   ', 
    imageSrc: '/images/nurses_office.jpg',
  },
  {
    title: 'Emergency Prepared',
    description: "Our dedication to safety covers everyone :- students, staff, and visitors - through a comprehensive and proactive fire and safety plan.This strategy includes the use of fire extinguishers, surveillance and clearly marked accessible routes for fire and medical emergencies. ", 
    imageSrc: '/images/Firefighters.jpg',
  },
];

const SafetyAndSecurity: React.FC = () => (
  <>
    <div className="min-h-screen  bg-[#083056]">
      <Helmet>
        <title> Safety And Security | Pioneer Junior Academy</title>
        <meta
          name="description"
          content="How we keep learners safe: secure access, trained staff, emergency preparedness, medical support, e‑safety, and more."
        />
      </Helmet>

      {/* Hero */}
    <section
      className="relative h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/CCTV.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-60" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl  font-bold text-white">
        Safety And Security
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
      <section className="flex flex-col mt-10 sm:flex-row  gap-4 justify-center pb-16">
        <a
          href="/talent"
          rel="noopener"
          className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
          Think Talent
        </a>
        
      </section>
    </div>
  </>
);

export default SafetyAndSecurity;
