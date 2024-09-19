import React from "react";
import logo from "../assets/images/logo_white.png";
import Menu from "./Menu";
import mail from "../assets/icons/mail_gray.png";
import facebook from "../assets/icons/facebook_gray.png";
import linkedin from "../assets/icons/linkedin_gray.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const style = "flex flex-col max-footer:flex-wrap max-footer:flex-row justify-center gap-6 mx-4";

  return (
    <div
      className="w-full h-[600px] bg-stone-900 flex flex-row justify-around items-center relative pb-40 pt-12 
    max-footer:flex-col max-footer:pt-8 max-footer:h-[800px] max-xxsm:h-[850px]"
    >
      <div className="h-full flex-1 flex items-center justify-center max-footer:pt-8 max-footer:pb-10">
        <Menu color="white" style={style} border="border-none" />
      </div>
      <div className="h-full w-[600px] border-x border-white flex flex-col items-center justify-between pt-6 max-footer:border-none max-footer:py-4 max-footer:w-full">
        <img src={logo} alt="logo" className="w-full max-w-[300px] h-auto" />
        <div className="w-full text-white flex flex-col items-center pb-8 tracking-widest max-footer:mt-14">
          <span>Leerhuis Amsterdam</span>
          <span>Linnaeusstraat 37</span>
          <span>1093EG Amsterdam</span>
          <span>06 10325127</span>
          <span>leerhuisamsterdam@gmail.com</span>
        </div>
      </div>

      <div className="h-full flex flex-col flex-1 justify-center items-center">
        <div className="flex h-1/3 items-center justify-center gap-4 mb-20 max-footer:mt-4">
          <img src={facebook} alt="" className="w-[35px]" />
          <Link to="/contactform">
            <img src={mail} alt="" className="w-[35px]" />
          </Link>
          <img src={linkedin} alt="" className="w-[35px]" />
        </div>

        <div
          className="w-full h-1/3 max-w-[200px] max-footer:max-w-[500px] max-footer:items-center text-center 
        max-footer:px-4 flex flex-col justify-end items-center text-sm text-gray-400 pb-4 pl-4"
        >
          Beeld in het Leerhuis logo is vervaardigd door kunstenaar Ronald
          Tolman.
          <br />
          <span className="w-full flex justify-center">
            - info@ronaldtolman.nl -
          </span>
        </div>
      </div>

      <div className="w-full absolute bottom-0 left-0 text-white/50 flex justify-center text-sm bg-black py-4">
        <a href="https://appcollection.netlify.app/" target="_blank">
          {" "}
          &copy;noudvandun webdevelopment
        </a>
      </div>
    </div>
  );
};

export default Footer;
