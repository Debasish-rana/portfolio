import React, { useState } from "react";
import { github_img } from "../utils/urls";
import logo from "../asset/images/nav_underline.svg";
//import menu_open from "../asset/images/menu_open.svg"
//import menu_close from "../asset/images/menu_close.svg"

const Header = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="flex justify-around bg-black text-white p-5 shadow-2xl rounded-b-md max-sm:p-4 sticky top-0 max-[768px]:m">
      <div className="font-serif font-bold text-2xl max-[800px]:text-lg ">
        Debasish Rana
      </div>

      <div>
      
        <ul className="flex justify-around gap-12 max-[800px]:gap-4 ">
        
          <li className="max-sm:text-3xl cursor-pointer">
            <a href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </a>
            {menu === "home" ? <img src={logo} alt="" /> : <></>}
          </li>
          <li className="max-sm:text-3xl cursor-pointer">
            <a href="#about">
              <p onClick={() => setMenu("about")}>About Me</p>
            </a>
            {menu === "about" ? <img src={logo} alt="" /> : <></>}
          </li>
          <li className="max-sm:text-3xl cursor-pointer">
            <a href="#work">
              <p onClick={() => setMenu("work")}>My Work</p>
            </a>
            {menu === "work" ? <img src={logo} alt="" /> : <></>}
          </li>
          <li className="max-sm:text-3xl cursor-pointer">
            <a href="#contact">
              <p onClick={() => setMenu("contact")}>Contact Me</p>
            </a>
            {menu === "contact" ? <img src={logo} alt="" /> : <></>}
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/Debasish-rana">
          <img className="rounded-[50px] w-8" src={github_img} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
