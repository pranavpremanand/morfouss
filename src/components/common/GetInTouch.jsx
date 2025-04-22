import React from "react";
import gradientBlurImg1 from "../../assets/images/figma-home/gradient-blur1.png";

const GetInTouch = () => {
  return (
    <section id="contact" className="flex items-center relative z-[1] bg-black overflow-hidden">
      <div className="wrapper -z-20 min-h-[70vh] bg-black text-white py-[60px] md:py-[5rem] relative h-full w-full">
        <div className="flex flex-col md:grid grid-cols-2 items-start gap-[28px]">
          <div className="h-full relative flex items-start">
            <img
              src={gradientBlurImg1}
              className="top-0 md:top-[-7rem] scale-125 left-0 w-full object-contain absolute -z-10"
              alt=""
            />
            <div
              data-aos="fade-up"
              className="space-y-[16px] md:space-y-10 w-full"
            >
              <h3 className="heading-2 uppercase">Get in touch with us</h3>
              <p className="desc">
                Helping businesses not only survive but flourish in today’s
                competitive digital landscape.
              </p>
              {/* <div className="flex gap-5">
                <Link
                  to="/contact-us"
                  className="group p-[.9px] rounded-full overflow-hidden min-w-[7rem] flex justify-center text-center transition-all duration-300 font-light text-sm bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF] hover:-translate-y-1"
                >
                  <div className="bg-black group-hover:bg-transparent transition-all duration-300 px-4 py-3 rounded-full">
                    Contact Us
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
          <form data-aos="fade-up" className="flex flex-col gap-[12px] w-full">
            <div className="w-full">
              <input
                type="text"
                className="outline-none bg-transparent desc rounded-[6px] md:rounded-lg border border-white/40 p-[12px] w-full"
                placeholder="Name"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                className="outline-none bg-transparent desc rounded-[6px] md:rounded-lg border border-white/40 p-[12px] w-full"
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <input
                type="tel"
                className="outline-none bg-transparent desc rounded-[6px] md:rounded-lg border border-white/40 p-[12px] w-full"
                placeholder="Phone"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="outline-none bg-transparent desc rounded-[6px] md:rounded-lg border border-white/40 p-[12px] w-full"
                placeholder="Subject"
              />
            </div>
            <div className="w-full">
              <textarea
                placeholder="Message"
                rows="5"
                className="peer outline-none bg-transparent desc rounded-[6px] md:rounded-lg border border-white/40 p-[12px] w-full"
              />
            </div>
            <button className="bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF] p-[2px] tracking-wide hover:-translate-y-1 shadow-2xl shadow-transparent rounded-full hover:border-white flex justify-center text-center transition-all duration-300 font-light text-[14px] lg:text-sm w-[160px] mx-auto">
              <div className="px-[16px] lg:px-4 py-[12px] lg:py-3 w-[160px] bg-black rounded-full">
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
