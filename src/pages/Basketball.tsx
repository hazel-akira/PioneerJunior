
import { Helmet } from '@dr.pogodin/react-helmet';

const  BasketballLife: React.FC = () => (
<>
  <div className="min-h-screen bg-[#083056]">
    <Helmet>
      <title> Basketball Life | St Paul Thomas Academy</title>
    </Helmet>
<section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
         Basketball Life
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>
    {/* Hero Section */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center "
      style={{ backgroundImage: "url('/images/basket.webp')"}}>
      <div className="absolute inset-0 bg-black/40" />
    </section>
 
    <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Description */}
      <main className="lg:col-span-3 text-2xl space-y-6 text-gray-100">
        <p>
        Under the guidance of experienced coaches and trainers, student-athletes receive personalized instruction tailored to their position, skill level, and goals.
        <br /> 
        Through rigorous practice sessions, skill development drills, and game simulations, they refine their shooting, passing, dribbling, and defensive abilities, honing their craft and striving for mastery in every aspect of the game. 
     </p> </main>
      </div>   
{/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/football"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
     FOOTBALL  Life
    </a>
    </section> 
      
    
  </div>
  </>
);

export default  BasketballLife;
