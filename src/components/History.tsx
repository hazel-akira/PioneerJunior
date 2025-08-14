import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination, Navigation } from 'swiper/modules';
// register modules


// replace with your actual slide image paths
const slides = [
  '/images/history1.webp',
  '/images/history2.webp',
  '/images/history3.webp',
  // …
]

const History: React.FC = () => (
  <>
    <Helmet>
      <title>Our History | St Paul Thomas Academy</title>
    </Helmet>

    {/* Top bar */}
    <div className="bg-[#062747]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-8">
        <h2 className="text-white text-3xl md:text-4xl font-semibold">
          A Timeline of our history
        </h2>
        <Link
          to="/leadership"
          className="inline-block border mb-6 border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
          Meet Our Talent Team
        </Link>
      </div>
    </div>

    {/* Slider */}
    <div className="container mx-auto py-8 px-4 md:px-8">
      <div className="border-4 border-[#86C6F4] rounded-lg overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="relative"
        >
          {slides.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`History slide ${idx + 1}`}
                className="w-full object-contain block bg-white"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </>
)

export default History
