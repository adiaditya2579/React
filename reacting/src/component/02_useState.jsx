import React, { useState } from "react";

function UseState02() {
  var [val, setval] = useState({ name: "Aditya", isbanned: false });
  return (
    <div className=" p-5">
      <h1>Name: {val.name}</h1>
      <h2>IS Banned: {val.isbanned.toString()}</h2>
      <button
        onClick={() => setval({ ...val, isbanned: !val.isbanned })}
        className={`px-2 py-1 ${
          val.isbanned ? "bg-blue-600" : " bg-red-600"
        } rounded-full text-white text-sm`}
      >
        check Banned
      </button>
    </div>
  );
}

export default UseState02;
