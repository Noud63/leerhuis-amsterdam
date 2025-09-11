import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ color, style, border }) => {
  return (
    <div
      className={`menu flex justify-center items-center text-lg tracking-wide font-semibold gap-5 text-${color} ${style}`}
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
          to="/zakelijkpage"
          className={({ isActive }) => [
            isActive ? `${border}` : "border-b-2 border-none",
          ]}
        >
          <span>Aanmelden</span>
        </NavLink>
      </div>

      <div className="flex justify-center">
        <NavLink
          to="/aktueelpage"
          className={({ isActive }) => [
            isActive ? `${border}` : "border-b-2 border-none",
          ]}
        >
          <span>Deze week</span>
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
