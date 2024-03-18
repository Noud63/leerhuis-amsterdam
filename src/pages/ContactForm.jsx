import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ringbinder from "../assets/images/ringbinder.png"

const serviceId =  import.meta.env.VITE_REACT_APP_MY_SERVICE_ID;
const templateId =  import.meta.env.VITE_REACT_APP_MY_TEMPLATE_ID_2;
const publicKey=  import.meta.env.VITE_REACT_APP_MY_PUBLIC_KEY;

const ContactForm = () => {

  const form = useRef();
  const [status, setStatus] = useState("Verstuur");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Aan het verzenden....");

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
          setStatus("Succesvol verstuurd!");
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
    <div className="w-full min-h-screen flex justify-center mt-[190px] pr-8 pl-12 max-sm:pr-2 max-sm:pl-6 max-sm:mt-[160px]">
      <div
        className="contact_form w-full h-[600px] max-w-[580px] flex flex-col justify-start items-center 
         bg-white px-16 pt-12 rounded-xl max-sm:px-4 relative"
      >
        <div className="absolute z-[999] -left-[30px] top-0 bottom-0 max-sm:-left-[20px] overflow-hidden">
          <img
            src={ringbinder}
            alt=""
            className="w-[40px] h-full max-sm:w-[30px] max-sm:h-auto"
          />
          <img
            src={ringbinder}
            alt=""
            className="w-[40px] h-full max-sm:w-[30px] max-sm:h-auto"
          />
        </div>
        <div className="w-full flex text-2xl font-semibold justify-center text-black pb-6">
          Laat een bericht achter
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
          className="w-full"
        >
          <div className="w-full border-b border-t border-black">
            <input
              type="text"
              name="from_name"
              placeholder="Naam"
              required
              className="py-4 placeholder:text-gray-500 pl-2"
            />
          </div>
          <div className="w-full border-b border-black mb-2">
            <input
              type="email"
              name="from_email"
              placeholder="Email"
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
              className="w-full max-w-[180px] rounded-full py-3 text-white bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 mt-4"
            >
              {status}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
