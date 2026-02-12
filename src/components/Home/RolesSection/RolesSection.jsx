"use client";
import "./RolesSection.scss"

import { useRef, useState } from "react";
import {
  Users,
  Headphones,
  Briefcase,
  Calculator,
  Database,
  UserCheck,
  Megaphone,
  Wrench,
  Code,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const roles = [
  { icon: Users, title: "Operations Specialists", desc: "Process management, workflow optimization, coordination support." },
  { icon: Headphones, title: "Customer Support Representatives", desc: "Email, chat, phone, CRM handling, ticket resolution." },
  { icon: Briefcase, title: "Virtual Assistants", desc: "Administrative support, scheduling, research, coordination." },
  { icon: Calculator, title: "Finance Support Staff", desc: "Bookkeeping, AP/AR, payroll processing, reporting." },
  { icon: Database, title: "Data Entry Specialists", desc: "Accurate data management, CRM updates, documentation." },
  { icon: UserCheck, title: "HR Coordinators", desc: "Recruitment assistance, onboarding, employee documentation." },
  { icon: Megaphone, title: "Marketing Assistants", desc: "Campaign support, content coordination, social media assistance." },
  { icon: Wrench, title: "Technical Support Staff", desc: "Product support, troubleshooting, helpdesk management." },
  { icon: Code, title: "Developers", desc: "Web development, software engineering, QA testing." },
  { icon: BarChart3, title: "Analysts", desc: "Business analysis, data reporting, performance tracking." },
];

export default function RolesSection() {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 ">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Roles You <span className="green">Can Hire</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Pre-Vetted Talent Across Key Functions.
        </p>
      </div>

      {/* Slider */}
      <div
      
        className="flex gap-8 overflow-x-auto cursor-grab active:cursor-grabbing scroll-smooth pb-8 no-scrollbar"
      >
        {roles.map((role, index) => {
          const Icon = role.icon;
          return (
            <div
              key={index}
              className="min-w-[350px] bg-white rounded-2xl p-8 shadow-md hover:shadow-xl  transition border border-gray-100 hover:border-green-500"
            >
              <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-green-100">
                <Icon className="w-6 h-6 text-green-600" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {role.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {role.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="text-end mt-5">
        <Link
          href="/service"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-1 rounded-full font-medium shadow-lg transition"
        >
          View Our Solution
        </Link>
      </div>
    </section>
  );
}
