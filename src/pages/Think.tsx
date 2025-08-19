// src/pages/Think.tsx
import React, { useMemo } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';

const Think: React.FC = () => {
  const heroImage = useMemo(() => '/images/think.jpg', []);

  return (
    <div className="min-h-screen bg-[#161e2e] font-sans text-white">
      <Helmet>
        <title>Think | Pioneer Junior Academy</title>
      </Helmet>

      {/* HERO */}
      <section
        className="
          relative min-h-[70vh] md:min-h-[80vh]
          bg-cover bg-no-repeat bg-[position:55%_45%]
          flex items-center
        "
        style={{ backgroundImage: `url('${heroImage}')` }}
        aria-label="Who We Are"
      >
        {/* dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#161e2e]/60" />
        {/* content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-10 md:py-24">
           <div className="mb-6 max-w-3xl space-y-6 text-white/95 text-2xl md:text-3xl">
            <p>
            At Pioneer Junior Academy, your child will discover a nurturing environment where we have consistently upheld our commitment to trustworthiness, integrity, and academic excellence since our establishment. </p>
          </div>
        </div>

      </section>

      {/* GLASS CARDS (overlapping the hero) */}
      <section className="-mt-10 md:-mt-32 pb-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
          {/* Mission */}
          <div className="
              rounded-2xl bg-white/15 backdrop-blur-md
              p-6 md:p-8 ring-2 ring-[#161e2e]/60 shadow-xl shadow-black/30
            ">
            <h3 className="text-2xl font-bold  md:text-4xl text-[#df8811] mb-2">Our Mission</h3>
            <p className="text-white/95 text-xl md:text-2xl leading-relaxed">
              To cultivate a vibrant and inclusive learning community where students are
              empowered to embrace their full potential, fostering intellectual curiosity,
              ethical character, and a lifelong commitment to contributing meaningfully
              to the world.
            </p>
          </div>

          {/* Purpose */}
          <div className="
              rounded-2xl bg-white/15 backdrop-blur-md
              p-6 md:p-8 ring-2 ring-[#161e2e]/60 shadow-xl shadow-black/30
            ">
            <h3 className="text-xl font-bold  md:text-4xl text-[#df8811] mb-2">Our Purpose</h3>
            <p className="text-white/95 text-xl md:text-2xl leading-relaxed">
              To provide a holistic education that nurtures the development of
              well-rounded individuals, equipping them with the knowledge, skills,
              and values necessary to live a life of abundance rich in intellectual
              growth, personal fulfillment, and positive impact on society.
            </p>
          </div>
        </div>
      </section>

      {/* CTA – keep your message but styled to match */}
      <section className="pb-16">
        <div className="mx-auto max-w-7xl text-xl md:text-2xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold">We like thinking different.</h4>
              <p className="text-white/70">Explore how we empower curious minds.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/different"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]"
              >
                Think Different
              </Link>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Think;
