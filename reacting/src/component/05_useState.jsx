import React, { useState } from 'react'

function UseState05() {
  var [val,setval] = useState([{name:"Aditya",age:24},{name:"Sarthak",age:22},{name:"Anurag",age:25}])
  return (
    <div>
    {val.map((e)=> (
      <div>
      <h1>{e.name}</h1>
      <h1>{e.age}</h1>
      </div>
      ))}
      <button onClick={()=> setval(()=> val.map((e)=> e.name ==="Sarthak"? ({name:'Saarthak',age:23}): e))}
        className="px-2 text-white py-1 bg-blue-600 rounded-full">change kero
      </button>
    </div>
  )
}

export default UseState05;