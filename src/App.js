import Header from "./components/Header";
import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
// import Navbar from "./components/Navbar";
import { useMemo, useState } from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./store";
// import Image from "../src/img/icons8-menu-24.png";
import React from "react";

function App() {
  const [toggle, setToggle] = useState(false);
  const tog = () => {};

  return (
    <Provider store={store}>
      <div className="App h-[100vh] ">
        <div className="h-[5vh]">
          <Header />
        </div>

        <div className="flex h-[95vh]    ">
          <LeftSidebar />

          <Body />
        </div>
      </div>
    </Provider>
  );
}

export default App;
