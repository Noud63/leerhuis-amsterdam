import React from 'react'
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div
      className="menu h-auto pb-4 flex flex-1 justify-around items-center text-lg font-semibold px-20
      max-xxl:px-8 max-lg:flex-col max-xsm:mt-8 max-xsm:flex-row 
      max-lg:justify-between max-xxsm:text-[1rem] max-xsm:px-2 max-bracket:pb-4 max-xxsm:mt-0 max-md:items-end max-md:pr-0"
    >
      <NavLink
        to="/"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-red-800"
            : "border-b-2 border-transparent",
        ]}
      >
        <span className="cursor-pointer">Over ons</span>
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

      <span>Activiteiten</span>

      <span>Archief</span>
    </div>
  );
}

export default Menu
