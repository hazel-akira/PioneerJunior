import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Slider data (images in public/images)
const slides = [
  {
    image: '/images/slider01.jpg',
    title: 'At St Paul Thomas Academy We Nurture And Hone Talents.',
  },
  {
    image: '/images/slide2.PNG',
    title: "Fully Resourced To Meet Your Child's Needs",
  },
  {
    image: '/images/slide3.PNG',
    title: 'Vitae Abundantae | Life In Abundance',
  },
];




// Transparent header over hero
const header = () => (
  <header className="fixed inset-x-0 top-0 z-50 h-[10vh] bg-transparent">
    <nav className="max-w-6xl mx-auto h-full flex items-center justify-between px-4">
      <NavLink to="/" className="text-white font-bold text-xl">
        STPA
      </NavLink>
      <div className="space-x-6">
        <NavLink to="/" className="text-white hover:underline">
          Home
        </NavLink>
        <NavLink to="/about" className="text-white hover:underline">
          About
        </NavLink>
        <NavLink to="/admissions" className="text-white hover:underline">
          Admissions
        </NavLink>
        <NavLink to="/contact" className="text-white hover:underline">
          Contact
        </NavLink>
      </div>
    </nav>
  </header>
);

// Hero slider with fade effect
const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}
    </section>
  );
};

// Sample About section

// Sample Values/Features section


// Simple Footer

export { header as default, HeroSlider };