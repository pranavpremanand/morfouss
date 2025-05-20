import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { ReactComponent as Arrow } from "../../../../assets/svg/ServicesTabButtonArrow.svg";
import { ReactComponent as ArrowHover } from "../../../../assets/svg/ServicesTabButtonArrowHover.svg";

const TabServices = ({ service }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (index) => {
    setCurrentTab(index);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 150);
  };

  return (
    <div className="wrapper py-[3rem] grid lg:grid-cols-[35%,1fr] gap-[1.875rem] lg:gap-12">
      <div className="flex flex-col justify-between gap-[1.25rem] lg:gap-10">
        <div className="space-y-3">
          {service.services.map((item, idx) => (
            <button
              key={idx}
              className="w-full rounded-lg overflow-hidden bg-gradient-to-tr to-[#7338AC_80%] via-[#239CE4] from-[#87F3FF] p-[0.8px] shadow-md shadow-black/20"
            >
              {/* <button
              key={idx}
              className="w-full rounded-lg overflow-hidden bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] p-[0.8px] shadow-md shadow-black/20"
            > */}
              <div
                className={`flex p-[0.5rem] rounded-lg text-[0.875rem] lg:text-sm items-center gap-2 uppercase font-medium ${
                  currentTab === idx ? " text-white" : "bg-white text-black"
                }`}
                onClick={() => handleTabChange(idx)}
              >
                <div
                  className={`min-w-[1.5rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full text-white ${
                    currentTab === idx
                      ? "bg-white"
                      : "bg-gradient-to-br to-[#87F3FF_80%] via-[#239CE4_68%] from-[#7338AC_40%]"
                  }`}
                >
                  {currentTab === idx ? (
                    <ArrowHover className="w-[1.1rem] h-[1.1rem] ml-1" />
                  ) : (
                    <Arrow className="w-[1rem] h-[1rem] ml-1" />
                  )}
                </div>
                {item.title}
              </div>
            </button>
          ))}
        </div>
        <div className="p-[0.125rem] bg-gradient-to-tr to-[#87F3FF_60%] via-[#239CE4_30%] from-[#7338AC_20%] rounded-xl">
          <div className="bg-white rounded-xl">
            <div className="bg-gradient-to-b flex flex-col items-center justify-center h-full from-[#cdeaff3d] via-[#c4c4c400] to-[#c0e5ff40] text-black px-[35px] py-[60.50px] rounded-xl gap-7">
              <h6 className="text-[1.25rem] font-mulish lg:text-[22px] font-semibold text-center whitespace-pre-line">
                {service.getStarted.heading}
              </h6>
              <p className="desc !font-inter !font-normal !leading-[1.7] text-justify">
                {service.getStarted.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
      

      {/* Content */}
      <div className="p-[0.125rem] bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] rounded-2xl">
        <div className="h-full rounded-2xl bg-[#D5F3FB] overflow-hidden">
          {loading ? (
            <div className="h-full w-full flex justify-center py-[3.125rem] items-center">
              <CgSpinner size={50} className="text-primary animate-spin" />
            </div>
          ) : (
            <>
              <img
                src={service.image}
                className="aspect-video object-cover"
                alt={service.title}
              />
              <div className="space-y-[1.25rem] pt-[2.1875rem] lg:pt-10">
                <div className="px-[35px] space-y-4">
                  <h5 className="heading-3 !font-normal uppercase">
                    {service.services[currentTab].title}
                  </h5>
                  <p className="desc">{service.services[currentTab].desc}</p>
                </div>
                <div className="p-[35px] bg-[#112C41] text-white rounded-2xl space-y-[0.9375rem]">
                  <h6 className="text-[1.5rem] lg:text-2xl uppercase text-center">
                    {service.whyChooseUs.heading}
                  </h6>
                  <ul className="list-outside list-disc space-y-[0.4375rem]">
                    {service.whyChooseUs.points.map((item, idx) => (
                      <li key={idx} className="desc ml-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabServices;
