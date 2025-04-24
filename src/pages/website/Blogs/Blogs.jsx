import { Link } from "react-router-dom";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/figma-home/blur-1.png";
import blur2 from "../../../assets/images/figma-home/blur-2.png";
import { blogs } from "../../../content/blogs";
import { createUrlParam } from "../../../utils/helper";
import { useState } from "react";

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
            className="text-[62px] sm:text-[20.9rem] sm:tracking-[-2rem] leading-none font-extrabold inline-block sm:ml-[-2.2rem] uppercase"
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
          {blogs.concat(blogs).map((item, index) => {
            return <BlogCard key={index} item={item} index={index} />;
          })}
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default Blogs;

const BlogCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link
      to={`/insights/${item.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="even:bg-white hover:even:bg-black hover:even:text-white even:text-black odd:bg-black odd:text-white hover:odd:bg-white hover:odd:text-black transition-all duration-500 group rounded-2xl overflow-hidden"
    >
      <img
        src={item.image}
        alt={item.category}
        className="aspect-square sm:aspect-[3.5/4] object-cover group-hover:brightness-75 transition-all duration-300"
        loading="lazy"
      />
      <div className="pb-[1.5px] px-[1.5px] rounded-b-2xl group-hover:bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF]">
        <div
          className={`p-[20px] lg:p-5 space-y-[8px] rounded-b-2xl transition-all duration-500 lg:space-y-2 ${
            isHovered
              ? index % 2 === 0
                ? "bg-white text-black"
                : "bg-black text-white"
              : index % 2 === 0
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          <p className="desc uppercase">{item.category}</p>
          <p className="!font-bold desc lg:!text-lg">{item.heading}</p>
          <p className="line-clamp-3 desc">{item.overview}</p>
        </div>
      </div>
    </Link>
  );
};
