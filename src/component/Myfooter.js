import React from "react";
import { github_img } from "../utils/urls";

const Myfooter = () => {
  return (
                   
    <div>
      <div className="flex gap-6 p-4 justify-center">
        <a href="https://github.com/Debasish-rana">
          <img className="rounded-[50px] w-8" src={github_img} alt="" />
        </a>
        <a href="https://www.linkedin.com/feed/">
          <img
          className="w-8 rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&s"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Myfooter;
