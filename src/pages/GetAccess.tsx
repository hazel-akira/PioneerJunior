// src/pages/GetAccess.tsx
import { Helmet } from 'react-helmet-async';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'


const portals = [
  {
    name: 'KICD Upper Primary',
    url: 'https://kicd.ac.ke/cbc-materials/curriculum-designs/rationalised-curriculum-design/',
  },
  {
    name: 'CBA Parent Portal',
    url: 'https://cba.knec.ac.ke/Parent/',
  },
  {
    name: 'National Presidential Working Committee',
    url: 'https://www.education.go.ke/node/429/',
  },
  {
    name: 'National Curriculum Policy',
    url: 'https://kicd.ac.ke/curriculum-reform/national-curriculum-policy/',
  },
  {
    name: 'Ministry Of Education',
    url: 'https://education.go.ke/',
  },
  {
    name: 'NEMIS Poratal',
    url: 'https://nemis.education.go.ke/',
  },
  {
    name: 'KNEC Portal',
    url: 'https://www.knec.ac.ke/',
  },

]

const GetAccess: React.FC = () => {
  return(
    <>  <Helmet>
    <title> Get Access | St Paul Thomas Academy</title>
  </Helmet>
  <div className="flex flex-col min-h-screen font-sans bg-cover bg-center"
  >
  
    {/* Hero / Intro */}
    <main className="flex-grow brightness-100 py-16 px-4">
    <div className="absolute inset-0 bg-[#093056] opacity-50" />
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
            className="bg-[#74d1f6] rounded-lg shadow-md hover:shadow-xl transition p-6 flex flex-col items-center justify-center text-center"
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
