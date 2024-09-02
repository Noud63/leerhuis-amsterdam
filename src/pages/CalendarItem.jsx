import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import activities from "../db.json";
import { Link, useLocation } from "react-router-dom";
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

  console.log(activities)
  
  const currentUrl = window.location.href

  const { calendaritem_id } = useParams()

  const [expired, setExpired] = useState(false)

  const url = useLocation().pathname;

  const item = activities.activities[calendaritem_id];
  const ID = item.itemId
  console.log("Id:", ID)

  const givenDate = new Date(item.closing_date).getTime() + 86400000;
  const now = new Date().getTime();
 
useEffect(()=> {
 if (givenDate <= now) {
    setExpired(true);
    console.log(expired);
 } else{
   setExpired(false);
 }
},[givenDate, now])


  return (
    <div className="w-full flex items-center flex-row max-calendar:h-auto">
      <div className="flex flex-1 pt-[180px] flex-col items-center max-calendar:mt-12 max-xsm:pt-[170px]">
        <div className="w-full max-w-[700px] mb-32 flex flex-col items-center px-2">
          <div className="w-full flex justify-start text-xl font-semibold mb-4 border-b border-black pb-2">
            #&nbsp;<span className="max-xxsm:hidden">Over&nbsp;</span>
            {Array.isArray(item.title) ? (
              <div>
                <span>{item.title[0]}</span>
                <span>{item.title[1]}</span>
              </div>
            ) : (
              <span>{item.title}</span>
            )}
          </div>

          <div className="calendar_item w-full rounded-t-2xl">
            <div className="bg-[#fff] text-[#000]  rounded-t-2xl pt-4 flex flex-col">
              {expired ? (
                <div className="flex justify-end font-bold mx-4">
                  <span className="text-2xl max-xsm:text-xl">
                    Inschrijving verlopen!
                  </span>
                </div>
              ) : (
                ""
              )}
              <div
                className="h-auto border-b border-[#000] gap-2 flex justify-between items-end font-semibold 
              font-papyrus mb-2 text-2xl py-2 mx-4 mt-4 overflow-hidden relative max-mini:text-xl"
              >
                <span>{item.title}</span>
                <div className="group">
                  <div className="flex flex-row gap-2 font-normal">
                    <span className="text-orange-600 font-sans text-lg max-xxsm:hidden">
                      Deel
                    </span>
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
                    <span key={index}>
                      {new Date(date).toLocaleDateString("nl-NL", {
                        month: "long",
                        day: "numeric",
                      })}
                      ,&nbsp;
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full pl-4 mb-2">
                {" "}
                <span className="font-bold">Tijd :</span>
                <br />
                {item.time}
              </div>
              <div className="w-full px-4">
                <span className="font-bold">Beschrijving : </span>
                <br />
                {item.card ? (
                  <>
                    <span className="whitespace-pre-line">
                      {item.description.slice(0, 70)}
                    </span>
                    <div>
                      <img
                        src={`/images/${item.card}`}
                        alt=""
                        className="mb-4"
                      />
                    </div>
                    <span className="whitespace-pre-line">
                      {item.description.slice(70, item.description.length)}
                    </span>
                  </>
                ) : (
                  <span>{item.description.map((line) => {
                    return (
                      <div className="flex flex-col">
                        <span>{line}</span>
                      </div>
                    );
                  })}</span>
                )}
              </div>

              <div className="w-full px-4 mb-2 mt-2">
                {" "}
                <span className="font-bold flex flex-wrap">O.l.v :</span>{" "}
                {item.led_by}
              </div>

              <div className="w-full px-4 mb-2">
                {" "}
                <span className="font-bold flex flex-wrap">Email :</span>{" "}
                {item.email}
              </div>

              {item.location && (
                <div className="w-full px-4 mb-2">
                  {" "}
                  <span className="font-bold flex flex-wrap">Lokatie :</span>
                  <span className="whitespace-pre-line text-orange-800 font-semibold">
                    {item.location}
                  </span>
                  <div className="mb-4 mt-2">
                    <img src="/images/muiderkerk.png" alt="" />
                  </div>
                </div>
              )}

              <div className="w-full px-4 mb-2 mt-2">
                {" "}
                <span className="font-bold flex flex-wrap">Bijdrage:</span>{" "}
                {item.contribution}
                <br />
                {!expired ? (
                  <span>
                    Voor betaalgegevens en het inschrijfformulier, klik
                    hieronder op "Schrijf je in".
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="w-full px-4">
                {" "}
                <span className="font-bold">Kenmerk :</span> {item.itemId}
              </div>

              <Link
                to={`subscribe/${item.itemId}`}
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
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <BackButton url={url} id={calendaritem_id} ID={item.itemId} />
        </div>
      </div>
    </div>
  );
}

export default CalendarItem
