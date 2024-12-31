import React from "react";
import { profile_img } from "../utils/urls";
const Body = () => {
  const clickHandeler = () => {};
  return (
    <div id="home">
      <div className="flex flex-col items-center m-24">
        <img
          className="w-56 rounded-full  max-[800px]:w-36 max-[800px]:mb-20"
          src={profile_img}
          alt=""
        />
        <span className="font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent text-4xl max-[768px]:text-2xl max-[410px]:text-lg ">
          I'm Debasish Rana,
        </span>
        <h1 className="text-5xl p-4 text-center text-white font-bold max-[800px]:text-3xl max-[600px]:text-xl">
          frontend developer based in INDIA
        </h1>
        <p className="text-white text-xl max-[600px]:text-lg">
          I am a frontend devoloper from Kolkata.
        </p>
      </div>
      <div className="flex gap-6 justify-center">
        <div className="text-white p-3 w-40 h-12 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:border-2 border-white cursor: pointer transition-transform duration-500 hover:scale-125">
          <a href="#contact">Connect with me</a>
        </div>
        <div
          className="text-white p-3  border-2 w-30 h-13 border-white rounded-3xl hover:border-purple-700  cursor: pointer transition-transform duration-500 hover:scale-125"
          onClick={clickHandeler}
        >
          <a href="https://app.luminpdf.com/viewer/67741efb13a72d81093eb960">
          Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
