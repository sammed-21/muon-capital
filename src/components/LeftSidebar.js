import React, { useState } from "react";

import Image1 from "../img/Group 16083.png";
import close from "../img/closing icon.png";
import Category from "../img/Category.png";
import section2 from "../img/Group 15798.png";
import section3 from "../img/Group 15792.png";
import Language from "../img/Language.png";
import share from "../img/Group.png";
import darkToggle from "../img/Dark toggle.png";
const LeftSidebar = () => {
  return (
    <div className="flex flex-col   justify-between ">
      <div className="bg-[#000000] text-white flex  flex-col  w-[250px]   p-3 sidebar">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <img src={Image1} width={30} height={30} />

            <h1>Name</h1>
          </div>
          <img src={close} width={35} height={30} />
        </div>
        <div className="flex py-6 items-start flex-col justify-center  space-y-4 w-full">
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md hover:bg-gray-500">
            <img src={Category} width={25} height={15} /> <h1>Home</h1>
          </li>
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md hover:bg-gray-500 ">
            {" "}
            <img src={section2} width={25} height={20} /> <h1>Section1</h1>
          </li>
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md hover:bg-gray-500">
            {" "}
            <img src={section3} width={25} height={20} /> <h1>Section2</h1>
          </li>
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md hover:bg-gray-500">
            {" "}
            <img src={share} width={25} height={20} /> <h1>Section8</h1>
          </li>
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md   hover:bg-gray-500">
            {" "}
            <img
              src={share}
              className=" hover:text-white"
              width={25}
              height={20}
            />{" "}
            <h1>Section8</h1>
          </li>
        </div>
      </div>
      <div className="flex space-around w-full flex-col px-5  justify-start space-x-3 ">
        <div
          className="flex  space-x-7 py-4
            "
        >
          <div className="flex justify-center items-center px-6 rounded-md  bg-slate-800">
            <img src={Image1} width={30} height={30} />
            <h1 className="text-sm ">$XYZ</h1>
          </div>

          <div className="flex py-2 px-6 rounded-md bg-[#A3E3FF] ">
            <h1 className="text-[#3772FF] text-sm ">Buy</h1>

            <h1 className="text-[#3772FF] text-sm ">$XYZ</h1>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center ">
          <div>
            <img src={Language} width={25} height={25} />
          </div>
          <div className="flex">
            <img src={darkToggle} width={45} height={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
