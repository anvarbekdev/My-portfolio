import React from "react";
import img from "../assets/thumbnail.jpg";
import { GiSentryGun } from "react-icons/gi";
import { BiLike, BiSend } from "react-icons/bi";
import { CgShare } from "react-icons/cg";
import { FaComment } from "react-icons/fa";
import { useState } from "react";
const BlogData = ({ index, i, value2, setValue2  }) => {
  const [comm, setComm] = useState([false, null]);
  const [value, setValue] = useState(false);

  const [indexUni, setIndex] = useState(0);

  return (
    <>
      <div className="border my-3 md:p-2 sm:p-1 rounded-md  mx-2 max-w-sm">
        <img className=" rounded-sm" src={img} alt="" />
        <div className="">
          <div>
            <div
              className={` 
                 break-words leading-5 text-lg font-bold my-2`}
            >
              {value2[2] === index
                ? i.title.slice(value2[0], value2[1])
                : i.title.slice(0, 40)}
              <span
                onClick={() => {
                  setValue2(
                    value2[1] === 40 ? [0, 200, index] : [0, 40, index]
                  );
                }}
                className=" text-blue-500 font-thin text-md cursor-pointer"
              >
                {value2[2] === index
                  ? value2[1] === 40
                    ? "see more.."
                    : "less"
                  : "see more.."}
              </span>
            </div>

            <div
              className={` ${
                value === false || index !== indexUni ? "h-10" : "h-36"
              }  overflow-hidden  transition-all leading-5 text-[17px] text-gray-400 font-thin px-1`}
            >
              {i.content}
            </div>
            <span
              onClick={() => {
                setValue((prev) => !prev), setIndex(index);
              }}
              className=" text-blue-500 font-thin text-md cursor-pointer"
            >
              {value === false ? "see more.." : "less"}
            </span>
          </div>
          <div
            className={` ${
              comm[0] !== false
                ? index !== comm[1]
                  ? "hidden"
                  : "flex"
                : "hidden"
            }  my-4 relative transition-all items-center`}
          >
            <input
              className=" text-slate-600 font-extrabold w-full border rounded-3xl  bg-orange-200"
              placeholder="Comment?"
              type="text"
            />
            <BiSend className=" hover:text-green-500 cursor-pointer text-slate-600 right-3 text-2xl absolute z-40" />
          </div>
          <div className="  flex justify-between">
            <div className="flex">
              <FaComment
                onClick={() =>
                  setComm(() => [comm[0] === true ? false : true, index])
                }
                className="m-1 text-2xl hover:text-gray-50 cursor-pointer"
              />
              <BiLike className="m-1 text-2xl hover:text-gray-50 cursor-pointer" />
              <CgShare className="m-1 text-2xl hover:text-gray-50 cursor-pointer" />{" "}
            </div>
            <span className="mt-2 text-gray-400 font-[600] text-sm">
              08/10/2023 01:58
            </span>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default BlogData;
