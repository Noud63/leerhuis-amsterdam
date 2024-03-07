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
      <div className="flex flex-1 pt-[200px] flex-col items-center max-calendar:mt-12">
        <div className="w-[700px] mb-32 flex flex-col items-center max-calendar:w-[85%] max-calendargrid:w-[95%]">
          <div className="w-full flex justify-start pl-4 text-xl font-semibold mb-4">
            # Over {item.title}
          </div>

          <div className="calendar_item w-full rounded-2xl">
            <div className="bg-gray-100 rounded-xl text-[#000] pt-4 flex flex-col gap-2">
              {expired ? <div className="flex justify-end font-bold border-b border-black pb-2 mx-4">
                <span className="text-2xl max-xsm:text-xl">
                Inschrijving verlopen!
                </span>
              </div> : <div></div>}
              <div className="h-[50px] border-b border-[#000] flex justify-between items-end font-bold mb-2 text-xl py-2 mx-4 overflow-hidden relative">
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
                  <div className="bg-gray-100 min-h-full flex items-center text-black absolute z-[999] right-0 bottom-0 translate-y-full  
                  py-2 pr-4 rounded-lg transition duration-500 group-hover:translate-y-0 gap-4">
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

              <div className="w-full pl-4 mt-2">
                <div className="font-bold">Datums:</div>
                <div className="w-full flex flex-row flex-wrap">
                  <span>{item.date.day}:&nbsp;</span>
                  {item.date.dates.map((date, index) => (
                    <span key={index}>{date}&nbsp;</span>
                  ))}
                </div>
              </div>
              <div className="w-full pl-4">
                {" "}
                <span className="font-bold">Tijd:</span>
                <br />
                {item.time}
              </div>
              <div className="w-full px-4">
                <span className="font-bold">Beschrijving: </span>
                <br />"{item.description}"
              </div>
              <div className="w-full px-4">
                {" "}
                <span className="font-bold">O.l.v:</span> {item.led_by}
              </div>

              <Link
                to={`/subscribe/${id}`}
                className="w-full flex justify-center my-6"
              >
                <button
                  type="button"
                  className="btn w-[150px] text-black font-semibold p-2 border-2 border-black rounded-full cursor-pointer"
                  disabled={expired}
                >
                Schrijf je in
                  </button>
              </Link>

              <div className="w-full flex justify-center items-center mt-4">
                <img
                  src={`/images/${item.image}`}
                  alt=""
                  className="w-full h-auto rounded-b-xl"
                />
              </div>

              {/* <div className="pt-4">
                ID:{" "}
                {id <= 9 ? `LA-AC0${Number(id) + 1}` : `LA-AC${Number(id) + 1}`}
              </div> */}
            </div>
          </div>

          {/* <BackButton url={url} /> */}
        </div>
      </div>
    </div>
  );
}

export default CalendarItem
