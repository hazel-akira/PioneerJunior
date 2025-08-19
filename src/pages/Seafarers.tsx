// src/pages/ThinkMaritime.tsx
import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import {
  Ship,
  Compass,
  LifeBuoy as Lifebuoy,
  Waves,
  Globe,
  Trophy,
  GraduationCap,
  Calendar,
  Users,
  ExternalLink,
} from 'lucide-react';

// Small UI helpers -----------------------------------------------------------
const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mx-auto max-w-6xl px-4 text-left">
    <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    {subtitle ? (
      <p className="mt-2 text-white/80 text-base md:text-lg max-w-3xl">{subtitle}</p>
    ) : null}
    <div className="mt-4 h-1 w-full bg-white/90" />
  </div>
);

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-sm text-white ring-1 ring-white/15">
    {children}
  </span>
);

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl bg-[#0f1625] p-4 ring-1 ring-white/10 text-center">
    <div className="text-2xl font-bold text-white">{value}</div>
    <div className="text-sm text-white/70">{label}</div>
  </div>
);

const FeatureCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }>
  = ({ title, desc, icon }) => (
    <div className="rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 shadow-lg shadow-black/20">
      <div className="mb-2 flex items-center gap-2 text-white">{icon}<h3 className="text-lg font-semibold">{title}</h3></div>
      <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
    </div>
);

const ListCard: React.FC<{ heading: string; items: string[]; icon?: React.ReactNode }>
  = ({ heading, items, icon }) => (
  <div className="rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 shadow-lg shadow-black/20">
    <div className="mb-3 flex items-center gap-2 text-white">
      {icon}
      <h3 className="text-lg font-semibold">{heading}</h3>
    </div>
    <ul className="list-disc pl-5 space-y-1 text-white/85">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  </div>
);

// Page ----------------------------------------------------------------------
const ThinkMaritime: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#161e2e]  text-white">
      <Helmet>
        <title>Think Maritime | Pioneer Junior Academy</title>
      </Helmet>

      {/* Top heading */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Think Maritime</h1>
          <div className="mt-4 h-4 w-full bg-white/90" />
        </div>
      </section>

      {/* Hero – on-point (no crop), framed like a slide */}
      <section className="relative flex items-center justify-center bg-[#161e2e] py-6 md:py-10">
        <div className="h-[56vh] md:h-[70vh] lg:h-[78vh] w-full max-w-6xl px-4">
          <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/20">
            <img
              src="/images/marine.jpg"
              alt="Maritime studies at PJA"
              className="absolute inset-0 h-full w-full object-contain"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xl md:text-2xl font-semibold">
            Explore seamanship, navigation, safety and ocean literacy - while discovering future careers linked to Kenya’s blue economy.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Pill>Seamanship</Pill>
            <Pill>Navigation</Pill>
            <Pill>Ocean Literacy</Pill>
            <Pill>Water Safety</Pill>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="pb-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
          <Stat label="Weekly Contact" value="3-4 hrs" />
          <Stat label="Practical Sessions" value="Yes" />
          <Stat label="Field Visits" value="When Scheduled" />
          <Stat label="Entry" value="Open" />
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-6">
        <SectionTitle
          title="Programme Highlights"
          subtitle="Balanced focus on skills, safety, sustainability, and exploration."
        />
        <div className="mx-auto mt-6 max-w-6xl px-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Seamanship Basics" desc="Parts of a boat, knots, lines, onboard roles, and teamwork." icon={<Ship className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Navigation & Chartwork" desc="Compass bearings, simple charts, buoys & beacons, rules of the waterway." icon={<Compass className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Water Safety Culture" desc="Lifejackets, situational awareness, boarding etiquette, and emergency basics." icon={<Lifebuoy className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Ocean Literacy & Stewardship" desc="Understand how the ocean affects us-and how our actions affect the ocean." icon={<Globe className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Blue-Economy Careers" desc="Awareness of local maritime roles-from port operations to marine science." icon={<Waves className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Clubs & Events" desc="Regattas, beach clean-ups, model-boat builds, and school showcases." icon={<Trophy className="h-5 w-5" aria-hidden/>} />
        </div>
      </section>

      {/* Grade Structure */}
      <section className="py-12">
        <SectionTitle
          title="Grade-by-Grade Structure"
          subtitle="Progressive skill-building from Grade 7 to 9."
        />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 px-4">
          <div className="rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-4">Grade 7</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ListCard heading="Skills" items={[
                'Boat parts, roles & teamwork',
                'Basic knots and safety checks',
                'Ocean literacy: local coastlines',
              ]} icon={<Ship className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Projects" items={[
                'Knot‑tying challenge',
                'Model craft build',
                'Beach/river clean‑up',
              ]} icon={<Users className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Assessment" items={[
                'Continuous tasks & reflections',
                'Practical demonstrations',
                'Short quizzes',
              ]} icon={<GraduationCap className="h-5 w-5" aria-hidden/>} />
            </div>
          </div>

          <div className="rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-4">Grade 8</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ListCard heading="Skills" items={[
                'Compass basics & simple bearings',
                'Reading simple charts & symbols',
                'Safety drills & signals',
              ]} icon={<Compass className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Projects" items={[
                'Plan a short shoreline route',
                'Poster on safety & buoyage',
                'Data log from a field visit',
              ]} icon={<Users className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Assessment" items={[
                'Practical tasks',
                'Oral/visual presentations',
                'Portfolio checks',
              ]} icon={<GraduationCap className="h-5 w-5" aria-hidden/>} />
            </div>
          </div>

          <div className="rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-4">Grade 9</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ListCard heading="Skills" items={[
                'Intro to tides & weather impacts',
                'Chartwork practice & waypoint planning',
                'Emergency scenarios & roles',
              ]} icon={<Waves className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Projects" items={[
                'Capstone: route plan or ocean‑health project',
                'Community awareness activity',
                'Reflection journal',
              ]} icon={<Users className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Assessment" items={[
                'Integrated term assessments',
                'Practical demonstration',
                'Portfolio & reflection',
              ]} icon={<GraduationCap className="h-5 w-5" aria-hidden/>} />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Flow */}
      <section className="py-12">
        <SectionTitle title="Weekly Flow" subtitle="A steady rhythm for skills, safety, and stewardship." />
        <div className="mx-auto mt-6 max-w-6xl px-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ListCard heading="Lesson Blocks" items={["Seamanship & Safety", "Navigation & Chartwork", "Projects & Stewardship"]} icon={<Calendar className="h-5 w-5" aria-hidden/>} />
          <ListCard heading="Practice & Tech" items={["Knot board / small models", "Compass & basic charts", "Simulators / apps (where available)"]} icon={<Compass className="h-5 w-5" aria-hidden/>} />
          <ListCard heading="Field & Service" items={["Shoreline observations", "Clean-ups / awareness", "Guest talks / site visits"]} icon={<Globe className="h-5 w-5" aria-hidden/>} />
        </div>
      </section>

      {/* CTA: KICD + Admissions */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold">See Official CBC Curriculum Designs (KICD)</h4>
              <p className="mt-1 text-white/80 max-w-2xl">Explore curriculum designs directly from the Kenya Institute of Curriculum Development.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {/* TODO: Replace with the specific KICD maritime/blue economy links if published */}
              <a
                href="https://kicd.ac.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#bdd6f0] px-5 py-3 font-semibold text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]"
              >
                <ExternalLink className="h-5 w-5" aria-hidden />
                Visit KICD
              </a>
              <Link
                to="mailto:admissions@pioneerjunioracademy.co.ke"
                target='_blank'
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0C356A]"
              >
                Talk to Admissions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThinkMaritime;