import React from 'react';
import { Link } from 'react-router-dom'
import { Helmet } from '@dr.pogodin/react-helmet';
const Leadership: React.FC = () => {
  return (
    <>  <Helmet>
    <title> Our Talent Management team | St Paul Thomas Academy</title>
    </Helmet>
   
      <div className="flex flex-col font-sans min-h-screen bg-[#13365f] "
         >
      <section className="bg-[#062747] h-[30vh] py-6">
        <div className="max-w-3xl mx-auto  mt-20 px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">
        Meet Our Talent Management team. 
        </h2>
        <Link
          to="/nurturing"
          className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
          Nurture Team
        </Link>
        </div>
      </section>
          
            <div className=" rounded-xl shadow-lg  flex flex-col items-center">
              <img
                src="/images/Mr Maina.webp"
                alt="STP DEP Principal "
                className="w-full h-auto object-cover shadow-md mb-4"
              />
            </div>

            <div className="rounded-xl shadow-lg flex flex-col items-center">
              <img
                src="/images/Mr Kinyanjui.webp"
                alt="PJA HeadMaster "
                className="w-full h-auto object-cover shadow-md mb-4"
              />
            
            </div>
            <div className="rounded-xl shadow-lg flex flex-col items-center">
              <img
                src="/images/Rashid.webp"
                alt="Talent Capture coordinator "
                className="w-full h-auto object-cover shadow-md mb-4"
              />
            
            </div>
 
       </div>
    </>
  );
};
 
export default Leadership;
