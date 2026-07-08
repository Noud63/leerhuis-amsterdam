import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import close from "../assets/icons/close.png";

const MenuOverlay = ({ showMenu, closeMenuOverlay, border }) => {
  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMenu]);

  return (
    <div
      className={`${showMenu ? "translate-x-0" : "translate-x-[101%]"} 
             overlay fixed h-full backdrop-blur-lg top-0 right-0 bottom-0 
           bg-white/60 z-[999] w-full max-w-[50%] max-sm:max-w-full transition ease-in duration-300  overflow-y-scroll pb-12`}
      onClick={closeMenuOverlay}
    >
      <div className="menu flex flex-col justify-center items-center text-lg font-semibold gap-12 mt-12">
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
                 to="/jaarthemapage"
                 className={({ isActive }) => [
                   isActive ? `${border}` : "border-b-2 border-none",
                 ]}
               >
                 <span>Jaarthema</span>
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
                 to="/contactpage"
                 className={({ isActive }) => [
                   isActive ? `${border}` : "border-b-2 border-none",
                 ]}
               >
                 <span>Contact</span>
               </NavLink>
             </div>

        <div
          className="cursor-pointer flex justify-center"
          onClick={closeMenuOverlay}
        >
          <img src={close} alt="close" className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
