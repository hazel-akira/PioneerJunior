// src/pages/Discipline.tsx
import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

type Feature = {
  title: string;
  text: string;
  emoji: string;
  badgeClass: string;
};

const features: Feature[] = [
  {
    title: 'Respect',
    text:
      'We treat others with dignity, speak courteously, and value different perspectives to build a positive culture.',
    emoji: '🤝',
    badgeClass: 'from-emerald-500 via-green-500 to-teal-400',
  },
  {
    title: 'Responsibility',
    text:
      'Students own their choices, care for property, and follow routines that help the whole community thrive.',
    emoji: '🧭',
    badgeClass: 'from-cyan-400 via-sky-400 to-blue-500',
  },
  {
    title: 'Punctuality',
    text:
      'Arriving on time for classes, prep, and activities develops reliability and respect for learning time.',
    emoji: '⏰',
    badgeClass: 'from-indigo-500 via-violet-500 to-fuchsia-400',
  },
  {
    title: 'Uniform & Presentation',
    text:
      'Smart dress and personal care reflect pride, readiness, and a professional mindset for the future.',
    emoji: '👔',
    badgeClass: 'from-yellow-400 via-amber-400 to-orange-400',
  },
  {
    title: 'Digital Conduct',
    text:
      'We use technology safely and responsibly protecting privacy, avoiding distractions, and showing integrity online.',
    emoji: '📱',
    badgeClass: 'from-blue-500 via-sky-400 to-cyan-400',
  },
  {
    title: 'Restorative Practice',
    text:
      'When things go wrong, we repair relationships and learn from mistakes with guidance from staff.',
    emoji: '🪢',
    badgeClass: 'from-rose-500 via-pink-500 to-orange-400',
  },
  {
    title: 'Anti‑Bullying',
    text:
      'Zero tolerance for bullying. We listen, act quickly, and support all students to feel safe and heard.',
    emoji: '🛡️',
    badgeClass: 'from-slate-500 via-blue-500 to-indigo-500',
  },
  {
    title: 'Leadership & Prefects',
    text:
      'Student leaders model our values and mentor peers growing confidence, empathy, and service.',
    emoji: '🎖️',
    badgeClass: 'from-orange-400 via-amber-400 to-yellow-400',
  },
  {
    title: 'Attendance',
    text:
      'Strong attendance and engagement lead to progress every lesson counts toward long - term success.',
    emoji: '📅',
    badgeClass: 'from-fuchsia-500 via-purple-500 to-indigo-500',
  },
];

const Discipline: React.FC = () => (
  <>
    <div className="min-h-screen bg-[#083056]">
      <Helmet>
        <title>Discipline | St Paul Thomas Academy</title>
      </Helmet>

      {/* Page Title */}
      <section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">Discipline</h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/images/discipline.webp')"}}
      >
        <div className="absolute inset-0 bg-black/20" />
      </section>

      {/* Intro Copy */}
      <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 font-sans text-2xl space-y-6 text-gray-100">
          <p>
          At St. Paul Thomas Academy, we prioritize discipline as a fundamental aspect of our holistic education.
           Our scouts program plays a crucial role in nurturing this essential trait within our students. 
          </p>
          <p>
          Through the Scouts program, students embark on a journey of self-discovery, 
          leadership development, and community service all underpinned by a strong emphasis on discipline.
           From the moment they don their uniforms and recite the Scout oath,
            they commit themselves to a code of conduct that promotes responsibility, integrity, and respect for others.  
          </p>
        </main>
        <aside className="lg:col-span-1 text-white/90">
          <div className="rounded-2xl font-sans border border-white/20 bg-white/5 p-5 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-3">Quick Guidelines</h2>
            <ul className="space-y-2 text-base">
              <li>• Be punctual and prepared for learning.</li>
              <li>• Wear full, smart uniform daily.</li>
              <li>• Keep devices away during lessons unless instructed.</li>
              <li>• Speak respectfully; uphold kindness at all times.</li>
              <li>• Report concerns—especially bullying—immediately.</li>
            </ul>
          </div>
        </aside>
      </div>

      {/* Pillars Grid */}
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
      <section className="flex flex-col font-sans mt-10 sm:flex-row gap-4 justify-center pb-16">
        <a
          href="/chaplaincy"
          rel="noopener"
          className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
          Chaplaincy
        </a>
        <a
          href="/nurture"
          rel="noopener"
          className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
         >
          Explore Nurture
        </a>
      </section>
    </div>
  </>
);

export default Discipline;
