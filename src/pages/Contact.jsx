import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ringbinder from "../assets/images/ringbinder.png"

const ContactUs = () => {

  const form = useRef();
  const [status, setStatus] = useState("Verstuur");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Aan het verzenden....");

    emailjs
      .sendForm(
        "service_uajwvyh",
        "template_7uflv8h",
        form.current,
        "user_hmFUVd309vqUiRXCpAWNG"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message successfully sent!");
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
    <div className="w-full flex justify-center mt-[190px] pr-8 pl-12 max-sm:pr-4 max-sm:pl-8">
      <div
        className="contact_form w-full max-w-[580px] flex flex-col justify-start items-center 
         bg-white px-16 pt-12 pb-16 mb-20 rounded-xl max-sm:px-4 relative"
      >
        <div className="absolute z-[999] -left-[30px] top-0 bottom-0">
          <img src={ringbinder} alt="" className="w-[40px] h-full" />
        </div>
        <div className="w-full flex text-2xl font-semibold justify-center text-black pb-6">
          Laat een bericht achter
        </div>
        <form ref={form} onSubmit={""} autoComplete="off" className="w-full">
          <div className="w-full border-b border-t border-black">
            <input
              type="text"
              name="naam"
              placeholder="Naam"
              required
              className="py-4 placeholder:text-gray-500 pl-2"
            />
          </div>
          <div className="w-full border-b border-black mb-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="py-4 placeholder:text-gray-500 pl-2"
            />
          </div>
          {/* <div className="w-full border-b border-black mb-2">
            <input
              type="text"
              name="kenmerk"
              placeholder="kenmerk"
              required
              className="bg-transparent py-4 placeholder:text-gray-500 pl-2"
            />
          </div> */}
          <div className="w-full mb-4 mt-4">
            <textarea
              name="bericht"
              placeholder="Hier je bericht...."
              required
              className="w-full bg-transparent h-[200px] border border-black p-2 placeholder:text-gray-500"
            />
          </div>
          <button
            type="submit"
            value="send"
            className="w-full bg-yellow-800 py-4 text-white bg-gradient-to-r from-yellow-950 via-yellow-800 to-yellow-950"
          >
            {status}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
