import React from "react";
import gradientBlurImg from "../../assets/images/figma-home/gradient-blur.png";
import mobilePng from "../../assets/images/figma-home/mobile-png.png";
import transparentLogo from "../../assets/images/logo/transparent-mask-logo.png";
import logo from "../../assets/images/logo/mask-logo.png";
import CountUp from "react-countup";
import img1 from "../../assets/images/figma-home/triangle shapes.png";
import { appDevelopmentServices, webDevelopmentServices } from "../../constant";
import { Link } from "react-scroll";
import GetInTouch from "../../componets/common/GetInTouch";

const LandingPage = ({ page }) => {
  const isWeb = Boolean(page === "web-development");
  const services = isWeb ? webDevelopmentServices : appDevelopmentServices;
  return (
    <>
      <section id="banner" className="flex flex-col w-screen pb-[2rem]">
        <div className="blur-gradient-background rotate-[31deg] absolute left-[2rem] top-0 w-1/2 h-[20rem] md:h-[40rem]"></div>
        {/* <div className="blur-gradient-background rotate-[-31deg] absolute right-[2rem] top-0 w-1/3 h-[10rem] md:h-[25rem]"></div> */}
        <div className="relative wrapper z-20 pt-[7rem] md:pt-[5rem] text-center text-white">
          <h1
            data-aos="zoom-in"
            className="heading-1 pt-[2rem] leading-none font-extrabold capitalize"
          >
            {isWeb
              ? "Enhance your business with innovative web development solutions."
              : "Empowering Your Ideas Through Precision-Engineered Apps"}
          </h1>
        </div>
        <img
          src="/noise-texture.svg"
          className="w-full h-full absolute z-10 inset-0 object-cover"
          alt=""
        />
        <img
          src={gradientBlurImg}
          className="w-full md:w-2/3 scale-125 h-auto left-0 sm:left-[-10rem] top-0 sm:top-[-15rem] rotate-[-45deg] absolute object-contain"
          alt=""
        />
        <img
          src={gradientBlurImg}
          className="w-full md:w-[40rem] sm:flex hidden scale-125 h-auto right-0 top-[-5rem] rotate-[20deg] absolute object-contain"
          alt=""
        />
      </section>
      <section className="wrapper">
        <div className="z-10 overflow-hidden bg-black aspect-auto md:aspect-[4/2] flex items-center justify-center relative p-[1rem]">
          <img
            src="/background.png"
            className="w-full h-full absolute z-10 inset-0 object-cover"
            alt=""
          />
          <img
            data-aos="fade-up"
            loading="lazy"
            src={mobilePng}
            className="object-contain w-full sm:h-[95%] z-10"
            alt=""
          />
          <img
            src={gradientBlurImg}
            className="w-2/3 h-5/6 scale-150 rotate-[31deg] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute object-contain"
            alt=""
          />
        </div>
      </section>
      <section
        id="about"
        className="bg-white flex items-center min-h-[70vh] py-[5rem] relative z-20"
      >
        <div className="wrapper relative h-full w-full">
          <img
            src={transparentLogo}
            className="w-[30vw] z-[-1] aspect-square absolute object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center gap-7">
            <div data-aos="fade-up" className="space-y-7">
              <h3 className="heading-2 uppercase">
                {isWeb ? "Web" : "App"} Development
              </h3>
              <p className="desc">
                {isWeb
                  ? "Your website is more than a digital presence—it’s the core of your brand’s identity. We create websites that captivate audiences, drive conversions, and perform seamlessly. With a focus on sleek design and responsive functionality, our websites don’t just look impressive—they deliver results. Whether it’s an e-commerce platform or a custom web application, we build fast, visually appealing, and impactful websites tailored to reflect your brand and achieve your goals."
                  : "In a world that runs on apps, we create ones that stand out. Whether it’s a native app or a cross-platform solution, we develop applications tailored to your needs. Our apps combine cutting-edge technology with intuitive design to deliver smooth, reliable, and feature-rich experiences. Your app should do more than just exist; it should stand out. We create mobile applications that combine sleek designs with powerful functionality, tailored to meet your business objectives. Whether you need a native app for iOS or Android, or a cross-platform solution, we ensure flawless performance and a seamless user experience."}
              </p>
              <div className="flex gap-5">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="white-btn hover:shadow-black"
                >
                  Contact Us
                </Link>
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
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
      <section
        id="services"
        className="relative z-20 flex flex-col w-screen py-[3rem] sm:pb-[3rem] text-white bg-black"
      >
        <div className="wrapper text-center">
          <h2
            data-aos="zoom-in"
            className="text-[4.5rem] sm:text-[8rem] md:text-[10rem] xl:text-[15rem] leading-none font-extrabold tracking-tighter bg-gradient-to-r from-[#7338AC] via-[#239CE4] to-[#87F3FF] bg-clip-text text-transparent"
          >
            SERVICES
          </h2>
          <h3 data-aos="fade-up" className="heading-3">
            Advanced and Highly Reliable Performance
          </h3>
          <p data-aos="fade-up" className="mt-4">
            Our services are designed to provide advanced and highly reliable
            performance, ensuring that your business operations run smoothly and
            efficiently.
          </p>
        </div>
        <div className="mt-[2rem] wrapper grid sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div
              data-aos="fade-up"
              key={item.id}
              className="group relative border border-gray-500 bg-transparent sm:aspect-square xl:aspect-[3/4]"
            >
              <div className="h-0 w-0 bottom-0 left-0 rounded-tr-full group-hover:rounded-none group-hover:h-full group-hover:w-full absolute bg-gradient-to-tr from-[#7338AC_40%] via-[#239CE4] to-[#87F3FF] transition-all duration-300 ease-linear"></div>
              <div className="relative p-4 z-10 h-full flex flex-col justify-between gap-5">
                <h4 className="text-2xl font-bold">{item.title}</h4>
                <p className="font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative z-10 border-t border-gray-500 text-white bg-black">
        <div className="wrapper py-[3rem]">
          <h2
            data-aos="zoom-in"
            className="text-[4.5rem] sm:text-[8rem] md:text-[10rem] xl:text-[15rem] leading-none font-extrabold tracking-tighter text-center"
          >
            WHY US?
          </h2>
          <div className="mt-[2rem] lg:mt-0 grid lg:grid-cols-[auto_50%_auto] items-center">
            <div
              data-aos="fade-up"
              className="flex flex-col items-center lg:items-start lg:h-2/3 justify-between gap-10 lg:gap-5 z-20"
            >
              <div className="text-center lg:text-start space-y-2 max-w-lg lg:max-w-[15rem] lg:translate-x-[7rem]">
                <h4 className="text-xl font-semibold uppercase">Expertise</h4>
                <p className="font-light">
                  Our team of experts has extensive experience in delivering
                  innovative solutions that drive business success.
                </p>
              </div>
              <div className="text-center lg:text-start space-y-2 max-w-lg lg:max-w-[15rem] lg:translate-x-[15rem]">
                <h4 className="text-xl font-semibold uppercase">Innovation</h4>
                <p className="font-light">
                  We are committed to staying at the forefront of technology and
                  continuously innovating to provide the best solutions for our
                  clients.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="z-10 aspect-[4/3] lg:min-h-[30rem] h-full overflow-hidden bg-black flex items-center justify-center relative p-[1rem]"
            >
              <img
                src="/background.png"
                className="w-full h-full absolute z-10 inset-0 object-cover"
                alt=""
              />
              <img
                src={mobilePng}
                className="object-contain w-full h-full z-10"
                alt=""
              />
              <img
                src={gradientBlurImg}
                className="w-2/3 h-5/6 scale-150 rotate-[31deg] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute object-contain"
                alt=""
              />
            </div>
            <div
              data-aos="fade-up"
              className="z-20 flex flex-col items-center lg:items-start lg:h-2/3 justify-between gap-10 lg:gap-5"
            >
              <div className="text-center lg:text-start space-y-2 max-w-lg lg:max-w-[15rem] lg:translate-x-[-7rem]">
                <h4 className="text-xl font-semibold uppercase">Reliability</h4>
                <p className="font-light">
                  Our solutions are designed to be reliable and scalable,
                  ensuring that your business operations run smoothly and
                  efficiently.
                </p>
              </div>
              <div className="text-center lg:text-start space-y-2 max-w-lg lg:max-w-[15rem]">
                <h4 className="text-xl font-semibold uppercase">Support</h4>
                <p className="font-light">
                  We provide ongoing support to ensure that our solutions
                  continue to meet your business needs and help you achieve your
                  goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white z-10 relative">
        <div
          data-aos="fade-up"
          className="wrapper border-black py-[3rem] grid sm:grid-cols-4 gap-10 sm:gap-7"
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
            <p className="font-light">Years of Experience</p>
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
            <p className="font-light">Projects Completed</p>
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
            <p className="font-light">Tech Experts</p>
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
            <p className="font-light">Happy Clients</p>
          </div>
        </div>
      </div>
      <section className="relative z-20 border border-black">
        <div className="wrapper flex min-h-[70vh] bg-white py-[3rem] lg:pt-[5rem] lg:pb-0 relative h-full w-full">
          <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center gap-7">
            <div data-aos="fade-up" className="space-y-7">
              <h3 className="heading-2 uppercase">
                {isWeb
                  ? "Enhancing Brands with Engaging Web Experiences"
                  : "Enhancing Brands with Engaging Mobile Experiences"}
              </h3>
              <p className="desc">
                Helping businesses not only survive but flourish in today’s
                competitive digital landscape.
              </p>
              <div className="flex gap-5">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="black-btn"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-col h-full justify-end"
            >
              <img
                loading="lazy"
                src={img1}
                className="object-contain aspect-square w-[80%] mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <GetInTouch />
    </>
  );
};

export default LandingPage;
