// src/pages/HomeFromHome.tsx
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
    title: 'Warm Boarding Houses',
    text:
      'Comfortable dorms and cozy common rooms create a homely atmosphere where students feel safe and settled.',
    emoji: '🏡',
    badgeClass: 'from-blue-500 via-sky-400 to-cyan-400',
  },
  {
    title: 'Caring House Parents',
    text:
      'Dedicated house staff provide daily guidance, encouragement, and pastoral care for each learner.',
    emoji: '🧑\u200d\uD83C\uDFEB',
    badgeClass: 'from-indigo-500 via-violet-500 to-fuchsia-400',
  },
  {
    title: 'Safety & Supervision',
    text:
      '24/7 supervision, clear routines, and secure facilities ensure wellbeing and peace of mind.',
    emoji: '🛡️',
    badgeClass: 'from-slate-500 via-blue-500 to-indigo-500',
  },
  {
    title: 'Nutritious Meals',
    text:
      'Balanced, tasty menus support healthy growth and sustained energy for classes and activities.',
    emoji: '🍽️',
    badgeClass: 'from-emerald-500 via-green-500 to-teal-400',
  },
  {
    title: 'Study & Prep Time',
    text:
      'Structured evening prep with academic support builds disciplined habits and strong results.',
    emoji: '📚',
    badgeClass: 'from-cyan-400 via-sky-400 to-blue-500',
  },
  {
    title: 'Values & Community',
    text:
      'Daily routines promote respect, responsibility, and service—shaping character for life.',
    emoji: '🤝',
    badgeClass: 'from-orange-400 via-amber-400 to-yellow-400',
  },
  {
    title: 'Health & Wellness',
    text:
      'Access to medical support, counseling, fitness, and quiet spaces keeps minds and bodies well.',
    emoji: '🩺',
    badgeClass: 'from-rose-500 via-pink-500 to-orange-400',
  },
  {
    title: 'Weekend Enrichment',
    text:
      'Sport, clubs, trips, and creative activities make weekends vibrant and memorable.',
    emoji: '🎉',
    badgeClass: 'from-yellow-400 via-amber-400 to-orange-400',
  },
  {
    title: 'Life Skills',
    text:
      'Students learn independence through routines like laundry, tidiness, and shared responsibilities.',
    emoji: '🧺',
    badgeClass: 'from-fuchsia-500 via-purple-500 to-indigo-500',
  },
];

const HomeFromHome: React.FC = () => (
  <>
  <div className="min-h-screen flex font-sans flex-col bg-[#062747]">
    <Helmet>
      <title>Home From Home | St Paul Thomas Academy</title>
      <meta
        name="description"
        content="Discover our Home‑from‑Home boarding: caring house parents, safe routines, nutritious meals, structured study, and a vibrant community."
      />
    </Helmet>


    {/* Hero */}
    <section className="relative overflow-hidden bg-[#062747]">
      <div className="container mx-auto px-4 md:px-8 py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          Home‑from‑Home
        </h1>
        <p className="mt-4 max-w-2xl font-sans mx-auto text-white/80">
          A caring, structured boarding experience that feels like family and supports every learner’s growth.
        </p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
    </section>
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/home.webp')"}}>
      <div className="absolute inset-0 bg-black/40" />
    </section>

    {/* Features Grid with colorful emoji badges */}
    <main className="container font-sans mx-auto py-12 px-4 md:px-8">
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
              <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            </header>
            <p className="text-slate-600 leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
    </main>
    {/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/discipline"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
Discipline
    </a>
    </section> 
    
    </div>
  </>
);

export default HomeFromHome;
