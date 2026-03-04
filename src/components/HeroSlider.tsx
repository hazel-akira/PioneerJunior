import { Link } from "react-router-dom";
import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";

const HeroSlider: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Home | Pioneer Junior Academy</title>
      </Helmet>

      <section className="relative overflow-hidden bg-[#0f1b2b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_55%,#0f1b2b,transparent_45%),radial-gradient(circle_at_75%_85%,#b9782a,transparent_35%),linear-gradient(120deg,#0f1b2b,#0b0a2d_45%,#120b36_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:90px_90px] opacity-10" />

        <div className="relative mx-auto flex min-h-[100vh] w-90% max-w-8xl flex-col items-center gap-12 px-6 py-20 md:px-5 lg:flex-row lg:items-stretch lg:gap-5 lg:py-12">
          <div className="w-full max-w-7xl px-12 py-12 lg:px-12 text-center text-white lg:w-1/2">
          
            <h1 className="mt-6 text-xl  font-semibold leading-tight md:text-6xl">
            Your journey to elite football starts at PioneerxSD Huesca Football Academy.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-lg">
            The PioneerxSD Huesca launches a new world-class Football Development Academy
            </p>

            <div className="mt-10 flex py-12 px-12 text-center flex-wrap items-center gap-4">
              <Link
                to="https://football-academy.pioneergroupofschools.co.ke/main/register"
                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0f0f21] transition hover:bg-white/90"
              >
               Join our Academy
              </Link>
              <a
  href="/files/The Pioneer School Newsletter Issue 7-3.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-lg border border-white/25 bg-black/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
>
                More about the football academy
              </a>
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:w-1/2 lg:self-stretch">
          
            <img
              src="/images/footballAcademy.webp"
              alt="Pioneer School students in action"
              className="relative h-full min-h-[480px] w-full  rounded-[2rem] object-cover lg:min-h-0"
            />
            <div className="pointer-events-none absolute inset-y-0 rounded-[2rem] left-0 w-24 bg-gradient-to-r from-[#0f1b2b] via-[#0f1b2b]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0  rounded-[2rem] right-0 w-16 bg-gradient-to-l from-[#0f1b2b]/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0  rounded-[2rem]top-0 h-16 bg-gradient-to-b from-[#0f1b2b]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 rounded-[2rem] bottom-0 h-16 bg-gradient-to-t from-[#0f1b2b]/70 to-transparent" />

<a
  href="/kjsea"
  className="fixed animate-slow-pulse bottom-18 right-34 md:right-18 lg:right-30 bg-[#0f1b2b] hover:bg-[#df8811] text-white px-6 py-4 rounded-full shadow-2xl text-lg md:text-xl font-bold transition-transform duration-300 hover:scale-110 flex items-center justify-center z-30 animate-pulse"
>
  Our KJSEA Performance
</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;
