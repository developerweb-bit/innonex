"use client";

import { useEffect, useRef, useState } from "react";
import { User, Mail, Calendar, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import meeting from "../../../public/cal.jpg";

export default function PopupForm({ isOpen, onClose }) {
  const modalRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          date: formData.date,
          time: formData.time,
          page: window.location.href,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(() => {
        alert("Meeting Scheduled");
        onClose();
      });
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      onClick={handleOutsideClick}
      className="fixed inset-0 z-50 flex items-center justify-center 
      bg-black/40 backdrop-blur-sm"
    >
      <div
        className="w-[90%] sm:w-[750px] 
      bg-white lobbg rounded-3xl shadow-2xl 
      grid sm:grid-cols-2 overflow-hidden relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-500 text-xl z-10"
        >
          ✕
        </button>

        {/* LEFT IMAGE */}
        <div className="hidden sm:block bg-[#034833] relative">
          <Image src={meeting} alt="" fill className="object-cover" />
        </div>

        {/* RIGHT FORM */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold  mb-4">
            Schedule a Strategy Call
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME */}
            <div className="relative ">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="w-full pl-10 py-3 border rounded-xl"
              />
            </div>

            {/* EMAIL */}
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                required
                onChange={handleChange}
                className="w-full pl-10 py-3 border rounded-xl"
              />
            </div>

            {/* DATE */}
            <div className="relative">
              <Calendar
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="date"
                name="date"
                required
                onChange={handleChange}
                className="w-full pl-10 py-3 border rounded-xl appearance-none"
              />
            </div>

            {/* TIME */}
            <div className="relative">
              <Clock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
              <input
                type="time"
                name="time"
                required
                onChange={handleChange}
                className="w-full pl-10 py-3 border rounded-xl appearance-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white             bg-gradient-to-r 
              from-[#022f22] via-[#034833] to-[#056b4a]
              shadow-md hover:opacity-90 transition"
            >
              Schedule Meeting
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
