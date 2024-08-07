import React, { useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 70 ||
        document.documentElement.scrollTop > 70
      ) {
        headerRef.current.classList.add("sticky_header");
        headerRef.current.classList.add("box-color");   
      } else {
        headerRef.current.classList.remove("sticky_header");
        headerRef.current.classList.remove("box-color");   
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  return (
    <header ref={headerRef} className="leading-[70px]">
      <div className="md:mx-12 flex z-50 items-center md:justify-between sm:justify-around">
        <div>
          Anvarbek <span className="text-white font-semibold">Xaydarov</span>
        </div>
        <div className="md:flex hidden">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer hover:text-white w-[60px] h-[60px] flex z-50 items-center justify-center font-semibold mr-10"
          >
            Home
          </Link>
          <Link
            to="resume"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer hover:text-white w-[60px] h-[60px] flex items-center justify-center font-semibold mr-10"
          >
            Resume
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer hover:text-white w-[60px] h-[60px] flex items-center justify-center font-semibold mr-10"
          >
            Works
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer hover:text-white w-[60px] h-[60px] flex items-center justify-center font-semibold "
          >
            Conatact
          </Link>
        </div>

        <div className="md:hidden drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" className="drawer-button ">
              <AiOutlineMenu className=" text-2xl" />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu p-4 w-[60%] h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer hover:text-white my-2">
                <AiOutlineClose className=" text-2xl" />
              </label>
              <Link
                to="home"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer hover:bg-slate-600 py-3 text-xl rounded-sm  flex items-center justify-center font-semibold "
              >
                Home
              </Link>
              <Link
                to="resume"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer hover:bg-slate-600 py-3 text-xl rounded-sm  flex items-center justify-center font-semibold "
              >
                Resume
              </Link>
              <Link
                to="work"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer hover:bg-slate-600 py-3 text-xl rounded-sm  flex items-center justify-center font-semibold "
              >
                Works
              </Link>
              <Link
                to="contact"
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer hover:bg-slate-600  py-3 text-xl rounded-sm flex items-center justify-center font-semibold "
              >
                Conatact
              </Link>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
