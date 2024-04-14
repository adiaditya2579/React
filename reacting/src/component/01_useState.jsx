import React,{ useState } from "react";

function UseState01() {
  const [val,setval] = useState(12)
  let valcanger = ()=>setval((prev)=>prev>0 ? (prev-1) : 0 )
  return (
    <div className="p-5">
      <h1>{val}</h1>
      <button
        onClick={() => setval((prev) => prev + 1)}
        className="px-2 text-white py-1 bg-blue-600 rounded-full">change kero
      </button>
      <button
        onClick={valcanger}
        className="px-2 text-white py-1 bg-blue-600 rounded-full">change kero
      </button>
    </div>
  );
}

export default UseState01;
