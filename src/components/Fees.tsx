import React from 'react'
import { Helmet } from '@dr.pogodin/react-helmet'
import { NavLink } from 'react-router-dom';

const Fees: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Fees | Pioneer Junior Academy</title>
      </Helmet>

      <div
        className="flex flex-col min-h-screen bg-[url('/images/fees.jpg')] bg-cover bg-center bg-fixed"
      >
        {/* Fee Levels */}
        <section className="bg-transparent mt-40 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { to: '/grade7fee', label: 'Grade 7 Fees' },
              { to: '/grade8fee', label: 'Grade 8 Fees' },
              { to: '/grade9fee', label: 'Grade 9 Fees' },
            ].map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className="
                  block
                  bg-[#74d1f6]
                  text-white
                  font-lobster
                  text-3xl
                  py-6 px-4
                  rounded-full
                  shadow
                  hover:shadow-lg
                  transition
                  text-center font-bold
                "
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div><p className='font-sansita text-3xl py-6 px-70 font-extrabold '>Invest in your childs <br />future with <br /> confidence </p></div>
        </section>
      </div>
    </>
  )
}

export default Fees
