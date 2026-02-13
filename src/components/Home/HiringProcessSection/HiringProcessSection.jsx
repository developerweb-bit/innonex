"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import build from "../../../../public/home/build.jpg";
import rob from "../../../../public/home/rob.png";

import prmap from "../../../../public/home/ax.png";
import rb from "../../../../public/home/rb.png";
import Image from "next/image";
// import "./hr.scss"

const steps = [
  {
    title: "Consultation",
    desc: "We understand your business needs and define the right hiring model.",
  },
  {
    title: "Talent Shortlisting",
    desc: "Receive curated candidate profiles within days.",
  },
  {
    title: "Interview & Selection",
    desc: "Choose the best-fit professionals for your team.",
  },
  {
    title: "Onboarding & Launch",
    desc: "We handle contracts, HR, payroll, and compliance — your team gets to work.",
  },
];

const benefits = [
  "Transparent pricing",
  "Performance-driven hiring",
  "Ongoing account management",
  "Scalable workforce solutions",
  "Long-term partnership approach",
  "Access to global pre-vetted talent",
  "Faster time-to-hire and onboarding",
  "Dedicated client success support",
];

export default function HiringProcessSection() {
  return (
    <section className=" py-4 ">
      {/* HOW IT WORKS */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold heading">
          How It <span className="green">Works</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">Hire in 4 Simple Steps</p>
      </div>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 mb-28">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition border border-gray-100"
          >
            <div className="text-5xl font-bold text-green-600 mb-6">
              {`0${index + 1}`}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
{/* map */}
      <div className="relative  globbg py-10 rounded-3xl my-20 mb-10">
        <h2 className="text-5xl text-white mb-1 text-center font-bold">
          Our <span className="green">Global</span> Presence
        </h2>
        <p className="text-center text-white mb-3">
          We are exporting our services to more than 11 countries around the
          world.
        </p>
        <div className="flex gap-5">

        <Image
          src={prmap}
          alt="map"
          height={200}
          width={600}
          className="object-cover  rounded-3xl mx-auto brightness-105"
        />
        <Image
          src={rb}
          alt="map"
          height={20}
          width={160}
          className="object-cover absolute right-5 top-245 sm:top-75 rounded-3xl mx-auto brightness-105"
        />
        </div>
      </div>

      {/* WHY INNONEX */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-28">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Why <span className="green">Innonex</span> Systems?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            A Strategic Workforce Partner — Not Just a Staffing Provider. We
            focus on delivering consistent quality, measurable outcomes, and
            operational reliability.
          </p>

          <div className="space-y-4">
            {benefits.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-green-600 w-5 h-5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Box */}
        <div className="bg-gradient-to-br globbg to-green-800 rounded-3xl p-8 text-white shadow-2xl relative">
          <Image
            src={build}
            alt=""
            className="object-cover mb-7 rounded-2xl shadow-2xl "
          />

          <h3 className="text-2xl font-semibold mb-4">
            Workforce Solutions That Scale
          </h3>
          <p className="text-green-100 leading-relaxed">
            From dedicated remote teams to full recruitment lifecycle
            management, we build scalable workforce ecosystems that grow with
            your business.
          </p>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="max-w-8xl mx-auto text-center bg-green-600 rounded-3xl py-16 pt-10 px-8 text-white shadow-2xl">
        <Image
          src={rob}
          alt=""
          height={150}
          className="object-cover mb-7 mx-auto rounded-2xl img "
        ></Image>
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Your Global Workforce?
        </h2>
        <p className="text-lg text-green-100 mb-10">
          Let’s help you scale smarter, reduce hiring complexity, and improve
          efficiency.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/contact"
            className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Get Started Today
          </Link>

          <Link
            href="/schedule-call"
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition flex items-center justify-center gap-2"
          >
            Schedule a Strategy Call
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
