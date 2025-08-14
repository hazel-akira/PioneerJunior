// src/pages/Farm2Fork.tsx
import { Helmet } from '@dr.pogodin/react-helmet';


interface SectionCardProps {
  title: string;
  text: string;
  image: string;
  /** on desktop, flip image/text when true */
  reverse?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, text, image, reverse }) => (
  <div
    className={
      `flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} ` +
      'bg-white rounded-lg shadow-lg overflow-hidden'
    }
  >
    <img
      src={image}
      alt={title}
      className="w-full md:w-1/2 h-48 md:h-auto object-cover"
    />
    <div className="p-6 md:w-1/2 flex flex-col justify-center">
      <h2 className="text-2xl font-semibold text-[#093056] mb-4">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{text}</p>
    </div>
  </div>
);

const Farm2Fork: React.FC = () => {
  const sections = [
   {
      title: 'Organic Farm Sourcing',
      text: `Here at St. Thomas Academy, we believe in providing holistic education that extends beyond the confines of the classroom , That's why we're proud to source most of our kitchen supplies from local farms that provide organic, healthy food. Additionally, our student-led agriculture program supplies our kitchen and offers a place where students can connect with nature and learn valuable life skills.`,
      image: '/images/Gardening.webp',
    },
    {
      title: 'Milk & Dairy',
      text: `Our milk and dairy products are supplied daily by local certified farms. Each batch undergoes rigorous testing for impurities, microorganisms, and toxins before collection and consumption, ensuring the highest quality and safety.`,
      image: '/images/Cows.webp',
      reverse: true,
    },
    {
      title: 'Eggs & Poultry',
      text: `Our eggs and chicken meat are sourced from local farms committed to ethical and sustainable practices. Each batch of eggs and chicken meat is carefully inspected for freshness and safety before reaching our kitchen, providing our students with wholesome, delicious meals.`,
      image: '/images/Chicken.webp',
    },
     {
      title: 'In-House Bakery',
      text: `Our bakery offers a delightful selection of cakes and pastries, all made in-house with the finest ingredients. We use organic flour, free-range eggs, and locally sourced dairy products to ensure the highest quality and taste. Our talented bakers craft each item with care, focusing on both traditional recipes and innovative creations. Whether it's a special occasion or a daily treat, our cakes and pastries provide a delicious and wholesome experience for our students.`,
      image: '/images/bread.webp',
      reverse: true,
    },
    {
      title: 'Our Meals',
      text: `Our beef is sourced from local ranches that prioritize ethical treatment and sustainable farming practices. The cattle are grass-fed and raised without the use of hormones or antibiotics. Each cut of beef undergoes stringent quality checks to ensure it is fresh, safe, and nutritious. By providing high-quality beef, we ensure that our students enjoy healthy and delicious meals as part of their dining experience.`,
      image: '/images/meat.webp',
      reverse: true,
    },
    {
      title: 'Eco-Friendly Fuel',
      text: `As an eco-friendly organization, we are conscoius of our sources of energy. We limit the use of timber though the use of locally available sources of energy to power our kitchen. Our brigettes are sourced from local macadamia, coffee and tea by products to fuel our stoves.`,
      image: '/images/charcoal.webp',
    },
    {
      title: 'Clean Water',
      text: `Our water is sourced from a healthy river maragua, housed and treated internally by our able team. Additional drinking water is supplied from our local county water supplier Muscwasco.`,
      image: '/images/River.webp',
      reverse: true,
    },
  ];

  return (
    <>
    <div className="min-h-screen flex flex-col bg-[#093056]">
    <Helmet>
      <title>Farm 2 Fork | St Paul Thomas Academy</title>
      
    </Helmet>

      {/* Hero */}
      <section
        className="relative h-[70vh] font-sans bg-cover bg-center"
        style={{ backgroundImage: "url('/images/Gardening.webp')" }}
      >
        <div className="absolute inset-0 bg-[#093056] opacity-60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Farm 2 Fork
          </h1>
        </div>
      </section>

      {/* Cards */}
      <main className="flex-grow max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {sections.map((sec, i) => (
            <SectionCard
              key={i}
              title={sec.title}
              text={sec.text}
              image={sec.image}
              reverse={sec.reverse}
            />
          ))}
        </div>
      </main>

{/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/homefromhome"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
home from home
    </a>
    </section> 
    
    </div>
    </>
  );
};

export default Farm2Fork;
