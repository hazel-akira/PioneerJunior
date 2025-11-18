// src/pages/Chaplaincy.tsx
import { Helmet } from '@dr.pogodin/react-helmet';


const Laundry: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-[#161e2e]">
<Helmet>
      <title> Laundry | Pioneer Junior Academy</title>
    </Helmet>

    {/* Hero */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/laundry.jpg')" }}
    >
      <h1 className="relative z-10 text-3xl md:text-5xl text-white font-bold">
       Laundry
      </h1>
    </section>

    <div className="container max-w-6xl mx-auto px-2 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 text-3xl space-y-6  text-gray-100">
          <p>
          We understand that school life can be hectic, leaving students with little time to manage chores like laundry.
          <br />
          <br />
          That's why we've implemented a dedicated laundry service to ease the burden and ensure that students can focus on their academic and extracurricular pursuits without worrying about clean clothes. Convenience is at the forefront of our service.
          <br />
          <br />
          Students can drop off their laundry at designated locations or schedule pick-up directly from their dorm rooms.

      </p>
      <p className=" leading-relaxed">
      With flexible scheduling options and quick turnaround times, we strive to accommodate the diverse schedules and preferences of our student community 
      </p>
    </main>
</div>
    {/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/chaplaincy"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
Chaplaincy
    </a>
    </section> 

  </div>
);

export default Laundry;
