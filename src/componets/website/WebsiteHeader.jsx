import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState, useEffect } from "react";
import { LogoImg, routes } from "../../constant";
import { Link, useLocation } from "react-router-dom";
import bg from "../../assets/images/figma-home/header.png";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update isAtTop state
      setIsAtTop(currentScrollY === 0);

      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      }
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`py-6 border-white/20 fixed left-0 top-0 w-full z-[50] text-white transition-all duration-300 bg-cover bg-left ${
          isVisible ? "translate-y-0" : "-translate-y-0"
        }`}
        style={
          isAtTop
            ? { backgroundImage: "none" }
            : { backgroundImage: `url(${bg})` }
        }
      >
        <div className="wrapper pl-1 flex justify-between items-center gap-10 w-full">
          <div className="flex justify-between items-center gap-20 w-full">
            <Link to="/">
              <LogoImg className="w-[12.5rem] min-w-[165px]" />
            </Link>
            <div className="lg:flex items-center gap-[2.01rem] hidden">
              {routes.map(({ name, path }) => (
                <Link
                  to={`${path}`}
                  key={path}
                  className={`${
                    pathname === `${path}` && "link-text-box-active"
                  } link-text-box transition-all duration-300 overflow-auto min-w-[4.5rem] rounded-full flex justify-center`}
                >
                  <div className="py-2 px-4 rounded-full text-center text-base">
                    {name}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div
            className="block lg:hidden justify-self-end"
            onClick={toggleDrawer}
          >
            <Hamburger
              color="white"
              size="23"
              toggled={isOpen}
              rounded
              toggle={setIsOpen}
            />
          </div>
        </div>
      </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-30"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[35px]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {routes.map(({ name, path }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={path}
                className="text-[30px] text-white font-medium transition-colors duration-300 link"
                to={path}
              >
                {name}
              </Link>
            ))}
          </div>
        </Drawer>
    </>
  );
};

export default WebsiteHeader;
