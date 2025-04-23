import { Navigate, useParams } from "react-router-dom";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/blog-detail/left.png";
import blur2 from "../../../assets/images/blog-detail/right.png";
import { blogs } from "../../../content/blogs";
import { createUrlParam } from "../../../utils/helper";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((item) => item.id === Number(id));

  // if there's no blog, redirect to blogs page
  if (!blog) {
    return <Navigate to="/insights" />;
  }
  return (
    <div className="bg-black">
      <section className="flex flex-col w-screen relative">
        <img src={blur1} className="absolute left-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 top-0" alt="" />
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
        <div className="bg-white z-[1] text-black overflow-hidden mt-[32px] w-full h-full">
          <div
            data-aos="fade-up"
            className="wrapper py-[64px] lg:py-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-14"
          >
            <div className="space-y-[20px] lg:space-y-10">
              <div className="px-[12px] py-[8px] rounded-full border border-black w-fit flex items-center gap-[8px]">
                <div className="w-[8px] h-[8px] rounded-full bg-black" />
                <p className="uppercase desc lg:!text-sm">{blog.category}</p>
              </div>
              <h3 className="heading-3 uppercase">{blog.heading}</h3>
            </div>
            <div className="space-y-[8px] lg:space-y-2">
              <p className="font-bold text-[18px] md:text-[30px] lg:!text-[1.5rem] uppercase">
                Overview
              </p>
              <p className="desc">{blog.overview}</p>
            </div>
          </div>
        </div>
        <div className="text-white z-[1] wrapper py-[64px] lg:py-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[20px] lg:gap-14">
          <div dangerouslySetInnerHTML={{ __html: blog.middleSection }} />
          <div className="p-[1.5px] rounded-xl bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF]">
            <img
              src={blog.image}
              alt={blog.image}
              className="h-full aspect-square w-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="bg-white z-[1] text-black py-[64px] lg:py-[4rem]">
          <div
            dangerouslySetInnerHTML={{ __html: blog.belowSection }}
            className="wrapper"
          />
        </div>
      </section>

      <GetInTouch />
    </div>
  );
};

export default BlogDetails;
