import React from 'react'
import linkedin from "../assets/icons/linkedin.png";
import linkedinDark from "../assets/icons/linkedin_darkmode.png";
// import facebook from "../assets/icons/facebook_gray.png";
import facebookDark from "../assets/icons/facebook_darkmode.png";
import insta from "../assets/icons/insta.png";
import instaDark from "../assets/icons/insta_darkmode.png";
import twitter from "../assets/icons/twitter.png";
import twitterDark from "../assets/icons/twitter_darkmode.png";
import mail from "../assets/icons/mail.png"
import linkedIn from "../assets/icons/linkedin_color.png"
import facebook from "../assets/icons/facebook_color.png"
import { FacebookIcon, LinkedinIcon, XIcon} from 'react-share';

const Socials = () => {
  return (
    <div className="min-h-full flex flex-row justify-center items-center max-socials:hidden mr-4">
      <div className="flex flex-row pb-0">
        {/* <FacebookIcon round={true} size={30} className="mr-2" /> */}
        <div className="mr-2">
          <img src={facebook} alt="mail" className="w-[30px] drop-shadow-lg" />
        </div>
        <div className="mr-2">
          <img src={mail} alt="mail" className="w-[30px] drop-shadow-lg" />
        </div>
      </div>

      <div className="flex flex-row">
        <div className="mr-2">
          <img src={linkedIn} alt="mail" className="w-[30px] drop-shadow-lg" />
        </div>

        <XIcon round={true} size={30} className="mr-2 drop-shadow-lg" />
        {/* <LinkedinIcon round={true} size={30} className="mr-2" /> */}
      </div>

      {/* <img
        src={facebook}
        alt=""
        className="w-[28px] max-xxsm:w-[25px]"
      /> */}
      {/* <img
        src={darkMode ? instaDark : insta}
        alt=""
        className="w-[28px] max-xxsm:w-[25px]"
      />
      <img
        src={darkMode ? twitterDark : twitter}
        alt=""
        className="w-[28px] max-xxsm:w-[25px]"
      />
      <img
        src={darkMode ? linkedinDark : linkedin}
        alt=""
        className="w-[28px] max-xxsm:w-[25px]"
      />  */}
    </div>
  );
}

export default Socials
