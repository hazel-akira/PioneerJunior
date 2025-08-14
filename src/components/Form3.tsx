// src/pages/JoinForm3.tsx



const JoinForm3: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-white">
 

    {/* Hero */}
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/form-3.png')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-60" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Join Form 3
        </h1>
      </div>
    </section>

    <main className="flex-grow max-w-4xl mx-auto px-4 py-12 space-y-16">
      {/* Eligibility Requirements */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          Eligibility Requirements for Joining Form 3
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Minimum KCPE score of 350 or higher.</li>
          <li>Provide original KCPE certificate (copy kept by school).</li>
          <li>Supply NEMIS/Assessment Number or, for foreign students, a Ministry of Education ID.</li>
          <li>Pass a medical examination.</li>
          <li>Provide recent Form 1 & Form 2 report forms (original; copy kept by school).</li>
          <li>Provide a Leaving Certificate in English (original; copy kept by school).</li>
          <li>Submit a recommendation letter from previous school principal.</li>
          <li>Provide a valid Birth Certificate (or foreign passport; originals and copies kept by school).</li>
        </ol>
        <p className="mt-4 text-gray-600 italic">
        
        </p>
      </section>

      {/* How to Apply */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          How to Apply
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Apply online, download and submit the form to our offices, or visit us in person and complete the application at our campus.
          
        </p>
        <div className="mt-6 text-center">
          <a
            href="https://enquireto.pioneergroupofschools.co.ke"
            className="inline-block bg-[#E4AF23] text-[#093056] font-bold py-3 px-8 rounded-lg hover:bg-yellow-500 transition"
          >
            Join to Register
          </a>
        </div>
      </section>

      {/* What Happens Next */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          What Happens Next?
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            Review applications to confirm all information and supporting documents are complete.
          </li>
          <li>
            Invite eligible applicants for a school tour and interview.
          </li>
          <li>
            Select candidates for admission and submit their applications for further review.
          </li>
          <li>
            Issue offer letters to successful candidates.
          </li>
          <li>
            Accepted candidates confirm or decline the offer and pay a commitment fee.
          </li>
          <li>
            Upon receipt of acceptance and fee, send the official admission letter.
          </li>
        </ol>
        <p className="mt-4 text-gray-600 italic">
         
        </p>
      </section>
    </main>

    
  </div>
)

export default JoinForm3
