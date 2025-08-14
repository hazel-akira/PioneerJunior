import React from 'react';
import { GraduationCap, CreditCard, AlertCircle, Mail, CheckCircle, XCircle, Phone } from 'lucide-react';
import { Helmet } from '@dr.pogodin/react-helmet';
interface TermFeeCardProps {
  term: string;
  amount: string;
  isAnnual?: boolean;
}
 
interface OneOffChargeProps {
  title: string;
  amount?: string;
  isFree?: boolean;
}
 
const TermFeeCard: React.FC<TermFeeCardProps> = ({ term, amount, isAnnual = false }) => (
  <div className={`rounded-xl p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 ${
    isAnnual
      ? 'bg-[#f4a024] text-white'
      : 'bg-gray-100 border border-gray-200'
  }`}>
    <div className="flex items-center justify-between mb-4">
      <h3 className={`text-lg font-bold ${isAnnual ? 'text-white' : 'text-gray-800'}`}>
        {term}
      </h3>
      <GraduationCap className={`w-6 h-6 ${isAnnual ? 'text-white' : 'text-[#f4a024]'}`} />
    </div>
    <div className="text-right">
      <span className={`text-2xl font-bold ${isAnnual ? 'text-white' : 'text-[#f4a024]'}`}>
        {amount}
      </span>
    </div>
  </div>
);
 
const OneOffChargeCard: React.FC<OneOffChargeProps> = ({ title, amount, isFree = false }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
        <div className="flex items-center">
          {isFree ? (
            <>
              <CheckCircle className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-[#f4a024] font-semibold">FREE</span>
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5 text-[#f4a024] mr-2" />
              <span className="text-xl font-bold text-gray-800">{amount}</span>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);
 
const PaymentMethodCard: React.FC<{ method: string; accepted: boolean }> = ({ method, accepted }) => (
  <div className={`rounded-lg p-4 border-2 ${
    accepted
      ? 'border-yellow-500 bg-orange-50'
      : 'border-slate-200 bg-slate-50'
  }`}>
    <div className="flex items-center">
      {accepted ? (
        <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
      ) : (
        <XCircle className="w-5 h-5 text-orange-500 mr-3" />
      )}
      <span className={`font-medium ${
        accepted ? 'text-slate-800' : 'text-orange-800'
      }`}>
        {method}
      </span>
    </div>
  </div>
);
 
export default function Grade8Fees() {
  const termFees = [
    { term: "TERM 1", amount: "KES 85,200" },
    { term: "TERM 2", amount: "KES 85,200" },
    { term: "TERM 3", amount: "KES 85,200" }
  ];
 
  const oneOffCharges = [
    { title: "Non-refundable Commitment Fee", amount: "KES 20,000" },
    { title: "Extra charge for uniform, bedding and textbooks", amount: "KES 100,000" },
    { title: "Free transport to and from Nyanyuki, Mombasa, and Embu", isFree: true }
  ];
 
  const paymentMethods = [
    { method: "Pay Bill (M-Pesa)", accepted: true },
    { method: "Banker's Cheque", accepted: true },
    { method: "Cash", accepted: false },
    { method: "Personal Cheques", accepted: false },
    { method: "Post-dated Cheques", accepted: false }
  ];
 
  return (
    <>
    <Helmet>
      <title>  Grade 5 FEES | Pioneer School</title>
    </Helmet>
    <section className="min-h-screen bg-slate-100">
      {/* Hero Section */}
      <div className="bg-[#083056] text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#df8811]">
              Grade 8 FEES
            </h1>
            <p className="text-xl md:text-2xl font-light text-white">
            AT PIONEER JUNIOR ACADEMY, THERE ARE NO HIDDEN COSTS OR CHARGES 
            </p>
          </div>
        </div>
      </div>
 
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Termly Fees Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#083056] mb-8 text-center">
            Termly Fees Structure
          </h2>
         
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {termFees.map((fee, idx) => (
              <TermFeeCard
                key={idx}
                term={fee.term}
                amount={fee.amount}
              />
            ))}
            <TermFeeCard
              term="ANNUAL TOTAL"
              amount="KES 255,600"
              isAnnual={true}
            />
          </div>
        </div>
 
       {/* One-off Charges Section */}
       <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#083056] mb-2 text-center">
              New Students Only
            </h2>
            <p className="text-gray-600 text-center mb-8">One-time charges for first-year students</p>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oneOffCharges.map((charge, idx) => (
                <OneOffChargeCard
                  key={idx}
                  title={charge.title}
                  amount={charge.amount}
                  isFree={charge.isFree}
                />
              ))}
            </div>
          </div>
        </div>
 
        {/* Payment Methods Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#083056] mb-8 text-center">
              Payment Methods
            </h2>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {paymentMethods.map((method, idx) => (
                <PaymentMethodCard
                  key={idx}
                  method={method.method}
                  accepted={method.accepted}
                />
              ))}
            </div>
          </div>
        </div>
 
        {/* Terms & Conditions Section */}
<section className="bg-gradient-to-r from-[#083056] to-slate-900 rounded-2xl shadow-lg p-8 mt-12">
  {/* Heading */}
  <h2 className="text-3xl font-bold text-center text-[#df8811] mb-8">
    Terms & Conditions
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    {/* Bullet List (spans 2 cols on lg) */}
    <ul className="space-y-6 lg:col-span-2">
      <li className="flex items-start">
        <AlertCircle className="w-6 h-6 text-[#df8811] mr-3 mt-1 flex-shrink-0" />
        <p className="text-white text-lg">
          Money paid is <strong className="text-slate-400">not refundable or transferable</strong>
        </p>
      </li>
      <li className="flex items-start">
        <AlertCircle className="w-6 h-6 text-[#df8811] mr-3 mt-1 flex-shrink-0" />
        <p className="text-white text-lg">
          All fees should be paid to <strong className="text-slate-400">PIONEER INTERNATIONAL JUNIOR SCHOOL LIMITED ACCOUNTS ONLY</strong>
        </p>
      </li>
      <li className="flex items-start">
        <AlertCircle className="w-6 h-6 text-[#df8811] mr-3 mt-1 flex-shrink-0" />
        <p className="text-white text-lg">
          The school offers sibling discount of <strong className="text-slate-400">7.5% on tuition fee</strong>
        </p>
      </li>
    </ul>

    {/* Help Card */}
    <div className="bg-slate-700 rounded-xl p-4 flex flex-col justify-between">
      <div className="flex items-center mb-4">
        <Mail className="w-6 h-6 text-[#df8811] mr-3" />
        <h3 className="text-xl font-semibold text-white">Need Help?</h3>
      </div>
      <p className="text-slate-200 mb-4">
        For clarification, contact our finance team:
      </p>
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <a
          href="mailto:finance.enquiries@pioneerjunioracademy.co.ke"
          className="inline-flex items-center px-4 py-2 bg-[#df8811] text-[#083056] rounded-lg font-semibold hover:bg-white transition-colors"
        >
          <Mail className="w-4 h-4 mr-1" /> Send Email
        </a>
        <a
          href="tel:+254205038107"
          className="inline-flex items-center px-4 py-2 bg-[#df8811] text-[#083056] rounded-lg font-semibold hover:bg-white transition-colors"
        >
          <Phone className="w-4 h-4 mr-1" /> +254 20 5038 107
        </a>
      </div>
    </div>
  </div>
</section>

            
          
        
      </div>
    </section>
    </>
  );
}
