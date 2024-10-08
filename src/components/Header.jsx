import React from 'react'
import bracket from "../assets/images/curlybracket_black.png"
import Socials from './Socials'
import Menu from './Menu'
import scroll from "../utils/scroll";
import hamburger from "../assets/icons/hamburger2.png";
import { Link } from 'react-router-dom'

const Header = ({showMenuOverlay}) => {

  const scrolled = scroll();

  const style =
    "gap-16 max-xxl:gap-8 max-socials:justify-end max-socials:mr-8 max-footer:hidden";
  
 return (
   <div className="w-full min-h-full max-w-[2000px] relative">
     <div
       className={`${
         scrolled ? "-translate-y-full" : "translate-y-0"
       }  header fixed top-0 w-full max-w-[2000px]  flex flex-col justify-between text-black  z-10 border-b border-neutral-800/40  
        bg-gradient-to-b from-yellow-800/0 transform ease-in-out duration-500`}
     >
       <div
         className="w-full max-w-[2000px] h-[30px] flex justify-center items-center text-sm text-white/90 tracking-wider
         bg-gradient-to-r from-black via-yellow-800 to-black"
       >
         <span>Leerhuis Amsterdam - voor zinvol samenleven</span>
       </div>

       <div className="w-full h-full max-w-[2000px] flex flex-row justify-between">
         <Link to="/">
           <div className="h-full flex flex-row gap-4 max-xxsm:gap-2 py-4 pl-8 max-xxsm:pl-4 max-xxxsm:pl-2">
             <img src="/images/logo.png" alt="logo" className="w-[220px] h-[80px]" />

             <div className="">
               <img
                 src={bracket}
                 alt=""
                 className="h-full w-[22px] max-mini:hidden"
               />
             </div>
           </div>
         </Link>

         <Menu color="black" style={style} border="border-b-2 border-black" />

         <Socials />

         <div
           className="cursor-pointer min-h-full flex items-center justify-center footer:hidden mr-8 max-xxsm:mr-4 max-xxxsm:mr-2"
           onClick={showMenuOverlay}
         >
           <div className="flex justify-center items-center flex-col">
             <img src={hamburger} alt="hamburger" className="w-12" />
             <span className="text-md font-semibold">menu</span>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Header
