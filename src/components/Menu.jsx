import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ color, style, border }) => {
  return (
    <div
      className={`menu flex justify-center items-center text-lg font-semibold gap-9 text-${color} ${style}`}
    >
      <div className="flex justify-center">
        <NavLink
          to="/"
          className={({ isActive }) => [
            isActive ? `${border}` : "border-b-2 border-none",
          ]}
        >
          <span className="cursor-pointer">Start</span>
        </NavLink>
      </div>

      <div className="flex justify-center">
        <NavLink
          to="/overonspage"
          className={({ isActive }) => [
            isActive ? `${border}` : "border-b-2 border-none",
          ]}
        >
          <span>Over ons</span>
        </NavLink>
      </div>

      <div className="flex justify-center">
        <NavLink
          to="/contactpage"
          className={({ isActive }) => [
            isActive ? `${border}` : "border-b-2 border-none",
          ]}
        >
          <span>Contact</span>
        </NavLink>
      </div>

      <div className="flex justify-center">
        <NavLink
          to="/allactivities"
          className={({ isActive }) => [
            isActive ? `${border}` : "border-b-2 border-none",
          ]}
        >
          <span>Activiteiten</span>
        </NavLink>
      </div>

      <div className="flex justify-center">
        <NavLink
          to="/aktueel"
          className={({ isActive }) => [
            isActive ? `${border}` : "border-b-2 border-none",
          ]}
        >
          <span>Aktueel</span>
        </NavLink>
      </div>

      <div className="flex justify-center">
        <NavLink
          to="/archief"
          className={({ isActive }) => [
            isActive ? `${border}` : "border-b-2 border-none",
          ]}
        >
          <span>Archief</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
