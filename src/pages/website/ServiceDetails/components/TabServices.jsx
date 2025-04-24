import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

const TabServices = ({ service }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTabChange = (index) => {
    setCurrentTab(index);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  };

  return (
    <div className="wrapper py-[3rem] grid lg:grid-cols-[30%,1fr] gap-[30px] lg:gap-10">
      <div className="flex flex-col justify-between gap-[20px] lg:gap-10">
        <div className="space-y-2">
          {service.services.map((item, idx) => (
            <button
              key={idx}
              className={`flex p-[8px] rounded-lg text-[14px] lg:text-sm w-full items-center gap-2 uppercase font-medium ${
                currentTab === idx
                  ? "bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] text-white"
                  : "bg-[#101010] text-white"
              }`}
              onClick={() => handleTabChange(idx)}
            >
              <div
                className={`min-w-[24px] w-[24px] h-[24px] flex items-center justify-center rounded-full ${
                  currentTab === idx
                    ? "bg-black text-white"
                    : "bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] text-white"
                }`}
              >
                <TbArrowBadgeRightFilled className="w-[20px] h-[20px] ml-px" />
              </div>
              {item.title}
            </button>
          ))}
        </div>
        <div className="p-[2px] bg-gradient-to-tr to-[#87F3FF_60%] via-[#239CE4_30%] from-[#7338AC_20%] rounded-xl">
          <div className="bg-white text-black p-[24px] rounded-xl flex flex-col gap-[12px]">
            <h6 className="text-[20px] lg:text-xl font-bold uppercase text-center">
              {service.getStarted.heading}
            </h6>
            <p className="desc">{service.getStarted.desc}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-[2px] bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] rounded-2xl">
        <div className="h-full rounded-2xl bg-[#D9D9D9] overflow-hidden">
          {loading ? (
            <div className="h-full w-full flex justify-center py-[50px] items-center">
              <CgSpinner size={50} className="text-primary animate-spin" />
            </div>
          ) : (
            <>
              <img
                src={service.image}
                className="aspect-video object-cover"
                alt={service.title}
              />
              <div className="space-y-[20px] pt-[35px] lg:pt-10">
                <div className="px-[20px] space-y-4">
                  <h5 className="heading-3 !font-normal uppercase">
                    {service.services[currentTab].title}
                  </h5>
                  <p className="desc">{service.services[currentTab].desc}</p>
                </div>
                <div className="p-[20px] bg-black text-white rounded-2xl space-y-[15px]">
                  <h6 className="text-[24px] lg:text-2xl uppercase text-center">
                    {service.whyChooseUs.heading}
                  </h6>
                  <ul className="list-outside list-disc space-y-[7px]">
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
