import React, { useEffect, useState } from 'react'

function About() {
  const [first, setfirst] = useState('first data')
  const [second, setsecond] = useState('second data')
    useEffect(()=>{
        console.log('About section Createtd');

        return ()=>{
            console.log("About section Deleted");
        }
    })
  return (
    <div>
    <h1>{first}</h1>
    <button onClick={()=> setfirst("hello manjeet")} className='bg-red-200 p-2 '>chande first</button>
    <h1>{second}</h1>
    <button onClick={()=> setsecond("Hello Aditya")} className='bg-red-200 p-2 '>chande second</button>
    </div>
  )
}

export default About