
import { Helmet } from '@dr.pogodin/react-helmet';

const  FootballLife: React.FC = () => (
<>
  <div className="min-h-screen font-sans bg-[#083056]">
    <Helmet>
      <title> Football Life | St Paul Thomas Academy</title>
    </Helmet>
<section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
          Football Life
          </h1>
          <div className="mx-auto  mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>
    {/* Hero Section */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center "
      style={{ backgroundImage: "url('/images/football.webp')"}}>
      <div className="absolute inset-0 bg-black/40" />
    </section>
 
    <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Description */}
      <main className="lg:col-span-3 text-2xl font-sans space-y-6 text-gray-100">
        <p>
        At St. Thomas, we recognize the unique challenges and opportunities that come with pursuing a career in football, and we are committed to supporting our student-athletes as they navigate the highs and lows of the beautiful game. <br /> 
       <br />
       
        For aspiring footballers, the journey begins with a love for the sport - a passion that drives them to lace up their boots, step onto the field, and chase their dreams of glory.
     <br />
     <br />
     From an early age, our football program provides student-athletes with the technical skills, tactical knowledge, and physical conditioning they need to compete at the highest levels of the game.  
     </p> </main>
      </div>   
{/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/chef"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
    Chef
    </a>
    </section> 
      
    
  </div>
  </>
);

export default  FootballLife;
