
import React, { useRef } from "react"


function Formhand() {
const name = useRef(null)
const age = useRef(null)

var submithandal = (event)=>{
  event.preventDefault()
  console.log(name.current.value);
  console.log(age.current.value);
}

  return (
    <div>
      <form className="p-4" onSubmit={submithandal}>
        <input className=" border-2" ref={name} type="text" placeholder="name"/>
        <input className=" border-2" ref={age} type="text" placeholder="age"/>
        <input className=" border-2" type="submit"/>
      </form>
    </div>
  )
}

export default Formhand;