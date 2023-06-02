import React, { useState } from "react";
// import { useSelector, dis } from "react-redux";
import Image from "../img/closing icon.png";
import { useDispatch } from "react-redux";

import { updateTodo } from "../store/listSlice";
const RightSideBar = ({ id, title, desc, parentId, vis }) => {
  let dispatch = useDispatch();

  let idEX = id;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(desc);
  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleEdit = () => {
    // dispatch(updateTodo(, title, desc));

    dispatch(
      updateTodo({
        id: idEX,
        title: newTitle,
        desc: newDescription,
        parentId: parentId,
      })
    );
    // Clear input fields or perform any other necessary operations
  };

  return (
    <div className="flex py-6 gap-3 justify-items-start font-semibold flex-col bg-black-400  text-white   relative align-center  right-0 z-100 float-right w-[300px] h-[90vh] ">
      <div className="flex w-full flex-start justify-start items-center px-3">
        <img src={Image} width={30} height={30} onClick={vis} />
        <h1 className="px-3">Edit Tod0</h1>
      </div>
      <div className="flex rounded-md gap-3 p-2 flex-col justify-start items-center w-full">
        <div className="py-2 px-2 rounded-md fontbold bg-[#242731] ">
          <input
            className="bg-transparent text-[#6E6E6E] border-none "
            value={newTitle}
            placeholder={setNewTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-start justify-start rounded-md bg-[#242731] h-[15vh]  font-semibold py-2 px-5">
          <input
            className="bg-transparent text-[#6E6E6E] border-none "
            value={newDescription}
            placeholder={setNewDescription}
            onChange={handleDescChange}
          />
        </div>
        <button
          type="submit "
          onClick={handleEdit}
          className="w-[230px] bg-[#3772FF] font-semibold py-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
