import React from "react";

import Image1 from "../img/Group 16083.png";
import close from "../img/closing icon.png";
import Category from "../img/Category.png";
import section2 from "../img/Group 15798.png";
import section3 from "../img/Group 15792.png";
import Language from "../img/Language.png";
import share from "../img/Group.png";
 
import { useContext } from "react";
// import {ThemeProvider} from "../context/ThemeContext";
import ThemeContext from "../context/ThemeContext";
const LeftSidebar = ( ) => {
  const { darkMode ,toggleDarkMode } = useContext(ThemeContext);
  const handleToggle = () => {
    toggleDarkMode();
  };
  // const closeButtonClasses = darkMode ? "" : "close-icon";
//   const [darkMode, setDarkMode] = React.useState(false)
//   function toggleDarkMode() {
//     console.log('clicked')
    
// }
  // const changeTheme = () => {
  //   const myTheme = theme == "dark" ? "light" : "dark";
  //   setTheme(myTheme);
  //   const HTMLTag = document.getElementsByTagName("HTML")[0];
  //   if (myTheme == "light") {
  //     HTMLTag.classList.add("light");
  //   } else {
  //     HTMLTag.classList.remove("light");
  //   } img alt="im
  // };
  
  return (
    <div className={` ${darkMode ? "dark" : "light"} flex flex-col h-[100vh] pb-10  justify-between `}>
      <div className={` flex  flex-col  w-[250px]   p-3  `}>
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <img alt="profile"  src={Image1} width={30} height={30} />

            <h1>name</h1>
          </div>
          <img alt="profile" className={`${darkMode? "" : "close-icon"}`} src={close} width={35} height={30} />
        </div>  
        <div className="flex py-6 items-start flex-col justify-center  space-y-4 w-full">
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md hover:bg-gray-500">
            <img alt="profile" className={`${darkMode? "" : "close-icon"}`} src={Category} width={25} height={15} /> <h1>Home</h1>
          </li>
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md hover:bg-gray-500 ">
            {" "}
            <img alt="profile" className={`${darkMode? "" : "close-icon"}`} src={section2} width={25} height={20} /> <h1>Section1</h1>
          </li>
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md hover:bg-gray-500">
            {" "}
            <img alt="profile" className={`${darkMode? "" : "close-icon"}`} src={section3} width={25} height={20} /> <h1>Section2</h1>
          </li>
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md hover:bg-gray-500">
            {" "}
            <img alt="profile" className={`${darkMode? "" : "close-icon"}`} src={share} width={25} height={20} /> <h1>Section8</h1>
          </li>
          <li className="flex justify-between space-x-4 items-start pr-[10vh] py-2 rounded-md   hover:bg-gray-500">
            {" "}
            <img
              alt="profile"
              src={share}
              className={`${darkMode? "" : "close-icon"}`}
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
            <img  alt="profile" src={Image1} width={30} height={30} />
            <h1 className="text-sm text-white ">$XYZ</h1>
          </div>

          <div className="flex py-2 px-6 rounded-md bg-[#A3E3FF] ">
            <h1 className="text-[#3772FF] text-sm ">Buy</h1>

            <h1 className="text-[#3772FF] text-sm ">$XYZ</h1>
          </div>
        </div>
          <div className="flex justify-start gap-4 items-center ">
            <div>
              <img alt="profile" src={Language} width={25} height={25} />
            </div>
            <div className="flex ">
              <label className="ui-switch" >
                <input type="checkbox" />
                
                <div className="slider" >
                  <div className="circle" onClick={handleToggle}  ></div>
                </div>
              </label>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
