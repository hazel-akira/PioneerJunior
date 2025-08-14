// src/pages/TermsAndConditions.tsx
import React from 'react'
import { Helmet } from 'react-helmet-async';

const TermsAndConditions: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | St Paul Thomas Academy</title>
      </Helmet>
      <div
        className="bg-[#083056]/20 min-h-screen text-[#083056] py-16 px-4"
        
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Page title */}
          <h1 className="text-6xl font-bold text-[#083056]">
            School Fees Terms &amp; Conditions
          </h1>
          <div className="w-full border-t-2 border-[#df8811] h-5 mt-0.5 mb-0.5 text-left" />

          {/* Intro (if any) */}
          <div className="mt-10 px-8">
            <p className="text-xl mt-10 text-left">
              Please read the following carefully before making payment of school fees.
            </p>

            {/* Conditions list */}
            <ul className="list-decimal list-inside space-y-2">
              <li>
                School fees are due at the beginning of each term and must be paid in
                full before classes begin.
              </li>
              <li>
                All fees should be paid directly into St Paul Thomas Academy accounts only.
              </li>
              <li>
                Money paid is <strong>not refundable</strong> or transferable to
                another account under any circumstances.
              </li>
            </ul>
          </div>

          {/* Payment modes */}
          <h2 className="text-2xl font-semibold text-[#083056]">
            Accepted Modes of Payment
          </h2>
          <ul className="list-decimal list-inside space-y-2 px-10">
            <li>Pay Bill M-PESA</li>
            <li>Bankers’ Cheque</li>
            <li>
              Cash, personal and post-dated cheques are <strong>not accepted</strong>.
            </li>
          </ul>

          {/* Contact for clarifications */}
          <p>
            For clarification, please email us at{' '}
            <a
              href="mailto:finance.enquiries@stpaulthomasacademy.co.ke"
              className="underline text-[#df8811]"
            >
              finance.enquiries@stpaulthomasacademy.co.ke
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default TermsAndConditions
