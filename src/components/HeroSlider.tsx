import heroImage from "/images/image.png";
import { Helmet } from "@dr.pogodin/react-helmet";

const Hero: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | Pioneer Junior Academy</title>
      </Helmet>

      <section
        id="home"
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#062747]"
      >
        {/* Background image */}
        <img
          src={heroImage}
          alt="Pioneer Junior Academy Campus"
          className="absolute inset-0 w-full h-full object-contain   "
          loading="eager"
          decoding="async"
        />

        {/* Overlay (optional — use lighter opacity for readability) */}
        <div className="absolute inset-0 " />

        {/* Content */}
        <div className="relative z-10 w-full text-center px-4 md:px-8 py-24 md:py-32">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase text-white drop-shadow-lg">
            THINK JUNIOR SECONDARY, THINK PIONEER
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/90 max-w-3xl mx-auto">
            We provide a nurturing, future-ready learning environment, grounded
            in excellence and character for every learner.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
