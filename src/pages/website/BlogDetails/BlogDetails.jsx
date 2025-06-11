import { Link, Navigate, useParams } from "react-router-dom";
import GetInTouch from "../../../components/common/GetInTouch";
import blur1 from "../../../assets/images/blog-detail/left.png";
import blur2 from "../../../assets/images/blog-detail/right.png";
import { useBlogBySlug, useBlogs } from "../../../hooks/useBlogs";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { Helmet } from "react-helmet-async";
import AOS from "aos";

const BlogDetails = () => {
  const { slug } = useParams();

  // Refresh AOS when component mounts
  useEffect(() => {
    AOS.refresh();
  }, []);

  // Use the custom hooks to fetch data with caching
  const {
    data: blogData,
    isLoading: isBlogLoading,
    error: blogError,
  } = useBlogBySlug(slug);

  const { data: blogsData, isLoading: isBlogsLoading } = useBlogs();

  // Derived state
  const blog = blogData?.blog;
  const loading = isBlogLoading || isBlogsLoading;
  const error = blogError?.response?.data?.message || blogError?.message;

  // Format date to a readable format
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Common header section
  const HeaderSection = () => (
    <>
      <img src={blur1} className="absolute left-0 top-0" alt="" />
      <img src={blur2} className="absolute right-0 top-0" alt="" />
      <div className="relative z-[1] pt-[11vh] sm:pt-[10vh] md:pt-[8rem] lg:pt-[6rem] xl:pt-[5.4rem] text-center text-white w-fit mx-auto md:mt-[-2rem]">
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
    </>
  );

  // Loading state
  if (loading) {
    return (
      <div className="bg-black">
        <section className="flex flex-col w-screen relative min-h-screen">
          <HeaderSection />
          <div className="flex justify-center items-center py-40 z-10">
            <div className="flex flex-col items-center text-white">
              <CgSpinner className="animate-spin" size={60} />
              <p className="mt-4 text-xl">Loading article...</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-black">
        <section className="flex flex-col w-screen relative min-h-screen">
          <HeaderSection />
          <div className="flex justify-center items-center py-40 z-10">
            <div className="bg-red-900/30 p-8 rounded-lg max-w-2xl mx-auto text-center">
              <h2 className="text-red-500 text-2xl font-bold mb-4">
                Error Loading Article
              </h2>
              <p className="text-white mb-6">{error}</p>
              <button
                onClick={() => (window.location.href = "/insights")}
                className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                Back to Insights
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // if there's no blog, redirect to blogs page
  if (!blog && !loading) {
    return <Navigate to="/insights" />;
  }

  return (
    <div className="bg-black">
      {/* SEO Optimization */}
      <Helmet>
        <title>{blog.title || "Blog Article"} | Morfouss</title>
        <meta
          name="description"
          content={blog.excerpt || "Read our latest insights"}
        />
        <meta
          name="keywords"
          content={
            blog.metaKeywords?.join(", ") ||
            blog.categoryId?.name ||
            "blog, insights"
          }
        />
        {/* Open Graph / Social Media */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt} />
        <meta name="twitter:image" content={blog.imageUrl} />
        {/* Article specific */}
        <meta
          property="article:published_time"
          content={blog.publishDate || blog.createdAt}
        />
        <meta
          property="article:author"
          content={blog.authorId?.name || blog.author?.name}
        />
        <meta property="article:section" content={blog.categoryId?.name} />
      </Helmet>

      <section className="flex flex-col w-screen relative">
        <HeaderSection />

        <div className="bg-white z-[1] text-black overflow-hidden mt-[2rem] w-full h-full">
          <div
            data-aos="fade-up"
            className="wrapper py-[4rem] lg:py-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[1.25rem] lg:gap-14"
          >
            <div className="space-y-[1.25rem] lg:space-y-10">
              <div className="px-[0.75rem] py-[0.5rem] rounded-full border border-black w-fit flex items-center gap-[0.5rem]">
                <div className="w-[0.5rem] h-[0.5rem] rounded-full bg-black" />
                <p className="uppercase desc lg:!text-sm">
                  {blog.categoryId?.name}
                </p>
              </div>
              <h3 className="heading-3 uppercase">{blog.title}</h3>
              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <span>By {blog.authorId?.name || blog.author?.name}</span>
                <span>•</span>
                <span>{formatDate(blog.publishDate || blog.createdAt)}</span>
              </div>
            </div>
            <div className="space-y-[0.5rem] lg:space-y-2">
              <p className="font-bold text-[1.125rem] md:text-[1.875rem] lg:!text-[1.5rem] uppercase">
                Overview
              </p>
              <p className="desc">{blog.excerpt}</p>
            </div>
          </div>
        </div>

        <div className="text-white z-[1] wrapper py-[4rem] lg:py-[4rem] grid grid-cols-1 md:grid-cols-2 gap-[1.25rem] lg:gap-14">
          <div
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="prose prose-invert max-w-none reset-content"
          />
          <div className="p-[0.09375rem] rounded-xl bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF]">
            <img
              src={blog.imageUrl}
              alt={blog.imageAlt || blog.title}
              className="h-full aspect-square w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Related Articles Section */}
        {blogsData?.blogs && blogsData.blogs.length > 1 && (
          <div className="bg-white z-[1] text-black py-[4rem]">
            <div className="wrapper">
              <h2 className="text-3xl font-bold mb-8">More Insights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogsData.blogs
                  .filter((relatedBlog) => relatedBlog._id !== blog._id)
                  .slice(0, 3)
                  .map((relatedBlog) => (
                    <div
                      key={relatedBlog._id}
                      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <Link to={`/insights/${relatedBlog.slug}`}>
                        <img
                          src={relatedBlog.imageUrl}
                          alt={relatedBlog.title}
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                      <div className="p-4">
                        <p className="text-sm text-gray-500 uppercase">
                          {relatedBlog.categoryId?.name}
                        </p>
                        <Link to={`/insights/${relatedBlog.slug}`}>
                          <h3 className="font-bold text-lg mt-1 mb-2">
                            {relatedBlog.title}
                          </h3>
                        </Link>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedBlog.excerpt}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </section>

      <GetInTouch />
    </div>
  );
};

export default BlogDetails;
