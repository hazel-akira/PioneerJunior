// src/pages/ThinkDetailedPathways.tsx
import React, { useMemo } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router-dom';
import { BookOpen, Rocket, Languages, Ship, Download, ArrowRight, CheckCircle, Trophy, ExternalLink } from 'lucide-react';

// -----------------------------
// Data
// -----------------------------

type Pathway = {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  focal?: string; // CSS object-position
  icon?: React.ReactNode;
};

type GradeDetail = {
  id: '7' | '8' | '9';
  title: string;
  coreAreas: string[];
  pathwayElectives: string[];
  projectsClubs: string[];
  assessments: string[];
};

const pathways: Pathway[] = [
  {
    title: 'Think Aviation',
    description:
      'Aerodynamics, navigation, weather patterns, regulations, flight safety, and simulator experiences.',
    imageSrc: '/images/aviation.jpg',
    link: '/cadet',
    focal: '50% 30%',
    icon: <Rocket className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Think Mandarin',
    description:
      'Speaking, listening, reading, and writing in Mandarin for global citizenship and cultural exchange.',
    imageSrc: '/images/mandarin.jpg',
    link: '/mandarin',
    focal: '50% 25%',
    icon: <Languages className="h-5 w-5" aria-hidden />,
  },
  {
    title: 'Think Maritime',
    description:
      'Seamanship, navigation, maritime culture, ocean literacy, and practical water safety.',
    imageSrc: '/images/marine.jpg',
    link: '/seafarers',
    focal: '50% 35%',
    icon: <Ship className="h-5 w-5" aria-hidden />,
  },
];

const grades: GradeDetail[] = [
  {
    id: '7',
    title: 'Grade 7',
    coreAreas: [
      'English, Kiswahili & Foreign Language',
      'Mathematics',
      'Integrated Science & Health Education',
      'Social Studies & Life Skills',
      'Pre-Technical & Pre-Career Education',
      'Religious Education & Creative Arts',
      'Physical Education & Sports',
    ],
    pathwayElectives: [
      'Intro to Aviation Fundamentals',
      'Mandarin Basics (Pinyin, tones, greetings)',
      'Maritime Basics (water safety, ocean awareness)',
    ],
    projectsClubs: [
      'STEM & Robotics Club',
      'Languages Club',
      'Maritime/Scouts & Environmental Club',
    ],
    assessments: [
      'Continuous school-based assessments',
      'Project work and presentations',
    ],
  },
  {
    id: '8',
    title: 'Grade 8',
    coreAreas: [
      'English, Kiswahili & Foreign Language',
      'Mathematics',
      'Integrated Science & Health Education',
      'Business Studies & Social Studies',
      'Pre-Technical & Pre-Career Education',
      'Creative & Performing Arts',
      'Physical Education & Sports',
    ],
    pathwayElectives: [
      'Aviation (navigation, weather & safety)',
      'Mandarin (conversation, character writing)',
      'Maritime (navigation basics, seamanship)',
    ],
    projectsClubs: [
      'Science Fair Projects',
      'Cultural Day & Language Exchanges',
      'Water Safety/First Aid Workshops',
    ],
    assessments: [
      'Competency tasks & practicals',
      'Term projects and reflective portfolios',
    ],
  },
  {
    id: '9',
    title: 'Grade 9',
    coreAreas: [
      'English, Kiswahili & Foreign Language',
      'Mathematics',
      'Integrated Science & Health Education',
      'Social Sciences & Business Studies',
      'Pre-Technical & Pre-Career Education',
      'Creative/Performing Arts & ICT Integration',
      'Physical Education & Sports',
    ],
    pathwayElectives: [
      'Aviation (aerodynamics, instrumentation, simulated flights)',
      'Mandarin (dialogue, culture, intermediate literacy)',
      'Maritime (navigation, marine environment, safety)',
    ],
    projectsClubs: [
      'Capstone Project (STEM/Language/Maritime)',
      'Community Service & Leadership',
      'Career Day & Industry Talks',
    ],
    assessments: [
      'School-based assessments across terms',
      'Capstone showcase & exhibitions',
    ],
  },
];

const coreCompetencies = [
  'Communication & Collaboration',
  'Critical Thinking & Problem Solving',
  'Creativity & Imagination',
  'Citizenship',
  'Digital Literacy',
  'Learning to Learn',
  'Self-efficacy',
];

// -----------------------------
// Small UI helpers
// -----------------------------

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

const PathwayCard: React.FC<Pathway> = ({ title, description, imageSrc, link, focal, icon }) => (
  <article className="group overflow-hidden rounded-2xl bg-[#0f1625] ring-1 ring-white/10 transition hover:shadow-xl hover:shadow-black/30">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        style={{ objectPosition: focal ?? '50% 28%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
    <div className="space-y-3 p-6 text-left">
      <div className="flex items-center gap-2 text-white">
        {icon ?? <BookOpen className="h-5 w-5" aria-hidden />}
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-white/80">{description}</p>
      <div className="pt-1">
        <Link
          to={link}
          className="inline-flex items-center gap-2 rounded-lg border border-[#bdd6f0]/60 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]"
        >
          Explore <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </div>
  </article>
);

// -----------------------------
// Page
// -----------------------------

const ThinkDetailedPathways: React.FC = () => {
  const heroImage = useMemo(() => '/images/cbc.png', []);

  return (
    <div className="min-h-screen bg-[#161e2e] font-sans text-white">
      <Helmet>
        <title>Think Detailed Pathways | Pioneer Junior Academy</title>
      </Helmet>

      {/* Top heading */}
      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Think Detailed Pathways</h1>
          <div className="mt-4 h-4 w-full bg-white/90" />
        </div>
      </section>

   {/* Hero – show full image on all devices (no cropping) */}
<section
  className="
    relative flex items-center justify-center
    h-[56vh] md:h-[78vh] lg:h-[80vh]
    bg-contain bg-center bg-no-repeat
  "
  style={{ backgroundImage: `url('${heroImage}')` }}
  aria-label="Detailed Pathways Hero"
>
  {/* lighter overlay so edges stay visible */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#161e2e]/40 pointer-events-none" />
</section>


      {/* Intro tagline */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xl md:text-2xl font-semibold">
            A clear, structured journey for Grades 7, 8 and 9 - blending CBC core learning with specialised Aviation, Mandarin and Maritime pathways.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Pill>Holistic Growth</Pill>
            <Pill>Career Awareness</Pill>
            <Pill>Project-Based Learning</Pill>
          </div>
        </div>
      </section>

      {/* NEW: Narrative section from your paragraph */}
      <section className="py-6">
        <SectionTitle
          title="About Our Junior Secondary"
          subtitle="Excellence, resilience, and holistic development for every learner."
        />
        <div className="mx-auto mt-6 max-w-6xl px-4">
          <div className="mx-auto max-w-5xl space-y-5 text-white/90 leading-relaxed">
            <p>
              As one of the leading boys' Junior Secondary schools in the country, we are renowned for our dedication to excellence, resilience, and fostering holistic development in our students. Our mission is to guide children in their journey towards becoming responsible and well-rounded adults who actively contribute to their communities.
            </p>
            <p>
              At our school, students are equipped with the skills and mindset to navigate life's challenges with confidence, accountability, thoughtfulness, engagement, and innovation. Our comprehensive curriculum strikes a perfect balance between rigorous academic standards and engaging teaching methods that promote creativity, innovation, and an exciting learning experience.
            </p>
            <p>
              We firmly believe in the importance of a well-rounded education, which is why we integrate a wide range of academic, co-curricular, and extracurricular activities into our curriculum to support our students' overall growth. With state-of-the-art sports facilities and highly qualified physical education teachers, we provide ample opportunities for our students to excel in sports. We also actively encourage our students to participate in local and national competitions across various fields of learning, nurturing their competitive spirit.
            </p>
            <p>
              Additionally, our students embark on exciting field trips, including Presidential Awards, where they gain independence, self-reliance, and essential life skills. We take immense pride in being the School of Choice for those who value student discipline as a key factor in achieving success.
            </p>
            <p>
              Our team of highly motivated and enthusiastic educators is deeply committed to upholding the highest education standards, both within and beyond the classroom. Together, let's shape a bright future for your child!
            </p>
          </div>
        </div>
      </section>

      {/* CBC + Competencies section */}
      <section className="py-10">
        <SectionTitle
          title="Discover a Dynamic CBC-Aligned Curriculum"
          subtitle="Interactive, differentiated learning that prepares learners for Senior Secondary pathways."
        />
        <div className="mx-auto mt-6 max-w-6xl px-4">
          <div className="mx-auto max-w-5xl space-y-5 text-white/90 leading-relaxed">
            <p>
              Discover a dynamic curriculum that builds on the Competency-Based Curriculum (CBC) introduced in Upper Primary.
            </p>
            <p>
              Our comprehensive curriculum empowers learners to explore their talents, interests, and abilities, guiding them towards their chosen pathways in Senior Secondary Education. With a focus on core competencies such as Communication and Collaboration, Critical Thinking and Problem Solving, Creativity and Imagination, Citizenship, Digital Literacy, Learning to Learn, and Self-efficacy, our curriculum offers interactive and differentiated learning experiences.
            </p>
            <p>
              We provide teachers with suggested resources and assessment techniques to facilitate effective learning outcomes and ensure a smooth transition to Senior Secondary. Join us in making learning interesting, exciting, and enjoyable! See the subject areas for students in Grade 7, 8, and 9 below.
            </p>
            <p>
              Our curriculum is designed to foster holistic development, nurturing the intellectual, emotional, and social growth of each learner. Through a wide range of engaging activities, students are encouraged to think critically, express their ideas, and collaborate with their peers.
            </p>
            <p>
              Our dedicated team of educators is committed to providing a supportive learning environment that encourages curiosity, exploration, and personal growth. With our comprehensive curriculum, students will not only acquire knowledge and skills but also develop a lifelong love for learning.
            </p>
          </div>

          {/* Competency pills */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {coreCompetencies.map((c) => (
              <Pill key={c}>{c}</Pill>
            ))}
          </div>

          {/* Quick highlights */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-[#0f1625] p-5 ring-1 ring-white/10">
              <div className="mb-2 flex items-center gap-2 text-white"><CheckCircle className="h-5 w-5" /> Academics & Co/Extra-curricular</div>
              <p className="text-white/80 text-sm">Balanced, engaging learning with room to explore interests and talents.</p>
            </div>
            <div className="rounded-2xl bg-[#0f1625] p-5 ring-1 ring-white/10">
              <div className="mb-2 flex items-center gap-2 text-white"><Trophy className="h-5 w-5" /> Competitions & Sports</div>
              <p className="text-white/80 text-sm">State-of-the-art facilities and guidance from qualified PE teachers.</p>
            </div>
            <div className="rounded-2xl bg-[#0f1625] p-5 ring-1 ring-white/10">
              <div className="mb-2 flex items-center gap-2 text-white"><MapPinIcon /> Field Trips & Awards</div>
              <p className="text-white/80 text-sm">Experiential learning including Presidential Awards to build life skills.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathway Cards */}
      <section className="pb-8">
        <SectionTitle
          title="Specialised Pathways"
          subtitle="Students explore areas of passion while building strong academic foundations."
        />
        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
          {pathways.map((p) => (
            <PathwayCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Grade Details */}
      <section className="py-12">
        <SectionTitle
          title="Grade-by-Grade Details"
          subtitle="Overview of core learning areas, pathway electives, projects/clubs, and typical assessments."
        />

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-8 px-4">
          {grades.map((g) => (
            <div key={g.id} id={`grade-${g.id}`} className="rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 shadow-lg shadow-black/20">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-white">{g.title}</h3>
                <div className="hidden md:flex items-center gap-2 text-sm text-white/70">
                  <a href={`#grade-7`} className="hover:text-white">Grade 7</a>
                  <span>•</span>
                  <a href={`#grade-8`} className="hover:text-white">Grade 8</a>
                  <span>•</span>
                  <a href={`#grade-9`} className="hover:text-white">Grade 9</a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <ListCard heading="Core Learning Areas" items={g.coreAreas} icon={<BookOpen className="h-5 w-5" aria-hidden />} />
                <ListCard heading="Pathway Electives" items={g.pathwayElectives} icon={<Rocket className="h-5 w-5" aria-hidden />} />
                <ListCard heading="Projects & Clubs" items={g.projectsClubs} icon={<ArrowRight className="h-5 w-5" aria-hidden />} />
                <ListCard heading="Assessments" items={g.assessments} icon={<Download className="h-5 w-5" aria-hidden />} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KICD CTA */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#0f1625] p-6 ring-1 ring-white/10 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold">See Official CBC Curriculum Designs (KICD)</h4>
              <p className="mt-1 text-white/80 max-w-2xl">
                Explore the individual Grade 7–9 curriculum designs directly from the Kenya Institute of Curriculum Development.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {/* TODO: Replace these with the exact KICD URLs for each grade's curriculum design */}
              <a
                href="https://kicd.ac.ke/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#df8811] px-5 py-3 font-semibold text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]"
              >
                <ExternalLink className="h-5 w-5" aria-hidden />
                Visit KICD
              </a>
              <a
                href="https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-seven-designs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]"
              >
                Grade 7 Design
              </a>
              <a
                href="https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-eight-designs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]"
              >
                Grade 8 Design
              </a>
              <a
                href="https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-nine-designs/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-3 font-semibold text-white transition hover:bg-[#bdd6f0] hover:text-[#0C356A]"
              >
                Grade 9 Design
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// small inline icon to avoid extra import churn if mapping fails
const MapPinIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
    <path d="M12 2C8.686 2 6 4.686 6 8c0 4.5 6 14 6 14s6-9.5 6-14c0-3.314-2.686-6-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
  </svg>
);

export default ThinkDetailedPathways;
