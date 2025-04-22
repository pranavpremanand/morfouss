import React, { useRef } from "react";
import { Link } from "react-router-dom";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/figma-home/blur-1.png";
import blur2 from "../../../assets/images/figma-home/blur-2.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";
import bannerVid from "../../../assets/videos/services-banner.mp4";
import { serviceListPageContent } from "../../../constant";
import { RiArrowRightUpLine } from "react-icons/ri";

const Services = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".vector-image", {
      y: 200,
      opacity: 0,
      duration: 4,
      stagger: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
      },
    });
  }, []);
  return (
    <div className="bg-black">
      <section className="flex flex-col w-screen relative">
        <img src={blur1} className="absolute left-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 top-0" alt="" />
        <div className="relative z-[1] pt-[11vh] sm:pt-[10vh] md:pt-[8rem] lg:pt-[6rem] xl:pt-[5.4rem] text-center text-white w-fit mx-auto mt-[-2rem]">
          <h1
            data-aos="zoom-in"
            className="text-[70px] sm:text-[20.9rem] sm:tracking-[-2rem] leading-none font-extrabold inline-block sm:ml-[-2.2rem]"
          >
            INTRO
          </h1>
        </div>
        <img
          src="/noise-texture.svg"
          className="w-full h-[calc(100%+1rem)] -translate-y-[2rem] absolute z-0 inset-0 object-cover opacity-70"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper overflow-hidden mt-[32px] w-full h-full flex flex-col-reverse lg:grid grid-cols-2 gap-[6rem] lg:gap-[7rem] pb-[50px] sm:pb-[4rem]"
        >
          <div className="flex flex-col justify-between gap-8 lg:aspect-[4/3]">
            <p className="desc lg:!leading-8 text-white">
              We offer a wide range of services designed to meet the needs of
              businesses in today’s digital world. Whether you’re looking to
              build a mobile app, integrate AI into your business, or create an
              immersive AR/VR experience, we’ve got you covered.
              <br />
              <br />
              We offer a wide range of services designed to meet the needs of
              businesses in today’s digital world. Whether you’re looking to
              build a mobile app, integrate AI into your business, or create an
              immersive AR/VR experience, we’ve got you covered.
            </p>
            <div className="flex sm:flex-row flex-col gap-4 mt-[20px] sm:mt-0">
              <Link
                className="gradient-btn from-[#7338AC_18%] via-[#239CE4] to-[#87F3FF_70%] text-white !font-normal !px-4"
                to="/intro"
              >
                About Us
              </Link>
              <Link
                className="black-btn !font-normal border !border-white !px-4 !w-full sm:!w-fit mt-10 sm:mt-0"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] services-banner overflow-hidden rounded-2xl p-[2px] bg-gradient-to-tr to-[#87F3FF] from-[#625AD8]">
            <ReactPlayer
              className="h-full w-full z-0"
              url={bannerVid}
              playing
              muted
              loop
              width="100%"
              height="100%"
              pip={false}
              playsinline={true}
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload noplaybackrate",
                    disablePictureInPicture: true,
                  },
                },
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-black relative z-[1]">
        {serviceListPageContent.map((item) => (
          <div className="relative px-10 py-[30px] md:py-5 group border border-black rounded-xl grid md:grid-cols-3 items-center gap-[30px] lg:gap-10 hover:bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] transition-all duration-300 hover:text-white">
            <img
              src="/noise-texture.svg"
              className="absolute w-full h-full object-cover z-0 opacity-0 group-hover:opacity-70"
              alt=""
            />
            <h3 className="text-[26px] md:text-[30px] lg:text-5xl font-semibold !leading-tight relative z-[2]">{item.service}</h3>
            <img
              alt={item.title}
              src={item.image}
              className="aspect-square min-w-[150px] max-w-[15rem] group-hover:max-w-[18rem] group-hover:md:scale-125 border-4 border-[#D8D8D8] rounded-xl object-cover -rotate-0 md:opacity-0 group-hover:opacity-100 group-hover:-rotate-12 transition-all duration-300 relative z-[2]"
            />
            <div className="space-y-10 relative z-[2]">
              <div className="space-y-2">
                <p className="desc !font-medium lg:!text-xl">{item.title}</p>
                <p className="desc">{item.desc}</p>
              </div>
              <div className="relative z-[2]">
                <Link to="/">
                  <svg width="50" height="50" viewBox="0 0 50 50">
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#87F3FF" />
                        <stop offset="50%" stopColor="#239CE4" />
                        <stop offset="100%" stopColor="#7338AC" />
                      </linearGradient>
                    </defs>
                    <RiArrowRightUpLine
                      size={50}
                      fill="url(#gradient)"
                      className="group-hover:hidden block"
                    />
                    <RiArrowRightUpLine
                      size={50}
                      className="group-hover:block text-white hidden"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <GetInTouch />
    </div>
  );
};

export default Services;
