import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-red-800 py-8 text-white gap-8">
      <span className="text-4xl">Oeps!</span>
      <p className="text-xl">Sorry, er ging iets mis.</p>
      <p>
        <i>Error --- "{error.statusText || error.message}"</i>
      </p>
    </div>
  );
}
