import React, { useContext} from "react";
import Image from "../img/My project.png";
 import ThemeContext from "../context/ThemeContext";
 
const Navbar = () => {
  const {darkMode} = useContext(ThemeContext)
  
 

  return (
    <div className={`${darkMode ? "dark" : "light"} h-[10vh] w-[100%] flex-end  align-center item-center space-x-4 justify-around border-b-4 border-gray-600`}>
      {/* <img src={Image} width={40} height={20} onClick={toggleSidebar} /> */}
      {/* {isOpen && <LeftSidebar />} */}

      <div className="flex  px-4 pt-4  justify-between ">
        <div className="flex space-x-2 justify-center items-center">
          {/* <img src={Image1} width={40} height={40} /> */}
          <h1 className={`${darkMode ? "text-light" : "light"}text-lg  font-monospace`}>Section</h1>
        </div>
        <div className="flex  justify-end bg-[#242731] px-8 items-center text-white border-white rounded-lg">
          <button className="flex items-center">

            <img alt="wallet " src={Image} width={40} height={40} />
            <h1>connect</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
