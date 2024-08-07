import React, { useEffect,  useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsYoutube, BsGithub, BsTwitter } from "react-icons/bs";
// components
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Work from "./components/Work";
import { AiOutlineClose, AiFillSetting } from "react-icons/ai";
import Section from "./components/Section";
import Contact from "./components/Contact";
const App = () => {
  const colors = [
    {
      body: "linear-gradient(71deg, rgba(11,39,9,1) 0%, rgba(1,184,173,0.9866071428571429) 100%)",
      box: "linear-gradient(318deg, rgba(42,130,35,1) 0%, rgba(0,94,89,0.9866071428571429) 100%)",
    },
    {
      body: "#1C4F00FF",
      box: "#184500FF",
    },
    {
      body: "linear-gradient(90deg, rgba(153,45,225,0.9613970588235294) 0%, rgba(81,29,253,0.8661589635854342) 52%, rgba(252,84,69,0.2050945378151261) 100%)",
      box: "linear-gradient(318deg, rgba(121,32,150,1) 0%, rgba(0,2,94,0.9866071428571429) 100%)",
    },
    {
      body: "#480C96FF",
      box: "#2C075CFF",
    },
    {
      body: "#040070FF",
      box: "#03004FFF",
    },
    {
      body: "#5C0046FF",
      box: "#360029FF",
    },
  ];
  const [rang, setRang] = useState("");

  useEffect(() => {
    const currentColor = localStorage.getItem("color");
    const currentBox = localStorage.getItem("boxcolor");
    setTheme({ body: currentColor, box: currentBox });
    const currentSize = localStorage.getItem("size");
    setSize(currentSize);
  }, []);

  const currentColor = localStorage.getItem("color");
  const currentSize = localStorage.getItem("size");

  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color.body);
    document.documentElement.style.setProperty("--box-color", color.box);
  };

  const setColor = (e) => {
    const currentColor = e.target.style.getPropertyValue("--bg-color");
    const currentBox = e.target.style.getPropertyValue("--box-color");

    setTheme({ body: currentColor, box: currentBox });
    setRang(currentColor);
    localStorage.setItem("color", currentColor);
    localStorage.setItem("boxcolor", currentBox);
  };

  const setSize = (size) => {
    document.documentElement.style.setProperty("--font-size", size);
  };
  const setSizeCon = (e) => {
    setSize(e.target.value + "px");
    setRang(e.target.value);
    localStorage.setItem("size", e.target.value + "px");
  };

  return (
    <div className=" ">
      <Home />
      <Header />
      <div className="xl:block fixed hidden z-50 bottom-0 right-0 ">
        <div className="m-10 h-72 flex flex-col items-center">
          <div className="line rotate-90">Follow Me </div>
          <a href="https://www.instagram.com/tonicdev07" target="__blank" className=" hover:text-white cursor-pointer mr-7 mt-20 text-xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/tonicdev07/" target="__blank" className="  hover:text-white cursor-pointer mr-7 mt-4 text-xl">
            <AiOutlineLinkedin />
          </a>
          <a href="https://www.youtube.com/@anvarbekxaydarov" target="__blank" className="  hover:text-white cursor-pointer mr-7 mt-4 text-xl">
            <BsYoutube />
          </a>
          <a href="https://github.com/tonicdev07" target="__blank" className="  hover:text-white cursor-pointer mr-7 mt-4 text-xl">
            <BsGithub />
          </a>
          <a href="https://twitter.com/tonicdev07" target="__blank" className="  hover:text-white cursor-pointer mr-7 mt-4 text-xl">
            <BsTwitter />
          </a>
        </div>
      </div>
      <div className="xl:block fixed hidden z-50 bottom-0 ">
        <div className="m-10">
          <a href="mailto:anvarbekxaydarov07@gmail.com" className=" hover:text-blue-500  text-sm cursor-pointer">
            E: anvarbekxaydarov07@gmail.com
          </a>
          <a href="tel:+998 99-957-62-66" className=" hover:text-blue-500  text-sm block cursor-pointer">P: +998 (99) 957 62 66</a>
        </div>
      </div>

      {/* --------------- Settings -------------- */}
      <div className="drawer-end ">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content z-[100] fixed  bottom-4 right-4">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-1"
            className="drawer-button z-50 cursor-pointer"
          >
            <AiFillSetting className=" hover:text-white text-xl" />
          </label>
        </div>
        <div className="drawer-side z-[200]">
          <label htmlFor="my-drawer-1" className="drawer-overlay"></label>
          <ul className="menu t p-4 w-[50%] xl:w-[30%] h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <label
              htmlFor="my-drawer-1"
              className="drawer-button cursor-pointer hover:text-white my-2"
            >
              <AiOutlineClose className=" text-2xl" />
            </label>
            <div>
              <div className=" text-center font-semibold text-xl">Theme</div>

              <div className=" grid grid-cols-2 gap-2">
                {colors.map((color, idx) => (
                  <div key={idx}>
                    <div
                      className={`   ${
                        currentColor === color.body ? "border-4" : ""
                      }  h-[26px] w-[50px] `}
                      onClick={setColor}
                      style={{
                        "--bg-color": color.body,
                        "--box-color": color.box,
                        background: `${color.body}`,
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className=" text-center font-semibold text-xl">Size</div>
              <div className=" text-center flex  flex-col xl:flex-row">
                <span className="mr-2 font-bold text-lg">{currentSize}</span>
                <input
                  onChange={setSizeCon}
                  step={1}
                  min={10}
                  max={32}
                  type="range"
                  name="size"
                  id=""
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
      <div className="h-screen"></div>
      <div className="xl:bg-xl z-50 md:bg-md sm:bg-sm md:bg-center  lg:bg-contain md:bg-no-repeat sm:bg-contain xl:mx-[288px] md:mx-[150px] overflow-hidden ">
        {/* Resume */}
        <About />
        {/* Works */}
        <Work />
        {/* Blog */}
        <Section />
        {/* Contact */}
        <Contact />

      </div>
    </div>
  );
};

export default App;
