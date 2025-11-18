{/*import React from "react";

const ExamBanner: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-[#13365f] text-white py-3">
      <div className="whitespace-nowrap animate-marquee text-lg font-semibold">
        🎓 Best wishes to all our KJSEA candidates! 🌟
        To all our inaugural grade 9 class 2025, we are proud of you. Best Wishes💪
        <br />
        <h2 className="text-center">#KJSEA 2025</h2>
      </div>

       Regular <style> instead of <style jsx> 
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ExamBanner;
*/}
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  {
    title: "🎓 Best Wishes to Our KPSEA Candidates!",
    image:"",
    text: "You’ve worked hard, learned a lot, and grown beautifully. As you sit for your exams, remember — confidence and calmness are your greatest strengths.",
    color: "from-blue-900 via-green-700 to-black",
  },
  {
    title: "🌟 All the Best to Our KJSEA Candidates!",
    text: "You’ve prepared with focus and determination. Now it’s your time to shine — believe in yourself and show what you can do!",
    color: "from-green-800 via-blue-800 to-black",
  },
  {
    title: "✨ From All of Us at [School Name]",
    text: "We’re proud of you! Go forth and make us shine. Your hard work, courage, and faith will lead you to success!",
    color: "from-black via-blue-900 to-green-800",
  },
];

const ExamGoodLuckSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden text-white min-h-[60vh] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className={`absolute inset-0 bg-gradient-to-r ${messages[current].color} flex flex-col items-center justify-center text-center px-6`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {messages[current].title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-100">
            {messages[current].text}
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mt-6 inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow-md"
          >
            Keep Going, Future Leaders!
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 flex space-x-3">
        {messages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === current ? "bg-yellow-400" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ExamGoodLuckSlider;
