import React, { useRef, useState } from "react";
import { allServices } from "../../../../content/constant";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { createUrlParam } from "../../../../utils/helper";

const Services = () => {
  const titleRef = useRef(null);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    // Animate the height of the title when scrolled into view
    gsap.fromTo(
      titleRef.current,
      { height: 0 },
      {
        height: "auto",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 70%", // Adjust the start position as needed
          end: "top 30%", // Adjust the end position as needed
          scrub: 1, // Smoothly animate the height
        },
      }
    );
  }, []);

  return (
    <section className="services relative text-white bg-black">
      <div className="wrapper flex flex-col py-[50px] sm:pb-[3rem]">
        <div className="text-center">
          <div className="h-[70px] sm:h-[18rem]">
            <h2
              ref={titleRef}
              data-aos="zoom-in"
              className="text-[65px] sm:text-[18rem] leading-none font-extrabold tracking-tighter gradient-text overflow-hidden"
              style={{ height: 0 }} // Initial height set to 0
            >
              SERVICES
            </h2>
          </div>
          <h3 data-aos="fade-up" className="heading-3">
            Advanced and Highly Reliable Performance
          </h3>
          <p data-aos="fade-up" className="mt-[12px] lg:mt-8 desc">
            Our services are designed to provide advanced and highly reliable
            performance.
          </p>
        </div>
        <div className="mt-[15px] sm:mt-[32px] grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {allServices.map((item) => (
            <Link
              to={`/services/${createUrlParam(item.title)}`}
              data-aos="fade-up"
              key={item.id}
              className="cursor-pointer group relative overflow-hidden border border-gray-500 bg-transparent aspect-auto xl:aspect-[3.5/7]"
            >
              <div className="h-full w-full hidden group-hover:block bottom-0 left-0 rounded-tr-full group-hover:rounded-none absolute bg-gradient-box transition-all duration-300 ease-linear">
                <img
                  src="/background.png"
                  className="h-[200%] w-[200%] object-cover"
                  alt=""
                />
              </div>
              <div className="relative p-[16px] z-[1] h-full flex flex-col justify-between gap-[20px]">
                <h4 className="text-[19px] sm:text-[24px] lg:text-2xl font-bold">
                  {item.title}
                </h4>
                <p className="desc lg:opacity-0 group-hover:opacity-100">
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
