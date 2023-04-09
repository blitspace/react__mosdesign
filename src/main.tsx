import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import App from './App';
import News from './Pages/News';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ED3A3A',
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App><Home /></App>,
  },
  {
    path: "about",
    element: <App><About /></App>,
  },
  {
    path: "news",
    element: <App><News /></App>,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
