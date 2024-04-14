import React from 'react'
import Card from './Card'

function Cards({users,removeuser}) {
  return (
    <div className='flex flex-wrap gap-10 justify-center items-center h-[50vh] overflow-auto'>
      {users.map((item,index)=>{
        return <Card key={index} user={item} removeuser={removeuser} id={index} />
      })}
    </div>
  )
}

export default Cards;