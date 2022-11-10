import React from "react";
import { NavLink } from "react-router-dom";

export const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        // style={({ isActive }) => {
        //   // one way of make using the navlink component
        //   return {
        //     color: isActive ? "red " : "grey",
        //   };
        // }}
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        // style={({ isActive }) => {
        //   return {
        //     color: isActive ? "red " : "grey",
        //   };
        // }}
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to={"about"}
      >
        About
      </NavLink>
      <NavLink
        // style={({ isActive }) => {
        //   return {
        //     color: isActive ? "red " : "grey",
        //   };
        // }}
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to={"products"}
      >
        Products
      </NavLink>
      <NavLink
        // style={({ isActive }) => {
        //   return {
        //     color: isActive ? "red " : "grey",
        //   };
        // }}
        className={({ isActive }) => (isActive ? "link active" : "link")}
        to={"login"}
      >
        Login
      </NavLink>
    </nav>
  );
};
