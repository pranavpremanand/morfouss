import React, { useState, useEffect } from "react";
import { webPortfolio, appPortfolio } from "../../../../content/constant";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [portfolioItems, setPortfolioItems] = useState([...webPortfolio, ...appPortfolio]);
  const [activeButton, setActiveButton] = useState("all");

  useEffect(() => {
    if (filter === "all") {
      setPortfolioItems([...webPortfolio, ...appPortfolio]);
    } else if (filter === "web") {
      setPortfolioItems(webPortfolio);
    } else if (filter === "app") {
      setPortfolioItems(appPortfolio);
    }
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setActiveButton(newFilter);
  };

  return (
    <section className="relative z-[2] bg-black text-white py-[3.125rem] md:py-[5rem]">
      <img
        src="/noise-texture.svg"
        className="w-full h-full absolute z-0 inset-0 object-cover opacity-70"
        alt=""
      />
      <div className="wrapper relative z-[1]">
        <div className="text-center mb-[2.5rem]" data-aos="zoom-in">
          <h2 className="text-[4rem] sm:text-[7.5rem] md:text-[8rem] lg:text-[12.5rem] xl:text-[14rem] leading-none font-extrabold tracking-tighter text-center gradient-stroke-text4 select-none">
            PORTFOLIO
          </h2>
          <p className="desc max-w-3xl mx-auto mt-4">
            Explore our diverse portfolio of successful projects that showcase our expertise in web and mobile app development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => handleFilterChange("all")}
              className={`btn-styles ${
                activeButton === "all"
                  ? "gradient-btn text-white from-[#7338AC] to-[#87F3FF] via-[#239CE4]"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => handleFilterChange("web")}
              className={`btn-styles ${
                activeButton === "web"
                  ? "gradient-btn text-white from-[#7338AC] to-[#87F3FF] via-[#239CE4]"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => handleFilterChange("app")}
              className={`btn-styles ${
                activeButton === "app"
                  ? "gradient-btn text-white from-[#7338AC] to-[#87F3FF] via-[#239CE4]"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              App Development
            </button>
          </div>
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
          data-aos="fade-up"
        >
          {portfolioItems.map((item) => (
            <div 
              key={`${item.id}-${item.title}`} 
              className="portfolio-item group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-tr from-[#7338AC] via-[#239CE4] to-[#87F3FF] p-[0.09375rem]">
                <div className="w-full h-full rounded-lg overflow-hidden bg-black">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gradient-btn text-white from-[#7338AC] to-[#87F3FF] via-[#239CE4] mt-2 w-fit"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;