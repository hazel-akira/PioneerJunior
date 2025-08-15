// src/pages/ThinkMandarin.tsx
import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import {
  Languages,
  BookOpen,
  Keyboard,
  Mic,
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
const ThinkMandarin: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#161e2e] font-sans text-white">
      <Helmet>
        <title>Think Mandarin | Pioneer Junior Academy</title>
      </Helmet>

      {/* Top heading */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Think Mandarin</h1>
          <div className="mt-4 h-4 w-full bg-white/90" />
        </div>
      </section>

      {/* Hero – on-point (no crop), framed like a slide */}
      <section className="relative flex items-center justify-center bg-[#161e2e] py-6 md:py-10">
        <div className="h-[56vh] md:h-[70vh] lg:h-[78vh] w-full max-w-6xl px-4">
          <div className="relative h-full w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/20">
            <img
              src="/images/mandarin.jpg"
              alt="Mandarin language programme"
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
            Master a global language while building cultural intelligence, confidence, and 21st‑century skills.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Pill>Communication</Pill>
            <Pill>Culture</Pill>
            <Pill>Creativity</Pill>
            <Pill>Global Citizenship</Pill>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="pb-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 md:grid-cols-4">
          <Stat label="Weekly Contact" value="3-4 hrs" />
          <Stat label="Certification Target" value="HSK 1-2" />
          <Stat label="Culture Activities" value="Yes" />
          <Stat label="Entry" value="Open" />
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-6">
        <SectionTitle
          title="Programme Highlights"
          subtitle="Balanced emphasis on speaking, listening, reading, writing and cultural immersion."
        />
        <div className="mx-auto mt-6 max-w-6xl px-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Everyday Communication" desc="Greetings, self‑intro, school life, family, hobbies; build confidence in real contexts." icon={<Mic className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Reading & Characters" desc="Pinyin, tones, stroke order, radicals, and high‑frequency characters." icon={<BookOpen className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Digital Literacy" desc="Use IMEs/keyboard input, dictionaries, and learning apps for spaced practice." icon={<Keyboard className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Culture & Exchange" desc="Festivals, food, traditions, and basic Chinese geography and customs." icon={<Globe className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Projects & Performances" desc="Dialogues, role‑plays, posters, calligraphy, and cultural showcases." icon={<Users className="h-5 w-5" aria-hidden/>} />
          <FeatureCard title="Competitions & HSK" desc="Prep towards HSK 1–2; school/club contests and language days." icon={<Trophy className="h-5 w-5" aria-hidden/>} />
        </div>
      </section>

      {/* Grade Structure */}
      <section className="py-12">
        <SectionTitle
          title="Grade‑by‑Grade Structure"
          subtitle="Clear progression in language skills, culture, and project work from Grade 7 to 9."
        />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 px-4">
          <div className="rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-4">Grade 7</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ListCard heading="Language Focus" items={[
                'Pinyin, tones, pronunciation basics',
                'Greetings, numbers, dates, classroom language',
                'Radicals & ~150 characters',
              ]} icon={<Languages className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Culture & Projects" items={[
                'Chinese festivals & family culture',
                'Calligraphy basics & posters',
                'Dialogues/role‑plays',
              ]} icon={<Users className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Assessment" items={[
                'Continuous tasks & mini‑presentations',
                'Listening/speaking checks',
                'Portfolio (vocab + characters)',
              ]} icon={<GraduationCap className="h-5 w-5" aria-hidden/>} />
            </div>
          </div>

          <div className="rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-4">Grade 8</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ListCard heading="Language Focus" items={[
                'Grammar patterns for daily life',
                'Short readings; ~300 characters',
                'Conversations: school, shopping, travel',
              ]} icon={<Languages className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Culture & Projects" items={[
                'Cuisine, arts, sports in China',
                'Video dialogues & skits',
                'Cultural day participation',
              ]} icon={<Users className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Assessment" items={[
                'Listening/reading quizzes',
                'Oral interviews',
                'Project showcases',
              ]} icon={<GraduationCap className="h-5 w-5" aria-hidden/>} />
            </div>
          </div>

          <div className="rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 shadow-lg shadow-black/20">
            <h3 className="text-2xl font-bold text-white mb-4">Grade 9</h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <ListCard heading="Language Focus" items={[
                'Extended conversations; short paragraphs',
                'Reading short texts/news; ~500 characters',
                'HSK 1–2 readiness',
              ]} icon={<Languages className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Culture & Projects" items={[
                'Comparative culture study',
                'Community/share projects',
                'Media & presentations',
              ]} icon={<Users className="h-5 w-5" aria-hidden/>} />
              <ListCard heading="Assessment" items={[
                'Integrated term assessments',
                'Oral presentations & listening tasks',
                'Portfolio & reflections',
              ]} icon={<GraduationCap className="h-5 w-5" aria-hidden/>} />
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Flow */}
      <section className="py-12">
        <SectionTitle title="Weekly Flow" subtitle="A steady rhythm for skill growth and confidence." />
        <div className="mx-auto mt-6 max-w-6xl px-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <ListCard heading="Lesson Blocks" items={['Speaking & Listening', 'Reading & Characters', 'Writing & Projects']} icon={<Calendar className="h-5 w-5" aria-hidden/>} />
          <ListCard heading="Practice & Tech" items={['Apps/flashcards', 'Keyboard input (IME)', 'Self‑study tasks']} icon={<Keyboard className="h-5 w-5" aria-hidden/>} />
          <ListCard heading="Culture" items={['Festivals & stories', 'Songs & media', 'Cuisine & calligraphy']} icon={<Globe className="h-5 w-5" aria-hidden/>} />
        </div>
      </section>

      {/* CTA: KICD + Admissions */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold">See Official CBC Curriculum Designs (KICD)</h4>
              <p className="mt-1 text-white/80 max-w-2xl">Explore the language curriculum design for Junior Secondary from the Kenya Institute of Curriculum Development.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {/* TODO: Replace with the exact KICD URL for Foreign Languages/Mandarin */}
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
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0C356A]"
              >
                Talk to Admissions
              </Link>
              <Link to="/seafarers" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0C356A]">MARITIME</Link>
           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThinkMandarin;