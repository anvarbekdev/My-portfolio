import React from "react";

import { useState } from "react";
import BlogData from "./BlogData";

const data = [
  {
    title:
      "Full Stack Mern System | NodeJs, React, Tailwindcss, MongoDB, MaterialUI, Express...",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam, unde vero exercitationem doloribus aperiam a ducimusaliquid eveniet, praesentium est architecto expedita, nostrummolestiae id distinctio possimus veniam. Ipsa?",
  },
  {
    title: "Full Stack Mern System | NodeJs, React, Tailwindcss..",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quibusdam, unde vero exercitationem doloribus aperiam a ducimusaliquid eveniet, praesentium est architecto expedita, nostrummolestiae id distinctio possimus veniam. Ipsa?",
  },
];
const Section = () => {
  const [value2, setValue2] = useState([0, 40, null]);

  const getData = async () => {
    await fetch("https://toniblog.vercel.app").then((d) =>
      console.log(d)
    );
  };
  getData()

  return (
    <div
      id="blog"
      className={` mt-40 mb-20 md:h-[670px] border border-[#282727]   sm:h-[1100px] box-color lg:p-0 sm:p-2`}
    >
      <h2 className="text-4xl pt-10 tracking-tight font-extrabold text-center  dark:text-white">
        Blog
      </h2>
      {/* ========== BLOG ============ */}
      <div className="grid  md:grid-cols-2 sm:grid-cols-1 xss:grid-cols-1   rounded-lg md:px-1 py-4">
        {data.map((i, idx) => (
          <BlogData
            i={i}
            key={idx}
            index={idx}
            value2={value2}
            setValue2={setValue2}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
