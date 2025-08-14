// src/pages/BoardingLife.tsx




import InfoCard from '../components/InfoCard';

const BoardingLife: React.FC = () => (
  <div className="min-h-screen flex flex-col font-sans bg-[#f9fafb]">
    

    {/* Hero */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Student.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-60" />
      <h1 className="relative z-10 text-4xl md:text-6xl text-white font-bold">
        Boarding Life
      </h1>
    </section>

    {/* Sub‑page cards */}
    <main className="flex-grow py-16 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        <InfoCard
          title="Farm 2 Fork"
          description="Our farm‑to‑fork program brings fresh produce from our on‑site fields & local farms straight to your plate."
          imageSrc="/images/Woman.jpg"
          link="/farm-2-fork"
        />
        <InfoCard
          title="Nursing Care"
          description="24/7 certified nursing care overseen by a full‑time pediatrician, with on‑campus ambulance & fire support."
          imageSrc="/images/nurse.jpg"
          link="/nursing-care"
        />
        <InfoCard
          title="Chaplaincy"
          description="Spiritual & pastoral care to nurture emotional well‑being and foster a strong community spirit."
          imageSrc="/images/Person.jpg"
          link="/chaplaincy"
        />
      </div>
    </main>

  
  </div>
);

export default BoardingLife;
