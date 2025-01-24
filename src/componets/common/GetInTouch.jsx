import React from "react";
import gradientBlurImg1 from "../../assets/images/figma-home/gradient-blur1.png";

const GetInTouch = () => {
  return (
    <section
      id="contact"
      className="flex bg-white items-center relative z-20 border border-black"
    >
      <div className="wrapper -z-20 min-h-[70vh] bg-black text-white py-[5rem] relative h-full w-full">
        <div className="flex flex-col md:grid grid-cols-2 items-start gap-7">
          <div className="h-full relative flex items-start">
            <img
              src={gradientBlurImg1}
              className="top-0 md:top-[-7rem] left-0 w-full object-contain absolute -z-10"
              alt=""
            />
            <div data-aos="fade-up" className="space-y-4 md:space-y-7 w-full">
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
          <form data-aos="fade-up" className="flex flex-col gap-3 w-full">
            <div className="w-full">
              <input
                type="text"
                className="outline-none bg-transparent rounded-md border border-white/40 p-2 w-full"
                placeholder="Name"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                className="outline-none bg-transparent rounded-md border border-white/40 p-2 w-full"
                placeholder="Email"
              />
            </div>
            <div className="w-full">
              <input
                type="tel"
                className="outline-none bg-transparent rounded-md border border-white/40 p-2 w-full"
                placeholder="Phone"
              />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="outline-none bg-transparent rounded-md border border-white/40 p-2 w-full"
                placeholder="Subject"
              />
            </div>
            <div className="w-full">
              <textarea
                rows="5"
                className="outline-none bg-transparent rounded-md border border-white/40 p-2 w-full"
                placeholder="Message"
              />
            </div>
            <button className="bg-white text-black hover:bg-black hover:text-white border w-full border-black hover:shadow-white cursor-pointer tracking-wide hover:-translate-y-1 shadow-2xl shadow-transparent rounded-full px-4 py-3 flex justify-center text-center transition-all duration-300 font-light text-sm hover:border-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
