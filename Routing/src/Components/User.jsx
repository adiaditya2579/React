import React from 'react'
import {Link,} from 'react-router-dom'

function User() {
  return (
    <>
      <div className='m-52 flex flex-col'>
        <Link className='p-3 bg-red-200 mb-3 w-1/4 hover:bg-red-400' to="/user/Aditya">Aditya</Link>
        <Link className='p-3 bg-red-200 mb-3 w-1/4 hover:bg-red-400' to="/User/Anurag">Anurag</Link>
        <Link className='p-3 bg-red-200 mb-3 w-1/4 hover:bg-red-400' to="/User/Sarthak">Sarthak</Link>
        
      </div>

    </>
      
  )
}

export default User