import { Helmet } from '@dr.pogodin/react-helmet';

const BandLife: React.FC = () => (
  <>
  
  <Helmet>
      <title>Band Life | St Paul Thomas Academy</title>
      <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

    </Helmet>
  <div className="min-h-screen font-sans bg-[#083056] ">
    
  <section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
          Marching Band Life
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ fontFamily: 'Poppins, sans-serif'}}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
   
    </section>

    {/* Main Content */}
    <section className="container max-w-4xl mx-auto px-4 py-16 space-y-6 text-gray-100" >
    <p className="text-gray-100 text-xl leading-relaxed">
        Our band is nationally renowned and we have led the national celebrations for years.
      </p>
    </section>
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/band2.webp')" , fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
   
    </section>
    {/* Main Content */}
    <section className="container max-w-4xl mx-auto px-4 py-16 space-y-6 text-gray-100" >
    <p className="text-gray-100 text-xl leading-relaxed">
        Our band is nationally renowned and we have led the national celebrations for years.
      </p>
    </section>
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/band3.webp')" }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
   
    </section>
 
    {/* Calls to Action */}
    <section className="flex flex-col font-sans mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/chess"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
     Chess Masters
    </a>
    </section> 
  </div>
  </>
);

export default BandLife;
