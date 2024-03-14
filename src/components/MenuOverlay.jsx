import React from 'react'
import { NavLink } from 'react-router-dom';
import close from "../assets/icons/close.png"

const MenuOverlay = ({showMenu, closeMenuOverlay}) => {

    
return (
  <div
    className={`${showMenu ? "translate-x-0" : "translate-x-[330px]"} 
             overlay fixed h-full backdrop-blur-lg top-0 right-0 bottom-0 
           bg-white/50 z-[999] w-full max-w-[320px] transition ease-in duration-300`}
    onClick={closeMenuOverlay}
  >
    <div
      className="cursor-pointer flex justify-center pt-4"
      onClick={closeMenuOverlay}
    >
      <img src={close} alt="close" className="w-8"/>
    </div>

    <div className="menu flex flex-col justify-center items-center text-lg font-semibold gap-12 mt-8">
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
        onClick={closeMenuOverlay}
      >
        <span>Over ons</span>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-red-800"
            : "border-b-2 border-transparent",
        ]}
      >
        <span>Contact</span>
      </NavLink>

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
  </div>
);
}

export default MenuOverlay
