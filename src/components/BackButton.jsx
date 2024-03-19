import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BackButton = (url) => {

  const [path, setPath] = useState("");

  useEffect(() => {
    if (
      url.url.slice(0, -1) === "/calendaritem/" ||
      url.url === "/allactivities" ||
      url.url === "/aktueel" || 
      url.url === "/overonspage" || 
      url.url === "/contact" ||
      url.url === "/"
    ) {
      setPath("/");
    }
    if (url.url.slice(0, 28) === "/allactivities/calendaritem/") {
      setPath("/allactivities");
    }
    if(url.url.slice(0, 22) === "/aktueel/calendaritem/"){
      setPath("/aktueel");
    }
  }, [path]);

  return (
    <div className="w-full flex justify-center mt-16">
      <Link to={path}>
        <button
          type="button"
          className="btn w-[150px] text-black font-semibold p-2 border-2 border-gray-400 rounded-full cursor-pointer"
        >
          Terug
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
