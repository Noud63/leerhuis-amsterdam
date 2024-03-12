import React from 'react'
import { NavLink } from 'react-router-dom';


const Menu = () => {
  return (
    <div className="menu flex justify-center items-center text-lg font-semibold gap-16 max-xxl:gap-8 max-socials:justify-end  max-socials:mr-8 max-xmd:hidden">
      <NavLink
        to="/"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black"
            : "border-b-2 border-none",
        ]}
      >
        <span className="cursor-pointer">Home</span>
      </NavLink>

      <NavLink
        to="/overonspage"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black"
            : "border-b-2 border-none",
        ]}
      >
        <span>Over ons</span>
      </NavLink>

      <NavLink
          to="/contact"
          className={({ isActive }) => [
            isActive
              ? "border-b-2 border-black"
              : "border-b-2 border-none",
          ]}
        >
      <span>Contact</span>
      </NavLink>

      <NavLink
        to="/allactivities"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black"
            : "border-b-2 border-none",
        ]}
      >
        <span>Activiteiten</span>
      </NavLink>

      <span>Aktueel</span>
    </div>
  );
}

export default Menu
