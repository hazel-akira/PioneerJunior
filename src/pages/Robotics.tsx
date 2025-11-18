
import { Helmet } from '@dr.pogodin/react-helmet';

const CodingLife: React.FC = () => (
  <>
 <Helmet>
      <title> Robotics Life | Pioneer Junior Academy</title>
    </Helmet>

  <div className="min-h-screen bg-[#161e2e] text-white">
  
  <section className="py-12 h-[20vh]">
        <div className="max-w-6xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl text-left text-white mb-4">
         Robotics Life
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>

    {/* Hero Section */}
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/robotics.jpg')" }}>
      <div className="absolute inset-0 bg-[#74d1f6]/30" /> 
    </section>

    {/* Main Content */}
    <section className=" text-white py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">         
         <p className="text-gray-100 text-4xl leading-relaxed">
         Introducing the newly established ROBOTICS CLUB at our school, where students can explore the fascinating world of robotics and technology. </p>
        </div>
      </section>
   

         {/* Calls to Action */}
        <section className="flex flex-col sm:flex-row gap-4 justify-center">
         <a
      href="/basket"
      rel="noopener"
      className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
     BasketBall Life
         </a>
         </section> 
  </div>
  </>
);

export default CodingLife;
