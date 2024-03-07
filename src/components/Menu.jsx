import React from 'react'
import { NavLink } from 'react-router-dom';


const Menu = () => {
  return (
    <div className="menu flex flex-1 justify-center items-center text-lg font-semibold gap-20 max-xxl:gap-8 max-socials:justify-end  max-menu:hidden">
      <NavLink
        to="/"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black"
            : "border-b-2 border-transparent",
        ]}
      >
        <span className="cursor-pointer">Home</span>
      </NavLink>

      <NavLink
          to="/overonspage"
          className={({ isActive }) => [
            isActive
              ? "border-b-2 border-black"
              : "border-b-2 border-transparent",
          ]}
        >
      <span>Over ons</span>
      </NavLink>

      {/* <NavLink
          to="/contact"
          className={({ isActive }) => [
            isActive
              ? "border-b-2 border-red-800"
              : "border-b-2 border-transparent",
          ]}
        > */}
      <span>Contact</span>
      {/* </NavLink> */}

      <NavLink
        to="/allactivities"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black"
            : "border-b-2 border-transparent",
        ]}
      >
        <span>Activiteiten</span>
      </NavLink>

      <span>Aktueel</span>
    </div>
  );
}

export default Menu
