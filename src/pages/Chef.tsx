
import { Helmet } from '@dr.pogodin/react-helmet';

const  Chef: React.FC = () => (
<>
  <div className="min-h-screen bg-[#083056]">
    <Helmet>
      <title> Chef | St Paul Thomas Academy</title>
    </Helmet>
<section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
         Master Chef
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>
    {/* Hero Section */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center "
      style={{ backgroundImage: "url('/images/chef1.webp')",fontFamily: 'Times New Roman, serif' }}>
      <div className="absolute inset-0 bg-black/40" />
    </section>
 
    <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Description */}
      <main className="lg:col-span-3 text-2xl space-y-6 text-gray-100">
        <p>
        Becoming a chef is a journey that combines passion, creativity, dedication, and a relentless pursuit of excellence in the culinary arts.
       <br />

       <br /> 
       At St. Thomas, we recognize the culinary talents of our students and provide them with a supportive and nurturing environment to develop their skills and unleash their culinary creativity. 
       </p> </main>
      </div>   

      <section
      className="relative h-[70vh] bg-cover bg-center flex items-center "
      style={{ backgroundImage: "url('/images/chef2.webp')",fontFamily: 'Times New Roman, serif' }}>
      <div className="absolute inset-0 bg-black/40" />
    </section>
{/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/golf"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
   Golf Life
    </a>
    </section> 
      
    
  </div>
  </>
);

export default  Chef;
