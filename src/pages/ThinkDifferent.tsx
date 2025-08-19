// src/pages/ThinkDifferent.tsx

import { Helmet } from "@dr.pogodin/react-helmet";


import { Link } from "react-router-dom";



export default function ThinkDifferent() {
  return (
    <div className="min-h-screen bg-[#161e2e] text-white ">
      <Helmet>
        <title>Think Different | Pioneer Junior Academy</title>
      </Helmet>
{/* Top bar / breadcrumb area */}
<section className="py-10 relative z-10 mx-auto w-full max-w-6xl px-4  md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="mb-3 text-4xl font-bold">  Think Different</h1>
          <div className="h-4 w-full bg-white/90" />
        </div>
      </section>



      {/* STORY */}
      <section className="-mt-10 md:-mt-14 pb-10 text-2xl md:text-2xl">
        <div className="mx-auto  max-w-6xl  gap-6 px-4 ">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-6 md:p-8 ring-1 ring-white/15">
            <h2 className="text-2xl md:text-3xl font-bold text-[#ffd28c]">Our Beginning</h2>
            <p className="mt-3 text-white/90  leading-relaxed">
            Pioneer Junior Academy starts with the establishment of St Paul Thomas Academy, a Private Primary Boys Boarding school located in Samar Location, Ichagaki Ward, Maragua constituency, Murang'a County.  
<br />
           The school was Established in 1995, on an old Swiss owned farm, formerly known as Samar Sisal Estate (Established 1945). The Sisal Plantation, factory and small fishing farm were located on the slopes of Samar next to the Maragua River. 
            </p>
            <p>Just like the pioneers' of Sisal Industry in Kenya, St Paul Thomas Academy was established to pioneer one of the first Kenyan owned, private education school in Murang'a and the area provided the perfect environment for quality education for the busy middle class of Nairobi.  
 <br />
            Its idealic weather, spacial grounds, rural setting and beautiful sisal planted fields provided the perfect mix for young students to seek adventure, education and be resourceful.  </p>
            <p>The school catered for Standard 4 till Standard 8 students under the Old 8-4-4 system  </p>
            <br />
            <p>Soon afterwards, in the early 2000's St Paul Thomas Academy gave birth to Pioneer School. 

This was after being persuaded by parents to establish the best private high school boy's boarding school catering for students from Form 1 till Form 4  

With that mandate from our customers, we proceeded to establish a unique high school program and experience. </p>
          </div>
          
        </div>
      </section>
      {/* HERO */}
      <section
        className="
          relative flex items-center
          min-h-[60vh] md:min-h-[70vh]
          bg-cover bg-no-repeat bg-center 
        "
        style={{ backgroundImage: "url('/images/magoha1.JPG')" }} 
        aria-label="Think Different"
      >
        <div className="relative z-10 mx-auto w-full bg-[#161e2e]/50 max-w-6xl px-4 py-16 md:py-24">
        <p className="text-2xl md:text-2xl  leading-tight justify-center">
          With the change of Kenya's academic curriculum in 2015 from 8-4-4 system to Competency Based Curriculum (CBC), the idea of Pioneer Junior Academy was conceived.
<br />

<br />
          Unlike other private and government institutions that merged Upper Primary and Junior Secondary Schools, the management of Pioneer Junior Academy decided to establish a separate and unique academy focusing only on Junior Secondary education.</p>
        </div>
        <div className="absolute" />
        
      </section>
      {/* HERO */}
      <section
        className="
          relative flex items-center
          min-h-[60vh] md:min-h-[70vh]
          bg-cover bg-no-repeat bg-center 
        "
        style={{ backgroundImage: "url('/images/magoha2.JPG')" }} 
        aria-label="Think Different"
      >
        <div className="relative z-10 mx-auto w-full max-w-3xl bg-[#161e2e]/50 px-4 py-16 md:py-24">
        <p className="text-2xl md:text-2xl  leading-tight justify-center">
        This meant, different buildings, different Uniform and different class schedules.
This was actualized in January 2023, when we enrolled our 1st class of Grade 7 students.

Foundation stone being laid by the Late George Magoha (Cabinet Secretary Education) during the 1st Grade 7 class transition under the new CBC education system</p>    </div>
        <div className="absolute" />
        
      </section>

      

      {/* CTA aligned to the right on large screens */}
      <div className=" flex justify-center mt-6  ">
                <Link
                  to="/leadership"
                  className="inline-block border mb-6 btn-base border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
              Our Imaginative team
                </Link>
              </div>

        {/* Optional: bottom spacing */}
        <div className="h-8" />
    </div>
  );
}
