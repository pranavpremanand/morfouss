import transparentLogo from "../../../assets/images/logo/transparent-mask-logo.png";
import logo from "../../../assets/images/logo/mask-logo.png";
import { Link } from "react-router-dom";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/figma-home/blur-1.png";
import blur2 from "../../../assets/images/figma-home/blur-2.png";
import heroImg from "../../../assets/imgs/into-hero.webp";
import whyPartnerWithUsImg from "../../../assets/imgs/partner-with-us.webp";
import { PiCheck } from "react-icons/pi";
import ourCoreBlur1 from "../../../assets/imgs/our-core-r.png";
import ourCoreBlur2 from "../../../assets/imgs/our-core-l.png";
import { FaStar } from "react-icons/fa";

// highlights icons
import { ReactComponent as Highlight1 } from "../../../assets/svg/highlights/A Team of Experts.svg";
import { ReactComponent as Highlight2 } from "../../../assets/svg/highlights/Tailored to You.svg";
import { ReactComponent as Highlight3 } from "../../../assets/svg/highlights/True Collaboration.svg";
import { ReactComponent as Highlight4 } from "../../../assets/svg/highlights/End-to-End Support.svg";

const Intro = () => {
  return (
    <div className="bg-black">
      <section className="flex flex-col w-screen relative">
        <img src={blur1} className="absolute left-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 top-0" alt="" />
        <div className="relative z-[1] pt-[11vh] sm:pt-[10vh] md:pt-[8rem] lg:pt-[6rem] xl:pt-[5.4rem] text-center text-white w-fit mx-auto md:mt-[-2rem]">
          <h1
            data-aos="zoom-in"
            className="text-[4.25rem] sm:text-[8rem] md:text-[11rem] lg:text-[15rem] xl:text-[17.9rem] sm:tracking-[-0.8rem] md:tracking-[-1.2rem] xl:tracking-[-1.9rem] leading-none font-extrabold inline-block sm:ml-[-2.2rem]"
          >
            INTRO
          </h1>
        </div>
        <img
          src="/noise-texture.svg"
          className="w-full h-[calc(100%+1rem)] -translate-y-[2rem] absolute z-0 inset-0 object-cover opacity-70"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper overflow-hidden mt-[32px] w-full h-full flex flex-col-reverse lg:grid grid-cols-2 gap-[2rem] lg:gap-[7rem] pb-[50px] sm:pb-[4rem]"
        >
          <div className="flex flex-col justify-between gap-8 lg:aspect-[4/3]">
            <p className="desc lg:!leading-8 text-white">
              At Morphuss, we’re passionate about helping businesses thrive in
              today’s fast paced digital world. We don’t just build products; we
              create experiences that connect, engage, and drive results. From
              intuitive UI/UX design and strategic IT consulting to thoughtful
              business strategies, we work with our clients to turn ideas into
              powerful digital solutions.
              <br />
              <br />
              Our mission is simple: to empower businesses by crafting
              personalized, innovative solutions that not only meet their goals
              but inspire growth. We take pride in working with organizations of
              all sizes, guiding them through their digital transformation and
              delivering tangible, lasting value.
            </p>
            <div className="flex sm:flex-row flex-col gap-[20px] lg:gap-4 mt-[20px] sm:mt-0">
              <Link
                className="gradient-btn text-white from-[#7338AC] to-[#87F3FF] via-[#239CE4] !font-normal !px-4"
                to="/services"
              >
                Our Services
              </Link>
              <Link className="black-btn" to="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl p-[1.5px] bg-gradient-to-tr to-[#87F3FF] from-[#625AD8]">
            <img
              src={heroImg}
              className="w-full h-full object-cover rounded-2xl"
              alt="Hero"
            />
          </div>
        </div>
      </section>
      <section className="bg-white flex items-center min-h-screen py-[50px] sm:py-[5rem] relative z-[2]">
        <div className="wrapper relative h-full w-full">
          <img
            src={transparentLogo}
            className="w-[30vw] z-[-1] aspect-square absolute object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <div className="flex flex-col-reverse lg:grid grid-cols-2 items-center gap-[20px] lg:gap-7 w-full">
            <div data-aos="fade-up" className="lg:space-y-7 space-y-[25px]">
              <h3 className="heading-2 uppercase">
                Why Partner <br /> with Us?
              </h3>

              <ul className="space-y-4 list-outside">
                {[
                  {
                    title: "Visionary Innovation",
                    desc: "Leveraging AI, automation, and cloud to redefine industries.",
                  },
                  {
                    title: "Future-Ready Technology",
                    desc: "Stay ahead with cutting-edge digital solutions.",
                  },
                  {
                    title: "User-Centric Excellence",
                    desc: "Every product and service is designed for maximum usability.",
                  },
                  {
                    title: "Strategic Partnership",
                    desc: "We don’t just build solutions; we collaborate for long-term success.",
                  },
                ].map((item) => (
                  <li className="flex gap-[8px] sm:gap-2" key={item.title}>
                    <div className="w-[20px] h-[20px] min-w-[20px] flex items-center justify-center border border-black/40 rounded-sm mt-[3px]">
                      <PiCheck size={25} className="inline text-secondary" />
                    </div>
                    <div className="inline">
                      <span className="desc !font-medium">{item.title} - </span>
                      <span className="desc">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex gap-5">
                <Link
                  to="/contact-us"
                  className="bg-white text-black border w-fit border-black cursor-pointer tracking-wide hover:-translate-y-1 shadow-2xl shadow-transparent rounded-full px-[16px] lg:px-4 py-[12px] lg:py-3 min-w-[7rem] flex justify-center text-center transition-all duration-300 font-light text-[14px] lg:text-[.9rem] hover:!bg-gradient-to-tr hover:text-white from-[#7338AC] to-[#87F3FF] via-[#239CE4] hover:!border-none"
                >
                  Contact Us
                </Link>
                <Link
                  to="/services"
                  className="gradient-btn text-white from-[#7338AC] to-[#87F3FF] via-[#239CE4]"
                >
                  Services
                </Link>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="aspect-video w-full h-full overflow-hidden rounded-md p-[1.5px] bg-gradient-to-tr to-[#87F3FF] from-[#625AD8]"
            >
              <img
                src={whyPartnerWithUsImg}
                className="w-full h-full object-cover rounded-md"
                alt="Why Partner With Us"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-0 text-white py-[50px] lg:pb-[50px] lg:pt-0">
        <img
          src={ourCoreBlur1}
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 z-[-1]"
        />
        <img
          src={ourCoreBlur2}
          alt=""
          className="absolute left-0 -translate-x-1/3 bottom-0 translate-y-[20%] z-[-1]"
        />
        <div className="wrapper py-[2rem] space-y-3">
          <h2
            data-aos="zoom-in"
            className="text-[4.25rem] sm:text-[7rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] leading-none font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-tr from-[#7338AC_20%] via-[#239CE4] to-[#87F3FF_80%]"
          >
            OUR CORE
          </h2>
          <div data-aos="fade-up">
            <h3 className="text-[38px] sm:text-[3rem] md:text-[7rem] leading-none font-extrabold tracking-tighter text-center sm:-translate-y-4">
              VALUES
            </h3>
          </div>
          <div className="pt-12 max-w-5xl mx-auto space-y-10">
            <div
              data-aos="fade-up"
              className="flex md:flex-row flex-col md:justify-between gap-8 md:gap-10"
            >
              <div className="space-y-2 md:max-w-[20rem] text-center group transition-all duration-300 hover:translate-y-1">
                <h5 className="text-[20px] lg:text-2xl font-medium uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#7338AC_30%] group-hover:via-[#239CE4] group-hover:to-[#87F3FF_80%] transition-all duration-300">
                  Innovation
                </h5>
                <p className="desc">
                  We embrace creativity and always look for new ways to solve
                  problems and meet challenges. Innovation drives everything we
                  do.
                </p>
              </div>
              <div className="space-y-2 md:max-w-[20rem] text-center group transition-all duration-300 hover:translate-y-1">
                <h5 className="text-[20px] lg:text-2xl font-medium uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#7338AC_30%] group-hover:via-[#239CE4] group-hover:to-[#87F3FF_80%] transition-all duration-300">
                  Integrity
                </h5>
                <p className="desc">
                  Trust is essential to us. We operate transparently and
                  responsibly, always doing what’s best for our clients.
                </p>
              </div>
            </div>
            <div data-aos="fade-up" className="flex md:justify-center">
              <div className="space-y-2 md:max-w-[20rem] text-center group transition-all duration-300 hover:translate-y-1">
                <h5 className="text-[20px] lg:text-2xl font-medium uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#7338AC_30%] group-hover:via-[#239CE4] group-hover:to-[#87F3FF_80%] transition-all duration-300">
                  Collaboration
                </h5>
                <p className="desc">
                  We believe the best solutions come from collaboration. We work
                  closely with you, involving you in the process at every stage.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="flex md:flex-row flex-col md:justify-between gap-8 md:gap-10"
            >
              <div className="space-y-2 md:max-w-[20rem] text-center group transition-all duration-300 hover:translate-y-1">
                <h5 className="text-[20px] lg:text-2xl font-medium uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#7338AC_30%] group-hover:via-[#239CE4] group-hover:to-[#87F3FF_80%] transition-all duration-300">
                  Excellence
                </h5>
                <p className="desc">
                  We are committed to high standards. From initial concept to
                  final delivery, we put in the work to ensure every project is
                  executed flawlessly.
                </p>
              </div>
              <div className="space-y-2 md:max-w-[20rem] text-center group transition-all duration-300 hover:translate-y-1">
                <h5 className="text-[20px] lg:text-2xl font-medium uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-tr group-hover:from-[#7338AC_30%] group-hover:via-[#239CE4] group-hover:to-[#87F3FF_80%] transition-all duration-300">
                  Sustainability
                </h5>
                <p className="desc">
                  We think long-term. We’re committed to making decisions that
                  benefit not only our clients but also the environment and
                  society as a whole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white z-[1] relative">
        <div className="wrapper py-[40px] lg:py-[3rem] relative">
          <h2
            data-aos="zoom-in"
            className="uppercase text-[3rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[9rem] xl:text-[10.2rem] leading-none font-extrabold tracking-tighter text-center text-transparent bg-clip-text bg-gradient-to-tr from-[#7338AC_30%] via-[#239CE4] to-[#87F3FF_80%]"
          >
            Testimonials
          </h2>
          <div
            data-aos="fade-up"
            className="grid md:grid-cols-3 gap-[16px] lg:gap-5 mt-6 md:mt-16 relative"
          >
            <img
              src={logo}
              className="w-[85vw] md:w-[45vw] z-[-1] aspect-square absolute object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
            {[
              {
                title: "Tech Solutions That Actually Work",
                desc: `"As our business grew, so did the complexity of our IT needs.
                  Their team helped us develop a comprehensive IT strategy,
                  making our systems more efficient and secure."`,
                name: "- John T., CEO",
                style: "md:col-span-1",
              },
              {
                title: "Redefining Our Digital Presence",
                desc: `"Working with Morphus completely transformed the way we engage with our customers. From the first meeting, it was clear they understood our brand and vision. They designed a website and app that are not only visually stunning but also incredibly easy to use. Since the launch, we’ve seen a significant increase in engagement and positive feedback from our users. Their focus on creating a user-friendly experience was exactly what we needed."`,
                name: "- Sarah W., Marketing Director",
                style: "md:col-span-2",
              },
              {
                title: "Helping Us Grow Smarter",
                desc: `"We were struggling with where to take our business next, and that’s where Morfouss came in. They helped us refine our digital strategy, giving us clear direction for moving forward. Their market analysis and advice on brand positioning were eye-opening, and we saw immediate results in customer acquisition. Their strategic insights played a huge role in accelerating our growth."`,
                name: "- Emily L., Chief Strategy Officer",
                style: "md:col-span-1",
              },
              {
                title: "A Truly Collaborative Approach",
                desc: `"What sets Morfouss apart is their genuine commitment to collaboration. They took the time to understand our goals and challenges and worked with us every step of the way.  They created an experience that feels effortless for our users, and we’ve received great feedback since launch."`,
                name: "- Mark H., Product Manager",
                style: "md:col-span-1",
              },
              {
                title: "Seeing Clear ROI from Their Expertise",
                desc: `"We knew we needed a fresh approach to both our website and IT systems, but we weren’t sure where to start. We not only delivered outstanding UI/UX design but also revamped our internal IT processes. The combination of smart design and strategic tech upgrades gave us a significant return on investment. We couldn’t be happier with the results."`,
                name: "- Robert D., Chief Operating Officer",
                style: "md:col-span-1",
              },
            ].map(({ title, desc, name, style }) => (
              <div
                key={title}
                className={`p-[2px] group bg-black/80 hover:bg-gradient-to-tr from-[#8d49cd] via-[#239CE4] to-[#87F3FF] rounded-xl transition-all duration-300 hover:translate-y-1 ${style}`}
              >
                <div className="h-full group-hover:bg-black text-white p-[20px] lg:p-6 space-y-[8px] lg:space-y-2 rounded-xl">
                  <p className="font-semibold lg:text-base text-[17px]">
                    {title}
                  </p>
                  <p className="text-[15px] sm:text-[16px] lg:text-base">
                    {desc}
                  </p>
                  <p className="font-semibold lg:text-base text-[17px]">
                    {name}
                  </p>
                  <div className="flex gap-1 pt-5 text-[17px] lg:text-base">
                    <FaStar color="#FFB700" />
                    <FaStar color="#FFB700" />
                    <FaStar color="#FFB700" />
                    <FaStar color="#FFB700" />
                    <FaStar color="#FFB700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="wrapper pt-[50px] lg:pt-[7rem] pb-[3rem] relative">
            <div className="grid lg:grid-cols-[40%_1fr] gap-[30px] lg:gap-10">
              <div data-aos="fade-up" className="space-y-[20px] lg:space-y-7">
                <p className="py-[4px] px-[16px] lg:px-5 desc !font-medium tracking-wide w-fit shadow-inner shadow-black/70 rounded-full uppercase">
                  highlights
                </p>
                <h3 className="heading-2 uppercase">
                  Our Process: Insight-Driven, User-Centered, Results-Focused
                </h3>
                <p className="desc">
                  Our process is straightforward but thorough. We begin by
                  listening - understanding your business, your users, and your
                  goals.
                </p>
                <Link to="/contact-us" className="black-btn">
                  Get Started
                </Link>
              </div>
              <div data-aos="fade-up" className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "A Team of Experts",
                    icon: <Highlight1 className="w-[25px] lg:w-8" />,
                    desc: "With backgrounds in design, development, and consulting, we bring a wide range of expertise to every project, making sure we find the best solution for you.",
                  },
                  {
                    title: "Tailored to You",
                    icon: <Highlight2 className="w-[25px] lg:w-8" />,
                    desc: "We believe every business is unique, and that’s why we create solutions that are custom-built for your needs.",
                  },
                  {
                    title: "True Collaboration",
                    icon: <Highlight3 className="w-[25px] lg:w-8" />,
                    desc: "From start to finish, we collaborate closely with you, keeping communication open and ensuring that your vision stays front and center throughout the process.",
                  },
                  {
                    title: "End-to-End Support",
                    icon: <Highlight4 className="w-[25px] lg:w-8" />,
                    desc: "Whether you're just starting or looking to optimize an existing solution, we provide fullservice support.",
                  },
                ].map(({ title, icon, desc }) => (
                  <div
                    key={title}
                    className="group flex flex-col gap-4 p-[20px] lg:p-6 bg-black hover:bg-gradient-to-tr from-[#7338AC_40%] via-[#239CE4] to-[#87F3FF] rounded-2xl transition-all duration-300 hover:translate-y-1 text-white"
                  >
                    {icon}
                    <h5 className="text-[20px] lg:text-xl font-medium">
                      {title}
                    </h5>
                    <p className="desc w-[90%] group-hover:w-[98%] transition-all duration-300">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetInTouch />
    </div>
  );
};

export default Intro;
