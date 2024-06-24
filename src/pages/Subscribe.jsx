import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ringbinder from "../assets/images/ringbinder.png";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import pen from "../assets/icons/pen.png"
import qrcode from "../assets/icons/qrcode.png"
import activities from "../db.json"

const serviceId = import.meta.env.VITE_REACT_APP_LA_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_LA_INSCHRIJVING_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_REACT_APP_LA_PUBLIC_KEY;


const Subscribe = () => {
  
  const form = useRef();

  const [status, setStatus] = useState("Verstuur");
  const [message, setMessage] = useState("");

  const { calendaritem_id, id } = useParams();
  console.log(useParams())

  const title = activities.activities[calendaritem_id].title;
  
  const url = useLocation().pathname;
  
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Aan het verzenden....");

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setStatus("Succesvol verstuurd!");
        setMessage("Bedankt voor je inschrijving!");
        let timer = setTimeout(() => {
          setStatus("Verstuur");
          setMessage("");
          navigate("/");
          clearTimeout(timer);
        }, 3000);
      },
      (error) => {
        console.log(error.text);
      }
    );

    form.current.reset();
  };

  return (
    <div className="w-full h-auto flex justify-center flex-col mt-[190px] pr-8 pl-12 max-sm:pr-2 max-sm:pl-6 max-sm:mt-[160px] pb-20 max-xxsm:pl-2">
      <div
        className="contact_form h-auto w-full max-w-[580px] mx-auto flex flex-col justify-start items-center 
         bg-white px-16 py-12 rounded-xl max-sm:px-4 relative"
      >
        <div className="absolute w-[40px] z-[999] -left-[30px] top-0 bottom-0 max-sm:-left-[20px] overflow-hidden max-xxsm:hidden">
          <img
            src={ringbinder}
            alt=""
            className="max-sm:w-[30px] max-sm:h-auto"
          />
          <img
            src={ringbinder}
            alt=""
            className="max-sm:w-[30px] max-sm:h-auto"
          />
        </div>
        <div className="w-full flex flex-col items-center justify-center text-black">
          <div
            className="w-full h-[100px] text-2xl font-semibold text-white flex justify-center items-center
          bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 relative tracking-wider overflow-hidden"
          >
            <span className="subscribe z-10">Inschrijving</span>
            <div className="absolute -right-12 bottom-4 max-xxsm:-right-20">
              <img src={pen} alt="" className="w-[180px] opacity-80" />
            </div>
          </div>

          {id !== "LA-AC01" ? (
            <div className="w-full text-[16px] justify-start my-4">
              <div className="w-full pb-2 text-2xl font-semibold mt-2 mb-4 border-b border-black font-papyrus">
                {title}
              </div>
              <span className="tracking-wide ">
                Iedere cursusavond kost 5 euro, tenzij anders vermeld.
                <br />
                zoomgroepen zijn gratis. <br />
                Voor wie de eigen bijdragen te hoog is, laat het ons weten,
                stuur een{" "}
                <Link to={`${url}/contactform`}>
                  <span className="text-lg text-red-800 font-semibold underline">
                    mail.
                  </span>
                </Link>
                <br />
                Betalen kan per bank. Maak €5,- per cursusavond over op
                rekeningnummer:
                <br />
              </span>
              <span className="font-semibold">
                NL&nbsp;32&nbsp;INGB&nbsp;0000449815 t.n.v. PROTESTANTSE
                GEMEENTE IN ZAKE T&E
              </span>
              <br />
              <span>Vermeld hierbij het kenmerk van de activiteit.</span>
            </div>
          ) : (
            <div className="w-full justify-start mt-6 mb-4">
              <div className="w-full pb-2 mb-2 text-2xl font-semibold border-b border-black max-xxxsm:text-xl">
                {title}
              </div>
              <span className="font-semibold">Eigen bijdrage: </span>Vrijwillig
              (Scan QR-Code)
              <div className="w-full justify-center">
                <img src={qrcode} alt="" className="w-[200px] mx-auto" />
              </div>
            </div>
          )}
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
          className="w-full"
          >
          <div className="w-full border-b border-t border-black">
            <label htmlFor="name">Naam:</label>
            <input
              id="name"
              type="text"
              name="from_name"
              placeholder="voornaam en achternaam"
              required
              className="py-4 pl-2"
            />
          </div>
          <div className="w-full border-b border-black mb-2">
            <label htmlFor="e-mail">Email:</label>
            <input
              id="e-mail"
              type="email"
              name="from_email"
              placeholder="geldig emailadres"
              required
              className="py-4 pl-2"
            />
          </div>
          <div className="w-full border-b border-black mb-2">
            <label htmlFor="partake">Datum:</label>
            <input
              id="partake"
              type="text"
              name="date"
              placeholder="deelname datum"
              required
              className="py-4 pl-2"
            />
          </div>
          <div className="w-full border-b border-black mb-2">
            <label htmlFor="kenmerk">Kenmerk:</label>
            <input
              id="kenmerk"
              type="text"
              name="from_kenmerk"
              defaultValue={id}
              required
              className="w-[80px] bg-transparent py-4 pl-2"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              value="send"
              className="btn_orange w-[180px] rounded-full bg-yellow-800 py-3 text-white bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 mt-8"
            >
              {status}
            </button>
          </div>
          <div className="w-full flex justify-center text-lg mt-4">
            {message}
          </div>
        </form>
      </div>
      <BackButton url={url} id={calendaritem_id} ID={id} />
    </div>
  );
};

export default Subscribe;
