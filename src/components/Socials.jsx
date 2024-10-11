import React from 'react'
import insta from "../assets/icons/insta.png";
import mail from "../assets/icons/mail.png"
import linkedIn from "../assets/icons/linkedin_color.png"
import facebook from "../assets/icons/facebook_color.png"
import { Link } from 'react-router-dom';

const Socials = () => {
  return (
    <div className="min-h-full flex flex-row justify-center items-center mr-4 max-footer:mr-0 max-xsm:hidden">
      <div className="flex flex-row pb-0">
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
            href="https://www.instagram.com/leerhuisamsterdam?igsh=cnpleWpwazI1MDBr"
            target="_blank"
          >
            <img src={insta} alt="mail" className="w-[30px] drop-shadow-lg" />
          </a>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="mr-2">
          <img src={linkedIn} alt="mail" className="w-[30px] drop-shadow-lg" />
        </div>
      </div>

    </div>
  );
}

export default Socials
