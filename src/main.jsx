import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout"
import './index.css'
import Activities, { rootLoader } from "./components/Activities"
import Archief, {archiveLoader} from "./pages/Archief"
import Root from './components/Root';
import CalendarItem from './pages/CalendarItem';
//import {AllActivities, allActivitiesLoader } from './pages/AllActivities';
import OveronsPage from "./pages/OveronsPage";
import ContactForm from './pages/ContactForm';
import ContactPage from './pages/ContactPage';
import Polarisatie from "./pages/Polarisatie";
import PolarisatieCalendarItem from "./pages/PolarisatieCalenderItem"
import Aktueel from './components/Aktueel';
import ZakelijkPage from './pages/ZakelijkPage';
import AktueelPage, { currentLoader } from "./pages/AktueelPage";
import Subscribe from './pages/Subscribe';
import AllActivitiesLayout from './pages/AllActivitiesLayout';
import SubscriptionRules from './pages/SubscriptionRules';
import ErrorPage from './pages/ErrorPage';
import { Outlet } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: rootLoader,
        element: <Root />,
      },
      {
        element: <AllActivitiesLayout />,
        children: [
          {
            path: "/allactivities",
            async lazy() {
              let { AllActivities, allActivitiesLoader } = await import(
                "./pages/AllActivities"
              );
              return {
                Component: AllActivities,
                loader: allActivitiesLoader,
              };
            },
          },
          {
            path: "/allactivities/calendaritem/:calendaritem_id",
            element: <CalendarItem />,
          },
          {
            path: "/allactivities/calendaritem/:calendaritem_id/subscribe/:id",
            element: <Subscribe />,
          },
          {
            path: "/allactivities/calendaritem/:calendaritem_id/subscribe/:id/contactform",
            element: <ContactForm />,
          },
          {
            path: "/allactivities/polarisatie",
            element: <Polarisatie />,
          },
          {
            path: "/polarisatiecalendaritem/:calendaritem_id",
            element: <PolarisatieCalendarItem />,
          },
          {
            path: "/polarisatiecalendaritem/:calendaritem_id/subscribe/:id",
            element: <Subscribe />,
          },
          {
            path: "/allactivities/polarisatie/polarisatiecalendaritem/:calendaritem_id",
            element: <PolarisatieCalendarItem />,
          },
          {
            path: "/allactivities/polarisatie/polarisatiecalendaritem/:calendaritem_id/subscribe/:id",
            element: <Subscribe />,
          },
        ],
      },

      {
        element: <Outlet />,
        children: [
          {
            path: "/subscriptionrules",
            element: <SubscriptionRules />,
          },
          {
            path: "subscriptionrules/contactform",
            element: <ContactForm />,
          },
        ],
      },
      {
        path: "/overonspage",
        element: <OveronsPage />,
      },
      {
        path: "/calendaritem/:calendaritem_id",
        element: <CalendarItem />,
      },
      {
        path: "/calendaritem/:calendaritem_id/subscribe/:id",
        element: <Subscribe />,
      },
      {
        path: "/calendaritem/:calendaritem_id/subscribe/:id/contactform",
        element: <ContactForm />,
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
        path: "/zakelijkpage",
        element: <ZakelijkPage />,
      },
      {
        path: "/aktueelpage",
        loader: currentLoader,
        element: <AktueelPage />,
      },
      {
        path: "/aktueelpage/calendaritem/:calendaritem_id",
        element: <CalendarItem />,
      },
      {
        path: "/aktueelpage/calendarItem/:calendaritem_id/subscribe/:id",
        element: <Subscribe />,
      },
      {
        path: "/aktueelpage/calendarItem/:calendaritem_id/subscribe/:id/contactform",
        element: <ContactForm />,
      },
      {
        path: "/archief",
        loader: archiveLoader,
        element: <Archief />,
      },
      {
        path: "/archief/calendarItem/:calendaritem_id",
        element: <CalendarItem />,
      },
      {
        path: "/polarisatie",
        element: <Polarisatie />,
      },
      {
        path: "/polarisatie/polarisatiecalendaritem/:calendaritem_id",
        element: <PolarisatieCalendarItem />,
      },
      {
        path: "/polarisatie/polarisatiecalendaritem/:calendaritem_id/subscribe/:id",
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
