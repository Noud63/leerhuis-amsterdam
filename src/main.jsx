import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import './index.css'
import Activities, { loader } from "./components/Activities"
import Archief from "./pages/Archief"
import Root from './components/Root';
import CalendarItem from './pages/CalendarItem';
import AllActivities from './pages/AllActivities';
import OveronsPage from "./pages/OveronsPage";
import ContactForm from './pages/ContactForm';
import ContactPage from './pages/ContactPage';
import Aktueel from './pages/Aktueel';
import Subscribe from './pages/Subscribe';
import SubscriptionRules from './pages/SubscriptionRules';


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
        path: "/subscriptionRules",
        element: <SubscriptionRules />,
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
        path: "/contactform",
        element: <ContactForm />,
      },
      {
        path: "/contactpage",
        element: <ContactPage />,
      },
      {
        path: "/aktueel",
        element: <Aktueel />,
      },
      {
        path: "/aktueel/calendaritem/:id",
        element: <CalendarItem />,
      },
      {
        path: "/archief",
        // loader: loader2,
        element: <Archief />,
      },
      {
        path: "/archief/calendarItem/:id",
        element: <CalendarItem />,
      },
      {
        path: "/subscribe/:id",
        element: <Subscribe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
