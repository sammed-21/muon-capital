import React, { useContext } from "react";
import Navbar from "./Navbar";
import List from "./List";
import ThemeContext from "../context/ThemeContext";
const Body = () => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={`${darkMode ? "dark" : "light"} w-full h-[100vh]    snap-x  border-l-2 border-gray-600 overflow-hidden `}>
      <Navbar />
      <div className=" flex gap-3 w-full  overflow-x-auto min-h-[90vh]  p-3">
        <List />
      </div>
    </div>
  );
};

export default Body;
