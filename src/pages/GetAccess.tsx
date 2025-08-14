// src/pages/GetAccess.tsx
import { Helmet } from '@dr.pogodin/react-helmet';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'


const portals = [
  {
    name: 'KICD Junior school (CBE)',
    url: 'https://kicd.ac.ke/cbc-materials/curriculum-designs/',
  },
  {
    name: 'CBA Parent Portal',
    url: 'https://cba.knec.ac.ke/Parent/',
  },
  {
    name: 'National Curriculum Policy',
    url: 'https://kicd.ac.ke/curriculum-reform/national-curriculum-policy/',
  }, 
  {
    name: 'NEMIS Portal',
    url: 'https://nemis.education.go.ke/',
  },
  {
    name: 'Ministry Of Education',
    url: 'https://education.go.ke/',
  },
 
  {
    name: 'KNEC Portal',
    url: 'https://www.knec.ac.ke/',
  },

]

const GetAccess: React.FC = () => {
  return(
    <>  <Helmet>
    <title> Get Access | Pioneer Junior Academy</title>
  </Helmet>
  <div className="flex flex-col min-h-screen font-sans bg-cover bg-center"
  >
  
    {/* Hero / Intro */}
    <main className="flex-grow brightness-100 py-16 px-4" style={{ backgroundImage: "url('/images/access.jpg')"}}>
    <div className="absolute inset-0 bg-[#093056] opacity-25" />
      <section className="max-w-4xl  w-screen mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold brightness-100   text-white mb-4">
          Get Access to Information & Resources
        </h1>
        <p className="text-gray-100 brightness-100 ">
          Quick links to essential portals for students, parents and staff.  
        </p>
      </section>

      {/* Portal Cards */}
      <div className="max-w-6xl brightness-100  mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {portals.map((portal) => (
          <a
            key={portal.name}
            href={portal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#74d1f6] rounded-3xl shadow-md hover:shadow-2xl hover:bg-[#df8811] transition p-6 flex flex-col items-center justify-center text-center"
          >
            <ArrowTopRightOnSquareIcon className="w-8 h-8 text-[#093056] font-bold mb-4" />
            <h2 className="text-lg text-[#093056] font-bold">
              {portal.name}
            </h2>
          </a>
        ))}
      </div>
    </main>

  
  </div>
  </>
)
}
export default GetAccess
