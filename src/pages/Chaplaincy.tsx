// src/pages/Chaplaincy.tsx



const Chaplaincy: React.FC = () => (
  <div className="min-h-screen flex font-sans flex-col bg-[#062747]">


    {/* Hero */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Person.webp')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-60" />
      <h1 className="relative z-10 text-3xl md:text-5xl text-white font-bold">
        Chaplaincy
      </h1>
    </section>

    <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <main className="lg:col-span-3 text-2xl space-y-6 text-gray-100">
          <p>
      At St. Paul Thomas Academy,
       the chaplaincy is a cornerstone of our community, 
       providing spiritual guidance, fostering a sense of belonging,
        and enriching the lives of our students, staff, and families.
      </p>
      <p className=" leading-relaxed">
      The chaplain plays a vital role in fostering a sense of community by organizing a
       comprehensive faith calendar and a variety of events that cater to the diverse beliefs and practices of our students,
       regardless of their religion or denomination.
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
