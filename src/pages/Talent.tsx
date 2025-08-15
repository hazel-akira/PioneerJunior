import { Helmet } from '@dr.pogodin/react-helmet';

const Talent: React.FC = () => (
  <>
  <Helmet>
      <title>Talents | Pioneer Junior Academy</title>
    </Helmet>

  <div className="min-h-screen font-sans bg-[#161e2e]">
  <section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
          Talents @  Pioneer Junior Academy
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>


    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/Jazz-band.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/10" />
      <div className="relative z-10 text-center flex flex-col items-center space-y-6">
      </div>
    </section>

 ;


    {/* Main Content */}
    <section className="container max-w-4xl mx-auto l px-4 font-sans py-16 space-y-8 text-gray-100">
    <p className="text-gray-100 text-4xl font-semibold leading-relaxed">
    We cultivate talent from within our student body and every performance undergoes meticulous rehearsals and artistic refinement before captivating our audience.</p>
    
    
    
    </section>

    {/* Calls to Action */}
    <section className="flex flex-col mt-6 font-sans sm:flex-row gap-4 justify-center">
    <a
    href="/band"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
    Band Life
    </a>
    </section> 
  </div>
  </>
);

export default Talent;
