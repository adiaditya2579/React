import React from "react";

function PropsCard({item,handalclick,index}) {
  var {name,profensen,Image,friends} = item

  return (
    <div className="w-52 bg-slate-300 h-72 rounded-md overflow-hidden">
      <div className="w-full  h-[50%] bg-cyan-400">
        <img
          className="w-full h-full object-cover  bg-top"
          src={Image}
        />
      </div>
      <div className="p-3 ">
        <h1 className=" font-semibold">{name}</h1>
        <h4 className="mt-2 text-sm">{profensen}</h4>
        <button onClick={()=>handalclick(index)} className=" mt-2 bg-green-500 px-3 py-1 rounded-full">
        {friends=== false?"Add To Friend":"Friends"}
        </button>
      </div>
    </div>
  );
}

export default PropsCard;
