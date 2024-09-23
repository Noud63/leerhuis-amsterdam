import React from 'react'
import linkedin from "../assets/icons/linkedin.png";
import linkedinDark from "../assets/icons/linkedin_darkmode.png";
// import facebook from "../assets/icons/facebook_gray.png";
import facebookDark from "../assets/icons/facebook_darkmode.png";
import insta from "../assets/icons/insta_color.png";
import instaDark from "../assets/icons/insta_darkmode.png";
import mail from "../assets/icons/mail.png"
import linkedIn from "../assets/icons/linkedin_color.png"
import facebook from "../assets/icons/facebook_color.png"
import { FacebookIcon, LinkedinIcon, XIcon} from 'react-share';
import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <div className="min-h-full flex flex-row justify-center items-center mr-4 max-footer:mr-0 max-xsm:hidden">
      <div className="flex flex-row pb-0">
        {/* <FacebookIcon round={true} size={30} className="mr-2" /> */}
        <div className="mr-2">
          <img src={facebook} alt="mail" className="w-[30px] drop-shadow-lg" />
        </div>
        <Link to="/contactform">
          <div className="mr-2">
            <img src={mail} alt="mail" className="w-[30px] drop-shadow-lg" />
          </div>
        </Link>
      </div>

      <div className="flex flex-row">
        <div className="mr-2">
          <a
            href="https://www.instagram.com/leerhuisamsterdam/"
            target="_blank"
            passHref={true}
          >
            <img src={insta} alt="mail" className="w-[30px] drop-shadow-lg" />
          </a>
        </div>

        {/* <LinkedinIcon round={true} size={30} className="mr-2" /> */}
      </div>

      <div className="flex flex-row">
        <div className="mr-2">
          <img src={linkedIn} alt="mail" className="w-[30px] drop-shadow-lg" />
        </div>

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
