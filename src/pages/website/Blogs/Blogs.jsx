import { Link } from "react-router-dom";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/figma-home/blur-1.png";
import blur2 from "../../../assets/images/figma-home/blur-2.png";
import { createUrlParam } from "../../../utils/helper";
import { useState, useEffect } from "react";
import { useBlogs } from "../../../hooks/useBlogs";
import { CgSpinner } from "react-icons/cg";
import AOS from "aos";

const Blogs = () => {
  // Use the custom hook to fetch blogs with caching
  const { data, isLoading: loading, error: fetchError } = useBlogs();

  // Refresh AOS when component mounts
  useEffect(() => {
    AOS.refresh();
  }, []);

  // Derived state
  const blogsList = data?.blogs || [];
  const error = fetchError?.message;
  return (
    <div className="bg-black">
      <section className="flex flex-col w-screen relative">
        <img src={blur1} className="absolute left-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 top-0" alt="" />
        <img src={blur2} className="absolute right-0 bottom-0" alt="" />
        <div className="relative z-[1] pt-[11vh] sm:pt-[10vh] md:pt-[8rem] lg:pt-[6rem] xl:pt-[5.4rem] text-center text-white w-fit mx-auto md:mt-[-2rem] select-none">
          <h1
            data-aos="zoom-in"
            className="text-[4.25rem] sm:text-[8rem] md:text-[11rem] lg:text-[14.5rem] xl:text-[17.7rem] sm:tracking-[-0.8rem] md:tracking-[-1.2rem] xl:tracking-[-1.9rem] leading-none font-extrabold inline-block sm:ml-[-2.2rem] uppercase"
          >
            insights
          </h1>
        </div>
        <img
          src="/noise-texture.svg"
          className="w-full h-[calc(100%+1rem)] -translate-y-[2rem] absolute z-0 inset-0 object-cover opacity-70"
          alt=""
        />

        {loading ? (
          <div data-aos="fade-up" data-aos-delay="200">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="flex justify-center items-center py-20"
            >
              <CgSpinner className="animate-spin ml-2" size={50} />
            </div>
          </div>
        ) : error ? (
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-center py-10 text-red-500"
          >
            {error}
          </div>
        ) : (
          <div
            data-aos="fade-up"
            className="wrapper overflow-hidden mt-[2rem] w-full h-full grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.25rem] lg:gap-7 pb-[3.125rem] sm:pb-[4rem]"
          >
            {blogsList.length > 0 ? (
              blogsList.map((item, index) => (
                <BlogCard key={item._id} item={item} index={index} />
              ))
            ) : (
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-center py-10 text-gray-500"
              >
                No blogs found.
              </div>
            )}
          </div>
        )}
      </section>

      <GetInTouch />
    </div>
  );
};

export default Blogs;

const BlogCard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Format date to a readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <Link
      to={`/insights/${item.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="even:bg-white hover:even:bg-black hover:even:text-white even:text-black odd:bg-black odd:text-white hover:odd:bg-white hover:odd:text-black transition-all duration-500 group rounded-2xl overflow-hidden"
    >
      <div className="relative">
        <img
          src={item.imageUrl}
          alt={item.imageAlt || item.title}
          className="aspect-square sm:aspect-[3.5/4] object-cover group-hover:brightness-75 transition-all duration-300 w-full"
          loading="lazy"
        />
        {item.isFeatured && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="pb-[0.09375rem] px-[0.09375rem] rounded-b-2xl group-hover:bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF]">
        <div
          className={`p-[1.25rem] lg:p-5 space-y-[0.5rem] rounded-b-2xl transition-all duration-500 lg:space-y-2 ${
            isHovered
              ? index % 2 === 0
                ? "bg-white text-black"
                : "bg-black text-white"
              : index % 2 === 0
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          <div className="flex justify-between items-center">
            <p className="desc uppercase !text-sm font-medium">{item.categoryId?.name || "Uncategorized"}</p>
            <p className="text-xs opacity-70">{formatDate(item.publishDate || item.createdAt)}</p>
          </div>
          <p className="!font-bold desc lg:!text-lg line-clamp-2">{item.title}</p>
          <p className="line-clamp-3 desc text-sm">{item.excerpt}</p>
          <p className="text-xs italic mt-2">By {item.authorId?.name || item.author?.name || "Unknown"}</p>
        </div>
      </div>
    </Link>
  );
};


{/* <Link
      to={`/insights/${item.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="even:bg-white hover:even:bg-black hover:even:text-white even:text-black odd:bg-black odd:text-white hover:odd:bg-white hover:odd:text-black transition-all duration-500 group rounded-2xl overflow-hidden"
    >
      <img
        src={item.imageUrl}
        alt={item.categoryId.name}
        className="aspect-square sm:aspect-[3.5/4] object-cover group-hover:brightness-75 transition-all duration-300"
        loading="lazy"
      />
      <div className="pb-[0.09375rem] px-[0.09375rem] rounded-b-2xl group-hover:bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF]">
        <div
          className={`p-[1.25rem] lg:p-5 space-y-[0.5rem] rounded-b-2xl transition-all duration-500 lg:space-y-2 ${
            isHovered
              ? index % 2 === 0
                ? "bg-white text-black"
                : "bg-black text-white"
              : index % 2 === 0
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
        >
          <p className="desc uppercase !text-sm">{item.categoryId.name}</p>
          <p className="!font-bold desc lg:!text-lg">{item.title}</p>
          <p className="line-clamp-3 desc">{item.excerpt}</p>
        </div>
      </div>
    </Link> */}