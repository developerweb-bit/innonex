import CTA from "@/components/CTA/CTA";
import Solutions from "@/components/Home/Solutions/Solutions";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import React from "react";
import prmap from "../../../public/home/ax.png";
import Image from "next/image";


export default function page() {
  return (
    <div className="pb-20 px-6">
      <Solutions />
      <TestimonialSection />
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
              
              </div>
            </div>
      <CTA />
    </div>
  );
}
