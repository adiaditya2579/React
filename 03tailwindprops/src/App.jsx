import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    name:"Aditya",
    class: 12
  }

  return (
    <>
      <h1 className=" rounded-xl mb-4 bg-green-600 text-black p-4  text-3xl font-bold underline">
        Namaste Bharat!
      </h1>
      <Card username="Aditya" btntext="click-me" />
      <Card username="Anurag"/>
    </>
  );
}

export default App;
