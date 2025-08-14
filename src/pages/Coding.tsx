
import { Helmet } from '@dr.pogodin/react-helmet';

const CodingLife: React.FC = () => (
  <>
 <Helmet>
      <title>Coding Life | St Paul Thomas Academy</title>
    </Helmet>

  <div className="min-h-screen bg-[#083056] text-white">
  
  <section className="py-12 h-[20vh]">
        <div className="max-w-6xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
          Coders Life
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/coding.webp')" }}>
      <div className="absolute inset-0 bg-[#74d1f6]/30" /> 
    </section>

    {/* Main Content */}
    <section className="bg-[#083056] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">         
         <p className="text-gray-100 text-xl leading-relaxed">
          For many students, the journey into the world of coding begins with a curiosity and a desire to understand how technology works. Through introductory courses and hands-on workshops, we introduce students to the fundamentals of programming languages such as Python, Java, and C++, helping them develop a solid foundation in coding syntax, logic, and problem-solving techniques.
        </p>
        </div>
      </section>
   

         {/* Calls to Action */}
        <section className="flex flex-col sm:flex-row gap-4 justify-center">
         <a
      href="/seafarers"
      rel="noopener"
      className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
     Seafarers
         </a>
         </section> 
  </div>
  </>
);

export default CodingLife;
