import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { BsLink45Deg, BsYoutube } from "react-icons/bs";
import { CgCloseO } from "react-icons/cg";
import { IoIosImages } from "react-icons/io";
import { CiMusicNote1, CiImageOn } from "react-icons/ci";
import { BiBookContent } from "react-icons/bi";
import ImageSlider from "./ImageSlider";

const images = [
  {
    key: 1,
    id: "video",
    height: "h-[200px]",
    position: "bg-left",
    all: "all",
    img: "bg-img1",
    you: `<iframe height="400" width="500"    
    src="https://www.youtube.com/embed/O5hShUO6wxs">   
    </iframe>   
    `,
  },
  {
    key: 2,
    id: "music",
    all: "all",
    height: "h-[300px]",
    position: "bg-top",
    img: "bg-img2",
  },
  {
    key: 3,
    id: "content",
    all: "all",
    height: "h-[180px]",
    position: "bg-right",
    img: "bg-img3",
  },
  {
    key: 5,
    id: "links",
    all: "all",
    height: "h-[200px]",
    position: "bg-right",
    img: "bg-img8",
  },
  {
    key: 13,
    id: "content",
    all: "all",
    height: "h-[200px]",
    position: "bg-right",
    img: "bg-img6",
  },
  {
    key: 8,
    id: "image",
    all: "all",
    height: "h-[300px]",
    position: "bg-top",
    img: "bg-img4",
  },
  {
    key: 9,
    id: "image",
    all: "all",
    height: "h-[240px]",
    position: "bg-right",
    img: "bg-img11",
  },
];

const Work = () => {
  const [filter, setFilter] = useState("all");
  const [show, setShow] = useState("");
  const filtered = images.filter((i) => i.id === filter || i.all === filter);

  const breakpointColumnsObj = {
    default: 2,
    1100: 2,
    960: 1,
    500: 1,
  };

  const modalGroup = images.filter((i) => i.id === show);

  return (
    <div id="work" className="mt-40  lg:p-0 sm:p-7">
      {/* ========== Portfolio ============ */}
      <div className="">
        <h2 className="h3 lg:ml-4 sm:ml-5  text-white">Portfolio</h2>
        <div className="box-color border break-all border-[white]   md:px-10 lg:h-[65px] sm:h-[90px] sm:p-4">
          <div
            id="all"
            onClick={(e) => setFilter(e.target.id)}
            className={`${
              filter === "all" ? "border-b" : ""
            }  mx-1 inline-block font-medium text-white hover:cursor-pointer hover:border-b`}
          >
            All
          </div>
          <div
            id="video"
            onClick={(e) => setFilter(e.target.id)}
            className={`${
              filter === "video" ? "border-b" : ""
            }  mx-1 inline-block font-medium text-white hover:cursor-pointer hover:border-b`}
          >
            Video
          </div>
          <div
            id="music"
            onClick={(e) => setFilter(e.target.id)}
            className={`${
              filter === "music" ? "border-b" : ""
            }  mx-1 inline-block font-medium text-white hover:cursor-pointer hover:border-b`}
          >
            Music
          </div>
          <div
            id="links"
            onClick={(e) => setFilter(e.target.id)}
            className={`${
              filter === "links" ? "border-b" : ""
            }  mx-1 inline-block font-medium text-white hover:cursor-pointer hover:border-b`}
          >
            Links
          </div>
          <div
            id="image"
            onClick={(e) => setFilter(e.target.id)}
            className={`${
              filter === "image" ? "border-b" : ""
            }  mx-1 inline-block font-medium text-white hover:cursor-pointer hover:border-b`}
          >
            Image
          </div>
          <div
            id="gallery"
            onClick={(e) => setFilter(e.target.id)}
            className={`${
              filter === "gallery" ? "border-b" : ""
            }  mx-1 inline-block font-medium text-white hover:cursor-pointer hover:border-b`}
          >
            Gallery
          </div>
          <div
            id="content"
            onClick={(e) => setFilter(e.target.id)}
            className={`${
              filter === "content" ? "border-b" : ""
            }  mx-1 inline-block font-medium text-white hover:cursor-pointer hover:border-b`}
          >
            Content
          </div>
        </div>
        <div className="box-color  border min-h-screen border-[white] py-4">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className=" my-masonry-grid "
            columnClassName="my-masonry-grid_column"
          >
            {filtered.map((i, index) => (
              <motion.div
                key={index}
                animate={{ x: [0, 0, 0], opacity: 1, scale: 0.99 }}
                transition={{
                  duration: 0.4,
                  delay: 0,
                  ease: [0.5, 0.71, 1, 1.5],
                }}
                onClick={() => setShow(i.id)}
                initial={{ scale: 1 }}
                // whileHover ={{
                //   scale: 1.1,
                //   overflow: "hidden",
                // }}
                className={`${i.img} relative bg-cover image_how ${i.height} ${i.position}  max-w-full my-4 mx-2 rounded-md  bg-fixed bg-contain`}
              >
                <label htmlFor={i.id !== "links" ? "my_modal_7" : ""}>
                  <a
                    href={
                      i.id === "links"
                        ? i.key === 4
                          ? "https://tonicdev77.netlify.app"
                          : i.key === 5
                          ? "https://bakhmal-plots.uz/"
                          : false
                        : false
                    }
                    target="_blank"
                    className="icons_how absolute h-full w-full bg-[#1758768b]  hidden "
                  >
                    {i.id === "links" ? (
                      <BsLink45Deg className="icon_item text-3xl cursor-pointer text-white hover:bg-[#17587625] rounded-[50%] m-2" />
                    ) : i.id === "video" ? (
                      <BsYoutube className="icon_item  text-3xl cursor-pointer text-[#FF0000] hover:bg-[#17587625] rounded-[50%] m-2" />
                    ) : i.id === "music" ? (
                      <CiMusicNote1 className="icon_item text-3xl cursor-pointer text-white hover:bg-[#17587625] rounded-[50%] m-2" />
                    ) : i.id === "content" ? (
                      <BiBookContent className="icon_item text-3xl cursor-pointer text-white hover:bg-[#17587625] rounded-[50%] m-2" />
                    ) : i.id === "gallery" ? (
                      <IoIosImages className="icon_item text-3xl cursor-pointer text-white hover:bg-[#17587625] rounded-[50%] m-2" />
                    ) : i.id === "image" ? (
                      <CiImageOn className="icon_item text-3xl cursor-pointer text-white hover:bg-[#17587625] rounded-[50%] m-2" />
                    ) : (
                      ""
                    )}
                  </a>
                </label>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </div>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal w-full">
        <div className=" relative  z-50 max-h-[80vh] lg:w-[70%] sm:w-[90%]">
          <ImageSlider slides={modalGroup} />

          <label
            className="absolute top-0 lg:right-28 right-0"
            htmlFor="my_modal_7"
          >
            <CgCloseO className=" m-3 hover:bg-[#bfbfbf] rounded-xl cursor-pointer text-[#0501018b] text-3xl " />
          </label>
        </div>
        <label
          className="absolute h-screen w-full"
          htmlFor="my_modal_7"
        ></label>
      </div>
    </div>
  );
};

export default Work;
