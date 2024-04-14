import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  const navcoloer = (e)=>{
    return{
      color: e.isActive ?"green":"",
      fontWeight: e.isActive?"bold":""
    }
  }
  const navparpul = (e)=>{
    return[
      e.isActive ?"text-red-900":"",
      e.isActive?"font-bold":"",
    ].join(" ")
  }

  return (
    <div>
      <nav className=" flex justify-center mt-12  gap-8">
        <NavLink style={navcoloer} to="/">Home</NavLink>
        <NavLink style={navcoloer} to="/About">About</NavLink>
        <NavLink className={navparpul} to="/User">User</NavLink>
      </nav>
    </div>
  );
}

export default Nav;
