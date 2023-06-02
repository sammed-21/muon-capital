import React, { useState } from "react";
import Image from "../img/Oval 2_36.png";
import { useDispatch } from "react-redux";
import { addCard } from "../store/listSlice";
// import { useSelector } from "react-redux";
import Image1 from "../img/—Pngtree—vector plus icon_4255451.png";
const Card = ({ parentId, cardInfo }) => {
  const [inputVal, setInputVal] = useState("");
  const [inputDesc, setInputDesc] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCard({
        id: Math.random(),
        title: inputVal,
        desc: inputDesc,
        parentId: parentId,
      })
    );
    setInputVal("");
    setInputDesc("");

    // console.log("clicked", inputVal, inputDesc, parentId);
  };

  return (
    <div className="h-[13vh] items-center     ">
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col ">
        <div className="flex  items-center justify-start px-2 ">
          <div className="flex gap-1 px-3">
            <img src={Image} width={30} height={30} />
            <input
              className="bg-transparent text-[#6E6E6E] border-none "
              value={inputVal}
              placeholder="Add Todo"
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>
          <button type="submit" className="pl-3">
            <img src={Image1} width={30} height={30} />
          </button>
        </div>
        <div className="flex  items-center justify-start px-5 ">
          <input
            className="bg-transparent border-none "
            value={inputDesc}
            placeholder="Add Todo Description"
            onChange={(e) => setInputDesc(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Card;
