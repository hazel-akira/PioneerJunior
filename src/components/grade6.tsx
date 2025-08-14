// src/pages/JoinGrade4.tsx
import { Helmet } from 'react-helmet-async';
const JoinGrade6: React.FC = () => {
  return (

    <> 
     <Helmet>
    <title> Join Grade 6 | St Paul Thomas Academy </title>
    </Helmet>
  <div className="min-h-screen flex flex-col bg-[#083056]">
    
    {/* Hero */}
    <section
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/grade6.webp')" }}
    >
      <div className="absolute inset-0 bg-[#74d1f6]/20" />
      
    </section>

    {/* Main Content */}
    <main className="flex-grow max-w-4xl mx-auto px-4 py-12 space-y-12" style={{ fontFamily: 'Times New Roman, serif'  }}>
   
      {/* Eligibility */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-4">
          Eligibility Requirements for Joining Grade 6
        </h2>  
        <div className="mx-auto h-4 bg-white w-full"></div>    
      </section>

      {/* CBC Changes */}
      <section>
        
        <ul className="list-decimal list-inside space-y-2 text-xl  text-gray-100">
          <li>
          The student requires to attain a minimum score of achieved expected expectation.
          </li>
          <li>
          The student must provide an original CBC result certificate for Grade 3,4 and 5. (Please first supply us with the original; a copy of the original will be kept by the school) 
          </li>
          <li>
          The student must have a Nemis/Assessment Number or Foreign students must have a unique identification number from the ministry of education of the country of origin. 
          </li>
          <li>
          The student must provide a completed medical test. 
          </li>
          <li>
          The student must provide Certified copies of previous term or grade assessments, transfer forms and Clearance letter from previous school.
          </li>
          <li>
          The student must provide a Leaving Certificate in English (The original will be kept by the school) to be submitted before the start of school. 
          </li>

          <li>
          The student must provide a recommendation Letter from the previous school principal or any person of senior community authority.
          </li>
          <li>
          The student must provide a valid Birth Certificate (Please first supply us with the original; a copy of the original will be kept by the school, OR For Foreigners, Valid passport (Please first supply us with the original; a copy of the original will be kept by the school). 

          </li>
        </ul>
      </section>
      <div className="mx-auto h-4 bg-white w-full"></div>   
      
      
 <section className='text-gray-100 leading-relaxed  mb-4'>
  <h1 className='font-bold uppercase text-2xl'>
    How To Apply</h1>

  <p className='my-4  text-xl'>The student can apply to Join St Paul Thomas Academy by either applying online, download the application form and submit to our offices or visiting our offices and fill out the applications forms  </p>
  <h1 className='font-bold uppercase text-2xl'>

    {/* Calls to Action */}
<section className="flex flex-col sm:flex-row gap-4 justify-center">
    
    <a
      href="https://enquireto.pioneergroupofschools.co.ke"
      target="_blank"
      rel="noopener"
      className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
      Join to Register
    </a>
  </section>
  <div className="mx-auto h-4 my-4 bg-white w-full"></div>  
  WHAT HAPPENS NEXT ?</h1>
  <p className='my-4  text-xl'>The student can apply to Join St Paul Thomas Academy by either applying online, download the application form and submit to our offices or visiting our offices and fill out the applications forms  </p>
  <ul className="list-decimal list-inside space-y-2 text-xl  text-gray-100">
          <li className='font-bold'>
          Review of Applications forms
          </li>
          <p>All application forms are reviewed to confirm if all information has been provided and if all supporting documents have been attached. </p>
          <li className='font-bold'>
          Invite eligible applicants for an interview.
           </li><p>Applicants that meet the minimum eligibility criteria are invited to the school for school tour and interview </p>
         
          <li className='font-bold'>
          Select candidates for admission.
            </li><p>Once you have visited the school and passed the interview, you application is submitted for further review by admission department</p>
        
          <li className='font-bold'>
          Offer Letter
          </li>
          <p>Once prospective candidates are reviewed, the admissions department will send OFFER LETTERS to prospective candidates and students</p>
          <li className='font-bold'>
          Acceptance letters.
          </li>
          <p>Once prospective candidates has received an OFFER LETTER, they are required to ACCEPT OR REJECT as prospective students.
          <br />
          If accepted, the candidate is required to pay a commitment fee in addition to ACCEPTING THE OFFER 
          </p>
          <li className='font-bold'>
          Admission letter</li>
          <p>Once prospective student Submits the ACCEPTANCE LETTERS and Commitment fee, the student is sent an ADMISSION LETTER </p>

          
        </ul>

 </section>
 {/* Calls to Action */}
 <section className="flex flex-col sm:flex-row gap-4 justify-center">
    
    <a
      href="/adm"
      rel="noopener"
      className="inline-block border mb-6 border-[#bdd6f0] bg-[#e4af23]  px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
    Admission Policy
    </a>
  </section>
 

    </main>

  
  </div>
  </>
);
}
export default JoinGrade6;
