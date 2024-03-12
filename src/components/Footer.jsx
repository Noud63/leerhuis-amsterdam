import React from 'react'
import logo from "../assets/images/logo_white.png"

const Footer = () => {
  return (
    <div className="w-full h-[600px] bg-zinc-900 flex justify-center items-center relative">
      <div className="mb-16">
        <img src={logo} alt="logo" className="w-full max-w-[380px]" />
      </div>
      <div className="w-full absolute bottom-0 left-0 text-white/50 flex justify-center bg-black py-4">
        &copy;noudvandun webdevelopment
      </div>
    </div>
  );
}

export default Footer
