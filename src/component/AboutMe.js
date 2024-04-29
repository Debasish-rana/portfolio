import React from "react";
import { profile_img } from "../utils/urls";
const AboutMe = () => {
  return (
    <div>
      <div className="text-white text-5xl text-center font-bold m-12 mt-24">
        About Me
        <div className="w-60 mt-4 rounded-2xl bg-pink-600 h-3 flex justify-center m-auto"></div>
      </div>
      <div className="flex justify-center">
        <div>
          <img className="w-60 h-72 mr-14 max-[1300px]:w-32 max-[1300px]:h-40 flex justify-center m-3  " src={profile_img} alt="" />
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
            <div className="mt-14 flex flex-col gap-5 m-2">
              <div className="flex gap-10 items-center">
                <p className="text-white text-xl">HTML & CSS & TAILWIND CSS</p>
                <hr
                  className="w-1/2 h-2 bg-gradient-to-r from-purple-600  via-pink-500 to-yellow-400 rounded-full"
                  style={{ width: "65%" }}
                />
              </div>
              <div className="flex gap-10 items-center">
                <p className="text-white text-xl">React Js</p>
                <hr
                  className="w-1/2 h-2 bg-gradient-to-r from-purple-600  via-pink-500 to-yellow-400 rounded-full"
                  style={{ width: "70%" }}
                />
              </div>
              <div className="flex gap-10 items-center">
                <p className="text-white text-xl">Java Script</p>
                <hr
                  className="w-1/2 h-2 bg-gradient-to-r from-purple-600  via-pink-500 to-yellow-400 rounded-full"
                  style={{ width: "50%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;