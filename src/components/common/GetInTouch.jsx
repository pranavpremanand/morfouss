import React from "react";
import gradientBlurImg1 from "../../assets/images/figma-home/gradient-blur1.png";

const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="flex items-center relative z-[1] bg-black overflow-hidden"
    >
      <div className="wrapper z-0 min-h-[70vh] bg-black text-white py-[3.75rem] md:py-[5rem] relative h-full w-full">
        <div className="flex flex-col md:grid grid-cols-2 items-start gap-[1.75rem]">
          <div className="h-full relative flex items-start">
            <img
              src={gradientBlurImg1}
              className="top-0 md:top-[-7rem] scale-125 left-0 w-full object-contain absolute -z-[1]"
              alt=""
            />
            <div
              data-aos="fade-up"
              className="space-y-[1rem] md:space-y-10 w-full"
            >
              <h3 className="heading-2 !font-normal">Get in touch with us</h3>
              <p className="desc">
                We help businesses achieve sustainable growth, enhance their
                digital presence, and stay ahead of the curve in an increasingly
                competitive and fast-paced digital ecosystem.
              </p>
              {/* <div className="flex gap-5">
                <Link
                  to="/contact-us"
                  className="group p-[.9px] rounded-full overflow-hidden min-w-[7rem] flex justify-center text-center transition-all duration-300 font-light text-sm bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF] hover:-translate-y-1"
                >
                  <div className="bg-black group-hover:bg-transparent transition-all duration-300 px-[1rem] py-[0.75rem] rounded-full">
                    Contact Us
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
          <form data-aos="fade-up" className="flex flex-col gap-[0.75rem] w-full">
            <div className="w-full">
              <input
                type="text"
                className="outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border border-white/40 p-[0.75rem] w-full"
                placeholder="Name"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                className="outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border border-white/40 p-[0.75rem] w-full"
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <input
                type="tel"
                className="outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border border-white/40 p-[0.75rem] w-full"
                placeholder="Phone"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border border-white/40 p-[0.75rem] w-full"
                placeholder="Subject"
              />
            </div>
            <div className="w-full">
              <textarea
                placeholder="Message"
                rows="5"
                className="peer outline-none bg-transparent desc rounded-[0.375rem] md:rounded-lg border border-white/40 p-[0.75rem] w-full"
              />
            </div>
            <button className="bg-gradient-to-tr from-[#7338AC_30%] via-[#239CE4] to-[#87F3FF] p-[0.125rem] tracking-wide hover:-translate-y-1 shadow-2xl shadow-transparent rounded-full hover:border-white flex justify-center text-center transition-all duration-300 font-light text-[0.875rem] lg:text-sm w-[10rem] mx-auto group">
              <div className="px-[1rem] lg:px-4 py-[0.75rem] lg:py-3 w-[10rem] bg-black rounded-full group-hover:bg-transparent transition-all duration-300">
                Submit
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
