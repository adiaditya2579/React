import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function ImageSlide() {
  const [val, setval] = useState(false);

  return (
    <>
      <div className=" h-screen w-full bg-zinc-300 flex justify-center items-center">
        <div className=" w-72 h-36 bg-zinc-200 rounded-md overflow-hidden relative  flex ">
          <img
            className={` shrink-0 w-full h-full object-cover  ${
              val === false ? " -translate-x-[0%]" : "-translate-x-[100%]"
            }`}
            src="https://images.unsplash.com/photo-1682686580186-b55d2a91053c?q=80&w=2875&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className={` shrink-0 w-full h-full object-cover   ${
              val === false ? " -translate-x-[0%]" : "-translate-x-[100%]"
            }`}
            src="https://images.unsplash.com/photo-1707621786198-c4fdc4af3719?q=80&w=2990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <span
            onClick={() => setval(!val)}
            className="h-10 w-10 flex justify-center items-center rounded-full bg-[#dadada7b] absolute top-[70%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </>
  );
}
export default ImageSlide;
