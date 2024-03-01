import React from 'react'
import linkedin from "../assets/icons/linkedin.png";
import linkedinDark from "../assets/icons/linkedin_darkmode.png";
import facebook from "../assets/icons/facebook.png";
import facebookDark from "../assets/icons/facebook_darkmode.png";
import insta from "../assets/icons/insta.png";
import instaDark from "../assets/icons/insta_darkmode.png";
import twitter from "../assets/icons/twitter.png";
import twitterDark from "../assets/icons/twitter_darkmode.png";

const Socials = ({darkMode}) => {
  return (
    <>
      <img
        src={darkMode ? facebookDark : facebook}
        alt=""
        className="w-[30px] max-xxsm:w-[25px]"
      />
      <img src={darkMode ? instaDark : insta} alt="" className="w-[30px] max-xxsm:w-[25px]" />
      <img src={darkMode ? twitterDark : twitter} alt="" className="w-[30px] max-xxsm:w-[25px]" />
      <img
        src={darkMode ? linkedinDark : linkedin}
        alt=""
        className="w-[30px] max-xxsm:w-[25px]"
      />
    </>
  );
}

export default Socials
