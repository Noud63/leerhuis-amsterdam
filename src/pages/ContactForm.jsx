import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ringbinder from "../assets/images/ringbinder.png"
import BackButton from "../components/BackButton";
import { useLocation, useParams } from "react-router-dom";
import at from "../assets/icons/at.png"

const serviceId = import.meta.env.VITE_REACT_APP_LA_SERVICE_ID;
const templateId = import.meta.env.VITE_REACT_APP_LA_CONTACT_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_REACT_APP_LA_PUBLIC_KEY;

const ContactForm = () => {

   const url = useLocation().pathname;
   const {calendaritem_id, id} = useParams()
   

  const form = useRef();
  const [status, setStatus] = useState("Verstuur");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Wordt verzonden...");

    emailjs
      .sendForm(
        serviceId,
       templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result);
          setStatus("Verstuurd!");
          let timer = setTimeout(() => {
            setStatus("Verstuur");
            clearTimeout(timer);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
      
    form.current.reset();
  };

  return (
    <div
      className="w-full h-auto flex flex-col justify-center items-center mt-[190px] pr-8 pl-12 max-sm:pr-2 
    max-sm:pl-6 max-sm:mt-[160px] mb-20 max-xxsm:pl-2"
    >
      <div
        className="contact_form w-full h-auto max-w-[580px] flex flex-col justify-start items-center 
         bg-white px-16 pt-14 rounded-xl max-sm:px-4 relative mb-4 pb-16"
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
        <div
          className="contact_text w-full h-[100px] flex text-2xl text-white font-semibold justify-center items-center 
          bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 relative"
          >
          Laat een bericht achter
          <div className="absolute flex">
            <img src={at} alt="" className="w-[80px] opacity-30" />
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
          className="w-full"
        >
          <div className="w-full border-b border-t border-black mt-6">
            <label htmlFor="">Naam:</label>
            <input
              type="text"
              name="from_name"
              placeholder="Voornaam + achternaam"
              required
              className="py-4 placeholder:text-gray-500 pl-2"
            />
          </div>
          <div className="w-full border-b border-black">
            <label htmlFor="">Email:</label>
            <input
              type="email"
              name="from_email"
              placeholder="Geldig email adres"
              required
              className="py-4 placeholder:text-gray-500 pl-2"
            />
          </div>

          <div className="w-full border-b border-black mb-8">
            <label htmlFor="">Onderwerp:</label>
            <input
              type="text"
              name="from_subject"
              placeholder="Onderwerp"
              required
              className="py-4 placeholder:text-gray-500 pl-2"
            />
          </div>

          <div className="w-full mb-4 mt-4">
            <textarea
              name="message"
              placeholder="Hier je bericht...."
              required
              className="w-full bg-transparent h-[200px] border border-black p-2 placeholder:text-gray-500"
            />
          </div>
          <div className="w-full flex justify-center">
            <button
              type="submit"
              value="send"
              className="btn_orange w-full max-w-[160px] rounded-full py-3 text-white bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 mt-4"
            >
              {status}
            </button>
          </div>
        </form>
      </div>
      <BackButton url={url} />
    </div>
  );
};

export default ContactForm;
