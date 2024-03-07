import React from 'react'
import bracket from "../assets/images/curlybracket_black.png"
import wandelaars from "../assets/images/wandelaars1.png"
import Socials from './Socials'
import Menu from './Menu'
import scroll from "../utils/scroll";
import hamburger from "../assets/icons/hamburger2.png";

const Header = () => {

  const scrolled = scroll();

return (
  <div
    className={`${
      scrolled ? "-translate-y-full" : "translate-y-0"
    }  header fixed top-0 w-full max-w-[2000px] flex flex-row justify-between text-black p-4 px-8 z-10  
                    border-b border-gray-400 transform ease-in-out duration-500 max-xxsm:px-2`}
  >
    <div className="h-full max-w-[350px] flex flex-row gap-8 max-xxsm:gap-2">
      <div className="flex flex-col pb-2 items-center">
        <div className="h-[38px] flex justify-center text-[1.8rem] font-papyrus">
          Leerhuis Amsterdam
        </div>
        <div className="flex justify-center text-[1rem] font-papyrus font-semibold tracking-wider">
          voor zinvol samenleven
        </div>
        <div className="w-full max-w-[280px]">
          <img src={wandelaars} alt="" className="mt-2" />
        </div>
      </div>

      <div className="max-xxxsm:hidden">
        <img src={bracket} alt="" className="h-full w-[32px]" />
      </div>
    </div>

    <Menu />

    <Socials />

    <div className="w-auto min-h-full flex items-center justify-center menu:hidden">
      {/* <span className="text-lg">Menu</span> */}
      <div>
        <img src={hamburger} alt="hamburger" className="w-16" />
      </div>
    </div>
  </div>
);
}

export default Header
