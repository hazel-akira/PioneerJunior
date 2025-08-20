import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';

const Location: React.FC = () => (
  <>
    {/* Document head */}
    <Helmet>
      <title>Location |  Pioneer Junior Academy</title>
    </Helmet>

    {/* Header Section */}
    <section className="bg-[#161e2e] text-[#df8811] py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          We look forward to welcoming you to Pioneer Junior Academy
        </h1>
        <div className="mt-4 h-1 w-24 bg-[white] mx-auto"></div>
      </div>
    </section>

    {/* Map Section */}
    <section className="w-full h-96 md:h-[70vh]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4727.025408127233!2d37.16211161123885!3d-0.8280456991604246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828a50c74d53417%3A0xff10395f6befaa0!2sPioneer%20School!5e1!3m2!1sen!2ske!4v1755687867136!5m2!1sen!2ske"
        className="border-0 w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>

    {/* Contact Section with dimmed background */}
    <section className="relative mx-auto px-4 flex items-center justify-center h-[70vh] text-center">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-[url('/images/Map.jpg')] bg-cover bg-center filter brightness-70 "
      />

      {/* Content layer */}
      <div className="relative z-10 text-white max-w-2xl space-y-6">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-lg">
          <a href="tel:+254205038228" className='hover:text-black'><span className=" text-black font-bold">Phone:</span> tel:+254205038228</a>
        </p>
        <p className="text-lg">
          <a href="mailto:admissions@pioneerjunioracademy.co.ke" className='hover:text-black' ><span className="text-black font-bold">Email:</span>  admissions@pioneerjunioracademy.co.ke</a>          
        </p>
        <p className="text-lg">
          <span className="font-bold">Postal Address:</span><br />
          P.O. Box 217-10205<br />
          off Kenol-Murang'a Road,<br />
          Ichagaki, Murang'a County, Kenya
        </p>
      </div>
    </section>
  </>
);

export default Location;
