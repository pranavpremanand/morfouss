import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { companyDetails, LogoImg, routes } from "../../constant";
import { Link } from "react-router-dom";

const WebsiteFooter = () => {
  return (
    <div className="py-[56px] lg:py-[5] bg-black relative z-10 border-t border-white/30">
      {/* <div className="py-14 bg-gradient-to-r border-t border-primary/30 from-primary/30 to-secondary/30 relative z-10"> */}
      <div className="wrapper text-white">
        <div className="flex md:flex-row flex-col md:items-center justify-between gap-[27px] md:gap-10">
          <div className="flex flex-col md:items-center gap-3">
            <img src={LogoImg} className="w-[15rem] min-w-[185px] object-contain" alt="" />
            {/* <p className="desc md:max-w-[15rem] text-sm text-center">
              We have rapidly grown into a trusted partner for organizations
              seeking digital transformation, enhanced operational efficiency.
            </p> */}
          </div>
          <div className="flex md:flex-row flex-col gap-[40px] md:gap-10">
            <div className="flex flex-col gap-[8px] md:gap-2">
              <h6 className="font-medium mb-1 text-[16px] sm:text-[17px] lg:text-[1.1rem] font-inter">Quick Links</h6>
              {routes.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-white/70 desc hover:text-primary transition-all duration-300"
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-[8px] md:gap-2">
              <h6 className="font-medium mb-1 text-[16px] sm:text-[17px] lg:text-[1.1rem] font-inter">Contact Us</h6>
              <div className="flex flex-col">
                <h6 className="text-[16px] sm:text-[17px] lg:text-[1.1rem] font-inter mb-1">Phone</h6>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="text-white/70 desc"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="flex flex-col gap-[8px] md:gap-2 mt-2">
                <h6 className="text-[16px] sm:text-[17px] lg:text-[1.1rem] font-inter mb-1">Office Address</h6>
                <p className="text-white/70 desc md:max-w-[15rem]">
                  {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pt-4 mt-7 border-t text-gray-500 border-white/30 w-full">
          <div className="flex justify-center gap-5 w-full">
            <div className="flex gap-5 items-center mt-5">
              <Link>
                <BsFacebook className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
              </Link>
              <Link>
                <BsTwitter className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
              </Link>
              <Link>
                <BsLinkedin className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
              </Link>
              <Link>
                <BsYoutube className="text-xl text-gray-500 hover:text-primary transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WebsiteFooter;
