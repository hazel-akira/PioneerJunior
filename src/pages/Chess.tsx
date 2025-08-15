
import { Helmet } from '@dr.pogodin/react-helmet';

const ChessMasters: React.FC = () => (

  <div className="min-h-screen bg-[#161e2e]">
    <Helmet>
      <title>Chess Masters | Pioneer Junior Academy</title>
    </Helmet>
<section className="py-12 h-[20vh]">
        <div className="max-w-4xl mx-auto py-6 space-y-6 px-4 text-left">
          <h1 className="text-4xl font-sans text-left text-white mb-4">
          Chess Masters
          </h1>
          <div className="mx-auto mb-6 h-4 bg-white w-full"></div>
        </div>
      </section>
    {/* Hero Section */}
    <section
      className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/chess.jpg')"}}>
      <div className="absolute inset-0 bg-black/40" />
    </section>
 
    <div className="container max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Description */}
      <main className="lg:col-span-3 text-4xl space-y-6 text-gray-100">
        <p>
        Welcome to the CHESS CLUB at our school, where strategy meets fun and friendships are formed over the chessboard. </p>
        
      </main>
      </div>
     
    
{/* Calls to Action */}
<section className="flex flex-col mt-6 sm:flex-row gap-4 justify-center">
    
    <a
    href="/coding"
    rel="noopener"
    className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
    Robotics Life
    </a>
    </section> 
      
    
  </div>
);

export default ChessMasters;
