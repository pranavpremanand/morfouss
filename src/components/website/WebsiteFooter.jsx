import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { companyDetails, LogoImg, routes } from "../../content/constant";
import { Link } from "react-router-dom";

const WebsiteFooter = () => {
  return (
    <div className="py-[3.5rem] lg:py-[5] bg-black relative z-[1] border-t border-white/30">
      <div className="wrapper text-white">
        <div className="flex md:flex-row flex-col md:items-center justify-between gap-[1.6875rem] md:gap-10">
          <LogoImg className="h-[3.125rem] w-[12.5rem] lg:h-[4rem] lg:w-[18rem]" />
          <div className="flex md:flex-row flex-col gap-[2.5rem] md:gap-10">
            <div className="flex flex-col gap-[0.5rem] md:gap-2">
              <h6 className="font-medium mb-1 text-[1rem] sm:text-[1.0625rem] lg:text-[1.1rem] font-inter">
                Quick Links
              </h6>
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
            <div className="flex flex-col gap-[0.5rem] md:gap-2">
              <h6 className="font-medium mb-1 text-[1rem] sm:text-[1.0625rem] lg:text-[1.1rem] font-inter">
                Contact Us
              </h6>
              <div className="flex flex-col">
                <h6 className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.1rem] font-inter mb-1">
                  Phone
                </h6>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="text-white/70 desc"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="flex flex-col">
                <h6 className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.1rem] font-inter mb-1">
                  Email
                </h6>
                <Link
                  to={`mailto:${companyDetails.email}`}
                  className="text-white/70 desc"
                >
                  {companyDetails.email}
                </Link>
              </div>
              <div className="flex flex-col gap-[0.5rem] md:gap-2 mt-2">
                <h6 className="text-[1rem] sm:text-[1.0625rem] lg:text-[1.1rem] font-inter mb-1">
                  Office Address
                </h6>
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
