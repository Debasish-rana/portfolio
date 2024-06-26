import React from "react";
import myWork_data from "../asset/myWork_data";
import theme_pattern from "../asset/images/theme_pattern.svg";
const myServices = () => {
  return (
    <div id="service">
      <h1 className="text-white font-bold text-4xl text-center mb-4 relative top-12">
        My Services
      </h1>
      <img src={theme_pattern} alt="" className=" items-center m-auto w-60 mb-36" />
      <div className=" my-20 text-white flex flex-row flex-wrap justify-center m-8 max-[800px]:m-3">
        {myWork_data.map((work, index) => {
          return (
            <div
              className="mx-14  my-6 p-6 w-48 h-40 border-2 border-white bg-black transition-transform duration-500 hover:scale-125 hover:border-red-600 hover:bg-gradient-to-r from-purple-800  via-pink-500 to-yellow-400 rounded-lg items-center max-[800px]:mx-8"
              key={index}
            >
              {work.w_name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default myServices;
