import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-center h-full w-full"
          alt=""
        />
      </div>
      <div className="py-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <h2 data-aos="fade-up" className="heading-2">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            We begin by conducting a comprehensive needs assessment to
            understand your specific requirements, challenges, and goals.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Expertise in AI and Emerging Technologies
                  </h6>
                  <p className="desc mt-2">
                    Our team at Morfouss is composed of highly accomplished
                    professionals, each a recognized expert in their respective
                    fields—including artificial intelligence, blockchain, data
                    analytics, mobile app development, and more. With our
                    extensive expertise, we develop exceptional, customized
                    solutions that perfectly align with the unique needs and
                    objectives of your company.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Expertise in AI and Emerging Technologies"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    At Morfouss, we place the utmost importance on deeply
                    understanding your unique objectives and challenges. We
                    actively listen to you at every phase and adapt to satisfy
                    your specific demands through our collaborative process. Our
                    commitment to working closely with you allows us to develop
                    innovative solutions that not only meet but consistently
                    exceed your expectations, enabling your company to thrive in
                    an ever-evolving marketplace.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Comprehensive Digital Services
                  </h6>
                  <p className="desc mt-2">
                    Our diverse portfolio positions us as your all-in-one
                    partner for digital transformation, empowering you to
                    streamline your operations and focus on growth while we
                    expertly manage every aspect of your technological journey.
                    With Morfouss, you can confidently navigate the complexities
                    of the digital landscape.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Comprehensive Digital Services"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Security and Reliability"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-secondary/60 to-secondary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Security and Reliability
                  </h6>
                  <p className="desc mt-2">
                    At Morfouss, we understand that security is vital in today's
                    interconnected digital world. It is not optional. Therefore,
                    our solutions are meticulously developed with cutting-edge
                    security methods and stringent safeguards to protect your
                    data, applications, and systems from constantly evolving
                    cyber threats.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Quality
                  </h6>
                  <p className="desc mt-2">
                    At Morfouss, we take great pride in providing exceptional,
                    high-quality solutions that not only meet but exceed the
                    highest industry standards. Our unwavering commitment to
                    performance, dependability, and seamless integration ensures
                    that every solution we deliver is meticulously designed to
                    enable your company to thrive in the ever-changing digital
                    market.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="Commitment to Quality"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UnlockEfficiency />
      <OurServices length={3} />
    </>
  );
};

export default AboutUs;
