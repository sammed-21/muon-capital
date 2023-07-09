import React, { useState } from "react";
import Image from "../img/—Pngtree—vector plus icon_4255451.png";
import { useDispatch } from "react-redux";
import { addList } from "../store/listSlice";
const AddNew = () => {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addList({ id: Math.random(), title: inputVal }));

    setInputVal("");
  };

  return (
    <div className="bg-[#242731]  h-[5vh] items-center  rounded-lg border-3 ">
      <form className=" rounded-md" onSubmit={handleSubmit}>
        <div className="flex h-auto rounded-full py-2 items-center justify-around">
          <input
            className="bg-transparent fontbold flex justify-start border-transparent "
            value={inputVal}
            placeholder="Add Todo"
            required
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button type="submit" className="text-white ">
            <img src={Image} alt="profile" width={20} height={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
