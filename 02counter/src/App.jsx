import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [coutnt , adityacounter] = useState(0)

  const addvalue = ()=>{
    if(coutnt >= 20){
      coutnt = 20
    }else{

      adityacounter(coutnt+1)
      adityacounter( prevCoutnt => prevCoutnt+1)
      adityacounter( prevCoutnt => prevCoutnt+1)
    }
  }
  const removeValue = ()=>{
    if(coutnt === 0){
      coutnt = 0
    }else{

      adityacounter(coutnt-1)
    }
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value: {coutnt}</h2>
    <button onClick={addvalue}>add</button>
    <br/>
    <button onClick={removeValue}>remove</button>
    </>
  )
}

export default App
