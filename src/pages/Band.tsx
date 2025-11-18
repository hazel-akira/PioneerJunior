import { Helmet } from '@dr.pogodin/react-helmet';

const BandLife: React.FC = () => (
  <>
  
  <Helmet>
      <title>Band Life | Pioneer Junior Academy</title>
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

    </Helmet>
  <div className="min-h-screen  bg-[#161e2e] ">
    
  <section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl  text-left text-white mb-4">
          Marching Band Life
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/band.webp')" }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/10" />
   
    </section>

    {/* Main Content */}
    <section className="container max-w-4xl mx-auto px-4 py-16 space-y-6 text-gray-100" >
    <p className="text-gray-100 text-3xl leading-relaxed">
    Joining a band is not just about learning to play an instrument: it's about teamwork, dedication, and creating something beautiful together.
      </p>
      <br />
      <p className="text-gray-100 text-4xl leading-relaxed">
      Here at Pioneer Junior Academy We Excel At creating the perfect band life.   </p>

    </section>
   
    {/* Calls to Action */}
    <section className="flex flex-col  mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/football"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
     Soccer Life
    </a>
    </section> 
  </div>
  </>
);

export default BandLife;
