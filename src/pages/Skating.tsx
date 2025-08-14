import { Helmet } from '@dr.pogodin/react-helmet';

const SkatingLife: React.FC = () => (
  <div className="min-h-screen bg-[#083056]">
    <Helmet>
      <title> Skating Life | St Paul Thomas Academy</title>
    </Helmet>

    <section className="py-12 h-[20vh]">
        <div className="max-w-6xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
         Skating Life
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/skate.webp')",fontFamily: 'Times New Roman, serif' }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/10" />
    </section>
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/skating1.JPG')",fontFamily: 'Times New Roman, serif' }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/10" />
    
    </section>
    
    {/* Calls to Action */}
    <section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    <a
    href="/cycling"
    rel="noopener"
    className="inline-block border mb-6  font-sans border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
     Cycling Life
    </a>
    </section> 
  </div>
);

export default SkatingLife;
