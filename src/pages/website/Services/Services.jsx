import { Link } from "react-router-dom";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/figma-home/blur-1.png";
import blur2 from "../../../assets/images/figma-home/blur-2.png";
import ReactPlayer from "react-player";
import bannerVid from "../../../assets/videos/services-banner.mp4";
import { serviceListPageContent } from "../../../content/constant";
import { RiArrowRightUpLine } from "react-icons/ri";
import { createUrlParam } from "../../../utils/helper";

const Services = () => {
  return (
    <div className="bg-black">
      <section className="flex flex-col w-screen relative">
        <img src={blur1} className="absolute left-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 top-0" alt="" />
        <div className="relative z-[1] pt-[11vh] sm:pt-[10vh] md:pt-[8rem] lg:pt-[6rem] xl:pt-[5.4rem] text-center text-white w-fit mx-auto md:mt-[-2rem] select-none">
          <h1
            data-aos="zoom-in"
            className="text-[4.25rem] sm:text-[8rem] md:text-[11rem] lg:text-[14.5rem] xl:text-[17rem] sm:tracking-[-0.8rem] md:tracking-[-1.2rem] xl:tracking-[-1.6rem] leading-none font-extrabold inline-block sm:ml-[-2.2rem] uppercase"
          >
            services
          </h1>
        </div>
        <img
          src="/noise-texture.svg"
          className="w-full h-[calc(100%+1rem)] -translate-y-[2rem] absolute z-0 inset-0 object-cover opacity-70"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper mt-[2rem] w-full h-full flex flex-col-reverse lg:grid grid-cols-2 gap-[2rem] lg:gap-[7rem] pb-[3.125rem] sm:pb-[8rem]"
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
            <div className="flex sm:flex-row flex-col gap-4 mt-[1.25rem] sm:mt-0">
              <Link
                className="gradient-btn  from-[#7338AC] to-[#87F3FF] via-[#239CE4] text-white !font-normal !px-[1rem]"
                to="/intro"
              >
                About Us
              </Link>
              <Link
                className="black-btn !font-normal border !border-white !px-[1rem] !w-full sm:!w-fit"
                to="/contact-us"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] service-banner overflow-hidden rounded-2xl p-[0.125rem] bg-gradient-to-tr to-[#87F3FF] from-[#625AD8]">
            <ReactPlayer
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
          <div className="wrapper relative px-[1.5625rem] lg:px-10 py-[1.875rem] md:py-5 group rounded-xl grid md:grid-cols-3 items-center gap-[1.875rem] lg:gap-10 hover:bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] transition-all duration-300 hover:text-white">
            <img
              src="/noise-texture.svg"
              className="absolute rounded-xl w-full h-full object-cover z-0 opacity-0 group-hover:opacity-70"
              alt=""
            />
            <h3 className="text-[1.625rem] md:text-[1.875rem] lg:text-[2.6rem] font-semibold !leading-tight relative z-[2]">
              {item.service}
            </h3>
            <img
              alt={item.title}
              src={item.image}
              className="aspect-square min-w-[9.375rem] max-w-[10rem] group-hover:max-w-[14rem] group-hover:md:scale-125 border-4 border-[#D8D8D8] rounded-xl object-cover -rotate-0 md:opacity-0 group-hover:opacity-100 group-hover:-rotate-12 transition-all duration-300 relative z-[2]"
            />
            <div className="space-y-10 relative z-[2]">
              <div className="space-y-2">
                <p className="desc !font-medium !text-lg lg:!text-xl">{item.title}</p>
                <p className="desc group-hover:block hidden">{item.desc}</p>
              </div>
              <div className="relative z-[2]">
                <a href={`/services/${createUrlParam(item.service)}`}>
                  <svg width="3.125rem" height="3.125rem" viewBox="0 0 50 50">
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
                </a>
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
