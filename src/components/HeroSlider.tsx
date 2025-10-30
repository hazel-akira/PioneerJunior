 
import { Helmet } from "@dr.pogodin/react-helmet";
{/* import heroImage from "/images/kjsea.jpg";
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
       Background image   object-[15%_60%]
        <img
          src={heroImage}
          alt="Pioneer Junior Academy Campus"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />

        {/* Overlay (optional — use lighter opacity for readability) 
        <div className="absolute inset-0 " />

        {/* Content 
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
*/}


import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Kjseawishes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
   "/images/kjsea.jpg",
  "/images/kjsea1.png",
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <>
    <Helmet>
      <title>Home | Pioneer Junior Academy</title>
    </Helmet>
    <div className="relative w-full bg-white">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: "800px" }}
      >
        {/* Image Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}

        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />

        {/* Prev / Next Buttons */}
        <button
          onClick={() => {
            prevSlide();
            setIsAutoPlaying(false);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-12 h-3 bg-white"
                  : "w-3 h-3 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle 
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-medium z-10"
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button>*/}
      </div>
    </div>
    </>
  );
};

export default Kjseawishes;
