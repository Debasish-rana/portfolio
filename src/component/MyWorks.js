import React from "react";
import myWork_data from "../asset/myWork_data";

const MyWorks = () => {
  return (
    <div id="work">
      <h1 className="text-white flex justify-center items-center font-bold text-4xl m-4 ">
        My Works
      </h1>
      <div className="w-60 mt-4 rounded-2xl bg-pink-600 h-3 flex justify-center m-auto mb-12"></div>
      <div className=" flex justify-center flex-wrap items-center gap-6 m-auto max-[800px]:gap-2">
        {myWork_data.map((work, index) => {
          return <img className="w-96 hover:border-4 border-fuchsia-600 p-4 rounded-xl transition-transform duration-500 hover:scale-125 max-[1300px]:w-60 max-[800px]:w-48" key={index} src={work.w_img} alt="" />;
        })}
      </div>
    </div>
  );
};

export default MyWorks;
