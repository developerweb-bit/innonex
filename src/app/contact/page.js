"use client";
import Image from "next/image";
import contact from "../../../public/contact.png";
import scoop from "../../../public/scoop.png";
import cn from "../../../public/cn.jpg";

import { Send, Phone, Mail, MapPin, ChevronRight, Clock } from "lucide-react";
import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
export default function Page() {
  return (
    <section className="px-6">
      <div className="globbg h-80 relative   rounded-3xl">
        <div className="pl-20 pt-12  mx-auto">
          <h1 className="text-5xl text-white">Contact</h1>
          <div className="flex gap-1 mt-2  text-sm items-center text-white">
            Home <ChevronRight size={14} /> Contact
          </div>
        </div>
        <Image
          src={contact}
          alt="contact us"
          height={300}
          width="auto"
          className="grayscale-100 absolute top-1/2 -right-30 -translate-x-1/2 -translate-y-1/2"
        ></Image>
      </div>
      <div className="min-h-screen  flex items-center justify-center px-6 py-16">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE IMAGE */}
          <div className="hidden md:flex justify-center">
            <Image
              src={scoop}
              width={500}
              alt="contact innoex"
              className=""
            ></Image>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="">
            <form className="space-y-6 bg-[#F1F5EB] rounded-3xl p-10 shadow-lg">
              <p className="text-sm tracking-widest  green   uppercase mb-2 flex items-center gap-2">
                CONTACT INFORMATION <Send size={16} />
              </p>

              <h2 className="text-4xl font-bold head mb-8">
                Let Your Wanderlust Guide You
              </h2>

              {/* Email + Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
                <div>
                  <label className="text-green-900 text-sm">Your Email</label>
                  <div className="relative mt-2">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-5 py-3 pr-12 rounded-full bg-white outline-none border border-gray-200 focus:ring-2 focus:ring-green-500"
                    />
                    <Mail
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-green-800"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="text-green-900 text-sm">Your Phone</label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="w-full px-5 py-3 pr-12 rounded-full bg-white outline-none border border-gray-200 focus:ring-2 focus:ring-green-500"
                    />
                    <Phone
                      size={18}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-green-800"
                    />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="text-green-900 text-sm">Your Address</label>
                <div className="relative mt-2">
                  <input
                    type="text"
                    placeholder="Your Address"
                    className="w-full px-5 py-3 pr-12 rounded-full bg-white outline-none border border-gray-200 focus:ring-2 focus:ring-green-500"
                  />
                  <MapPin
                    size={18}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-green-800"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-green-900 text-sm">Message</label>
                <div className="relative mt-2">
                  <textarea
                    rows="4"
                    placeholder="Write Message.."
                    className="w-full px-5 py-4 pr-12 rounded-3xl bg-white outline-none border border-gray-200 focus:ring-2 focus:ring-green-500"
                  ></textarea>
                  <Mail
                    size={18}
                    className="absolute right-4 top-6 text-green-800"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-lime-500 hover:bg-lime-600 text-white py-4 rounded-full font-medium transition duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm tracking-widest  text-center   green   uppercase mb-2 flex items-center justify-center gap-2">
          CONTACT INFORMATION <Send size={16} />
        </p>

        <h2 className="text-4xl font-bold head mb-8 text-center">
          Let Your Wanderlust <br /> Guide You
        </h2>
        <div className="bg-[#F1F5EB] rounded-3xl shadow-2xl w-[90%] max-w-6xl mx-auto mb-15 p-12">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            {/* Left Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <IoCallSharp className="green w-6 h-6" />
                <div>
                  <p className="text-gray-500 text-sm">Requesting A Call:</p>
                  <p className="head font-semibold text-lg">(629) 555–0129</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <IoMdMail className="green w-6 h-6" />

                <div>
                  <p className="text-gray-500 text-sm">E-mail</p>
                  <p className="head font-semibold text-lg">info@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaLocationDot className="green w-6 h-6" />
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="head font-semibold text-lg">
                    6391 Elgin St. Celina,
                    <br />
                    Delaware 10299
                  </p>
                </div>
              </div>
            </div>

            {/* Middle Section */}
            <div className="space-y-6 border-l border-gray-300 pl-10">
              <div className="flex items-start gap-4">
                <div>
                  <p className="text-gray-500">Monday</p>
                  <p className="text-green-700 flex gap-2 font-semibold">
                    <GoClockFill className="green  w-5 h-5" />9 am – 8 pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <p className="text-gray-500">Tuesday–Friday</p>
                  <p className="text-green-700 flex gap-2 font-semibold">
                    <GoClockFill className="green w-5 h-5" />
                    12 am – 9 pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div>
                  <p className="text-gray-500">Saturday</p>
                  <p className="text-green-700 flex gap-2 font-semibold">
                    <GoClockFill className="green  w-5 h-5" />8 am – 3 pm
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section (Map Placeholder) */}
            <div className="bg-gray-300 rounded-3xl h-[220px] overflow-hidden md:h-full">
              <Image src={cn} alt="" height={500}  width={500} className="object-fill "></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
