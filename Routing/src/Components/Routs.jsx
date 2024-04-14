import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Userdetalis from "./Userdetalis";
function Routs() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/User" element={<User/>}>
        </Route>
        <Route path="/user/:name" element={<Userdetalis/>} />
        <Route path="/About" element={<About />} />

      </Routes>
    </div>
  );
}

export default Routs;
