import React, { useState } from 'react'

function UseState03() {
  var [val,satval] = useState({name:'Aditya',age:24})
  return (
    <>
    <button onClick={()=>{
      setval({...val, gender:"male"})
      console.log(val);
    }} >click</button>
    </>
  )
}

export default UseState03;