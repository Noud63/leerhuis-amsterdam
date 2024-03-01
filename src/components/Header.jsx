import React from 'react'
import bracket from "../assets/images/curlybracket.png"
import wandelaars from "../assets/images/wandelaars1.png"
import Socials from './Socials'
import Menu from './Menu'

const Header = () => {
  return (
    <div
      className="header w-full flex flex-row justify-between text-amber-900 py-8 px-8 max-xsm:flex-col
    max-bracket:py-2 max-bracket:pt-4 max-bracket:px-2 bg-gradient-to-r from-neutral-800/0 to-yellow-800/0 border-b border-amber-800"
    >
      <div className="hero h-full max-w-[650px] flex flex-row gap-16 max-xxl:gap-8 max-xxsm:h-[170px]">
        <div className="flex flex-col pb-4 items-center max-bracket:w-full">
          <div className="h-[50px] flex justify-center text-[2.6rem] font-papyrus max-sm:text-[2.6rem] max-xxsm:text-[2.3rem]">
            Leerhuis Amsterdam
          </div>
          <div className="flex justify-center text-[1.5rem] font-papyrus font-semibold max-sm:text-[1.6rem] max-xxsm:text-[1.2rem]">
            voor zinvol samenleven
          </div>
          <div className="w-full max-w-[400px]">
            <img src={wandelaars} alt="" className="mt-2" />
          </div>
        </div>

        <div className="max-bracket:hidden">
          <img src={bracket} alt="" className="h-full w-[32px]" />
        </div>
      </div>

      <Menu />

      <div className="socials h-full flex flex-col justify-center items-center gap-3 max-md:hidden">
        <Socials />
      </div>
    </div>
  );
}

export default Header
