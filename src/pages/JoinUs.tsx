import { Link } from 'react-router-dom';

const JoinUs: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-[#f9fafb]">
      {/* Hero */}
      <section className="relative h-[100vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/join.JPG')" }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white leading-snug">
            Begin Your Journey <br /> At Pioneer Junior <br /> Academy
          </h1>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 justify-center">
            <Link to="/grade7" className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >  Join Grade 7
            </Link>
            <Link to="/grade8" className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
              Join Grade 8
            </Link>
            <Link to="/grade9" className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >   Join Grade 9
            </Link>
            <Link to="/enquire" className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >  Join to Register 
            </Link>
          </div>
        </div>
      </section>
      </div>
   
  );
};

export default JoinUs;
