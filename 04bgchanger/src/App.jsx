import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor :color}}>
      <div className="flex flex-wrap justify-center  inset-x-0 px-2 ">Aditya Hello
      
    </div>
    </div>
  )
}

export default App
