// src/pages/Chaplaincy.tsx
import { Helmet } from '@dr.pogodin/react-helmet';



const Chaplaincy: React.FC = () => (
  <div className="min-h-screen flex font-sans flex-col bg-[#161e2e]">
<Helmet>
      <title> Chaplaincy | Pioneer Junior Academy</title>
    </Helmet>

    {/* Hero */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/candles.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#161e2e] opacity-20" />
      <h1 className="relative z-10 text-3xl md:text-5xl text-white font-bold">
        Chaplaincy
      </h1>
    </section>

    <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 text-2xl space-y-6 text-gray-100">
          <p>
          Our chaplains office works to provide a safe space for students and staff to talk about their worries, beliefs and personal journeys.
      </p>
      <p className=" leading-relaxed">
      Chaplains organize religious services for all faiths and provide the emotional support needed 
      </p>
    </main>
</div>
    {/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/nursing-care"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
    Nursing Care
    </a>
    </section> 

  </div>
);

export default Chaplaincy;
