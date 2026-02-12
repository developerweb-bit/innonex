"use client";
import React, { useEffect, useState } from "react";
import "./Solutions.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { solutions } from "../../../constant/solution";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import layer from "../../../../public/home/layer.png";



const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setTransitioning(true);
    const timeout = setTimeout(() => setTransitioning(false), 300);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  const words = solutions[activeIndex]?.name.split(" ");
  const firstWord = words.slice(0, 1).join(" ");
  const remainingWords = words.slice(1).join(" ");

  return (
    <>
    <h2 className="text-center font-bold text-5xl mt-10">Our <span className="green">Solutions</span></h2>
    <p className="text-center mt-2">From dedicated remote teams to full-scale outsourcing and recruitment management,  we deliver scalable workforce solutions  <br/>that drive growth and operational efficiency</p>
    <section className="about-founder globbg rounded-2xl">
        <Image
        src={layer}
        alt="bg"
        fill
        className="inset-0 top-0 brightness-1000"
        ></Image>
      <div className="left-container ">
        <div className="heading-container">
          <h3 className="heading green">Know our solutions</h3>

          <h1
            className={`text-white subheading fade-in ${
              transitioning ? "" : "fade-in-active"
            }`}
          >
            {firstWord}{" "}
            <span className="primary-gradient-background ">
              {remainingWords}
            </span>
          </h1>

          <p
            className={`text-white mt-2 text-sm role-text fade-in ${
              transitioning ? "" : "fade-in-active"
            }`}
          >
            {solutions[activeIndex]?.role}
          </p>
        </div>

        <div
          className={`text-white py-10 fade-in ${transitioning ? "" : "fade-in-active"}`}
        >
          <p className="about-para">{solutions[activeIndex]?.description}</p>
        </div>

        <div
          className="btn-primary"
          onClick={(event) => {
            const newTabUrl = "/about";

            if (event.ctrlKey || event.metaKey || event.button === 1) {
              window.open(newTabUrl, "_blank");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
              router.push("/about"); // ✅ Next.js routing
            }
          }}
        >
         
            <Link href="" className="flex text-white items-center bggreen w-fit px-10 py-2 rounded-full gap-3">
              <p>Explore</p>
              <FaArrowRight size={17} />
            </Link>
          
        </div>
      </div>

      <div className="right-container">
        <div className="image-container">
          <div className="arrow-container">
            <div
              className="arrow"
              onClick={() => {
                if (activeIndex === 0) setActiveIndex(solutions.length - 1);
                else setActiveIndex((activeIndex - 1) % solutions.length);
              }}
            >
              <FaArrowLeft size={20} color={"var(--text-secondary)"} />
            </div>

            <div
              className="arrow"
              onClick={() =>
                setActiveIndex((activeIndex + 1) % solutions.length)
              }
            >
              <FaArrowRight size={20} color={"var(--text-secondary)"} />
            </div>
          </div>

          <Image
            src={solutions[activeIndex]?.image}
            alt="founder-image"
            className={`founder-image ${
              transitioning ? "" : "founder-image-active"
            }`}
          />

          <div className="square-image-container"></div>
        </div>
      </div>

      <div className="about-founder-overlay"></div>
    </section>
    </>
  );
};

export default Solutions;
