import React, { useEffect, useState } from "react";
import AddNew from "./AddNew";
import Card from "./Card";
import Cards from "./CardList";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import RightSideBar from "./RightSideBar";

const List = () => {
  let dispatch = useDispatch();
  const listItem = useSelector((store) => store.listSlice.list);
  const [selectedTodo, setSelectedTodo] = useState(false);
  const [childrenId, setChildrenId] = useState("");
  const [parentId, setParentId] = useState("");
  const [editValueTitle, setEditValueTitle] = useState("");
  const [editValueDesc, setEditValueDesc] = useState("");

  const handleEditClick = (childrenId) => {
    let todo;
    listItem.forEach((list) => {
      if (list.children) {
        todo = list.children.find((child) => child.id === childrenId);
        if (todo) {
          setSelectedTodo(!selectedTodo);
          setEditValueTitle(todo.title);
          setChildrenId(todo.id);
          setEditValueDesc(todo.desc);
          setParentId(todo.parentId);
        }
      }
    });
    // console.log(editValueTitle);
  };

  return (
    <div className="flex justify-between items-start w-full">
      <div className="flex justify-start gap-4 border-r-2 h-full border-gray-600 w-full z-10">
        <div className="gap-2 h-auto w-fixed rounded-md flex">
          {listItem.length > 0 &&
            listItem.map((list) => (
              // <div key={list.id} className="p-3   bg-red-900 w-1/4">

              <div className="flex  gap-4 flex-col  w-[300px] " key={list.id}>
                <div className="p-1 h-[6vh] flex  gap-3 flex-col text-lg  px-1 justify-center rounded-md   bg-[#242731] w-full">
                  <a className="text-md  px-3 font-semibold ">{list.title}</a>
                </div>
                <div className="pt-3 w-full flex flex-col justify-center  rounded-md bg-[#191B20]">
                  <Card type="card" parentId={list.id} />
                </div>
                {list?.children?.length > 0 &&
                  list.children.map((children) => (
                    <div className="rounded-md bg-[#191B20] flex flex-col  ">
                      <Cards
                        key={children.id}
                        cardInfo={children}
                        parentIda={list.id}
                        onEdit={() => handleEditClick(children.id)}
                      />
                    </div>
                  ))}
              </div>
            ))}
        </div>
        <div className="p-1 h-[6vh] fontbold  backdrop:rounded-md bg-[#242731] w-[300px]">
          {/* <div className="text-white">List : Thinks to Buy</div> */}
          <AddNew type="card" />
        </div>
      </div>
      {selectedTodo && (
        <RightSideBar
          id={childrenId}
          title={editValueTitle}
          desc={editValueDesc}
          parentId={parentId}
          vis={() => {
            setSelectedTodo(!selectedTodo);
          }}
        />
      )}
    </div>
  );
};

export default List;
