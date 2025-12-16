import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

const KJSEAwishes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    "/images/congrats3.png",
    "/images/congrats2.webp",
    //"/images/congrats1.webp",
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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <div className="relative w-full h-50px bg-white">
      <div className="relative w-full overflow-hidden aspect-[16/9] md:aspect-[16/9] sm:aspect-[4/3] xs:aspect-[4/3]">
  {images.map((image, index) => (
    <div
      key={index}
      className={`absolute top-0 left-0 w-full h-100vh  transition-opacity duration-700 ${
        index === currentIndex ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className="w-full h-100vh object-cover object-center"
        loading="lazy"
      />
    </div>
  ))}
    </div>  

        {/* Overlay gradient */}
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
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-10">
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

        {/* Auto-play Toggle */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-medium z-10"
        >
          {isAutoPlaying ? "Pause" : "Play"}
        </button>

        {/* CTA Floating Button to KJSEA Page */}
<Link
  to="/kjsea" // Change to your route
  className="fixed bottom-30 right-100px md:right-14 bg-black hover:bg-[#df8811] text-white px-4 py-2 rounded-full shadow-xl text-base font-semibold transition-all duration-300 z-30 flex items-center justify-center"
>
  Our KJSEA Performance
</Link>
      </div>
  
  );
};

export default KJSEAwishes;
