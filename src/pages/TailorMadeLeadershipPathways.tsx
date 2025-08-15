// src/pages/TailorMadeLeadershipPathways.tsx
import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';

type Pathway = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  /** Optional per-image focal point (CSS object-position). e.g., "50% 25%" */
  focal?: string;
};

const cards: Pathway[] = [
  {
    title: 'Think Detailed Pathways',
    description: 'Detailed CBC pathways for Grades 7, 8, and 9.',
    imageSrc: '/images/cbc.png',
    link: '/detailed-pathways',
    focal: '50% 50%',
  },
  {
    title: 'Think Aviation',
    description:
      'Students engage in rigorous aviation-related coursework: aerodynamics, navigation, weather patterns, regulations, and safety protocols.',
    imageSrc: '/images/aviation.jpg',
    link: '/aviation',
    focal: '50% 30%', // bias a bit higher to keep faces in view
  },
  {
    title: 'Think Mandarin',
    description:
      'Linguistic exploration thrives at PJA—our Mandarin program builds speaking, listening, reading, and writing for a global future.',
    imageSrc: '/images/mandarin.jpg',
    link: '/mandarin',
    focal: '50% 25%',
  },
  {
    title: 'Think Maritime',
    description:
      'A captivating voyage into the world of oceans, navigation, seamanship, and maritime culture.',
    imageSrc: '/images/marine.jpg',
    link: '/seaferers',
    focal: '50% 35%',
  }

];

// Local card with face-safe image defaults
const PathwayCard: React.FC<Pathway> = ({ title, description, imageSrc, link, focal }) => {
  return (
    <article className="group overflow-hidden rounded-2xl bg-[#0f1625] ring-1 ring-white/10 transition hover:shadow-xl hover:shadow-black/30">
      {/* Image wrapper uses aspect ratio to avoid unpredictable cropping heights */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          className="
            h-full w-full object-cover
            md:object-center
            transition-transform duration-500 group-hover:scale-[1.03]
          "
          style={{
            objectPosition: focal ?? '50% 28%', // default bias toward top to keep faces visible
          }}
        />
        {/* subtle gradient for text legibility if you ever put text over image */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      <div className="space-y-3 p-6 text-left">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-white/80">{description}</p>
        <div className="pt-2">
          <Link
            to={link}
            className="inline-flex items-center gap-2 rounded-lg border border-[#bdd6f0]/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]"
          >
            Explore
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

const TailorMadeLeadershipPathways: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-[#161e2e] text-white">
      <Helmet>
        <title>PATHWAYS | Pioneer Junior Academy</title>
      </Helmet>

      {/* Top bar / breadcrumb area */}
      <section className="py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-3 text-4xl font-bold">Pathways</h1>
          <div className="h-4 w-full bg-white/90" />
        </div>
      </section>

      {/* Hero: responsive height + face-safe focal positions */}
      <section
        className="
          relative flex items-center justify-center
          h-[56vh] md:h-[70vh] lg:h-[78vh]
          bg-cover bg-no-repeat
          bg-[position:50%_28%] md:bg-[position:50%_35%] lg:bg-center
        "
        style={{ backgroundImage: "url('/images/path.png')" }}
        aria-label="Pathways hero"
      >
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#161e2e]/40" />
      </section>

      {/* Intro */}
      <section className="py-14">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-2xl font-semibold">
            Along with the CBC experience, we also expose our students to the following studies
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <PathwayCard key={c.title} {...c} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex justify-center px-4 pb-16">
        <a
          href="/cadet"
          rel="noopener"
          className="rounded-lg border border-[#bdd6f0] px-8 py-3 text-xl font-bold uppercase text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]"
        >
          Young Air Cadets
        </a>
      </section>
    </div>
  );
};

export default TailorMadeLeadershipPathways;
