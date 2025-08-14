// src/components/Hero.tsx
import { Link } from "react-router-dom";
import heroImage from "/images/pja-band.png";
import { Helmet } from "react-helmet-async";

const Hero: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | Pioneer Junior Academy</title>
      </Helmet>

      <section
        id="home"
        className="relative min-h-[100vh] font-sans flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Static background image (no slider) */}
        <img
          src={heroImage}
          alt="Pioneer Junior Academy Campus"
          className="absolute inset-0 w-full h-full object-cover object-[50%_25%]"
          loading="eager"
        
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#062747]/80 via-[#062747]/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-32 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase text-white drop-shadow">
              THINK JUNIOR SECONDARY, THINK PIONEER
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/90 max-w-3xl mx-auto">
              We provide a nurturing, future-ready learning environment, grounded
              in excellence and character for every learner.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <a
                href="https://enquireto.pioneergroupofschools.co.ke"
                className="inline-block rounded-lg bg-white/95 text-[#062747] font-bold px-6 py-3 hover:bg-white transition"
              >
                Make An Enquiry
              </a>
              <Link
                to="/join-us"
                className="inline-block rounded-lg border border-white/70 text-white font-bold px-6 py-3 hover:bg-white hover:text-[#062747] transition"
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
