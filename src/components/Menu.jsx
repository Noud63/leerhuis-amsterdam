import React from 'react'
import { NavLink } from 'react-router-dom';


const Menu = ({color, style, noHomeLink, border}) => {
  
  return (
    <div
      className={`menu flex justify-center items-center text-lg font-semibold gap-16 text-${color} ${style}`}
    >
      {!noHomeLink ? (
        <NavLink
          to="/"
          className={({ isActive }) => [
            isActive ? `${border}` : "border-b-2 border-none",
          ]}
        >
          <span className="cursor-pointer">Home</span>
        </NavLink>
      ) : (
        ""
      )}

      <NavLink
        to="/overonspage"
        className={({ isActive }) => [
          isActive ? `${border}` : "border-b-2 border-none",
        ]}
      >
        <span>Over ons</span>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => [
          isActive ? `${border}` : "border-b-2 border-none",
        ]}
      >
        <span>Contact</span>
      </NavLink>

      <NavLink
        to="/allactivities"
        className={({ isActive }) => [
          isActive ? `${border}` : "border-b-2 border-none",
        ]}
      >
        <span>Activiteiten</span>
      </NavLink>

      <NavLink
        to="/aktueel"
        className={({ isActive }) => [
          isActive ? `${border}` : "border-b-2 border-none",
        ]}
      >
        <span>Aktueel</span>
      </NavLink>
    </div>
  );
}

export default Menu
