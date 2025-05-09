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
    <div className="wrapper py-[3rem] grid lg:grid-cols-[30%,1fr] gap-[1.875rem] lg:gap-10">
      <div className="flex flex-col justify-between gap-[1.25rem] lg:gap-10">
        <div className="space-y-2">
          {service.services.map((item, idx) => (
            <button
              key={idx}
              className={`flex p-[0.5rem] rounded-lg text-[0.875rem] lg:text-sm w-full items-center gap-2 uppercase font-medium ${
                currentTab === idx
                  ? "bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] text-white"
                  : "bg-[#101010] text-white"
              }`}
              onClick={() => handleTabChange(idx)}
            >
              <div
                className={`min-w-[1.5rem] w-[1.5rem] h-[1.5rem] flex items-center justify-center rounded-full ${
                  currentTab === idx
                    ? "bg-black text-white"
                    : "bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] text-white"
                }`}
              >
                <TbArrowBadgeRightFilled className="w-[1.25rem] h-[1.25rem] ml-[0.0625rem]" />
              </div>
              {item.title}
            </button>
          ))}
        </div>
        <div className="p-[0.125rem] bg-gradient-to-tr to-[#87F3FF_60%] via-[#239CE4_30%] from-[#7338AC_20%] rounded-xl">
          <div className="bg-white text-black p-[1.5rem] rounded-xl flex flex-col gap-[0.75rem]">
            <h6 className="text-[1.25rem] lg:text-xl font-bold uppercase text-center">
              {service.getStarted.heading}
            </h6>
            <p className="desc">{service.getStarted.desc}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-[0.125rem] bg-gradient-to-tr from-[#87F3FF_20%] via-[#239CE4_30%] to-[#7338AC_80%] rounded-2xl">
        <div className="h-full rounded-2xl bg-[#D9D9D9] overflow-hidden">
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
                <div className="px-[1.25rem] space-y-4">
                  <h5 className="heading-3 !font-normal uppercase">
                    {service.services[currentTab].title}
                  </h5>
                  <p className="desc">{service.services[currentTab].desc}</p>
                </div>
                <div className="p-[1.25rem] bg-black text-white rounded-2xl space-y-[0.9375rem]">
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
