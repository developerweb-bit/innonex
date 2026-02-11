"use client";
import Image from "next/image";
import bg from "../../../../public/home1.jpg"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden  ">
      
      {/* Background Glow */}
      {/* <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"></div> */}

      <div className="relative max-w-8xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="head font-semibold mb-4">
            Trusted by growing companies worldwide
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl head-sec font-bold leading-tight">
            Build Teams That Move Your Business Forward
          </h1>

          <p className="mt-6 text-lg par max-w-xl">
            Innonex Systems helps companies hire and manage skilled global talent 
            across operations, finance, support, and technology — without the hiring overhead.
          </p>

          {/* Value Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm">
            {[
              "Pre-vetted professionals",
              "Dedicated account manager",
              "40–70% cost savings",
              "Start in as little as 7 days",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bggreen rounded-full"></div>
                <span className="">{item}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10 ">
            <button className="bggreen  transition text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-600/30">
              Hire Talent
            </button>
            <button className="border border-white/20 hover:bg-white/10 transition px-6 py-3 rounded-lg font-semibold">
              Talk to a Specialist
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative">
          <div className="bg-white/5  backdrop-blur-xl border border-white/10 rounded-2xl  shadow-2xl">
            <Image
              src={bg}
              alt="Team Illustration"
              width="100%"
              height={800}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      {/* CLIENT LOGO STRIP */}
      <div className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-sm text-gray-400 mb-6">
            Trusted by growing companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70">
            <img src="/logos/logo1.svg" className="h-8" />
            <img src="/logos/logo2.svg" className="h-8" />
            <img src="/logos/logo3.svg" className="h-8" />
            <img src="/logos/logo4.svg" className="h-8" />
            <img src="/logos/logo5.svg" className="h-8" />
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF BAR */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-center text-sm">
          <Stat number="250+" label="Teams Built" />
          <Stat number="1,500+" label="Roles Filled" />
          <Stat number="8+" label="Countries Served" />
          <Stat number="9 Days" label="Avg. Hiring Time" />
          <Stat number="92%" label="Client Retention" />
        </div>
      </div>

    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-xl font-bold head">{number}</p>
      <p className="a">{label}</p>
    </div>
  );
}
