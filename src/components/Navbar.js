import React, { useState } from "react";
import Image from "../img/My project.png";
import LeftSidebar from "./LeftSidebar";
import Image1 from "../img/icons8-menu-24.png";
const Navbar = () => {
  const [isOpen, darkToggle] = useState(false);
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="h-[8vh] w-[100%] flex-end  align-center item-center space-x-4 justify-around border-b-4 border-gray-600">
      {/* <img src={Image} width={40} height={20} onClick={toggleSidebar} /> */}
      {/* {isOpen && <LeftSidebar />} */}

      <div className="flex  px-4 pt-4  justify-between ">
        <div className="flex space-x-2 justify-center items-center">
          {/* <img src={Image1} width={40} height={40} /> */}
          <h1 className="text-lg text-white font-monospace">Section</h1>
        </div>
        <div className="flex  justify-end bg-[#191B20] px-8 items-center text-white border-white rounded-lg">
          <img src={Image} width={40} height={40} />
          <h1>11</h1>
          <h1>0.2 $XYZ</h1>
          <h3>Tier</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
