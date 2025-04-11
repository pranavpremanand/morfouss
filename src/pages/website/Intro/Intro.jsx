import React, { useRef } from "react";
import mobilePng from "../../../assets/images/figma-home/mobile-png.png";
import transparentLogo from "../../../assets/images/logo/transparent-mask-logo.png";
import logo from "../../../assets/images/logo/mask-logo.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import GetInTouch from "../../../componets/common/GetInTouch";
import blur1 from "../../../assets/images/figma-home/blur-1.png";
import blur2 from "../../../assets/images/figma-home/blur-2.png";
import blur3 from "../../../assets/images/figma-home/blur-3.png";
import vector1 from "../../../assets/images/figma-home/Vector1.png";
import vector2 from "../../../assets/images/figma-home/Vector2.png";
import vector3 from "../../../assets/images/figma-home/Vector3.png";
import vector4 from "../../../assets/images/figma-home/Vector4.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "../../../assets/imgs/into-hero.webp";
import whyPartnerWithUsImg from "../../../assets/imgs/partner-with-us.webp";
import { PiCheck } from "react-icons/pi";
import ourCoreBlur1 from "../../../assets/imgs/our-core-r.png";
import ourCoreBlur2 from "../../../assets/imgs/our-core-l.png";

const Intro = () => {
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
              At Morphuss, we’re passionate about helping businesses thrive in
              today’s fast paced digital world. We don’t just build products; we
              create experiences that connect, engage, and drive results. From
              intuitive UI/UX design and strategic IT consulting to thoughtful
              business strategies, we work with our clients to turn ideas into
              powerful digital solutions.
              <br />
              <br />
              Our mission is simple: to empower businesses by crafting
              personalized, innovative solutions that not only meet their goals
              but inspire growth. We take pride in working with organizations of
              all sizes, guiding them through their digital transformation and
              delivering tangible, lasting value.
            </p>
            <div className="flex sm:flex-row flex-col gap-4 mt-5 sm:mt-0">
              <Link
                className="gradient-btn from-[#7338AC_18%] via-[#239CE4] to-[#87F3FF_70%] text-white !font-normal !px-4"
                to="/services"
              >
                Our Services
              </Link>
              <Link
                className="black-btn !font-normal border !border-white !px-4 !w-full sm:!w-fit mt-10 sm:mt-0"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl p-[1.5px] bg-gradient-to-tr to-[#87F3FF] from-[#625AD8]">
            <img
              src={heroImg}
              className="w-full h-full object-cover rounded-2xl"
              alt="Hero"
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
              <h3 className="heading-2 uppercase">
                Why Partner <br /> with Us?
              </h3>
              <ul className="space-y-4 list-outside">
                {[
                  {
                    title: "Visionary Innovation",
                    desc: "Leveraging AI, automation, and cloud to redefine industries.",
                  },
                  {
                    title: "Future-Ready Technology",
                    desc: "Stay ahead with cutting-edge digital solutions.",
                  },
                  {
                    title: "User-Centric Excellence",
                    desc: "Every product and service is designed for maximum usability.",
                  },
                  {
                    title: "Strategic Partnership",
                    desc: "We don’t just build solutions; we collaborate for long-term success.",
                  },
                ].map((item) => (
                  <li className="flex gap-[8px] sm:gap-2" key={item.title}>
                    <div className="w-[20px] h-[20px] min-w-[20px] flex items-center justify-center border border-black/40 rounded-sm mt-[3px]">
                      <PiCheck size={25} className="inline text-secondary" />
                    </div>
                    <div className="inline">
                      <span className="desc !font-medium">{item.title} - </span>
                      <span className="desc">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
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
            <div
              data-aos="fade-up"
              className="aspect-[4/3] h-full overflow-hidden rounded-md p-[1.5px] bg-gradient-to-tr to-[#87F3FF] from-[#625AD8]"
            >
              <img
                src={whyPartnerWithUsImg}
                className="w-full h-full object-cover rounded-md"
                alt="Why Partner With Us"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-0 text-white py-[50px] lg:pb-[50px] lg:pt-0">
        <img src={ourCoreBlur1} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 z-[-1]" />
        <img src={ourCoreBlur2} alt="" className="absolute left-0 -translate-x-1/3 bottom-0 translate-y-[20%] z-[-1]" />
        <div className="wrapper py-[2rem]">
          <h2
            data-aos="zoom-in"
            className="text-[60px] sm:text-[17rem] leading-none font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-tr from-[#7338AC_20%] via-[#239CE4] to-[#87F3FF_80%]"
          >
            OUR CORE
          </h2>
          <div data-aos="fade-up">
            <h3 className="text-[38px] sm:text-[7rem] leading-none font-extrabold tracking-tighter text-center sm:-translate-y-4">
              VALUES
            </h3>
          </div>
          <div className="mt-[32px] lg:mt-12 max-w-5xl mx-auto space-y-10">
            <div className="flex md:flex-row flex-col md:justify-between gap-[30px] md:gap-10">
              <div className="space-y-2 md:max-w-[20rem] text-center">
                <h5 className="text-[20px] lg:text-xl font-medium uppercase">Innovation</h5>
                <p className="desc">
                  We embrace creativity and always look for new ways to solve
                  problems and meet challenges. Innovation drives everything we
                  do.
                </p>
              </div>
              <div className="space-y-2 md:max-w-[20rem] text-center">
                <h5 className="text-[20px] lg:text-xl font-medium uppercase">Integrity</h5>
                <p className="desc">
                  Trust is essential to us. We operate transparently and
                  responsibly, always doing what’s best for our clients.
                </p>
              </div>
            </div>
            <div className="flex md:justify-center">
              <div className="space-y-2 md:max-w-[20rem] text-center">
                <h5 className="text-[20px] lg:text-xl font-medium uppercase">Collaboration</h5>
                <p className="desc">
                  We believe the best solutions come from collaboration. We work
                  closely with you, involving you in the process at every stage.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between gap-10">
              <div className="space-y-2 md:max-w-[20rem] text-center">
                <h5 className="text-[20px] lg:text-xl font-medium uppercase">Excellence</h5>
                <p className="desc">
                  We are committed to high standards. From initial concept to
                  final delivery, we put in the work to ensure every project is
                  executed flawlessly.
                </p>
              </div>
              <div className="space-y-2 md:max-w-[20rem] text-center">
                <h5 className="text-[20px] lg:text-xl font-medium uppercase">
                  Sustainability
                </h5>
                <p className="desc">
                  We think long-term. We’re committed to making decisions that
                  benefit not only our clients but also the environment and
                  society as a whole.
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

export default Intro;
