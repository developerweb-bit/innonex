"use client";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import layer from "../../../public/Layer.png";
import t1 from "../../../public/testi/t (1).png";
import t2 from "../../../public/testi/t (1).jpg";
import t3 from "../../../public/testi/t (2).webp";
import t4 from "../../../public/testi/t (3).webp";
import t5 from "../../../public/testi/t (4).webp";
// import t6 from "../../../public/testi/t (5).webp"
import Image from "next/image";

const testimonials = [
  {
    text: "They found over $15,000 in missed deductions I didn’t even know about. The process was smooth and incredibly valuable for my business.",
    name: "John M.",
    role: "Business Owner",
    image: t4,
  },
  {
    text: "Our books are finally clean and organized. Their insights helped us fix cashflow issues and plan growth with confidence.",
    name: "Sarah L.",
    role: "Startup Founder",
    image: t2,
  },
  {
    text: "Professional, reliable, and detail-oriented. We now feel fully confident about our financial reports and compliance.",
    name: "David R.",
    role: "Agency Owner",
    image: t3,
  },
  {
    text: "They simplified our bookkeeping and gave us clarity on our finances. It feels like we finally have control over our numbers.",
    name: "Emily T.",
    role: "E-commerce Seller",
    image: t1,
  },
  {
    text: "The team helped uncover issues we didn’t even know existed. Their support has been a game-changer for our operations.",
    name: "Michael B.",
    role: "Consultant",
    image: t5,
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((index + 1) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-15 my-10  text-center relative overflow-hidden rounded-2xl  shadow-2xl">
      <h1 className="text-5xl ">What Our <span className="green font-bold">Clients Say</span> About Us</h1>
      <div className="   rounded-2xl my-20  mx-auto px-6 grid md:grid-cols-2 gap-13 md:gap-0 items-center  ">
        {/* IMAGE SIDE */}
        <div className="relative flex  justify-center">
          <Image
            src={testimonials[index].image}
            alt={testimonials[index].name}
            width={200}
            height={300}
            className="w-92 h-92 object-cover rounded-2xl relative z-4 shadow-xl"
          />
          <div className="bggreen p-4 rounded-lg h-40 z-0 absolute w-100 -bottom-10"></div>
        </div>

        {/* TESTIMONIAL SIDE */}
        <div className="z-9 ">
          <div className="bg-white rounded-3xl p-5 ">
            <div className="flex gap-1 text-yellow-400 mb-4 mx-auto w-fit">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="italic text-xl text-gray-700 leading-relaxed min-h-[40px] transition">
              “{testimonials[index].text}”
            </p>

            <p className="mt-6 font-semibold text-gray-900 text-lg">
              {testimonials[index].name}
            </p>
            <p className="text-gray-500">{testimonials[index].role}</p>
          </div>
          {/* NAV BUTTONS */}
          <div className="flex gap-4  justify-end mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border  bggreen text-white border-gray-300 hover:bg-gray-100 transition"
            >
              <FiChevronLeft className="text-2xl" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bggreen text-white border border-gray-300 hover:bg-gray-100 transition"
            >
              <FiChevronRight className="text-2xl" />
            </button>
          </div>
        </div>
        <Image
          src={layer}
          alt=""
          fill
          className="absolute left-0 top-0 object-cover rounded-2xl z-0 brightness-0 blur-[0.5px] opacity-50"
        />
      </div>
    </section>
  );
}
