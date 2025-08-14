import React from 'react'
import { Helmet } from 'react-helmet-async'
import { NavLink } from 'react-router-dom';

const Fees: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Fees | St Paul Thomas Academy</title>
      </Helmet>

      <div
        className="flex flex-col min-h-screen bg-[url('/images/fees.webp')] bg-cover bg-center bg-fixed"
      >
        {/* Hero / Intro */}
        <section className="bg-[#083056] py-16">
          <div className="container mx-auto px-4 text-justify">
            <h2 className="text-5xl font-bold text-center text-white mb-4">Our friendly fees</h2>
            <p className="text-white text-2xl text-left max-w-2xl mx-auto">
              At St Paul Thomas Academy, we pride ourselves on offering a value-for-money education. Our dedicated faculty, comprehensive curriculum, and enriching extracurricular activities ensure that students receive a well-rounded education.
              <br /><br />
              We are committed to providing high-quality learning experiences at an affordable cost, making excellent education accessible to all.
              <br /><br />
              With small class sizes, personalized attention, and a supportive community, St Paul Thomas Academy stands out as an institution where families can invest in their children's future with confidence.
            </p>
          </div>
        </section>

        {/* Fee Levels */}
        <section className="bg-transparent mt-40 py-12">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { to: '/grade4fee', label: 'Grade 4 Fees' },
              { to: '/grade5fee', label: 'Grade 5 Fees' },
              { to: '/grade6fee', label: 'Grade 6 Fees' },
            ].map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className="
                  block
                  bg-[#e4af23]
                  text-[#083056]
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
        </section>
      </div>
    </>
  )
}

export default Fees
