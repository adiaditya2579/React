import React, { useState } from "react";
import Card from "./components/card";
import Navbar from "./components/Navbar";

function App() {
  const data = [
    {
      img: "https://www.pagalworld.online/imgs/updates/3037-Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya%20-%20Title%20Song.jpg",
      name: "Teri Baaton",
      songName: "Raghav, Tanishk Bagchi",
      added:false
    },
    {
      img: "https://www.pagalworld.online/imgs/updates/3032-Akhiyaan%20Gulaab%20-%20%20Mitraz.jpg",
      name: "Teri Baaton Mein",
      songName: "Mitraz",
      added:true
    },
    {
      img: "https://www.pagalworld.online/GpE34Kg9Gq/113816/152266-jeena-haraam-mp3-song-300.jpg",
      name: " Jeena Haraam",
      songName: "Tanishk Bagchi, Vishal Mishra",
      added:false
    },
    {
      img: "https://www.pagalworld.online/imgs/updates/3037-Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya%20-%20Title%20Song.jpg",
      name: "Teri Baaton",
      songName: "Raghav, Tanishk Bagchi",
      added:false
    }
  ];

  const [songdata, setsongdata] = useState(data);
  var handalclick = (index)=>{
    setsongdata((prev)=>{
      return prev.map((item,itemindex)=>{
        if(itemindex=== index) return{...item, added: !item.added}
        return item;
      })
    })
  }

  return (
    <>
      <div className=" w-full h-screen bg-zinc-300">
        <Navbar data={songdata} />
        <div className=" flex gap-6 px-10 flex-wrap">
          {songdata.map((e, index) => (
            <Card item={e} handalclick={handalclick} index={index} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
