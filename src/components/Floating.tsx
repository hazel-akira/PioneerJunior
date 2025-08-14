// src/components/FloatingActions.tsx
import React from 'react'
//import { Link } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'

export const Floating: React.FC = () => (
  <>
    {/* Enroll button (fixed, bouncing) */}
    <div className="fixed bottom-8 font-sans left-10 z-50 animate-bounce">
      <a
        href="https://enquireto.pioneergroupofschools.co.ke/SignIn?ReturnUrl=%2F"
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-16 h-16
          bg-[#74d1f6] text-black
          hover:bg-[#bfd5ee] hover:text-gray-900
          shadow-lg rounded-full
          flex items-center justify-center
          text-center text-sm font-extrabold font-serif
          transition-colors
        "
        title="Enroll Today"
      >
        Enroll Today
      </a>
    </div>

    {/* Scroll-to-top button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="
        fixed bottom-2 right-2 z-50
        bg-[#74d1f6] backdrop-blur-md
        w-10 h-10 rounded-full
        hover:bg-opacity-40
        flex items-center justify-center
        transition
      "
      aria-label="Scroll to top"
    >
      <ArrowUp className="text-black" size={20} />
    </button>
  </>
)
