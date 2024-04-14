import React, { useState } from "react";
import PropsCard from "./component/PropsCard";
function App() {
  const data = [
    {
      name: "Aditya",
      profensen: "Artist",
      Image:
        "https://images.unsplash.com/photo-1627307507218-0e7bb784fa9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhdGV8ZW58MHx8MHx8fDA%3D",
      friends:false,
    },
    {
      name: "Sumit",
      profensen: "coder",
      Image:
        "https://images.unsplash.com/photo-1611431239888-d21bb1dd7bbe?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];
  const [val,setval] = useState(data)
  var handalclick = (index)=>{
    setval((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex === index) return{...item, friends:!item.friends}
        return item
      })
    })
  }
  
return (
  <>
    {val.map((item,index)=>(
      <PropsCard item={item} handalclick={handalclick} index={index}/>
    ))}
  </>
);
}
export default App;
