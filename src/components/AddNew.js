import React, { useState } from "react";
import Image from "../img/—Pngtree—vector plus icon_4255451.png";
import { useDispatch } from "react-redux";
import { addList, addCard } from "../store/listSlice";
const AddNew = () => {
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  // const [inputDesc, setInputDes] = useState("");
  // const [isFormValid, setIsFormValid] = useState(false);
  // console.log(type);
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Todo:", inputVal);
    // console.log("Description:", inputDesc);

    dispatch(addList({ id: Math.random(), title: inputVal }));

    setInputVal("");
    // setInputDes("");
  };

  // const openForm = () => {
  //   setIsFormValid(true);
  // };
  return (
    <div className="bg-[#242731]  h-[5vh] items-center  rounded-lg border-3 ">
      {/* {isFormValid && ( */}
      <form className=" rounded-md" onSubmit={handleSubmit}>
        <div className="flex h-auto rounded-full py-2 items-center justify-around">
          {/* <img src={Image} width={20} height={30} /> */}
          <input
            className="bg-transparent fontbold flex justify-start border-transparent "
            value={inputVal}
            placeholder="Add Todo"
            required
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            type="submit"
            className="text-white "
            // onClick={openForm}
          >
            <img src={Image} width={20} height={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
