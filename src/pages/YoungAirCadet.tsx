
import { Helmet } from '@dr.pogodin/react-helmet';

const YoungAirCadet: React.FC = () => (
  <>
  
  <Helmet>
      <title>Young Air Cadet | St Paul Thomas Academy</title>
    </Helmet>

  <div className="min-h-screen bg-[#083056]" >
  <section className="py-12 h-[20vh]">
        <div className="max-w-6xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
         Young Air Cadet
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

    {/* Hero Section */}
    <section
      className="relative h-[70vh] px-4 py-16 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/cadet.webp')" }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
      </section>

    {/* Main Content */}
    <div className="bg-[#083056] text-white py-16 px-4">
      {/* Description */}
      <main className="max-w-4xl font-sans mx-auto space-y-8">
        <p className="text-gray-100 text-xl leading-relaxed">
          Young Air Cadets, with their eyes fixed on the boundless sky and hearts filled with dreams of flight, epitomize the spirit of adventure, discipline, and service. At St. Thomas, we are honored to support these aspiring aviators as they embark on a journey that will not only shape their futures but also instill in them values that will guide them throughout their lives.
        </p>
        <p className="text-gray-100 text-xl leading-relaxed">
          Our program for young Air Cadets is designed to provide a comprehensive and enriching experience that combines theoretical knowledge with practical training, all under the guidance of experienced aviation professionals and mentors. From the moment they enroll in our program, students are immersed in a dynamic learning environment that fosters curiosity, teamwork, and a passion for aviation.
        </p>
      </main></div>

      {/* Calls to Action */}
 <section className="flex flex-col sm:flex-row gap-4 justify-center">  
    <a
      href="/coding"
      rel="noopener"
      className="inline-block border mb-6 font-sans  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
    >
      Coding Life
    </a>
  </section>

      
    
  </div>
  </>
);

export default YoungAirCadet;
