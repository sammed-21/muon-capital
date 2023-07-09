import React  from "react";
import Image from "../img/Oval 2_36.png";

import Image1 from "../img/Group 16106 (1).png";
const CardList = ({ cardInfo, parendId, onEdit }) => {
 
  return (
    <div className="flex h-[15vh] w-full justify-between  rounded-md pt-3 ">
      <div className="flex flex-col px-4 justify-start  space-x-3">
        <div className="flex gap-2">
          <img src={Image} width={30} alt="click" height={30} />
          <a className=" font-bold text-lg " href="/">{cardInfo.title}</a>
        </div>

        <a className="text-[#808191] font-b-2" href="/">{cardInfo.desc}</a>
      </div>
      <div className="px-4">
        <img src={Image1} width={30} height={30} alt="click" onClick={onEdit} />
      </div>
    </div>
  );
};

export default CardList;
