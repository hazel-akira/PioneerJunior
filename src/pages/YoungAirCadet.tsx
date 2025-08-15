// src/pages/YoungAirCadet.tsx
import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { Rocket, Compass,  Users, Cpu, Trophy, Clock, MapPin } from 'lucide-react';

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

const Step: React.FC<{ n: number; title: string; text: string }> = ({ n, title, text }) => (
  <div className="relative rounded-2xl bg-[#0f1625] p-5 ring-1 ring-white/10">
    <div className="absolute -left-3 -top-3 h-8 w-8 rounded-full bg-white text-[#161e2e] grid place-items-center font-bold">{n}</div>
    <h4 className="text-white font-semibold mb-1">{title}</h4>
    <p className="text-white/80 text-sm leading-relaxed">{text}</p>
  </div>
);

const YoungAirCadet: React.FC = () => (
  <>
    <Helmet>
      <title>Young Air Cadet | Pioneer Junior Academy</title>
    </Helmet>

    <div className="min-h-screen bg-[#161e2e] text-white font-sans">
      {/* Top heading */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Aviation</h1>
          <div className="mt-4 h-4 w-full bg-white/90" />
        </div>
      </section>

      {/* Hero – on-point (no crop), framed like a slide */}
      <section className="relative flex items-center justify-center bg-[#161e2e] py-6 md:py-10">
        <div className="h-[56vh] md:h-[70vh] lg:h-[78vh] w-full max-w-6xl px-4">
          <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/20">
            <img
              src="/images/aviation.jpg"
              alt="Young Air Cadets"
              className="absolute inset-0 h-full w-full object-contain"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-lg md:text-3xl leading-relaxed text-white/90">
          Students engage in rigorous aviation related academic coursework.
<br />
          They learn about aerodynamics, navigation, weather patterns, regulations, and safety protocols.
<br />
          These foundational principles are essential for safe flying.  
          </p>
          
        </div>
      </section>

      {/* Quick stats */}
      <section className="pb-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
          <Stat label="Weekly Contact" value="3-4 hrs" />
          <Stat label="Min. Age" value="11+" />
          <Stat label="Focus Areas" value="6" />
          <Stat label="Field Activities" value="Yes" />
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-4">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Programme Highlights</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard title="Flight Basics" desc="Principles of flight, aircraft parts, weather, navigation, and radio basics." icon={<Rocket className="h-5 w-5" aria-hidden/>} />
            <FeatureCard title="Navigation & Mapping" desc="Map reading, bearings, compasses, and simple flight planning." icon={<Compass className="h-5 w-5" aria-hidden/>} />
            <FeatureCard title="Discipline & Leadership" desc="Cadet code, drill, teamwork, communication, and service." icon={<Users className="h-5 w-5" aria-hidden/>} />
            <FeatureCard title="STEM & Coding" desc="Aviation-aligned STEM, simulators, and coding projects that connect tech with flight." icon={<Cpu className="h-5 w-5" aria-hidden/>} />
            <FeatureCard title="Competitions & Badges" desc="Participate in local events, earn badges, and showcase skills." icon={<Trophy className="h-5 w-5" aria-hidden/>} />
          </div>
        </div>
      </section>

      {/* Weekly Structure */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Weekly Structure</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#0f1625] p-5 ring-1 ring-white/10">
              <div className="mb-2 flex items-center gap-2"><Clock className="h-5 w-5"/><span className="font-semibold">Classroom (Theory)</span></div>
              <p className="text-white/80 text-sm">Principles of flight, weather, rules, navigation, and airmanship.</p>
            </div>
            <div className="rounded-2xl bg-[#0f1625] p-5 ring-1 ring-white/10">
              <div className="mb-2 flex items-center gap-2"><Rocket className="h-5 w-5"/><span className="font-semibold">Simulation / Lab</span></div>
              <p className="text-white/80 text-sm">Sim time, coding/tech labs, and guided mission exercises.</p>
            </div>
            <div className="rounded-2xl bg-[#0f1625] p-5 ring-1 ring-white/10">
              <div className="mb-2 flex items-center gap-2"><MapPin className="h-5 w-5"/><span className="font-semibold">Field & Drill</span></div>
              <p className="text-white/80 text-sm">Drill practice, safety drills, site visits when scheduled.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">How to Join</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Step n={1} title="Register Interest" text="Tell us your learner’s details and preferred start date." />
            <Step n={2} title="Parent Consent" text="Submit consent and medical info; review safety guidelines." />
            <Step n={3} title="Orientation" text="Cadet briefing, uniform checklist, and timetable." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold">Ready to take off?</h4>
              <p className="mt-1 text-white/80 max-w-2xl">Chat with Admissions or explore our Aviation Pathway to see how Cadets connect with broader studies.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="mailto:admissions@pioneerjunioracademy.co.ke" className="inline-flex items-center justify-center rounded-lg border border-[#bdd6f0] px-5 py-3 font-semibold text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]">Talk to Admissions</Link>
              <Link to="/aviation" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0C356A]">Explore Aviation</Link>
              <Link to="/mandarin" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0C356A]">Mandarin Class</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default YoungAirCadet;