import { Link, Navigate, useParams } from "react-router-dom";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/figma-home/blur-1.png";
import blur2 from "../../../assets/images/figma-home/blur-2.png";
import ReactPlayer from "react-player";
import TabServices from "./components/TabServices";
import { serviceDetailContent } from "../../../content/serviceDetails";
import { createUrlParam } from "../../../utils/helper";

const ServiceDetails = () => {
  const { title } = useParams();

  const service = serviceDetailContent.find(
    (item) => createUrlParam(item.title) === title
  );


  // if there's no service, redirect to services page
  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="bg-black">
      <section className="flex flex-col w-screen relative">
        <img src={blur1} className="absolute left-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 top-0" alt="" />
        <div className="relative z-[1] pt-[11vh] sm:pt-[10vh] md:pt-[8rem] lg:pt-[6rem] xl:pt-[5.4rem] text-center text-white w-fit mx-auto mt-[-2rem]">
          {service.headingHtml}
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
            <div className="space-y-6 text-white">
              <h3 className="text-[20px] lg:text-xl uppercase font-semibold">
                {service.bannerSubHeading}
              </h3>
              <p className="desc lg:!leading-8">{service.bannerDesc}</p>
            </div>
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
          <div className="aspect-[4/2] lg:aspect-[4/3.5] services-banner overflow-hidden rounded-2xl p-[2px] bg-gradient-to-tr to-[#87F3FF] from-[#625AD8]">
            <ReactPlayer
              className="h-full w-full z-0"
              url={service.video}
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
        <TabServices service={service} />
      </section>

      <GetInTouch />
    </div>
  );
};

export default ServiceDetails;
