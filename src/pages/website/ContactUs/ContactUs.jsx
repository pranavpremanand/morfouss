import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/contact/left.png";
import blur2 from "../../../assets/images/contact/right.png";
import { allServices, companyDetails } from "../../../content/constant";
import { useState } from "react";
import { ReactComponent as Mail } from "../../../assets/svg/contact/Mail.svg";
import { ReactComponent as Address } from "../../../assets/svg/contact/Address.svg";
import { ReactComponent as Phone } from "../../../assets/svg/contact/Phone.svg";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div className="bg-black">
      <section className="flex flex-col w-screen relative pb-[20rem] overflow-hidden">
        <img src={blur1} className="absolute left-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 top-0" alt="" />
        <div className="relative z-[1] pt-[11vh] sm:pt-[10vh] md:pt-[8rem] lg:pt-[6rem] xl:pt-[5.4rem] text-center text-white w-fit mx-auto mt-[-2rem]">
          <h1
            data-aos="zoom-in"
            className="text-[65px] sm:text-[19rem] sm:tracking-[-2rem] leading-none font-extrabold inline-block sm:ml-[-2.6rem] uppercase"
          >
            contact
          </h1>
        </div>
        <img
          src="/noise-texture.svg"
          className="w-full h-[calc(100%+1rem)] -translate-y-[2rem] absolute z-0 inset-0 object-cover opacity-70"
          alt=""
        />
        <form
          data-aos="fade-up"
          className="wrapper space-y-[24px] lg:space-y-6 md:!max-w-5xl bg-white text-black desc !px-[32px] !py-[32px] lg:!px-24 lg:!py-8 z-[1] rounded-3xl mt-[32px] w-full"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-[3px]">
              <label className="desc">First Name</label>
              <div className="bg-gradient-to-tr from-[#7338AC_18%] via-[#239CE4] to-[#87F3FF_70%] p-[1.5px] rounded-[8px] lg:rounded-lg">
                <input
                  type="text"
                  className="bg-white text-black desc w-full rounded-[8px] lg:rounded-lg p-[6px] lg:py-2 lg:px-4 outline-none border-none"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="space-y-[3px]">
              <label className="desc">Last Name</label>
              <div className="bg-gradient-to-tr from-[#7338AC_18%] via-[#239CE4] to-[#87F3FF_70%] p-[1.5px] rounded-[8px] lg:rounded-lg">
                <input
                  type="text"
                  className="bg-white text-black desc w-full rounded-[8px] lg:rounded-lg p-[6px] lg:py-2 lg:px-4 outline-none border-none"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="space-y-[3px]">
              <label className="desc">Email</label>
              <div className="bg-gradient-to-tr from-[#7338AC_18%] via-[#239CE4] to-[#87F3FF_70%] p-[1.5px] rounded-[8px] lg:rounded-lg">
                <input
                  type="text"
                  className="bg-white text-black desc w-full rounded-[8px] lg:rounded-lg p-[6px] lg:py-2 lg:px-4 outline-none border-none"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="space-y-[3px]">
              <label className="desc">Subject</label>
              <div className="bg-gradient-to-tr from-[#7338AC_18%] via-[#239CE4] to-[#87F3FF_70%] p-[1.5px] rounded-[8px] lg:rounded-lg">
                <input
                  type="text"
                  className="bg-white text-black desc w-full rounded-[8px] lg:rounded-lg p-[6px] lg:py-2 lg:px-4 outline-none border-none"
                  placeholder="Subject"
                />
              </div>
            </div>
          </div>
          <div className="space-y-[3px]">
            <label className="desc">Service</label>
            <div className="flex flex-wrap gap-[12px] lg:gap-4">
              {allServices.map((item) => (
                <button
                  key={item.title}
                  className="bg-gradient-to-tr from-[#87F3FF_10%] via-[#239CE4] to-[#7338AC_70%] p-[1.5px] rounded-[8px] lg:rounded-lg"
                  onClick={() => setSelectedService(item.title)}
                  type="button"
                >
                  <p
                    className={`${
                      selectedService === item.title
                        ? "bg-transparent text-white"
                        : "bg-white"
                    } py-[3px] lg:py-[.4rem] px-[24px] lg:px-6 rounded-[8px] lg:rounded-lg desc font-medium`}
                  >
                    {item.title}
                  </p>
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-[3px]">
            <label className="desc">Message</label>
            <div className="bg-gradient-to-tr from-[#7338AC_18%] via-[#239CE4] to-[#87F3FF_70%] pt-[1.5px] px-[1.5px] rounded-[8px] lg:rounded-lg">
              <textarea
                rows="5"
                className="bg-white text-start text-black w-full rounded-[8px] lg:rounded-lg p-[6px] lg:py-2 lg:px-4 outline-none border-none"
                placeholder="Message"
              />
            </div>
          </div>
          <button
            type="submit"
            className="gradient-btn from-[#7338AC_18%] via-[#239CE4] to-[#87F3FF_70%] text-white !font-normal px-[24px] lg:!px-4 mx-auto w-full sm:w-fit"
          >
            Submit
          </button>
        </form>
        <div
          data-aos="fade-up"
          className="wrapper z-[1] bg-white text-black mt-[65px] md:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[10px] md:gap-0 rounded-2xl w-full py-[30px] md:py-0"
        >
          <div className="flex flex-col items-center gap-4 p-6 md:border-r w-full">
            <Mail className="w-[40px] h-[40px] text-[#7338AC]" />
            <div className="space-y-1 text-center">
              <h5 className="desc !font-semibold">Email</h5>
              <p className="desc link">
                <Link to={`mailto:${companyDetails.email}`}>
                  {companyDetails.email}
                </Link>
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 md:border-r w-full">
            <Address className="w-[40px] h-[40px] text-[#7338AC]" />
            <div className="space-y-1 text-center">
              <h5 className="desc !font-semibold">Address</h5>
              <p className="desc">{companyDetails.address}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 p-6 w-full">
            <Phone className="w-[40px] h-[40px] text-[#7338AC]" />
            <div className="space-y-1 text-center">
              <h5 className="desc !font-semibold">Phone</h5>
              <p className="desc link">
                <Link to={`tel:${companyDetails.phone}`}>
                  {companyDetails.phone}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
