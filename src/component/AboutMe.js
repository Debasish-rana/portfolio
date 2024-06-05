import React from "react";
import { profile_img } from "../utils/urls";
import theme_pattern from "../asset/images/theme_pattern.svg";
const AboutMe = () => {
  return (
    <div id="about">
      <div className="text-white text-5xl text-center font-bold m-12 mt-24 relative top-[85px]">
        About Me
      </div>
      <img src={theme_pattern} alt="" className="m-auto mb-28" />
      <div className="flex justify-center">
        <div>
          <img
            className="w-60 h-72 mr-14 max-[1300px]:w-32 max-[1300px]:h-40 flex justify-center m-3 max-[800px]:hidden"
            src={profile_img}
            alt=""
          />
        </div>
        <div>
          <p className="text-white text-lg m-5">
            I am an frontend devoloper in term of responsive designed &
            interactive website i make few project
          </p>
          <p className="text-white text-lg m-5">
            My passion is to work in prestigious organization and colaborating
            with them, contributing to their sucees and growth.
          </p>
          <div>
            <div className="mt-14 flex flex-col gap-5 m-3 max-[1300px]:block max-[768px]:m-3">
              <div className="flex gap-10 items-center ">
                <p className="text-white text-xl">HTML & CSS</p>
                <hr
                  className="w-1/2 h-1.5 bg-gradient-to-r from-purple-800  via-pink-500 to-yellow-400 rounded-full"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="flex gap-10 items-center ">
                <p className="text-white text-xl"> TAILWIND CSS</p>
                <hr
                  className="w-1/2 h-1.5 bg-gradient-to-r from-purple-800  via-pink-500 to-yellow-400 rounded-full"
                  style={{ width: "50%" }}
                />
              </div>
              <div className="flex gap-10 items-center">
                <p className="text-white text-xl">React Js</p>
                <hr
                  className="w-1/2 h-1.5 bg-gradient-to-r from-purple-800  via-pink-500 to-yellow-400 rounded-full"
                  style={{ width: "50%" }}
                />
              </div>
              <div className="flex gap-10 items-center">
                <p className="text-white text-xl">Java Script</p>
                <hr
                  className="w-1/2 h-1.5 bg-gradient-to-r from-purple-800  via-pink-500 to-yellow-400 rounded-full "
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[100%] justify-around mb-20 mt-5">
        <div className="flex flex-col  items-center gap-3">
          <h1 className="font-bold text-5xl from-purple-600 via-pink-600 to-yellow-500 bg-gradient-to-r bg-clip-text text-transparent">
            6+
          </h1>
          <p className="text-white bg-clip-text font-bold">
            MONTHS OF EXPERIENCE{" "}
          </p>
        </div>
        <hr />
        <div className="flex flex-col  items-center gap-3">
          <h1 className="font-bold text-5xl from-purple-600 via-pink-600 to-yellow-500 bg-gradient-to-r bg-clip-text text-transparent ">
            5+
          </h1>
          <p className="text-white font-bold">PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="flex flex-col  items-center gap-3">
          <h1 className="font-bold text-5xl from-purple-600 via-pink-600 to-yellow-500 bg-gradient-to-r bg-clip-text text-transparent ">
            5+
          </h1>
          <p className="text-white font-bold">HAPPY CLIENT</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
