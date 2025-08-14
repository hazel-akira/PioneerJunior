// src/pages/TailorMadeLeadershipPathways.tsx
import { Helmet } from 'react-helmet-async';
import InfoCard from '../components/InfoCard';

<Helmet>
      <title> PATHWAYS | St Paul Thomas Academy</title>
    </Helmet>

const cards = [
  {
    title: 'English',
    description: 'Discover how we craft personalized leadership journeys that unlock each student’s potential.',
    imageSrc: '/images/path3.webp',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/English-Grade-10-June-2024.pdf',
  },
  {
    title: 'Kiswahili / Kenya Sign Language',
    description: 'Our milestones framework guides you through every stage of leadership development.',
    imageSrc: '/images/path1.webp',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/Kiswahili-Lugha-Gredi-10-June-2024.pdf',
  },
  {
    title: 'Physical Education',
    description: 'Learn from seasoned educators and industry leaders who champion your growth.',
    imageSrc: '/images/study2.webp',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/Physical-Education-Grade-10-June-2024.pdf',
  },
  {
    title: 'Community Service',
    description: 'Learn from seasoned educators and industry leaders who champion your growth.',
    imageSrc: '/images/study1.webp',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/CSL-Grade-10-June-2024.pdf',
  },
  {
    title: 'Creative Arts',
    description: 'Creative Arts.',
    imageSrc: '/images/path3.webp',
    link: 'https://kicd.ac.ke/wp-content/uploads/2024/07/CSL-Grade-10-June-2024.pdf',
  },

];

const TailorMadeLeadershipPathways: React.FC = () => (
  <div className="min-h-screen font-sans flex flex-col bg-[#093056]">
   
   <section className="py-12 h-[20vh]">
        <div className="max-w-6xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
        Tailor Made Leadership Pathways
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

    {/* Hero Section */}
    <section className="relative h-[80vh] bg-cover bg-center flex items-center justify-center "
      style={{ backgroundImage: "url('/images/path1.webp')"}}>
    
    </section>

    {/* Intro & Outcomes */}
    <section className="py-16 font-sans">
      <div className="container max-w-4xl space-y-8 mx-auto px-4 gap-12  md:grid-cols-2">
          <p className="text-gray-100   text-xl leading-relaxed mb-6">
          At St. Paul Thomas Academy, we value each student's uniqueness, passions, and aspirations. With a strong reputation for trustworthiness, integrity, and academic excellence, our Academy guides students towards responsible adulthood. Our curriculum balances rigorous academic standards with engaging teaching methods, promoting creativity and innovation. We offer a well-rounded education through a variety of academic, co-curricular, and extracurricular activities. Our dedicated educators uphold the highest standards both in and out of the classroom. </p>
        </div>
        <div className="container max-w-4xl text-xl md:text-xl space-y-8 mx-auto px-4 gap-12  md:grid-cols-2"> 
          <h3 className=" font-semibold  text-white mb-4">
            By the end of senior school, learners will be able to:
          </h3>
          <ul className="list-disc list-inside  text-gray-100 space-y-3 leading-snug">
            <li>Communicate effectively using ICT across varied contexts.</li>
            <li>Apply mathematical, logical, and critical thinking skills.</li>
            <li>Use basic research and scientific skills to solve problems.</li>
            <li>Leverage individual talents for career growth and fulfillment.</li>
            <li>Uphold national, moral, and religious values in daily life.</li>
            <li>Apply and promote health care strategies.</li>
            <li>Protect, preserve, and improve the environment.</li>
            <li>Demonstrate active local and global citizenship.</li>
            <li>Show appreciation for diversity in people and cultures.</li>
            <li>Manage pertinent and contemporary issues responsibly.</li>
          </ul>
        </div>
   
    </section>

    {/* Cards Grid */}
    <section className="py-16 font-sans  ">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl py-4 md:text-4xl font-bold text-white">
        COMPULSORY SUBJECTS 
        <br />
        <div className="mx-auto py-2 mt-2 bg-white w-full"></div>   
        </h2>
        <p className='font-semibold text-white '>At our School, ALL students will be required to take the following subjects.</p> 
      </div>
      <div className="container mx-auto bg-[#093056] px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <InfoCard key={i} {...c} />
        ))}
      </div>
    </section>

    {/* Calls to Action */}
 <section className="flex flex-col py-4 sm:flex-row gap-4 justify-center">
    
    <a
      href="/cadet"
      rel="noopener"
      className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
     Young Air Cadets
    </a>
  </section>

  
  </div>
);

export default TailorMadeLeadershipPathways;
