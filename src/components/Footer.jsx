import React from 'react'
import logo from "../assets/images/logo_white.png"
import Socials from './Socials';
import Menu from './Menu';
import insta from "../assets/icons/insta_gray.png"
import facebook from "../assets/icons/facebook_gray.png"
import twitter from "../assets/icons/twitter_gray.png"
import linkedin from "../assets/icons/linkedin_gray.png"

const Footer = () => {

  const style = "flex flex-col max-footer:flex-row max-xsm:gap-6 max-xxxsm:font-normal text-base";

  return (
    <div className="w-full h-[600px] bg-stone-900 flex flex-row justify-around items-center relative pb-40 pt-20 max-footer:flex-col max-footer:pt-16">
      <div className="h-full flex-1 flex items-center justify-center max-footer:py-8">
        <Menu
          color="white"
          style={style}
          noHomeLink
          border="border-none"
        />
      </div>
      <div className="h-full w-[600px] border-x border-white flex flex-col items-center justify-between pt-6 max-footer:border-none max-footer:py-4 max-footer:w-full">
        <img src={logo} alt="logo" className="w-full max-w-[300px] h-auto" />
        <div className="w-full text-white flex flex-col items-center pb-4 tracking-widest max-footer:mt-12">
          <span>Leerhuis Amsterdam</span>
          <span>Linaeusstraat 37</span>
          <span>1093EG Amsterdam</span>
          <span>06 11234567</span>
          <span>leerhuisamsterdam@gmail.com</span>
        </div>
      </div>
      <div className="h-full flex flex-row flex-1 items-center justify-center gap-4 max-footer:mt-10">
        <img src={facebook} alt="" className="w-[35px]" />
        <img src={insta} alt="" className="w-[35px]" />
        <img src={twitter} alt="" className="w-[35px]" />
        <img src={linkedin} alt="" className="w-[35px]" />
      </div>
      <div className="w-full absolute bottom-0 left-0 text-white/50 flex justify-center bg-black py-4">
        &copy;noudvandun webdevelopment
      </div>
    </div>
  );
}

export default Footer
