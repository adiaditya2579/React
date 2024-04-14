import React from 'react'

function Card({user,removeuser,id}) {
  return (
    <div className='w-48 bg-white p-2 flex flex-col  items-center text-center rounded-lg'>
      <div className='image w-[80px] h-[80px] bg-slate-500 rounded-full overflow-hidden '>
        <img className='w-full h-full  object-cover' src={user.image}/>      
      </div>
      <h1 className=' leading-none font-semibold m-2'>{user.name}</h1>
      <h3 className=' opacity-65 text-sm'>{user.email}</h3>
      <p className=' leading-none m-2 text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce auctor lorem et suscipi.</p>
      <button onClick={()=>removeuser(id)} className=' bg-red-500 px-2 py-0 rounded-full m-2'>Remove it</button>
    </div>
  )
}

export default Card