import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users,setusers] =  useState([]);


  const adduser = (data)=>{
    setusers([...users, data]);
  }

  const removeuser = (id)=>{
    setusers(()=>users.filter((item,index)=> index != id))
  }
  
  return (
    <div className=" h-screen w-full bg-zinc-400 flex items-center flex-wrap justify-center">
      <div className=" container mx-auto">
        <Cards users={users} removeuser={removeuser} />
        <Form adduser={adduser}  />
      </div>
    </div>
  );
}

export default App;
