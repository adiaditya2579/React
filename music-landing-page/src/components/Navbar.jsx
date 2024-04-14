import React from 'react'

function Navbar({data}) {
  return (
    <div className=' w-full px-10 py-6 flex justify-between items-center'>
      <h3 className=' text-orange-500 font-bold text-xl'>Orange</h3>
      <div className='flex  bg-orange-500 py-1 px-2 rounded-md gap-2'>
        <h4>Favourites</h4>
        <h4>{data.filter(item=>item.added).length}</h4>
      </div>

    </div>
  )
}

export default Navbar;