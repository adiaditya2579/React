import React from 'react'
import { RxCross2 } from "react-icons/rx";

function Modal({onclose}) {
   

  return (
    <div className=' fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='mt-10 flex flex-col gap-5 text-white'>
            <div className=' place-self-end'>
                <button onClick={onclose}><RxCross2 size={30}/></button>
            </div>
            <div className=' bg-[#6D28D9] rounded-xl md:px-20 px-10 py-10 flex flex-col gap-5 items-center'>
                <div> 
                    <h1 className=' font-bold text-lg'>Please Sign in to access lectures</h1>
                </div>
                <div> 
                    <h1 className=' font-bold text-lg'>Student email ID preferred</h1>
                </div>
                <div>
                    <button className=' font-bold text-white border-2 border-white rounded-full px-6 py-2  hover:bg-white hover:text-black'>Sign in</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal