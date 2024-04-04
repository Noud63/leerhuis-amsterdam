import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BackButton = (url) => {

  const id = parseInt(url.ID)
  
  const [path, setPath] = useState("");


  useEffect(() => {
    if (
      url.url.split("/").length === 2 ||
      url.url.split("/").length === 3
      // url.url.slice(0, -1) === "/calendaritem/" ||
      // url.url === "/allactivities" ||
      // url.url === "/aktueel" ||
      // url.url === "/overonspage" ||
      // url.url === "/contact" ||
      // url.url === "/subscriptionrules" ||
      // url.url === "/archief" ||
      // url.url === "/contactform" ||
      // url.url === "/contactpage" ||
      // url.url === "/"
    ) {
      setPath("/");
    }
    if (url.url.slice(0, 28) === "/allactivities/calendaritem/") {
      setPath("/allactivities");
    }
    if(url.url.slice(0, 22) === "/aktueel/calendaritem/"){
      setPath("/aktueel");
    }
    if (url.url.slice(0, 22) === "/archief/calendaritem/") {
      setPath("/archief");
    }
    if (url.url === `/subscribe/${url.id}`) {
      setPath(`/allactivities/calendaritem/${id - 1}`);
    }
  }, []);

  return (
    <div className="w-full flex justify-center mt-16">
      <Link to={path}>
        <button
          type="button"
          className="btn w-[150px] text-black font-semibold p-2 border-2 border-black rounded-full cursor-pointer"
        >
          Terug
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
