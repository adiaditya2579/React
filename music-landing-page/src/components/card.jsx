import React from "react";
function Card({ item,handalclick,index }) {
  const { img, name, songName,added } = item;
  return (
    <div className="h-28 w-56 bg-white rounded-md p-2 flex relative">
      <div className=" h-20 w-20 rounded-md ">
        <img className=" object-cover" src={img} />
      </div>
      <div className="ml-2 w-full h-full">
        <h1 className=" font-semibold">{name}</h1>
        <h3 className=" text-sm">{songName}</h3>
      </div>
      <button onClick={()=>handalclick(index)} className={` text-white text-sm ${added === false?"bg-orange-500":"bg-green-800"} px-2 py-1 whitespace-nowrap rounded-full absolute left-1/2 bottom-0 -translate-x-[50%] -translate-y-[-50%]`}>
        {added === false ? "Add to favourites": "Added"}
      </button>
    </div>
  );
}
export default Card;