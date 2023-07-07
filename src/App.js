import React,{useState,useContext} from "react";
import Header from "./components/Header";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
// import Navbar from "./components/Navbar";
 
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store";
// import Image from "../src/img/icons8-menu-24.png";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  
  // const { darkMode, setDarkMode } = useContext(ThemeProvider);
  // const toggleDarkMode = () => {
  //   console.log('clickd')
  //   setDarkMode(darkMode);
  //   console.log( )
  // };

  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className="App  ">
          <div className="h-[5vh]">
            <Header />
          </div>

          <div className="flex h-[95vh]    ">
            <LeftSidebar   />

            <Body />
          </div>
        </div>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
