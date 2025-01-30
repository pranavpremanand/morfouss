import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { logoImg } from "../../constant";

const options = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-6 fixed top-0 w-full backdrop-blur-md z-50 text-white">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem]">
          <Scroll smooth={true} to="banner" className="cursor-pointer">
            <img src={logoImg} className="h-[1.75rem] sm:h-[2rem]" alt="logo" />
          </Scroll>
          <div className="lg:flex items-center gap-10 hidden">
            {options.map((option) => {
              return option.path.includes("/") ? (
                <Link
                  to={`${option.path}`}
                  className="link text-sm"
                  key={option.path}
                >
                  {option.name}
                </Link>
              ) : (
                <Scroll
                  to={`${option.path}`}
                  className="link text-sm"
                  key={option.path}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  activeClass="active-link"
                >
                  {option.name}
                </Scroll>
              );
            })}
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {options.map(({ name, path, id }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={id}
                className="text-3xl text-white font-medium transition-colors duration-300 link"
                to={path}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {name}
              </Link>
            ))}
          </div>
        </Drawer>
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
  );
};

export default LandingHeader;
