// src/pages/Seafarers.tsx

import { Helmet } from 'react-helmet-async';

const Seafarers: React.FC = () => {
  return (
    <>
    <Helmet>
      <title>Seafares | St Paul Thomas Academy</title>
    </Helmet>
    <div className="min-h-screen bg-[#083056]">
      
    <section className="py-12 h-[20vh]">
        <div className="max-w-6xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
          Young Seafarers
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

      
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-center bg-cover"
        style={{ backgroundImage: "url('/images/sea.webp')",fontFamily: 'Times New Roman, serif'  }}
      >
        <div className="absolute inset-0 bg-[#74d1f6]/50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="bg-[#083056] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">         
         <p className="text-gray-100 text-xl leading-relaxed">
          Through a comprehensive curriculum and immersive experiences, we aim to equip our students with the essential skills and knowledge needed to drive forward the innovative 'Blue Economy' maritime economic development initiatives that hold the key to a sustainable future.
           <br />
           <br />
           With a commitment to serving the continent, we endeavor to foster a culture of continuous skills development, education, training, and cutting-edge research that not only supports but propels the growth of the blue economy to new heights </p>
        </div>
     
      {/* Calls to Action */}
      <section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
 href="/talent"
 rel="noopener"
 className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
Talent
    </a>
    </section> 
 

      
 </section>
</div>
    </>
  );
};

export default Seafarers;
