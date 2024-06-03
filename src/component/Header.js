import React from "react";
import { github_img } from "../utils/urls";


const Header = () => {
  
  return (
    <div className="flex justify-around bg-slate-900 text-white p-5 shadow-2xl rounded-b-md max-sm:p-4 sticky top-0">
      <div className="font-serif font-bold text-2xl max-[800px]:text-lg ">
        Debasish Rana
      </div>

      <div>
        <ul className="flex justify-around gap-12 max-[800px]:gap-4 ">
          <li className="max-sm:text-3xl cursor-pointer">Home</li>
          <li className="max-sm:text-3xl cursor-pointer">About Me</li>
          <li className="max-sm:text-3xl cursor-pointer">My Work</li>
          <li className="max-sm:text-3xl cursor-pointer">Contact Me</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/Debasish-rana">
          <img className="rounded-[50px] w-8 " src={github_img} alt="" />
        </a>
        
      </div>
     
    </div>
  );
};

export default Header;
