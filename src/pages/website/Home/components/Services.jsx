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
      <div className="wrapper flex flex-col py-[3.125rem] sm:pb-[3rem]">
        <div className="text-center select-none">
          <div className="h-[4.375rem] sm:h-[8rem] md:h-[11rem] lg:h-[13rem] xl:h-[17rem]">
            <h2
              ref={titleRef}
              data-aos="zoom-in"
              className="text-[4.0625rem] sm:text-[7.5rem] md:text-[10rem] lg:text-[12.5rem] xl:text-[17rem] leading-none font-extrabold tracking-tighter gradient-text overflow-hidden lg:ml-[-0.5rem]"
            >
              SERVICES
            </h2>
          </div>
          <h3 data-aos="fade-up" className="heading-3">
            Advanced and Highly Reliable Performance
          </h3>
          <p data-aos="fade-up" className="mt-[0.75rem] lg:mt-4 desc">
            Our services are designed to provide advanced and highly reliable
            performance.
          </p>
        </div>
        <div className="mt-[0.9375rem] sm:mt-[2rem] grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {allServices.map((item) => (
            <Link
              to={`/services/${createUrlParam(item.title)}`}
              key={item.id}
              className="cursor-pointer group relative !overflow-hidden border border-gray-500 bg-transparent aspect-auto xl:aspect-[3.5/8]"
            >
              <div className="h-full overflow-hidden w-full hidden group-hover:flex inset-0 rounded-tr-full group-hover:rounded-none absolute bg-gradient-box transition-all duration-300 ease-linear">
                <img
                  src="/background.png"
                  className="flex-1 object-cover"
                  alt=""
                />
              </div>
              <div className="relative p-[1rem] z-[1] h-full flex flex-col justify-between gap-[1.25rem]">
                <h4 className="text-[1.1875rem] sm:text-[1.2rem] font-bold">
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
