import React from "react";
import about from "../../../../public/about/about.jpg";
import Image from "next/image";

const features = [
  "Operationally aligned hiring",
  "Structured onboarding process",
  "Dedicated workforce support",
  "Continuity and replacement planning",
  "Flexible engagement models",
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="relative py-24 px-6 md:px-16 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      

        {/* RIGHT SIDE CONTENT */}
        <div>
          {/* Heading */}
          <div className="mb-12">
            <p className="uppercase tracking-widest text-[var(--icon)] text-sm font-bold mb-3">
              Our Advantage
            </p>
            <h2 className="text-4xl md:text-5xl font-bold head-sec">
              What Makes Us Different
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-lg border border-black/10 hover:border-[#83cd20] p-5 rounded-xl flex items-start gap-4 hover:-translate-y-2 transition duration-300 "
              >
                <div className="px-4 py-2 flex items-center justify-center rounded-full bg-[var(--icon)] text- text-lg group-hover:scale-110 transition">
                  ✓
                </div>
                <p className="text-black leading-relaxed text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

          {/* LEFT SIDE IMAGE */}
        <div className="relative">
          <Image src={about} alt="" height={800}
          width={500}
          className="rounded-2xl"></Image>
          {/* Soft glow behind image */}
         
        </div>
      </div>
    </section>
  );
}
