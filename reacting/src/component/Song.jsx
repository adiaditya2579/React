import { Input } from "postcss";
import React from "react";
function Song() {
  var data = [
    {
      image: "https://www.pagalworld.online/imgs/updates/3037-Teri%20Baaton%20Mein%20Aisa%20Uljha%20Jiya%20-%20Title%20Song.jpg",
      name: " Teri Baaton Mein Aisa Uljha Jiya",
      singre: "Raghav, Tanishk Bagchi, Asees Kaur",
      original: true,
      mp3: true,
    },
    {
      image:
        "https://www.pagalworld.online/GpE34Kg9Gq/113604/152263-jee-ve-sohneya-jee-title-track-mp3-song-300.jpg",
      name: "Jee Ve Sohneya Jee",
      singre: "Atif Aslam",
      original: false,
      mp3: true,
    },
    {
      image:
        "https://www.pagalworld.online/GpE34Kg9Gq/113604/152271-sabki-baaratein-aayi-2-mp3-song-300.jpg",
      name: " Sabki Baaratein Aayi 2",
      singre: "Dev Negi",
      original: true,
      mp3: true,
    },
    {
      image:
        "https://www.pagalworld.online/GpE34Kg9Gq/113817/thumb-shree-ram-mp3-songs-300.jpg",
      name: " Shree Ram Mp3 Songs Info",
      singre: "Shree Ram Mandir Special",
      original: false,
      mp3: true,
    },
  ];
  
  return (
    <>
      <div className="w-full h-screen bg-zinc-400 flex flex-wrap flex-col items-center justify-center  ">
        {data.map((item, index) => (
          <div key={index} className="flex h-24 bg-zinc-200  rounded-md pr-2 mb-4">
            <img
              className=" object-cover w-20 "
              src={item.image}
            />
            <div className=" mx-1 text-sm">
              <h1 className=" font-bold w-80">{item.name}</h1>
              <button className={`text-white ${item.original?'bg-blue-600':'bg-red-600'} rounded-md p-1`}>
                {item.original?"Original Quality":"Original Quality"}
              </button>
              <h4>{item.singre}</h4>
            </div>
            <div className="flex h-fit mt-3 ">
              <button className=" bg-gray-600 rounded-md p-2">{item.mp3?"MP3 Song":"MP4 Song"}</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Song;
