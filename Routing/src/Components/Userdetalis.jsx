import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { VscArrowLeft } from "react-icons/vsc";


function Userdetalis() {
    const navigate = useNavigate()
    const gobackhandler= ()=>{
        navigate('/user')
    }

    const {name} = useParams()
  return (
    < >
        <div>Hey {name}</div>
        <button onClick={gobackhandler} className='p-4 border-4 rounded-full'> <VscArrowLeft /></button>
    </>
  )
}

export default Userdetalis