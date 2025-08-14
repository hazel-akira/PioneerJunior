import { Helmet } from '@dr.pogodin/react-helmet';

const Talent: React.FC = () => (
  <>
  <Helmet>
      <title>Talents | St Paul Thomas Academy</title>
    </Helmet>

  <div className="min-h-screen font-sans bg-[#083056]">
  <section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
          Talents @ St Paul Thomas Academy
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>


    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/talent.webp')" }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/30" />
      <div className="relative z-10 text-center flex flex-col items-center space-y-6">
      </div>
    </section>

 ;


    {/* Main Content */}
    <section className="container max-w-4xl mx-auto l px-4 font-sans py-16 space-y-8 text-gray-100">
    <p className="text-gray-100 text-xl leading-relaxed">
      The process of honing talent begins with recognition - an acknowledgment of the innate gifts and passions that each individual possesses. Through observation, assessment, and open dialogue, we work closely with students to identify their strengths, interests, and areas for growth, laying the groundwork for a personalized journey of talent development. 
</p>
    
    <br />
    <p className="text-gray-100 text-xl leading-relaxed"> Once talents are identified, the next step is cultivation - providing students with the knowledge, skills, and opportunities they need to nurture and refine their abilities. Whether it's through specialized classes, workshops, mentorship programs, or extracurricular activities, we offer a wide range of resources and experiences to help students deepen their understanding, expand their horizons, and push the boundaries of their talent. 
      
         </p>
    </section>

    {/* Calls to Action */}
    <section className="flex flex-col mt-6 font-sans sm:flex-row gap-4 justify-center">
    <a
    href="/band"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
    Talent Recognition
    </a>
    </section> 
  </div>
  </>
);

export default Talent;
