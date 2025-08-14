import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const AdmissionsPolicy: React.FC = () => (
  <div className="min-h-screen bg-[#083056]"
  style={{ fontFamily: 'Times New Roman, serif'  }}>
    <Helmet>
      <title>Admissions Policy | St Paul Thomas Academy</title>
    </Helmet>

    <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <main className="lg:col-span-3 space-y-6 text-white">
        <h2 className="text-3xl  font-bold uppercase text-white">Admissions Policy</h2>
        <div className="mx-auto h-4 bg-white w-full"></div>  
        <div className=' text-xl'>
            <p>
          Application and admission to St Paul Thomas Academy is free, transparent and open to all eligible students regardless of race, religion and socio-economic class.
        </p>
        <br />
        <p>
          St. Paul Thomas Academy maintains a strong emphasis on academic achievement and selects students based primarily on their academic and talents attainment.
        </p>
        <br />
        <p>
          Our learning institution is committed to providing a nurturing and inclusive environment where students in grades 4 to 6 can thrive academically, socially, and emotionally.
        </p>
        <br />
        <p>
          We strive to foster a love for learning, critical thinking skills, and a sense of responsibility within each student.
        </p>
        <br />
        <p>
          While we prioritize academic excellence, we also recognize the importance of a student's willingness to learn and their potential for growth.
        </p>
        </div>
        <Link
          to="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
          className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
          Join to Register
        </Link>

        <h3 className="text-2xl font-bold uppercase text-white">
          Admissions to Registration Process Overview
        </h3>
        <ol className="list-decimal text-xl list-inside space-y-2">
          <li>
            <strong className='text-[#e4af23]'>Application Submission</strong> – Prospective students must complete and submit an application form along with required documents, such as academic transcripts and recommendation letters.
          </li>
          <li>
            <strong className='text-[#e4af23]'>Interview and Assessment</strong> – Shortlisted applicants may be invited for an interview and/or assessment to evaluate their academic readiness and suitability for our learning environment.
          </li>
          <li>
            <strong className='text-[#e4af23]'>Admissions Decision</strong> – Admissions decisions will be based on a holistic review of the applicant's academic record, interview performance, and other relevant factors. Decisions will be made without regard to race, ethnicity, gender, religion, or socioeconomic background.
          </li>
        </ol>
      </main>
</div>
      {/* Calls to Action */}
 <section className="flex flex-col sm:flex-row gap-4 justify-center">
    
    <a
      href="/location"
      rel="noopener"
      className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
     Our Location
    </a>
  </section>
    
  </div>
);

export default AdmissionsPolicy;
