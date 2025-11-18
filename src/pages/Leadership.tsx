// src/pages/OurImaginativeTeam.tsx

import { Helmet } from "@dr.pogodin/react-helmet";
import { Link } from "react-router-dom";

export default function OurImaginativeTeam() {
  return (
    <div className="bg-[#161e2e] min-h-screen  text-white" >
      <Helmet>
        <title>Our Imaginative Team | Pioneer Junior Academy</title>
      </Helmet>

{/* Top bar / breadcrumb area */}

      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-bold">Our Imaginative Team</h1>
          <div className="mt-4 h-4 w-full bg-white/90" />
        </div>
      </section>

      <div className="min-h-screen bg-[#161e2e] py-10">
        {/* Big rounded panel like the screenshot background */}
        <div className="mx-auto max-w-6xl rounded-2xl bg-[#d4d6da] shadow-[0_10px_30px_rgba(0,0,0,.25)] ring-1 ring-black/10 p-6 md:p-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(280px,420px)_1fr] items-center">
            {/* LEFT: Framed portrait */}
            <div className="mx-auto md:mx-0">
              {/* Outer frame */}
              <div className="rounded-md bg-neutral-800 p-4 md:p-5 shadow-[10px_10px_0_rgba(0,0,0,.35)]">
                {/* White mat */}
                <div className="bg-white p-5 md:p-7">
                  {/* Actual image (keeps face in view) */}
                  <div className="relative aspect-[3/4] w-[240px] md:w-[300px] lg:w-[340px]">
                    <img
                      src="/images/Kinyanjui.jpg"
                      alt="Mr Stanley Kinyanjui- Head Master"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Text block with rules */}
            <div className="flex mb-12 flex-col">
              <h1 className="text-3xl md:text-5xl font-extrabold text-black/90 tracking-tight">
              Mr Stanley Kinyanjui
              </h1>

              {/* thin rule */}
              <hr className="mt-6 border-t border-black/30 w-full max-w-xl" />

              {/* Role row */}
              <div className="mt-3 grid grid-cols-2 max-w-xl">
                <div className="font-semibold text-black/80">Head Master</div>
                <div />
              </div>
              <hr className="mt-3 border-t border-black/30 w-full max-w-xl" />

              {/* School + Location row (two columns like the screenshot) */}
              <div className="mt-3 grid grid-cols-2 gap-x-10 max-w-xl text-black/80">
                <div className="leading-snug">
                  Pioneer 
                  <br />
                  Junior Academy
                </div>
                <div className="leading-snug">Maragua</div>
              </div>
              <hr className="mt-3 border-t border-black/30 w-full max-w-xl" />

            </div>
          </div>
        </div>
        {/* CTA aligned to the right on large screens */}
        <div className=" flex justify-center mt-6  ">
                <Link
                  to="/pathways"
                  className="inline-block border mb-6  border-[#bdd6f0] bg-transparent px-8 py-3 text-2xl font-bold uppercase text-white hover:bg-[#bdd6f0] hover:text-[#0C356A] transition-colors rounded"
            >
                  Think Pathways
                </Link>
              </div>

        {/* Optional: bottom spacing */}
        <div className="h-8" />
      </div>
    </div>
  );
}
