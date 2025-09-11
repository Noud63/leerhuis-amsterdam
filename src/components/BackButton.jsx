import { useNavigate } from "react-router-dom";

const BackButton = ({ url }) => {
  
  const navigate = useNavigate();

  const arr = url.split("/");
  //Navigate back, remove last 2 elements from pathname array
  const newArr = arr.slice(1, -2).join(",").replace(/,/g, "/");
  let path = "/";
  if (!(arr.length === 2 || arr.length === 3)) {
    path = `/${newArr}`;
  }

  return (
    <div className="w-full flex justify-center mt-16">
      <button
        type="button"
        className="btn w-[150px] text-black font-semibold p-2 border-2 border-black rounded-full cursor-pointer"
        onClick={() => navigate(path)}
      >
        Terug
      </button>
    </div>
  );
};

export default BackButton;




// if (url.url === "/subscriptionrules/contactform") {
    //   setPath("/subscriptionrules");
    // }

    // if (url.url === `/allactivities/calendaritem/${id}`) {
    //   setPath("/allactivities");
    // }

    // if (url.url.slice(0, 22) === "/aktueel/calendaritem/") {
    //   setPath("/aktueelpage");
    // }

    // if (url.url === `/aktueel/calendaritem/${id}/subscribe/${ID}`) {
    //   setPath(`/aktueel/calendaritem/${id}`);
    // }

    // if (url.url.slice(0, 22) === "/archief/calendaritem/") {
    //   setPath("/archief");
    // }

    // if (url.url === `/allactivities/calendaritem/${id}/subscribe/${ID}`) {
    //   setPath(`/allactivities/calendaritem/${id}`);
    // }

    // if (url.url === `/polarisatiecalendaritem/${id}/subscribe/${ID}`) {
    //   setPath(`/polarisatiecalendaritem/${id}`);
    // }

    // if (
    //   url.url === `/allactivities/polarisatie/polarisatiecalendaritem/${id}`
    // ) {
    //   setPath(`/allactivities/polarisatie/`);
    // }

    // if (
    //   url.url ===
    //   `/allactivities/polarisatie/polarisatiecalendaritem/${id}/subscribe/${ID}`
    // ) {
    //   setPath(`/allactivities/polarisatie/polarisatiecalendaritem/${id}`);
    // }

    // if (
    //   url.url === `/polarisatie/polarisatiecalendaritem/${id}/subscribe/${ID}`
    // ) {
    //   setPath(`/allactivities/polarisatie/polarisatiecalendaritem/${id}`);
    // }

    // if (url.url === `/aktueel/calendaritem/${id}/subscribe/${ID}/contactform`) {
    //   setPath(`/aktueel/calendaritem/${id}/subscribe/${ID}`);
    // }

    // if (url.url === `/calendaritem/${id}/subscribe/${ID}/contactform`) {
    //   setPath(`/calendaritem/${id}/subscribe/${ID}`);
    // }

    // if (
    //   url.url ===
    //   `/allactivities/calendaritem/${id}/subscribe/${ID}/contactform`
    // ) {
    //   setPath(`/allactivities/calendaritem/${id}/subscribe/${ID}`);
    // }

    // if (url.url === `/calendaritem/${id}/subscribe/${ID}`) {
    //   setPath(`/calendaritem/${id}`);
    // }
