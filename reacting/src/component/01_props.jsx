import React from 'react'

function Props01({text,color}) {
  return (
    <button className={`px-3 py-2 rounded-full m-4 ${color}`}>{text}</button>
  )
}

export default Props01;