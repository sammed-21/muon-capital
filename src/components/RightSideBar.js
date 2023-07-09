import React, { useState } from "react";
// import { useSelector, dis } from "react-redux";
import Image from "../img/icons8-close-30.png";
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
    console.log(newTitle);
    console.log(newDescription);

    // dispatch(setShowCart())
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
    <div className="flex py-6 gap-3 justify-items-start font-semibold flex-col bg-[#3b74f8ee]    text-white align-center  fixed z-100 right-0 top-0 float-right w-[300px] h-[100%] ">
      <div className="flex w-full flex-start justify-start items-center px-3">
        <img src={Image} width={30} height={30} alt="edit" onClick={vis} />
        <h1 className="px-3">Edit Todo</h1>
      </div>
      <div className="flex rounded-md gap-3 p-2 flex-col justify-start items-center w-full">
        <div className="py-2 px-2 rounded-md fontbold bg-[#242731] ">
          <input
            className="bg-transparent text-[#fff] border-none "
            value={newTitle}
            placeholder={setNewTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-start justify-start rounded-md bg-[#242731] h-[15vh]  font-semibold py-2 px-5">
          <input
            className="bg-transparent text-[#fff] border-none "
            value={newDescription}
            placeholder={setNewDescription}
            onChange={handleDescChange}
          />
        </div>
        <button
          type="submit "
          onClick={handleEdit}
          
          className="w-[230px] bg-[#242731] font-semibold py-2"
        >
          <span onClick={vis}> Save</span>
         
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
