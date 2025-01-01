import React from "react";
import myWork_data from "../asset/myWork_data";
import theme_pattern from "../asset/images/theme_pattern.svg";

const MyWorks = () => {
  return (
    <div id="work">
      <h1 className="text-white flex justify-center items-center font-bold text-4xl m-4 relative top-12 ">
        My Works
      </h1>
      <img src={theme_pattern} alt="" srcset="" className="m-auto mb-36" />
      <div className=" flex justify-center flex-wrap items-center gap-6 m-auto max-[800px]:gap-2 mb-40">
        {myWork_data.map((work, index) => {
          return (
            <a href={work.w_link}>
              <img
                className="w-96 hover:border-4 border-fuchsia-600 p-4 rounded-xl transition-transform duration-500 hover:scale-125 max-[1300px]:w-60 max-[800px]:w-48"
                key={index}
                src={work.w_img}
                alt=""
              />
              ;
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
