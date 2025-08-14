import { Link } from 'react-router-dom';

const JoinUs: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-[#f9fafb]">
      {/* Hero */}
      <section className="relative h-[100vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/join.webp')" }}>
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white leading-snug">
            Begin Your Journey <br /> At St Paul Thomas <br /> Academy
          </h1>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 justify-center">
            <Link to="/grade4" className="bg-[#E4AF23] hover:bg-white hover:text-[#E4AF23] text-[#093056] py-3 px-4 rounded shadow text-sm font-medium">
              Join Grade 4
            </Link>
            <Link to="/grade5" className="bg-[#E4AF23] hover:bg-white hover:text-[#E4AF23] text-[#093056] py-3 px-4 rounded shadow text-sm font-medium">
              Join Grade 5
            </Link>
            <Link to="/grade6" className="bg-[#E4AF23] hover:bg-white hover:text-[#E4AF23] text-[#093056] py-3 px-4 rounded shadow text-sm font-medium">
              Join Grade 6
            </Link>
            <Link to="/enquire" className="bg-[#E4AF23] hover:bg-white hover:text-[#E4AF23] text-[#093056] py-3 px-4 rounded shadow text-sm font-medium">
              Register to Join
            </Link>
          </div>
        </div>
      </section>
      </div>
   
  );
};

export default JoinUs;
