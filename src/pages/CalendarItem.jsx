import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import activities from "../db.json";
import { Link } from "react-router-dom";
import share from "../assets/icons/share.png";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookIcon,
  XIcon,
  LinkedinIcon,
} from "react-share";
import BackButton from '../components/BackButton';


const CalendarItem = () => {
  const currentUrl = window.location.href

const { id } = useParams()

const [expired, setExpired] = useState(false)

const url = window.location.pathname

const item = activities.activities[id]

const givenDate = new Date(item.closing_date).getTime();
const now = new Date().getTime();

useEffect(()=> {
 if (givenDate <= now) {
   setExpired(true);
 } else{
   setExpired(false);
 }
},[givenDate, now])


  return (
    <div className="w-full flex items-center flex-row max-calendar:h-auto">
      <div className="flex flex-1 pt-[200px] flex-col items-center max-calendar:mt-12 max-xsm:pt-[170px]">
        <div className="w-full max-w-[700px] mb-32 flex flex-col items-center px-2">
          <div className="w-full flex justify-start pl-4 text-xl font-semibold mb-4">
            # Over {item.title}
          </div>

          <div className="calendar_item w-full rounded-2xl">
            <div className="bg-[#fff] rounded-xl text-[#000] pt-4 flex flex-col">
              {expired ? (
                <div className="flex justify-end font-bold mx-4">
                  <span className="text-2xl max-xsm:text-xl">
                    Inschrijving verlopen!
                  </span>
                </div>
              ) : (
                ""
              )}
              <div className="h-[50px] border-b border-t border-[#000] gap-2 flex justify-between items-end font-bold mb-2 text-xl py-2 mx-4 mt-4 overflow-hidden relative">
                {item.title}
                <div className="group">
                  <div className="flex flex-row gap-2 font-normal">
                    <span className="text-orange-600">Deel</span>
                    <img
                      src={share}
                      alt="share"
                      className="w-[28px] cursor-pointer"
                    />
                  </div>
                  <div
                    className="bg-white min-h-full flex items-center text-black absolute z-[999] right-0 bottom-0 translate-y-full  
                  rounded-lg transition duration-500 group-hover:translate-y-0 gap-2"
                  >
                    <span className="cursor-pointer h-full items-center flex">
                      <FacebookShareButton url={currentUrl}>
                        <FacebookIcon size={34} round={true} />
                      </FacebookShareButton>
                    </span>
                    <span className="cursor-pointer h-full items-center justify-center flex">
                      <TwitterShareButton url={currentUrl}>
                        <XIcon size={34} round={true} />
                      </TwitterShareButton>
                    </span>
                    <span className="cursor-pointer h-full items-center flex">
                      <WhatsappShareButton url={currentUrl}>
                        <WhatsappIcon size={34} round={true} />
                      </WhatsappShareButton>
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full pl-4 my-2">
                <div className="font-bold">Datums :</div>
                <div className="w-full flex flex-row flex-wrap">
                  <span>{item.date.day}:&nbsp;</span>
                  {item.date.dates.map((date, index) => (
                    <span key={index}>{date}&nbsp;</span>
                  ))}
                </div>
              </div>

              <div className="w-full pl-4 mb-2">
                {" "}
                <span className="font-bold">Tijd :</span>
                <br />
                {item.time}
              </div>
              <div className="w-full px-4 mb-2">
                <span className="font-bold">Beschrijving : </span>
                <br />"{item.description}"
              </div>
              <div className="w-full px-4 mb-2">
                {" "}
                <span className="font-bold">O.l.v :</span> {item.led_by}
              </div>
              <div className="w-full px-4">
                {" "}
                <span className="font-bold">Kenmerk :</span>{" "}
                {id <= 9 ? `LA-AC0${Number(id) + 1}` : `LA-AC${Number(id) + 1}`}
              </div>

              <Link
                to={`/subscribe/${id}`}
                className="w-full flex justify-center mt-6 mb-4"
              >
                <button
                  type="button"
                  className="btn w-[150px] text-black font-semibold p-2 border-2 border-black rounded-full cursor-pointer"
                  disabled={expired}
                >
                  Schrijf je in
                </button>
              </Link>

              <div className="w-full flex justify-center items-center mt-4 relative">
                <img
                  src={`/images/${item.image}`}
                  alt=""
                  className="w-full h-auto rounded-b-xl"
                />
              </div>
            </div>
          </div>

          {/* <Link
            to={-1}
            className="w-full flex justify-center mt-12"
          >
            <button
              type="button"
              className="btn w-[150px] rounded-full justify-center items-center  text-black border-2 border-black gap-2 pb-1 leading-8 pt-1 text-md font-normal"
            >
              Terug
            </button>
          </Link> */}

          <BackButton url={url} />
        </div>
      </div>
    </div>
  );
}

export default CalendarItem
