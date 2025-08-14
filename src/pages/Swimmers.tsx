// src/pages/SwimmersLife.tsx
import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

const SwimmersLife: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Swimmers Life | St Paul Thomas Academy</title>
      </Helmet>
      <div className="min-h-screen font-sans bg-[#083056]">

      <section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl text-left text-white mb-4">
          Swimmers Life
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>
{/* Hero Section */}
<section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/swimmers.webp')",fontFamily: 'Times New Roman, serif' }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
    
    </section>
      <main className="container max-w-4xl text-center mx-auto px-4  py-12">
        <p className="text-lg font-sans text-gray-100">
          As part of our commitment to holistic development, we offer swimming lessons that not only teach valuable life skills but also promote physical fitness, water safety, and confidence in the water.
        </p>
      </main>
      {/* Calls to Action */}
    <section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
      <a
    href="/skating"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
   Skating Life
    </a>
    </section>

      </div>
    </>
  );
};

export default SwimmersLife;
