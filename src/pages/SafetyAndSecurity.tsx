// src/pages/SafetyAndSecurity.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

type Feature = {
  title: string;
  text: string;
  emoji: string;
  badgeClass: string;
};

const features: Feature[] = [
  {
    title: 'Secure Campus Access',
    text:
      'Controlled entry points, perimeter checks, and visitor verification keep our grounds safe at all times.',
    emoji: '🧾',
    badgeClass: 'from-blue-500 via-sky-400 to-cyan-400',
  },
  {
    title: '24/7 Supervision',
    text:
      'Duty staff, house parents, and security patrols maintain round‑the‑clock oversight for learners.',
    emoji: '🌙',
    badgeClass: 'from-indigo-500 via-violet-500 to-fuchsia-400',
  },
  {
    title: 'Trained Personnel',
    text:
      'All security and pastoral staff are trained in safeguarding, first aid, and emergency response.',
    emoji: '🎖️',
    badgeClass: 'from-emerald-500 via-green-500 to-teal-400',
  },
  {
    title: 'Emergency Preparedness',
    text:
      'Regular drills for fire, lockdown, and evacuation ensure calm, efficient responses in real events.',
    emoji: '🚨',
    badgeClass: 'from-rose-500 via-pink-500 to-orange-400',
  },
  {
    title: 'Health & Medical',
    text:
      'On‑site medical support, incident logs, and clear referral pathways safeguard student wellbeing.',
    emoji: '🩺',
    badgeClass: 'from-yellow-400 via-amber-400 to-orange-400',
  },
  {
    title: 'Safeguarding & Child Protection',
    text:
      'Clear reporting lines and confidentiality protect learners and guide professional action.',
    emoji: '🛡️',
    badgeClass: 'from-slate-500 via-blue-500 to-indigo-500',
  },
  {
    title: 'Digital Safety',
    text:
      'Acceptable‑use policies, filtered networks, and e‑safety education promote responsible tech use.',
    emoji: '💻',
    badgeClass: 'from-cyan-400 via-sky-400 to-blue-500',
  },
  {
    title: 'Safe Facilities',
    text:
      'CCTV coverage, lighting, signage, and maintained equipment support a secure learning environment.',
    emoji: '🏫',
    badgeClass: 'from-fuchsia-500 via-purple-500 to-indigo-500',
  },
  {
    title: 'Transport Safety',
    text:
      'Verified drivers, safety briefings, and seat‑belt compliance keep journeys safe on school routes.',
    emoji: '🚌',
    badgeClass: 'from-orange-400 via-amber-400 to-yellow-400',
  },
];

const SafetyAndSecurity: React.FC = () => (
  <>
    <div className="min-h-screen font-sans bg-[#083056]">
      <Helmet>
        <title>Safety & Security | St Paul Thomas Academy</title>
        <meta
          name="description"
          content="How we keep learners safe: secure access, trained staff, emergency preparedness, medical support, e‑safety, and more."
        />
      </Helmet>

      {/* Page Title */}
      <section className="py-12 h-[20vh] font-sans">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">Safety & Security</h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/tresspass.webp')", fontFamily: 'Times New Roman, serif' }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </section>

      {/* Intro Copy */}
      <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 font-sans text-2xl space-y-6 text-gray-100">
          <p>
            Student safety is our highest priority. We combine strong procedures with caring relationships so
            learners can focus on growth. From secure access and trained staff to emergency drills and digital
            safety education, our systems are proactive, transparent, and reviewed regularly.
          </p>
          <p>
            Families are our partners: we communicate clearly about expectations, incidents, and improvements.
            Together we build a culture where every learner feels protected, respected, and ready to thrive.
          </p>
        </main>
        <aside className="lg:col-span-1 font-sans text-white/90">
          <div className="rounded-2xl border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-3">Quick Guidelines</h2>
            <ul className="space-y-2 text-base">
            
              <li>• Sign in/out for visits, trips, or medical checks.</li>
              <li>• Keep emergency contacts updated.</li>
              <li>• Report concerns immediately speak to any adult.</li>
              <li>• Know your assembly points and drill routines.</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Safety Pillars Grid */}
      <section className="container font-sans max-w-6xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map(({ title, text, emoji, badgeClass }) => (
            <article
              key={title}
              className="group rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 p-6 transition hover:shadow-xl hover:-translate-y-0.5"
            >
              <header className="flex items-center gap-3 mb-3">
                <div
                  className={`grid place-items-center h-12 w-12 rounded-2xl bg-gradient-to-br ${badgeClass} text-white shadow-md ring-1 ring-white/20`}
                  aria-hidden="true"
                >
                  <span className="text-3xl leading-none" role="img" aria-label={title}>
                    {emoji}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              </header>
              <p className="text-slate-600 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Calls to Action */}
      <section className="flex flex-col mt-10 sm:flex-row font-sans gap-4 justify-center pb-16">
        <a
          href="/studylife"
          rel="noopener"
          className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
          Study Life
        </a>
        
      </section>
    </div>
  </>
);

export default SafetyAndSecurity;
