import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import './index.css'
import Activities, { loader } from "./components/Activities"
import Root from './components/Root';
import CalendarItem from './pages/CalendarItem';
import AllActivities from './pages/AllActivities';
import OveronsPage from "./pages/OveronsPage";
import Contact from './pages/Contact';
import Aktueel from './pages/Aktueel';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: loader,
        element: <Root />,
      },
      {
        path: "/allactivities",
        loader: loader,
        element: <AllActivities />,
      },
      {
        path: "/overonspage",
        element: <OveronsPage />,
      },
      {
        path: "/calendaritem/:id",
        element: <CalendarItem />,
      },
      {
        path: "/allactivities/calendaritem/:id",
        element: <CalendarItem />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/aktueel",
        element: <Aktueel />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
