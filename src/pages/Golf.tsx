
import { Helmet } from '@dr.pogodin/react-helmet';

const  Golf: React.FC = () => (
<>
  <div className="min-h-screen  bg-[#161e2e]">
    <Helmet>
      <title> Golf | St Paul Thomas Academy</title>
    </Helmet>
<section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl  text-left text-white mb-4">
           Golf Life
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>
    {/* Hero Section */}
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center "
      style={{ backgroundImage: "url('/images/Golf.jpg')"}}>
      <div className="absolute inset-0 bg-black/40" />
    </section>
 
    <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Description */}
      <main className="lg:col-span-3 text-3xl space-y-6 text-gray-100">
        <p>
        Discover the ultimate golf training experience with our top-rated weekly weekend program.
Our students receive expert coaching every Friday from a renowned USPGA professional at a prestigious golf course.<br />

       </p>
       </main>
       </div>   
{/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/farmers"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
Farmers Club 
    </a>
    </section> 
      
    
  </div>
  </>
);

export default  Golf;
