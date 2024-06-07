import React, { useRef, useState } from "react";
import { github_img } from "../utils/urls";
import logo from "../asset/images/nav_underline.svg";
import menu_open from "../asset/images/menu_open.svg"
import menu_close from "../asset/images/menu_close.svg"

const Header = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef()
const showNavbar =()=>{
  menuRef.current.style.right = "0";
}
const closeNavbar =()=>{
  menuRef.current.style.right = "-350px";
}
  return (
    <div className="flex justify-around bg-black text-white p-5 shadow-2xl rounded-b-md max-sm:p-4 sticky top-0 max-[768px]:">
      <div className="font-serif font-bold text-2xl max-[800px]:text-lg ">
        Debasish Rana
      </div>

      <div>
      <img src={menu_open} alt="" onClick={showNavbar}  className="max-[768px]:block max-[768px]:fixed max-[768px]:right-8 hidden"/>
        <ul ref={menuRef} className="flex justify-around gap-12 max-[800px]:gap-4 max-[768px]:fixed max-[768px]:flex-col max-[768px]:items-start max-[768px]:top-0 max-[768px]:gap-8 max-[768px]:bg-cyan-700 max-[768px]:w-80 max-[768px]:h-[500px] max-[768px]:z-10  max-[768px]:right-[-350px] max-[768px]:p-4 navbar">
        <img  src={menu_close} onClick={closeNavbar} alt="" className="hidden max-[768px]:block max-[768px]:relative max-[768px]:top-8 max-[768px]:left-64 max-[768px]:w-8" />
          <li className="max-sm:text-3xl cursor-pointer max-[768px]:text-xl max-[768px]:pl-8 max-[768px]:flex-row max-[768px]:gap-5">
            <a href="#home">
              <p onClick={() => setMenu("home")}>Home</p>
            </a>
            {menu === "home" ? <img src={logo} alt="" /> : <></>}
          </li>
          <li className="max-sm:text-3xl cursor-pointer max-[768px]:text-xl max-[768px]:pl-8 max-[768px]:flex-row max-[768px]:gap-5">
            <a href="#about">
              <p onClick={() => setMenu("about")}>About Me</p>
            </a>
            {menu === "about" ? <img src={logo} alt="" /> : <></>}
          </li>
          <li className="max-sm:text-3xl cursor-pointer max-[768px]:text-xl max-[768px]:pl-8 max-[768px]:flex-row max-[768px]:gap-5">
            <a href="#work">
              <p onClick={() => setMenu("work")}>My Work</p>
            </a>
            {menu === "work" ? <img src={logo} alt="" /> : <></>}
          </li>
          <li className="max-sm:text-3xl cursor-pointer max-[768px]:text-xl max-[768px]:pl-8 max-[768px]:flex-row max-[768px]:gap-5">
            <a href="#contact">
              <p onClick={() => setMenu("contact")}>Contact Me</p>
            </a>
            {menu === "contact" ? <img src={logo} alt="" /> : <></>}
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <a href="https://github.com/Debasish-rana">
          <img className="rounded-[50px] w-8 max-[768px]:hidden" src={github_img} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
