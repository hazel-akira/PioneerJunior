
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async';

const Nurturing: React.FC = () => {
  return (
    <>  <Helmet>
    <title> Our Nurturing Management team | St Paul Thomas Academy</title>
    </Helmet>
   
      <div className="flex flex-col min-h-screen bg-[#13365f] font-sans ">
      <section className="bg-[#062747] h-[30vh] py-6">
        <div className="max-w-3xl mx-auto  mt-20 px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">
        Meet Our Nurturing Management team. 
        </h2>
        <Link
          to="/perfomance"
          className="inline-block border mb-6 mt-6 border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-semibold text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
        Past Perfomance
        </Link>
        </div>
      </section>
          
            <div className=" rounded-xl shadow-lg  flex flex-col items-center">
              <img
                src="/images/Pst Njeru.webp"
                alt="Chaplain"
                className="w-full h-auto object-cover shadow-md mb-4"
              />
            </div>
        
       
    </div>
    </>
  );
};
 
export default Nurturing;