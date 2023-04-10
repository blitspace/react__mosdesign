import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App';
import Home from './Pages/Home';
import News from './Pages/News';
import About from './Pages/About';
import Article from './Pages/Article';
import Brands from './Pages/Brands';
import Brand from './Pages/Brand';
import Error from './Pages/Error';

import './index.css'

const queryClient = new QueryClient();

const theme = createTheme({
    palette: {
        primary: {
            main: '#ED3A3A',
        },
    },
});

const routerDefault = {
    errorElement: <Error />,
};

const router = createBrowserRouter([
    {
        ...routerDefault,
        path: "/",
        element: <App><Home /></App>,
    },
    {
        ...routerDefault,
        path: "about",
        element: <App><About /></App>,
    },
    {
        ...routerDefault,
        path: "news/",
        element: <App><News /></App>,
    },
    {
        ...routerDefault,
        path: "news/:page",
        element: <App><News /></App>,
    },
    {
        ...routerDefault,
        path: "article/:newsID",
        element: <App><Article /></App>,
    },
    {
        ...routerDefault,
        path: "brands",
        element: <App><Brands /></App>,
    },
    {
        ...routerDefault,
        path: "brands/:brandID",
        element: <App><Brand /></App>,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient} contextSharing={true}>
                <RouterProvider router={router} />
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
