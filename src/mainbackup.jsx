// check all your route paths when using this route setup again!!

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./pages/Layout";
// import "./index.css";
// import Activities, { loader } from "./components/Activities";
// import Archief, { archiveLoader } from "./pages/Archief";
// import Root from "./components/Root";
// import CalendarItem from "./pages/CalendarItem";
// import AllActivities from "./pages/AllActivities";
// import OveronsPage from "./pages/OveronsPage";
// import ContactForm from "./pages/ContactForm";
// import ContactPage from "./pages/ContactPage";
// import Aktueel, { currentLoader } from "./components/Aktueel";
// import AktueelPage from "./pages/AktueelPage";
// import Subscribe from "./pages/Subscribe";
// import SubscriptionRules from "./pages/SubscriptionRules";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         loader: loader,
//         element: <Root />,
//       },
//       {
//         path: "/allactivities",
//         loader: loader,
//         element: <AllActivities />,
//       },
//       {
//         path: "/subscriptionRules",
//         element: <SubscriptionRules />,
//       },
//       {
//         path: "/overonspage",
//         element: <OveronsPage />,
//       },
//       {
//         path: "/calendaritem/:calendaritem_id",
//         element: <CalendarItem />,
//       },
//       {
//         path: "/allactivities/calendaritem/:calendaritem_id",
//         element: <CalendarItem />,
//       },
//       {
//         path: "/contactform",
//         element: <ContactForm />,
//       },
//       {
//         path: "/contactpage",
//         element: <ContactPage />,
//       },
//       {
//         path: "/aktueelpage",
//         loader: currentLoader,
//         element: <AktueelPage />,
//       },
//       {
//         path: "/aktueel/calendaritem/:calendaritem_id",
//         element: <CalendarItem />,
//       },
//       {
//         path: "/archief",
//         loader: archiveLoader,
//         element: <Archief />,
//       },
//       {
//         path: "/archief/calendarItem/:calendaritem_id",
//         element: <CalendarItem />,
//       },
//       {
//         path: "/subscribe/:id",
//         element: <Subscribe />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


// ------ NESTED ROUTES, CHILD ROUTES IN CHILD ROUTE ------ //

//Alternative

//  const router = createBrowserRouter([
//     {
//     path: "/",
//     element: <Layout />,
//     children: [
//        {
//         element: <Outlet />,
//         children: [
//           {
//             path: "/allactivities",
//             loader: loader,
//             element: <AllActivities />,
//           },
//           {
//             path: "/allactivities/calendaritem/:calendaritem_id",
//             element: <CalendarItem />,
//           },
//           {
//             path: "/allactivities/calendaritem/:calendaritem_id/subscribe/:id",
//             element: <Subscribe />,
//           },
//         ],
//         }
//        ]
//      }]

// Another alternative

//  const router = createBrowserRouter([
//     {
//     path: "/",
//     element: <Layout />,
//     children: [
//         {
//         path: "/layouthelp",
//         element: <LayoutHelp />,
//         children: [
//           {
//             path: "/layouthelp/allactivities",
//             loader: loader,
//             element: <AllActivities />,
//           },
//           {
//             path: "/layouthelp/allactivities/calendaritem/:calendaritem_id",
//             element: <CalendarItem />,
//           },
//           {
//             path: "/layouthelp/allactivities/calendaritem/:calendaritem_id/subscribe/:id",
//             element: <Subscribe />,
//           }
//         ]
//       }
//     ]
//   }]