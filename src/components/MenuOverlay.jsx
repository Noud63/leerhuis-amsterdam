import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import close from "../assets/icons/close.png"

const MenuOverlay = ({showMenu, closeMenuOverlay}) => {
  
    useEffect(() => {
        if (showMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showMenu]);

    
return (
  <div
    className={`${showMenu ? "translate-x-0" : "translate-x-[101%]"} 
             overlay fixed h-full backdrop-blur-lg top-0 right-0 bottom-0 
           bg-white/60 z-[999] w-full max-w-full transition ease-in duration-300 border-l border-yellow-800 overflow-y-scroll`}
    onClick={closeMenuOverlay}
  >
   

    <div className="menu flex flex-col justify-center items-center text-lg font-semibold gap-12 mt-12">
      {/* <NavLink
        to="/"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black shadow-md"
            : "border-b-2 border-transparent"
        ]}
      >
        <span className="cursor-pointer">Home</span>
      </NavLink> */}

      <NavLink
        to="/overonspage"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black shadow-md"
            : "border-b-2 border-transparent"
        ]}
        onClick={closeMenuOverlay}
      >
        <span>Over ons</span>
      </NavLink>

      <NavLink
        to="/contactpage"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black shadow-md"
            : "border-b-2 border-transparent"
        ]}
      >
        <span>Contact</span>
      </NavLink>

      <NavLink
        to="/allactivities"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black shadow-md"
            : "border-b-2 border-transparent"
        ]}
      >
        <span>Activiteiten</span>
      </NavLink>

      <div className="flex justify-center">
        <NavLink
          to="/zakelijkpage"
          className={({ isActive }) => [
            isActive
              ? "border-b-2 border-black shadow-md"
              : "border-b-2 border-transparent"
          ]}
        >
          <span>Aanmelden</span>
        </NavLink>
      </div>

      <NavLink
        to="/aktueelpage"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black shadow-md"
            : "border-b-2 border-transparent"
        ]}
      >
        <span>Deze week</span>
      </NavLink>

      <NavLink
        to="/archief"
        className={({ isActive }) => [
          isActive
            ? "border-b-2 border-black"
            : "border-b-2 border-transparent"
        ]}
      >
        <span>archief</span>
      </NavLink>

     
              <NavLink
                to="/podiumvoorvriendenpage"
                className={({ isActive }) => [
                  isActive
            ? "border-b-2 border-black"
            : "border-b-2 border-transparent"
                ]}
              >
                <span>Podium voor vrienden</span>
              </NavLink>
            <div
      className="cursor-pointer flex justify-center"
      onClick={closeMenuOverlay}
    >
      <img src={close} alt="close" className="w-8" />
    </div>
    </div>
  </div>
);
}

export default MenuOverlay
