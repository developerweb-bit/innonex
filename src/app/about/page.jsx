import Image from "next/image";
import robo from "../../../public/about/robo.png";
import who from "../../../public/about/who.png";
import vision from "../../../public/about/map2.png";
import rbt from "../../../public/about/rbt.png";
import dev from "../../../public/about/dev.jpeg";
import "./about.scss";
import {
  FaUsers,
  FaProjectDiagram,
  FaUserTie,
  FaChartLine,
  FaBullseye,
  FaEye,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Bike } from "lucide-react";
import Link from "next/link";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent/WhatMakesUsDifferent";
import {
  ShieldCheck,
  Workflow,
  TrendingUp,
  Settings,
  Handshake,
} from "lucide-react";

export default function page() {
  return (
    <main className="bg-transparent ">
      <div className="max-w-8xl mx-auto px-6 pb-20 space-y-10">
        {/* HERO */}
        <section className="text-start  globbg mt-3 relative py-10 rounded-4xl flex flex-col md:flex-row  items-center justify-center px-10 md:px-20 h-full text-white">
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight relative z-2">
              A Workforce Partner Focused on Operational Growth
            </h1>
            <p className="text-lg md:text-xl mt-10 max-w-3xl relative z-2">
              Innonex Systems helps businesses build, manage, and scale reliable
              teams — without the complexity of traditional hiring.
            </p>
          </div>
          <Image
            src={robo}
            alt="about"
            height={1200}
            width={500}
            className="grayscale-100   z-0 "
          ></Image>
        </section>

        {/* WHO WE ARE */}
        <section className="relative w-full md:max-w-[85%] mx-auto  flex flex-col lg:flex-row items-center gap-20 overflow-hidden">
          {/* Background Glow Effect */}

          <Image
            src={who}
            alt="about"
            height={1200}
            width={500}
            className="z-0 "
          ></Image>

          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl head-sec font-bold leading-tight">
              Who <span className="green">We</span> Are
              <span className="block w-20 h-1 bggreen mt-4 rounded"></span>
            </h2>
            <p className="text-lg  leading-relaxed">
              <strong className="green">Innonex Systems</strong> is a workforce
              and business operations solutions company supporting organizations
              across multiple industries.
            </p>

            <p className="text-lg  leading-relaxed">
              We combine{" "}
              <span className="text-blue-900 font-medium">
                structured hiring
              </span>
              ,
              <span className="text-blue-900 font-medium">
                {" "}
                guided onboarding
              </span>
              , and ongoing workforce management to help companies scale
              efficiently while maintaining operational consistency.
            </p>

            <p className="text-lg  leading-relaxed">
              Our goal is simple — allow businesses to grow without being
              limited by hiring capacity or operational bandwidth.
            </p>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="bg-[#f4f8f2] relative z-2 py-20 pb-35 px-6 md:px-10 rounded-2xl shadow-md">
          <div className="max-w-[90%] mx-auto grid lg:grid-cols-3 gap-12 items-start">
            {/* LEFT HEADING BLOCK */}
            <div className=" flex flex-col justify-between pb-10 h-full">
              <div className="space-y-6">
                <p className="text-sm tracking-widest head font-semibold uppercase">
                  Our Model
                </p>
                <h2 className="text-4xl md:text-5xl font-bold head leading-tight">
                  Our Approach
                </h2>
                <p className="text-gray-600">
                  We believe hiring alone does not solve operational challenges.
                  Productivity comes from the combination of:
                </p>
              </div>

              <div>
                <div className="max-w-5xl mx-auto mt-16 text-gray-600 leading-relaxed text-start">
                  That is why our model focuses on operational integration
                  rather than candidate placement. We don’t just provide talent
                  — we support the functioning of your operations.
                </div>
              </div>
            </div>

            {/* RIGHT CARDS GRID */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
              {/* CARD 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-green-500 text-green-600 mb-6">
                  <FaUsers size={30} />
                </div>
                <h3 className="text-lg font-semibold head">The Right People</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Skilled professionals aligned with your business goals.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-green-500 text-green-600 mb-6">
                  <FaProjectDiagram size={30} />
                </div>
                <h3 className="text-lg font-semibold head">Clear Workflows</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Structured processes that ensure smooth operations.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-green-500 text-green-600 mb-6">
                  <FaUserTie size={30} />
                </div>
                <h3 className="text-lg font-semibold head">
                  Ongoing Management
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Continuous oversight to maintain efficiency and quality.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-green-500 text-green-600 mb-6">
                  <FaChartLine size={30} />
                </div>
                <h3 className="text-lg font-semibold head">
                  Consistent Performance Monitoring
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Regular tracking to ensure consistent operational results.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="space-y-2 z-5 relative h-full md:h-50    -bottom-25 text-white bggreen flex flex-col md:flex-row items-center -mt-60  max-w-3xl  rounded-xl px-10 mx-auto shadow-lg">
          <div className="">
            <h2 className="text-3xl font-bold mb-2">
              Are you ready to start ?
            </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laboriosam placeat iste distinctio nesciunt suscipit rerum
              blanditiis!
            </p>

            <Link
              href="/contact"
              className="btn relative overflow-hidden py-2 w-fit rounded-full border hover:border-white px-10 flex gap-5 items-center mt-2 hover:text-black"
            >
              <span className="btn-bg"></span>
              <span className="relative z-10 flex items-center gap-5">
                Connect With Us <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <Bike size={252} className="bike-icon" />
        </div>

        {/* MISSION & VISION */}
        <section className="relative py-24 px-6 rounded-3xl mt-40 md:px-16 overflow-hidden globbg text-white">
          <Image
            src={vision}
            alt="Vision background"
            fill
            className="object-cover"
            priority
          />

          {/* Optional dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Soft Glow Background */}
          <div className="relative max-w-6xl mx-auto text-center mb-16">
            <p className="uppercase tracking-widest text-[var(--icon)] text-sm mb-3">
              Our Purpose
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Mission & Vision</h2>
          </div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
            {/* MISSION CARD */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl transition duration-300 hover:-translate-y-2 hover:border-[#83cd20]/40">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--icon)]/10 text-[var(--icon)] mb-6 text-3xl group-hover:scale-110 transition">
                <FaBullseye />
              </div>
              <h2 className="text-3xl font-semibold mb-4 text-[var(--icon)]">
                Our Mission
              </h2>
              <p className="text-gray-200 leading-relaxed">
                Enable companies to scale faster by removing hiring and
                operational bottlenecks through structured workforce solutions.
              </p>
            </div>

            {/* VISION CARD */}
            <div className="group bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl transition duration-300 hover:-translate-y-2 hover:border-[#83cd20]/40">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[var(--icon)]/10 text-[var(--icon)] mb-6 text-3xl group-hover:scale-110 transition">
                <FaEye />
              </div>
              <h2 className="text-3xl font-semibold mb-4 text-[var(--icon)]">
                Our Vision
              </h2>
              <p className="text-gray-200 leading-relaxed">
                To become a trusted global partner for businesses building
                long-term operational teams.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT MAKES US DIFFERENT */}
        <WhatMakesUsDifferent />

        {/* DELIVERY MODEL */}
        <section
          className="relative py-24 px-6 rounded-2xl md:px-16 bg-cover bg-center min-h-[600px] flex items-center text-white overflow-hidden"
          style={{
            backgroundImage: `url(${dev.src})`, // 👉 if from assets
            // backgroundImage: "url('/images/dev.jpg')" // 👉 if from public folder
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[var(--globbg)]/65"></div>

          <div className="relative max-w-5xl mx-auto w-full">
            {/* Heading */}
            <div className="text-center mb-16">
              <p className="uppercase tracking-widest text-[var(--icon)] text-sm mb-3">
                How We Work
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Our Delivery Model
              </h2>
            </div>

            {/* Steps */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Requirement understanding",
                "Candidate matching",
                "Guided onboarding",
                "Ongoing support & monitoring",
              ].map((step, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-5 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:-translate-y-2 transition duration-300 hover:border-[var(--icon)]/40"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--icon)]/10 text-[var(--icon)] font-bold text-lg group-hover:scale-110 transition">
                    {index + 1}
                  </div>

                  {/* Step Text */}
                  <p className="text-gray-200 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>

            {/* Bottom Description */}
            <p className="text-gray-200 leading-relaxed text-center mt-16 max-w-3xl mx-auto">
              This structured model ensures reliability, accountability, and
              predictable outcomes.
            </p>
          </div>
        </section>

        <section className="py-24 px-6 md:px-16 space-y-32 text-gray-800">
          {/* SECURITY & RELIABILITY */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="uppercase tracking-widest text-[var(--icon)] text-sm">
                Trust & Stability
              </p>
              <h2 className="text-4xl font-bold text-gray-900">
                Security & Reliability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We prioritize responsible operational practices and consistent
                communication structures to maintain professional working
                relationships and workflow continuity.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[var(--icon)]/10 text-[var(--icon)]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <p className="text-gray-600">
                Secure processes and dependable communication ensure long-term
                reliability.
              </p>
            </div>
          </div>

          {/* WHY WORK WITH US */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="uppercase tracking-widest text-[var(--icon)] text-sm mb-3">
                Benefits
              </p>
              <h2 className="text-4xl font-bold text-gray-900">
                Why Companies Work With Us
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Workflow, text: "Reduce management overhead" },
                { icon: Settings, text: "Improve process consistency" },
                { icon: TrendingUp, text: "Scale teams faster" },
                { icon: ShieldCheck, text: "Maintain operational control" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white border border-gray-200 p-6 rounded-xl text-center hover:-translate-y-2 transition duration-300 hover:border-[var(--icon)]/40 hover:shadow-md"
                >
                  <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-[var(--icon)]/10 text-[var(--icon)] mb-4 group-hover:scale-110 transition">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-gray-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PARTNERSHIP PHILOSOPHY */}
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[var(--icon)]/10 text-[var(--icon)]">
              <Handshake className="w-8 h-8" />
            </div>

            <p className="uppercase tracking-widest text-[var(--icon)] text-sm">
              Our Approach
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              Partnership Philosophy
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              We work as an extension of your organization. Your workflows,
              tools, and expectations guide how the team operates — ensuring
              alignment rather than adjustment.
            </p>
          </div>
        </section>

        {/* CTA */}
     
        <section className="text-center space-y-6 pb-20 bggreen text-white  rounded-2xl  ">
             <Image
          src={rbt}
          alt="ronts"
          height={300}
          width="auto"
          className="object-cover mx-auto  border-red-600 z-5 brightness-105"
        ></Image>
          <h2 className="text-3xl font-bold">
            Let’s build your operational team.
          </h2>
          <p className="">
            Tell us about your requirements and we’ll recommend the right
            engagement model.
          </p>
          <Link href="/contact" className="mt-4 px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
            Talk to an Expert
          </Link>
        </section>
      </div>
    </main>
  );
}
