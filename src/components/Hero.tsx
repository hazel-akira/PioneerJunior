const Hero = () => (
  <section
    className="w-full min-h-[90vh] flex flex-col justify-center items-center relative bg-cover bg-center brightness-80"
    style={{
      backgroundImage: "url('/images/hero.jpg')",
    }}
  >
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white brightness-100 drop-shadow mb-8">
        CONGRATULATIONS TO KCSE CLASS OF 2024
      </h1>
      <div className="bg-[#6f1d52] bg-opacity-90 px-8 py-5 rounded-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          GRADE 10 ADMISSIONS IN AUG 2025
        </h2>
      </div>
    </div>
  </section>
);

export default Hero;
