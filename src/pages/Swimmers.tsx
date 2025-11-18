// src/pages/SwimmersLife.tsx
import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

const SwimmersLife: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Swimmers Life | Pioneer Junior Academy</title>
      </Helmet>
      <div className="min-h-screen bg-[#161e2e]">

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
      style={{ backgroundImage: "url('/images/swimming.JPG')" }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
    
    </section>
      <main className="container max-w-4xl text-center mx-auto px-4  py-12">
        <p className="text-3xl  text-gray-100">
        Experience the joy of swimming at Pioneer Junior Academy, where we offer complimentary access to our state-of-the-art facilities and expert coaches to enhance your child's swimming abilities. </p>
      </main>
      {/* Calls to Action */}
    <section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
      <a
    href="/cycling"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
   Cycling Life
    </a>
    </section>

      </div>
    </>
  );
};

export default SwimmersLife;
