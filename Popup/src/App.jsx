import React, { useState } from 'react'
import Modal from './Modal'
function App() {
  const [modal, setmodal] = useState(false)
  return (
    <div >
      <div>
        <h1 onClick={()=> setmodal(true)}>onClick</h1>
      </div>
      {modal && <Modal onclose={()=> setmodal(false)} />}
    </div>
  )
}

export default App
