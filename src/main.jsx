import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import './index.css'
import Activities, { loader } from "./components/Activities"
import Root from './components/Root';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: loader,
        element: <Root/>
      }
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
