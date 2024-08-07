import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft
        className={`${
          length === 1 ? " hidden" : ""
        } left-[32px]  lg:left-[150px] sm:left-[0px] left-arrow sm:h-9`}
        onClick={prevSlide}
        style={{ color: "#0501018b" }}
      />
      <FaArrowAltCircleRight
        style={{ color: "#0501018b" }}
        className={`${
          length === 1 ? " hidden" : ""
        } right-[32px]  lg:right-[150px] sm:right-[0px] right-arrow sm:h-9`}
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide  active" : "slide"}
            key={index}
          >
            {index === current && (
              <>
                {slide.id === "video" ? (
                  <iframe
                    className="md:h-[500px] xs:h-[200px] md:w-[700px] xs:w-[300px]"
                    src="https://www.youtube.com/embed/xYtqmYZ-kDQ"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                ) : slide.id === "content" ? (
                  <div className="flex flex-col md:flex-row rounded-md overflow-hidden">
                    <div
                      className={` bg-cover lg:h-[450px] lg:w-[500px] md:h-[400px] md:w-[550px] sm:w-[100%]  sm:h-[150px]   ${slide.img}`}
                    />
                    {slide.img === "bg-img3" ? (
                      <div className="sm:w-full md:w-[36%] py-3 px-3 text-white bg-blue-900 break-words">
                        <div className=" text-xl text-green-400 font-semibold">
                          Super Faster Fullstack Blog app
                        </div>
                        <div className=" text-sm md:text-[16px]  leading-3 md:leading-4 italic">
                          What features does it have Like for each post,
                          Comments for each post, Like for each comments, Use
                          nested comments, Auth by Google, Auth by GitHub, Auth
                          by Credentials, Client rendering, Server rendering,
                          User Protected, Admin role based by middleware and
                          more...
                        </div>
                        <div className=" text-sm my-2 leading-4">
                          <span className=" font-bold text-slate-100">
                            I what was base technologies are use!
                          </span>
                          <br />
                          Typescript <br /> Next Js: app router <br /> NextAuth{" "}
                          <br />
                          Tailwindcss <br /> PostgreSql <br /> Prisma <br />
                          Jsonwebtoken <br /> Headlessui <br /> And more..
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className=" text-sm font-bold text-blue-400 hover:text-black"
                            href="https://github.com/tonicdev07/my-blog"
                          >
                            GitHub code
                          </a>
                          <a href=""></a>
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className=" text-sm font-bold text-blue-400 hover:text-black"
                            href="https://toniblog.vercel.app"
                          >
                            Live visit
                          </a>
                          <a href=""></a>
                        </div>
                      </div>
                    ) : (
                      <div className="sm:w-full md:w-[36%] py-3 px-3 text-white bg-blue-900 break-words">
                        <div className=" text-xl text-green-400 font-semibold">
                          A great fullstack ecommerce app
                        </div>
                        <div className=" text-sm md:text-[16px]  leading-3 md:leading-4 italic">
                          Fullstack ecommerce shop app - As the lead developer
                          for a dynamic e-commerce platform, I engineered a
                          visually captivating and SEO-optimized marketplace
                          with user-centric and admin-friendly features.
                        </div>
                        <div className=" text-sm my-2 leading-4">
                          <span className=" font-bold text-slate-100">
                            I what was base technologies are use!
                          </span>
                          <br /> JavaScript <br />
                          React/Vite Js: app router <br /> Express Js <br />
                          Tailwindcss MySql <br /> Jsonwebtoken <br />{" "}
                          Headlessui
                          <br /> And too more..
                        </div>
                        <div>
                          <a
                            target="_blank"
                            className=" text-sm font-bold text-blue-400 hover:text-black"
                            href="https://github.com/tonicdev07/ecommerce-api"
                          >
                            GitHub code and demo
                          </a>
                          <a href=""></a>
                        </div>
                      </div>
                    )}
                  </div>
                ) : slide.id === "music" ? (
                  <>
                    <iframe
                      className="md:h-[500px] xs:h-[200px] md:w-[700px] xs:w-[300px]"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>
                    <div>
                      <a
                        href="https://soundcloud.com/skizzymars"
                        title="Skizzy Mars"
                        target="_blank"
                      >
                        Skizzy Mars
                      </a>
                      ·
                      <a
                        href="https://soundcloud.com/skizzymars/changes-leon-tired-of-talking-remix"
                        title="Changes (Léon - Tired Of Talking Remix)"
                        target="_blank"
                      >
                        Changes (Léon - Tired Of Talking Remix)
                      </a>
                    </div>
                  </>
                ) : (
                  <div
                    className={` bg-cover  lg:h-[500px] lg:w-[700px] md:h-[400px] md:w-[500px] xs:w-[350px] sm:w-[300px] sm:h-[300px] rounded-md  ${slide.img}`}
                  />
                )}
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
