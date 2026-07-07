import { useNavigate } from "react-router-dom";

const BackButton = ({ url }) => {
  
  const navigate = useNavigate();

  const arr = url.split("/");

  console.log("BackButton array:", arr)
 
  //Navigate back, remove last 2 elements from pathname array
  const newArr = arr.slice(1, -2).join(",").replace(/,/g, "/");

  console.log("New array:", newArr)

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




