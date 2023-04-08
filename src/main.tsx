import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Home /></App>,
  },
  {
    path: "about",
    element: <App><About /></App>,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
