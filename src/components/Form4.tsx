// src/pages/JoinForm4.tsx



const JoinForm4: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-white">


    {/* Hero */}
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/form_4.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#093056] opacity-60" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Join Form 4
        </h1>
      </div>
    </section>

    {/* Main Content */}
    <main className="flex-grow max-w-4xl mx-auto px-4 py-12 space-y-12">
      {/* Eligibility Requirements */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          Eligibility Requirements for Joining Form 4
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            Minimum KCPE score of 350 or higher.
          </li>
          <li>
            Provide original KCPE certificate (school keeps a copy).
          </li>
          <li>
            Supply NEMIS/Assessment Number or for foreign students, a valid Ministry of Education ID. 
          </li>
          <li>
            Pass a medical examination. 
          </li>
          <li>
            Provide recent Form 1, Form 2 & Form 3 report forms (originals; school retains copies).
          </li>
          <li>
            Submit a Leaving Certificate in English (original; school retains copy). 
          </li>
          <li>
            Recommendation letter from your previous school principal. 
          </li>
          <li>
            Valid Birth Certificate (original; school retains copy), or for foreigners a valid passport. 
          </li>
        </ol>
      </section>

      {/* How to Apply */}
      <section>
        <h2 className="text-2xl font-semibold text-[#093056] mb-4">
          How to Apply
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          The student can apply by either applying online, downloading the application form and submitting it to our offices, or visiting our offices in person to complete the form. 
        </p>
        <div className="text-center">
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
            Review of application forms to confirm completeness and supporting documents. 
          </li>
          <li>
            Eligible applicants invited for a school tour and interview. 
          </li>
          <li>
            Selection of candidates for admission by the admissions department. 
          </li>
          <li>
            Offer letters sent to successful candidates. 
          </li>
          <li>
            Accepted candidates confirm or decline the offer and pay a commitment fee. 
          </li>
          <li>
            Upon receipt of acceptance letter and fee, an official admission letter is issued. 
          </li>
        </ol>
      </section>
    </main>


  </div>
);

export default JoinForm4;
