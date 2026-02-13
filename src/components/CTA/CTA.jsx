"use client";
import React, { useState } from "react";

import rob from "../../../public/home/rob.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PopupForm from "../PopupForm/PopupForm";

export default function CTA() {
  const [open, setOpen] = useState(false);
  return (
    <div>
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

          <button
            onClick={() => setOpen(true)}
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition flex items-center justify-center gap-2"
          >
            Schedule a Strategy Call
            <ArrowRight size={18} />
          </button>
          <PopupForm isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
