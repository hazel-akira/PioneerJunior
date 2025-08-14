// src/pages/Nurture.tsx
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
    title: 'Holistic Development',
    text:
      'We focus on nurturing the whole child - academically, emotionally, socially, and physically - ensuring comprehensive growth and well-being.',
    emoji: '🧩',
    badgeClass: 'from-blue-500 via-sky-400 to-cyan-400',
  },
  {
    title: 'Academic Excellence',
    text:
      'Our dedicated faculty delivers high-quality, personalized teaching that builds curiosity, critical thinking, and a love for learning.',
    emoji: '🎓',
    badgeClass: 'from-indigo-500 via-violet-500 to-fuchsia-400',
  },
  {
    title: 'Emotional & Social Support',
    text:
      'We offer counseling, mentoring, and peer support to help students build strong relationships, develop emotional intelligence, and feel valued.',
    emoji: '💗',
    badgeClass: 'from-rose-500 via-pink-500 to-orange-400',
  },
  {
    title: 'Extracurricular Opportunities',
    text:
      'Our diverse extracurricular activities allow students to explore their passions, develop new skills, and build confidence outside the classroom',
    emoji: '✨',
    badgeClass: 'from-yellow-400 via-amber-400 to-orange-400',
  },
  {
    title: 'Strong Community',
    text:
      'We foster an inclusive and supportive culture where students, parents, and staff collaborate to create a positive and enriching environment',
    emoji: '🤝',
    badgeClass: 'from-emerald-500 via-green-500 to-teal-400',
  },
  {
    title: 'Life Skills',
    text:
      'We equip students with essential life skills such as leadership, communication, and resilience, preparing them for success in all areas of life.',
    emoji: '🎯',
    badgeClass: 'from-cyan-400 via-sky-400 to-blue-500',
  },
  {
    title: 'Safe & Positive Environment',
    text:
      'We prioritize physical and emotional safety, promoting respect, kindness, and inclusivity so every learner can thrive.',
    emoji: '🛡️',
    badgeClass: 'from-slate-500 via-blue-500 to-indigo-500',
  },
  {
    title: 'Partnership with Parents',
    text:
      'We actively involve parents in their childrens education, fostering collaboration and communication to provide the best support for each student.',
    emoji: '🏠',
    badgeClass: 'from-orange-400 via-amber-400 to-yellow-400',
  },
  {
    title: 'Lifelong Impact',
    text:
      'Our nurturing environment ensures that students leave St. Thomas with the skills, values, and mindset needed to make a positive difference in the world.',
    emoji: '♾️',
    badgeClass: 'from-fuchsia-500 via-purple-500 to-indigo-500',
  },
];

const Nurture: React.FC = () => (
  <>
  <div className="min-h-screen font-sans bg-[#062747] ">
    <Helmet>
      <title>Nurture | St Paul Thomas Academy</title>
      <meta
        name="description"
        content="Explore how St Paul Thomas Academy nurtures the whole child through academics, wellbeing, life skills, and a supportive community."
      />
    </Helmet>

    {/* Hero */}
    <section className="relative overflow-hidden bg-[#062747]">
      <div className="container mx-auto px-4 md:px-8 py-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans font-semibold tracking-tight text-white">
          Nurturing @  St. Paul Thomas Academy
        </h1>
       
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
    </section>
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/nurture1.webp')"}}>
      <div className="absolute inset-0 bg-black/40" />
    </section>

    {/* Features Grid with colorful icons */}
    <main className="container mx-auto  py-12 px-4  md:px-8">
    <h1 className="text-2xl sm:text-3xl  md:text-4xl mb-6 font-sans text-center font-semibold tracking-tight text-white">
    Nurturing Environment at St. Paul Thomas Academy
        </h1>
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
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/nurture1.webp')",fontFamily: 'Times New Roman, serif' }}>
      <div className="absolute inset-0 bg-black/40" />
    </section>
    {/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/farm-2-fork"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
Farm 2 Fork 
    </a>
    </section> 
    </div>
  </>
);

export default Nurture;
