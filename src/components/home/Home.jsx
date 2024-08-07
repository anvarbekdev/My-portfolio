import React from "react";
import TypewriterComponent from "typewriter-effect";
import "./cursor.css";
import ParticlesBack from "../../particlesBack";

function Home() {
  return (
    <>
      <div className="absolute h-screen w-full bg-gray-300/5"></div>
      <div
        id="home"
        className="absolute bg-home  h-screen bg-contain  bg-no-repeat mix-blend-lighten bg-top left-0 top-0 bottom-0"
      >
        <ParticlesBack />
        <div className=" absolute z-10 left-0 top-20 bottom-0 right-0">
          <div className="w-full lg:hidden h-[340px] flex flex-col justify-center items-center">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString(
                    '<strong style="font-size: 32px"></div>I code coll </strong></div>'
                  )
                  .pauseFor(300)
                  .typeString(
                    '<strong style="font-size: 32px"><span style="color: #27ae60;">Websites</span></strong> '
                  )
                  .pauseFor(300)
                  .deleteChars(20)
                  .typeString(
                    '<strong style="font-size: 32px">love <span style="color: #27ae60;">Design</span></strong>'
                  )
                  .pauseFor(300)
                  .deleteChars(11)
                  .typeString(
                    '<strong style="font-size: 32px">like <span style="color: #27ae60;">3D Models</span></strong>'
                  )
                  .start();
              }}
              options={{
                loop: true,
                cursorClassName: "cursor-sm",
                // delay: 30,
              }}
            />
          </div>
          <div className="w-full sm:hidden  h-[340px] lg:flex flex-col justify-center items-center">
            <TypewriterComponent
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString(
                    '<strong style="font-size: 72px"></div>I code coll </strong></div>'
                  )
                  .pauseFor(300)
                  .typeString(
                    '<strong style="font-size: 72px"><span style="color: #27ae60;">Websites</span></strong> '
                  )
                  .pauseFor(300)
                  .deleteChars(20)
                  .typeString(
                    '<strong style="font-size: 72px">love <span style="color: #27ae60;">Design</span></strong>'
                  )
                  .pauseFor(300)
                  .deleteChars(11)
                  .typeString(
                    '<strong style="font-size: 72px">like <span style="color: #27ae60;">3D Models</span></strong>'
                  )
                  .start();
              }}
              options={{
                loop: true,
                cursorClassName: "cursor",
                // delay: 30,
              }}
            />
          </div>

          <div className="lg:ml-[300px] md:ml-28 sm:ml-5 max-w-sm font-medium">
            Hello, I’m
            <span className="font-extrabold ml-1" style={{ color: "#27ae60" }}>
              Anvarbek Xaydarov
            </span>
            , Full Stack Developer and UX/UI Designer Based in Uzbekistan.
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
