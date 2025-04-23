import React, { useRef } from "react";
import mobilePng from "../../../assets/images/figma-home/mobile-png.png";
import transparentLogo from "../../../assets/images/logo/transparent-mask-logo.png";
import logo from "../../../assets/images/logo/mask-logo.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/figma-home/blur-1.png";
import blur2 from "../../../assets/images/figma-home/blur-2.png";
import blur3 from "../../../assets/images/figma-home/blur-3.png";
import BannerMobile from "../../../assets/images/figma-home/banner-mobile.png";
import Services from "./components/Services";
import vector1 from "../../../assets/images/figma-home/Vector1.png";
import vector2 from "../../../assets/images/figma-home/Vector2.png";
import vector3 from "../../../assets/images/figma-home/Vector3.png";
import vector4 from "../../../assets/images/figma-home/Vector4.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import bannerVid from "../../../assets/videos/banner.mp4";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactPlayer from "react-player";

const HomePage = () => {
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
            className="text-[68px] sm:text-[20.9rem] sm:tracking-[-2rem] leading-none font-extrabold inline-block sm:ml-[-2.2rem]"
          >
            UNLEASH
          </h1>
          <h3
            data-aos="zoom-in"
            className="text-[29px] sm:text-[7.7rem] ml-[-0.3rem] leading-[0.9] md:-mt-11"
          >
            <span className="gradient-stroke-text text-black">Dreams</span>{" "}
            <span className="gradient-stroke-text text-white font-extralight">
              Through Tech
            </span>
          </h3>
        </div>
        <img
          src="/noise-texture.svg"
          className="w-full h-[calc(100%+1rem)] -translate-y-[2rem] absolute z-0 inset-0 object-cover opacity-70"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper overflow-hidden mt-[32px] w-full h-full lg:h-[80vh]"
        >
          <div className="bg-black h-full">
            {/* <img
              src={BannerMobile}
              alt=""
              className="block z-[2] w-full lg:w-4/6 relative object-cover h-full mx-auto"
            /> */}
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
      <section className="bg-white flex items-center min-h-screen py-[50px] sm:py-[5rem] relative z-[2]">
        <div className="wrapper relative h-full w-full">
          <img
            src={transparentLogo}
            className="w-[30vw] z-[-1] aspect-square absolute object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center gap-[20px] lg:gap-7 w-full lg:max-w-6xl lg:mx-auto">
            <div data-aos="fade-up" className="lg:space-y-7 space-y-[16px]">
              <h3 className="heading-2 uppercase">introduction</h3>
              <p className="desc">
                At Morfouss, we are dedicated to revolutionizing company
                processes through the seamless integration of cutting-edge
                technologies and artificial intelligence (AI) into every aspect
                of a business. We provide them with the tools they need to
                thrive in today's rapidly evolving digital landscape.
              </p>
              <div className="flex gap-5">
                <Link to="/contact-us" className="white-btn hover:shadow-black">
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="gradient-btn text-white hover:shadow-[#7338AC] from-[#7338AC] to-[#87F3FF] via-[#239CE4]"
                >
                  Services
                </Link>
              </div>
            </div>
            <div data-aos="fade-up" className="flex flex-col">
              <img
                loading="lazy"
                src={logo}
                className="object-contain aspect-square w-[80%] mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="relative z-[1] text-white bg-black pb-[50px] xl:pb-0">
        <div className="wrapper py-[2rem]">
          <h2
            data-aos="zoom-in"
            className="text-[70px] sm:text-[18rem] leading-none font-extrabold tracking-tighter text-center gradient-stroke-text4"
          >
            WHY US?
          </h2>
          <div className="mt-[32px] lg:mt-0 grid lg:grid-cols-[auto_50%_auto] items-center">
            <div
              data-aos="fade-up"
              className="flex flex-col items-center lg:items-start lg:h-2/3 justify-between gap-[30px] lg:gap-16 z-[2]"
            >
              <div className="text-center lg:text-start space-y-2 max-w-[70vw] lg:max-w-[15rem] lg:-translate-y-[2rem] lg:translate-x-[7rem]">
                <h4 className="text-[22px] lg:text-2xl font-semibold uppercase">
                  Expertise
                </h4>
                <p className="font-light desc">
                  Our team of experts has extensive experience in delivering
                  innovative solutions that drive business success.
                </p>
              </div>
              <div className="text-center lg:text-start space-y-2 max-w-[70vw] lg:max-w-[15rem] lg:translate-x-[15rem]">
                <h4 className="text-[22px] lg:text-2xl font-semibold uppercase">
                  Innovation
                </h4>
                <p className="font-light desc">
                  We are committed to staying at the forefront of technology and
                  continuously innovating to provide the best solutions for our
                  clients.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="z-[1] aspect-[4/3] lg:min-h-[30rem] h-full overflow-hidden flex items-center justify-center relative p-[1rem]"
            >
              <img
                src={mobilePng}
                className="object-contain w-full h-full lg:scale-[1.2] z-[1]"
                alt=""
              />
            </div>
            <img
              src={blur3}
              className="-z-[1] h-[85%] lg:h-[72%] left-1/2 top-2/3 -translate-x-1/2 -translate-y-[68%] lg:-translate-y-[55%] absolute object-contain"
              alt=""
            />
            <div
              data-aos="fade-up"
              className="z-[2] flex flex-col items-center lg:items-start lg:h-2/3 justify-between gap-[30px] lg:gap-16"
            >
              <div className="text-center lg:text-start space-y-2 max-w-[70vw] lg:max-w-[15rem] lg:-translate-y-[2rem] lg:translate-x-[-7rem]">
                <h4 className="text-[22px] lg:text-2xl font-semibold uppercase">
                  Reliability
                </h4>
                <p className="font-light desc">
                  Our solutions are designed to be reliable and scalable,
                  ensuring that your business operations run smoothly and
                  efficiently.
                </p>
              </div>
              <div className="text-center lg:text-start space-y-2 max-w-[70vw] lg:max-w-[15rem]">
                <h4 className="text-[22px] lg:text-2xl font-semibold uppercase">
                  Support
                </h4>
                <p className="font-light desc">
                  We provide ongoing support to ensure that our solutions
                  continue to meet your business needs and help you achieve your
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white z-[1] relative border-b">
        <div
          data-aos="fade-up"
          className="wrapper border-black py-[30px] md:py-[35px] grid sm:grid-cols-4 gap-[35px] sm:gap-7"
        >
          <div className="text-center space-y-2">
            <CountUp
              end={3}
              className="heading-1 text-[#88F4FF]"
              suffix="+"
              enableScrollSpy
              scrollSpyOnce
              duration={3}
            />
            <p className="font-light text-[16px] lg:text-[1.1rem]">
              Years of Experience
            </p>
          </div>
          <div className="text-center space-y-2">
            <CountUp
              end={150}
              className="heading-1 text-[#239CE4]"
              suffix="+"
              enableScrollSpy
              scrollSpyOnce
              duration={3}
            />
            <p className="font-light text-[16px] lg:text-[1.1rem]">
              Projects Completed
            </p>
          </div>
          <div className="text-center space-y-2">
            <CountUp
              end={25}
              className="heading-1 text-[#615BD8]"
              suffix="+"
              enableScrollSpy
              scrollSpyOnce
              duration={3}
            />
            <p className="font-light text-[16px] lg:text-[1.1rem]">
              Tech Experts
            </p>
          </div>
          <div className="text-center space-y-2">
            <CountUp
              end={130}
              className="heading-1 text-[#7338AD]"
              suffix="+"
              enableScrollSpy
              scrollSpyOnce
              duration={3}
            />
            <p className="font-light text-[16px] lg:text-[1.1rem]">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
      <section className="relative z-[2] bg-white">
        <div className="lg:max-w-6xl wrapper lg:mx-auto flex py-[35px] lg:pt-[5rem] lg:pb-0 relative h-full w-full">
          <div className="min-h-[60vh] flex flex-col-reverse lg:grid grid-cols-2 items-center gap-[30px] lg:gap-7">
            <div
              data-aos="fade-up"
              className="lg:pb-[5rem] flex flex-col justify-center space-y-[20px] md:space-y-10"
            >
              <h3 className="heading-2 uppercase">
                Transforming Ideas into Digital Realities
              </h3>
              <p className="desc">
                Helping businesses not only survive but flourish in today’s
                competitive digital landscape.
              </p>
              <div className="flex gap-5">
                <Link to="/contact-us" className="black-btn">
                  Contact Us
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col h-full w-full justify-end items-end"
            >
              <div ref={containerRef} className="relative h-full w-full">
                <img
                  src={vector1}
                  alt=""
                  className="vector-image absolute left-0 bottom-0 h-full w-full z-[4] object-contain"
                />
                <img
                  src={vector2}
                  alt=""
                  className="vector-image absolute left-[2rem] bottom-0 h-full w-full z-[3] object-contain"
                />
                <img
                  src={vector3}
                  alt=""
                  className="vector-image absolute left-[4rem] bottom-0 h-full w-full z-[2] object-contain"
                />
                <img
                  src={vector4}
                  alt=""
                  className="vector-image absolute left-[6rem] bottom-0 h-full w-full z-[1] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetInTouch />
    </div>
  );
};

export default HomePage;
