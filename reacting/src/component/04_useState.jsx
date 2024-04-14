import React, { useState } from "react";

function UseState04() {
  var [val, setval] = useState([1, 2, 3, 4, 5, 6]);
  return(
    <div className="p-4">
    {val.map((iitem)=><h1>{iitem}</h1>)}
    <button onClick={()=>setval(()=>val.filter((e,index)=> index!= val.length-1 ))} className=" py-1 px-2 bg-blue-500 rounded-full">click</button> 

    <button onClick={()=>setval(()=> val.filter((item,index)=> index !=2 ) )} className=" py-1 px-2 bg-red-500 rounded-full">click</button>
    <button onClick={()=>setval(()=> val.filter((item)=> item%2 !==0) )} className=" py-1 px-2 bg-red-500 rounded-full">click</button>
    <button onClick={()=>setval([...val,7]) } className=" py-1 px-2 bg- bg-yellow-500 rounded-full">click</button>
    </div>
  ) 
}

export default UseState04;
