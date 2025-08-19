// src/pages/BoardingLife.tsx
import { Helmet } from '@dr.pogodin/react-helmet';



import InfoCard from '../components/InfoCard';

const BoardingLife: React.FC = () => (
  <div className="min-h-screen flex flex-col  bg-[#161e2e]">
    <Helmet>
      <title> Boarding Life | Pioneer Junior Academy</title>
    </Helmet>

    {/* Hero */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/skating1.jpg')" }}
    >
      <div className="absolute  inset-0 bg-[#161e2e] opacity-30" />
      <p className=" relative max-w-2xl mx-auto z-10 text-sm md:text-2xl font-semibold text-white ">
      At Pioneer Junior Academy, we understand that for young students, feeling at home is crucial to their academic and personal development.
<br />
<br />
That's why we've created an environment that goes beyond mere education to foster a sense of belonging and comfort, making our school a true "home away from home" for our students 
      </p>
    </section>

    {/* Sub‑page cards */}
    <main className="flex-grow py-16 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        <InfoCard
          title="Farm 2 Fork"
          description="Our farm-to-fork program brings fresh produce from our on-site fields & local farms straight to your plate."
          imageSrc="/images/meal1.jpg"
          link="/farm-2-fork"
        />
        <InfoCard
          title="Laundry"
          description="We understand that school life can be hectic, leaving students with little time to manage chores like laundry."
          imageSrc="/images/laundry.jpg"
          link="/laundry"
        />
        <InfoCard
          title="Nursing Care"
          description="24/7 certified nursing care overseen by a full-time pediatrician, with on-campus ambulance & fire support."
          imageSrc="/images/nurse.jpg"
          link="/nursing-care"
        />
        <InfoCard
          title="Chaplaincy"
          description="Spiritual & pastoral care to nurture emotional well-being and foster a strong community spirit."
          imageSrc="/images/candles.jpg"
          link="/chaplaincy"
        />
        <InfoCard
          title="Safety and Security"
          description="We prioritize the safety and security of our students, staff, and visitors through a comprehensive and proactive approach. i.e CCTV."
          imageSrc="/images/CCTV.jpg"
          link="/chaplaincy"
        />
      </div>
    </main>

  
  </div>
);

export default BoardingLife;
