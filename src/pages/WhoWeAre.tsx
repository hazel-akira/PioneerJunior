// src/pages/Transform.tsx
import { Link } from 'react-router-dom';
import { Helmet } from '@dr.pogodin/react-helmet';

const WhoWeAre: React.FC = () => {
  
  return (
    <>  <Helmet>
    <title> Who we are | St Paul Thomas Academy</title>
  </Helmet>
      
  <main
        className="min-h-screen font-sans bg-black text-[#e4af23]"
       
      >
         {/* Section 1:  */}
         <section
          className="relative bg-cover bg-fixed min-h-screen"
          style={{ backgroundImage: "url('/images/samar.webp')" }}
        >
           {/* Overlay: only affects the image */}
           <div className="absolute inset-0 bg-black/50" />      
           <div className="relative z-10 max-w-2xl mx-auto font-sans py-12 px-4 space-y-6 text-2xl">           
            Maragua has long been associated with the sisal production, a major revenue earner for the Republic of Kenya since the 1910's Sisal was introduced to East Africa by Dr R Hindorf from bulbils brought in from Florida, USA. <p>
              <br />
              Soon afterwards in 1903 the Kenya Department of Agriculture obtained sisal plants from Tanganika (Now Republic of Tanzania) </p>
            <br />
            <p>
            These were planted on experimental plots in Nairobi, Coast and Nyanza province. </p>
            <br />
            <p>
            In 1907, additional sisal plants were received from Tanganika, and the 1st commercial sisal plantations were established in Punda Milia an area between current Thika and Murang'a town. </p>
            <br />
            <p>
            This done by the pioneers of Kenya's sisal industry, Mr Randal Swift and Mr Ernest. D. Rutherfoord with 375,000 bulbils.  </p>
            <br />
            <p>
            Soon than later, Kenya Exported its 1st of Sisal consignment (42,000 Kgs) generating £491 in 1914.        </p>
            <br />
            </div>
            </section>

            {/* Section 2 */}
        <section
          className="relative bg-cover bg-fixed min-h-screen"
          style={{ backgroundImage: "url('/images/about.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 max-w-2xl font-sans mx-auto py-12 px-4 space-y-6 text-2xl">
         
            St Paul Thomas Academy is a Private Upper Primary Boys Boarding located in Samar Location, Ichagaki Ward, Maragua constituency, Murang'a County.
            <br />
            The school was Established in 1995, on an old Swiss owned farm, formerly known as Samar Sisal Estate (Established 1945).
            <br />
            The Sisal Plantation, factory and small fishing farm were located on the slopes of Samar next to the Maragua River.
            <br />
            Just like the pioneers of Sisal Industry in Kenya, St Paul Thomas Academy was established to pioneer one of the first Kenyan owned private education school in Murang'a and the area provided the perfect environment for quality education for the busy middle class of Nairobi.
            <br />
           
            Its idealic weather, spacial grounds, rural setting and beautiful sisal planted fields provided the perfect mix for young students to seek adventure, education and be resourceful.
            <br />
            This was exemplified by the school's first headmaster Joseph Mukunda (Previously Headmaster of St Martins), who set the standard of discipline, high quality teaching and expectation of excellence which has continued till today.
            <br />
            St Paul Thomas Academy has consistently been the top Ranked primary school nationally (In Kenya) and in our county of Murang'a  

        </div>
         

         
{/* CTA Button */}
<div className="relative z-10 flex justify-center  mt-8">
            <Link
              to="/History"
              className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
              OUR HISTORY
            </Link>
          </div>
     </section>
    </main>
    
</>
  );
};

export default WhoWeAre;
