import React from "react";
import { FaCode, FaPenNib } from "react-icons/fa";
import { GiPerspectiveDiceThree } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { BsRocketTakeoff } from "react-icons/bs";
import resume from "../../assets/resume.pdf";
const About = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Anvarbek Xaydarov.pdf";
        alink.click();
      });
    });
  };

  return (
    <div id="resume" className="mt-40 lg:p-0 sm:p-7">
      {/* ===================== About ==================== */}
      <h2 className="h3 ml-5 text-white">About</h2>
      <div className=" box-color border border-[white] flex lg:flex-row lg:text-start sm:text-center sm:flex-col  items-center">
        <div className="lg:w-[34rem] sm:w-[7rem] md:m-8 sm:m-7 scale-125 bg-about lg:h-40 sm:h-36  rounded-lg bg-no-repeat bg-top bg-cover "></div>
        <div className="lg:py-8 lg:pr-8 ">
          <p className="leading-6 text-[17px] lg:px-0 sm:px-8">
            Hello! I’m Anvarbek Xaydarov. Full Stack web devaloper from
            Uzbekistan, Jizzax, Baxmal. I have rich experience in web site
            design and building, also I am good at 3D models. I love to talk
            with you about our unique
          </p>
          <div className="pt-7 flex lg:flex-row sm:flex-col">
            <div className="pr-5">
              <div className="text-[15px] leading-5">
                <span className="text-[#27ae60] font-semibold mr-1">Age:</span>
                21
              </div>
              <div className="text-[15px] leading-5">
                <span className="text-[#27ae60] font-semibold mr-1">
                  Freelance:
                </span>
                Available
              </div>
              <div className="text-[15px] leading-5">
                <span className="text-[#27ae60] font-semibold mr-1">
                  Phone:
                </span>
                <a
                  href="tel:+998 99-957-62-66"
                  className="hover:text-white text-blue-500 text-sm cursor-pointer"
                >
                  +998 (99) 957 62 66
                </a>
              </div>
            </div>
            <div>
              <div className="text-[15px] leading-5">
                <span className="text-[#27ae60] font-semibold mr-1">
                  Residence:
                </span>
                Uzbekistan
              </div>
              <div className="text-[15px] leading-5">
                <span className="text-[#27ae60] font-semibold mr-1">
                  Address:
                </span>
                Jizzakh
              </div>
              <div className="text-[15px] leading-5">
                <span className="text-[#27ae60] font-semibold mr-1">
                  Gmail:
                </span>
                <a
                  href="mailto:tona51552@gmail.com"
                  className="text-sm hover:text-white text-blue-500 cursor-pointer"
                >
                  anvarbekxaydarov07@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-7">
            <button
              onClick={onButtonClick}
              className="border-[#27ae60] text-[#27ae60] border-2 md:text-xl sm:text-sm hover:text-zinc-900 px-2 lg:mb-0 sm:mb-8"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
      {/* =================== Services =====================*/}
      <h2 className="h3 ml-5 mt-40 text-white">Services</h2>
      <div className="flex text-center lg:flex-row sm:flex-col">
        <div className="box-color border border-[white] p-7 lg:mr-5 sm:mr-0">
          {/* icon */}
          <div className="text-[#27ae60] text-5xl mx-auto flex justify-center">
            <FaCode />
          </div>
          {/* title */}
          <div className="h4">Web Development</div>
          {/* desc */}
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>
        <div className="box-color border border-[white] p-7 sm:ml-0 lg:mt-0 sm:mt-8">
          {/* icon */}
          <div className="text-[#27ae60] text-5xl mx-auto flex justify-center">
            <GiPerspectiveDiceThree />
          </div>
          {/* title */}
          <h1 className="h4">3D Modeling</h1>
          {/* desc */}
          <p>
            Creating 3D models, using textures, sclupting, color mapping and
            rendering services.
          </p>
        </div>
        <div className="box-color border border-[white] p-7 lg:ml-5 sm:ml-0 lg:mt-0 sm:mt-8">
          {/* icon */}
          <div className="text-[#27ae60] text-5xl mx-auto flex justify-center">
            <FaPenNib />
          </div>
          {/* title */}
          <div className="h4">UI/UX Design</div>
          {/* desc */}
          <p>
            Modern and mobile-ready website that will help you reach all of your
            marketing.
          </p>
        </div>
      </div>
      {/* ================= Pricing Table ================= */}
      <h2 className="h3 mt-40 text-white ml-3">Pricing Table</h2>
      <div className="flex text-center justify-between lg:flex-row sm:flex-col">
        <div className="box-color border border-[white] lg:p-24 sm:p-8 lg:mr-5 sm:mr-0">
          {/* icon */}
          <div className="text-[#4bffa5] text-5xl mx-auto flex justify-center">
            <AiFillStar />
          </div>
          {/* title */}
          <div className="h4 text-white">Basic</div>
          {/* desc */}
          <p className="flex justify-center">
            <span className=" mb-6 mr-1 text-sm">$</span>
            <span className=" text-white text-5xl font-semibold">29</span>
            <span className=" mt-6 ml-1 text-sm">hour</span>
          </p>
          <p>Web Development</p>
          <p>UI/UX Design</p>
          <p>
            <del>3D Modeling</del>
          </p>
          <div className="mt-7">
            <button className="border-[#4bffa5] font-bold text-[#4bffa5] border-2 hover:text-zinc-900 px-4 lg:mb-0 sm:mb-8">
              Buy Now
            </button>
          </div>
        </div>
        <div className="box-color border border-[white] lg:p-24 sm:p-8 lg:ml-5 sm:ml-0 lg:mt-0 sm:mt-8">
          {/* icon */}
          <div className="text-[#4bffa5] text-5xl mx-auto flex justify-center">
            <BsRocketTakeoff />
          </div>
          {/* title */}
          <h1 className="h4 text-white">Premium</h1>
          {/* desc */}
          <p className="flex justify-center">
            <span className=" mb-6 mr-1 text-sm">$</span>
            <span className=" text-white text-5xl font-semibold">49</span>
            <span className=" mt-6 ml-1 text-sm">hour</span>
          </p>
          <p>Web Development</p>
          <p>UI/UX Design</p>
          <p>3D Modeling</p>
          <div className="mt-7">
            <button className="border-[#4bffa5] text-[#4bffa5] font-bold border-2 hover:text-zinc-900 px-4 lg:mb-0 sm:mb-8">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* ========== Experience and Education ============ */}
      <div className="flex justify-between lg:flex-row sm:flex-col">
        {/* Experience */}
        <div className="flex sm:flex-col md:w-[360px] w-full">
          <h2 className="h3 lg:ml-4 sm:ml-5 mt-40 text-white">Experience</h2>
          <div className="box-color border border-[white] p-7 lg:mr-3 sm:mr-0">
            {/* years */}
            <div className="text-[#799a89] font-bold text-sm">2022 - Past</div>
            {/* title */}
            <div className="h5">
              Fullstack Enterprise Resource Planning(ERP).
            </div>
            {/* desc */}
            <p>
              Fullstack Enterprise Resource Planning(ERP) - Designed, developed,
              and maintained full-stack ERP system applications, optimizing
              business processes and enhancing productivity.
            </p>
          </div>
          <div className="box-color border border-[white] p-7 sm:mt-8 lg:mr-3 sm:mr-0">
            {/* years */}
            <div className="text-[#4bffa5] font-bold text-sm">
              2023 - Present
            </div>
            {/* title */}
            <h1 className="h5">Fullstack ecommerce shop app</h1>
            {/* desc */}
            <p>
              Fullstack ecommerce shop app - As the lead developer for a dynamic
              e-commerce platform, I engineered a visually captivating and
              SEO-optimized marketplace with user-centric and admin-friendly
              features.
            </p>
          </div>
          <div className="box-color border border-[white] p-7 sm:mt-8 lg:mr-3 sm:mr-0">
            {/* years */}
            <div className="text-[#4bffa5] font-bold text-sm">
              2023 - Present
            </div>
            {/* title */}
            <h1 className="h5">Fullstack ecommerce shop app</h1>
            {/* desc */}
            <p>
              Engagement at Its Best: Users can express their appreciation for
              each post with a simple click of the "Like" button, fostering a
              sense of community and connection. Thoughtful Discourse:
              Encouraging meaningful conversations, the platform allows comments
              on each post, creating an engaging environment for sharing
              thoughts and ideas. Nested Conversations: Dive deeper into
              discussions with nested comments, making it easy to follow and
              contribute to multi-layered conversations. Seamless
              Authentication: Users can join the community effortlessly with the
              choice of Google, GitHub, or custom credentials for a personalized
              and secure experience. Rendering Options: Whether it's
              lightningfast client rendering for snappy interactions or server
              rendering for SEO optimization, the platform adapts to deliver the
              best performance. User Protection: User data is safeguarded,
              ensuring privacy and security are paramount, enhancing user
              confidence. Admin Empowerment: Admins have role-based control,
              with middleware ensuring smooth and effective management of the
              platform. This project offers a vibrant and inclusive social media
              space with features designed
            </p>
          </div>
        </div>
        {/* Education */}
        <div className="flex  sm:flex-col md:w-[300px] w-full">
          <h2 className="h3 lg:ml-4 sm:ml-5 mt-40 text-white">Education</h2>
          <div className="box-color border border-[white] p-7 lg:ml-3 sm:ml-0">
            {/* years */}
            <div className="text-sm">2021 - 2025</div>

            {/* title */}
            <div className="h5">Sambhram University (IT Technology) - Faculty of software enginner.</div>
            {/* desc */}
            <p>
              Collaborate with creative and development teams on the execution
              of ideas.
            </p>
          </div>
          <div className="box-color border border-[white] p-7 sm:mt-8 lg:ml-3 sm:ml-0">
            {/* years */}
            <div className="text-sm">2021 - 2022</div>
            {/* title */}
            <h1 className="h5">Mohirderv - Mohirderv(IT Technology) - Merin stack course completed (Bootcamp project).</h1>
            {/* desc */}
            <p>
              Bachelors Degrsssssee in Computer Science ABC Technical Institute,
              Jefferson, Missouri.
            </p>
          </div>
        </div>
      </div>
      {/* ========== Design Skills ============ */}
      <div>
        <h2 className="h3 lg:ml-4 sm:ml-5 mt-40 text-white">Design Skills</h2>
        <div className="box-color border border-[white] p-7 ">
          <div className="flex justify-between my-4 mb-1">
            <span className="text-base  font-medium text-[#fff] dark:text-white">
              Web Design
            </span>
          </div>
          <div className="w-full relative bg-[#424040] rounded-full h-2.5 dark:bg-gray-700">
            <span className="text-sm left-[90%] top-[-20px] absolute font-medium text-[#4bffa5] dark:text-white">
              90%
            </span>
            <div className="bg-[#4bffa5] h-2.5 rounded-full w-[90%]"></div>
          </div>

          <div className="flex justify-between my-4 mb-1">
            <span className="text-base  font-medium text-[#fff] dark:text-white">
              Graphic Design
            </span>
          </div>
          <div className="w-full relative bg-[#424040] rounded-full h-2.5 dark:bg-gray-700">
            <span className="text-sm left-[70%] top-[-20px] absolute font-medium text-[#4bffa5] dark:text-white">
              70%
            </span>
            <div className="bg-[#4bffa5] h-2.5 rounded-full w-[70%]"></div>
          </div>

          <div className="flex justify-between my-4 mb-1">
            <span className="text-base  font-medium text-[#fff] dark:text-white">
              Photoshop
            </span>
          </div>
          <div className="w-full relative bg-[#424040] rounded-full h-2.5 dark:bg-gray-700">
            <span className="text-sm left-[80%] top-[-20px] absolute font-medium text-[#4bffa5] dark:text-white">
              80%
            </span>
            <div className="bg-[#4bffa5] h-2.5 rounded-full w-[80%]"></div>
          </div>

          <div className="flex justify-between my-4 mb-1">
            <span className="text-base  font-medium text-[#fff] dark:text-white">
              3D Modeling
            </span>
          </div>
          <div className="w-full relative bg-[#424040] rounded-full h-2.5 dark:bg-gray-700">
            <span className="text-sm left-[50%] top-[-20px] absolute font-medium text-[#4bffa5] dark:text-white">
              50%
            </span>
            <div className="bg-[#4bffa5] h-2.5 rounded-full w-[50%]"></div>
          </div>

          <div className="flex justify-between my-4 mb-1">
            <span className="text-base  font-medium text-[#fff] dark:text-white">
              Figma
            </span>
          </div>
          <div className="w-full relative bg-[#424040] rounded-full h-2.5 dark:bg-gray-700">
            <span className="text-sm left-[75%] top-[-20px] absolute font-medium text-[#4bffa5] dark:text-white">
              75%
            </span>
            <div className="bg-[#4bffa5] h-2.5 rounded-full w-[75%]"></div>
          </div>
        </div>
      </div>
      {/* ========== Languages Skills ============ */}
      <div>
        <h2 className="h3 lg:ml-4 sm:ml-5 mt-40 text-white">
          Languages Skills
        </h2>
        <div className="box-color border border-[white] p-7 ">
          <div className="flex justify-between my-4 mb-1">
            <span className="text-base  font-medium text-[#fff] dark:text-white">
              English
            </span>
          </div>
          <div className="w-full relative bg-[#424040] rounded-full h-2.5 dark:bg-gray-700">
            <span className="text-sm left-[50%] top-[-20px] absolute font-medium text-[#4bffa5] dark:text-white">
              50%
            </span>
            <div className="bg-[#4bffa5] h-2.5 rounded-full w-[50%]"></div>
          </div>

          <div className="flex justify-between my-4 mb-1">
            <span className="text-base  font-medium text-[#fff] dark:text-white">
              Uzbek
            </span>
          </div>
          <div className="w-full relative bg-[#424040] rounded-full h-2.5 dark:bg-gray-700">
            <span className="text-sm left-[90%] top-[-20px] absolute font-medium text-[#4bffa5] dark:text-white">
              90%
            </span>
            <div className="bg-[#4bffa5] h-2.5 rounded-full w-[90%]"></div>
          </div>
        </div>
      </div>
      {/* ========== Coding Skills ============ */}
      <div>
        <h2 className="h3 lg:ml-4 sm:ml-5 mt-40 text-white">Coding Skills</h2>
        <div className="box-color border border-[white] p-7 grid lg:grid-cols-4 sm:grid-cols-2 gap-4 text-center justify-items-center">
          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 90 }}
            >
              90%
            </div>
            <div className="my-3 text-white font-medium">HTML / CSS</div>
          </div>

          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 85 }}
            >
              85%
            </div>
            <div className="my-3 text-white font-medium leading-6">
              Bootstarp / Tailwind Css
            </div>
          </div>
          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 80 }}
            >
              80%
            </div>
            <div className="my-3 text-white font-medium leading-6">
              JavaScript
            </div>
          </div>
          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 65 }}
            >
              65%
            </div>
            <div className="my-3 text-white font-medium leading-6">
              TypeScript
            </div>
          </div>

          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 80 }}
            >
              80%
            </div>
            <div className="my-3 text-white font-medium">React Js</div>
          </div>

          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 75 }}
            >
              75%
            </div>
            <div className="my-3 text-white font-medium">Next Js</div>
          </div>

          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 70 }}
            >
              70%
            </div>
            <div className="my-3 text-white font-medium">Node Js</div>
          </div>

          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 75 }}
            >
              75%
            </div>
            <div className="my-3 text-white font-medium">Express Js</div>
          </div>

          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 80 }}
            >
              80%
            </div>
            <div className="my-3 text-white font-medium">MySql</div>
          </div>

          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 75 }}
            >
              75%
            </div>
            <div className="my-3 text-white font-medium">PostgresSql</div>
          </div>

          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 70 }}
            >
              70%
            </div>
            <div className="my-3 text-white font-medium">MongoDB</div>
          </div>

          <div>
            <div
              className="radial-progress text-[#4bffa5]"
              style={{ "--value": 85 }}
            >
              85%
            </div>
            <div className="my-3 text-white font-medium">Prisma</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
