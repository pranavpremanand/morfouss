import { Link } from "react-router-dom";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/figma-home/blur-1.png";
import blur2 from "../../../assets/images/figma-home/blur-2.png";
import heroImg from "../../../assets/imgs/into-hero.webp";
import { blogs } from "../../../content/blogs";
import { createUrlParam } from "../../../utils/helper";

const Blogs = () => {
  return (
    <div className="bg-black">
      <section className="flex flex-col w-screen relative">
        <img src={blur1} className="absolute left-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 bottom-0" alt="" />
        <div className="relative z-[1] pt-[11vh] sm:pt-[10vh] md:pt-[8rem] lg:pt-[6rem] xl:pt-[5.4rem] text-center text-white w-fit mx-auto mt-[-2rem]">
          <h1
            data-aos="zoom-in"
            className="text-[65px] sm:text-[20.9rem] sm:tracking-[-2rem] leading-none font-extrabold inline-block sm:ml-[-2.2rem] uppercase"
          >
            insights
          </h1>
        </div>
        <img
          src="/noise-texture.svg"
          className="w-full h-[calc(100%+1rem)] -translate-y-[2rem] absolute z-0 inset-0 object-cover opacity-70"
          alt=""
        />
        <div
          data-aos="fade-up"
          className="wrapper overflow-hidden mt-[32px] w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-7 pb-[50px] sm:pb-[4rem]"
        >
          {blogs.concat(blogs).map((item) => (
            <div
              key={item.id}
              className="even:bg-white even:text-black odd:bg-black odd:text-white rounded-2xl"
            >
              <Link to={`/insights/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.category}
                  className="aspect-square sm:aspect-[3.5/4] object-cover rounded-2xl hover:brightness-75 transition-all duration-300"
                  loading="lazy"
                />
              </Link>
              <div className="p-[20px] lg:p-5 space-y-[8px] lg:space-y-2">
                <p className="desc uppercase">{item.category}</p>
                <Link to={`/insights/${item.id}`}>
                  <p className="!font-bold link desc lg:!text-lg">
                    {item.heading}
                  </p>
                </Link>
                <p className="line-clamp-3 desc">{item.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default Blogs;
