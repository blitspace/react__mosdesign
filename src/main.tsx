import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import App from './App';
import News from './Pages/News';

import './index.css'

const queryClient = new QueryClient();

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
        action: () => queryClient.invalidateQueries({ queryKey: ['repoData'] }),
        // errorElement: <div>Oops! There was an error.</div>,
    },
    {
        path: "about",
        element: <App><About /></App>,
        action: () => queryClient.invalidateQueries({ queryKey: ['repoData'] }),
        // errorElement: <div>Oops! There was an error.</div>,
    },
    {
        path: "news",
        element: <App><News /></App>,
        action: () => queryClient.invalidateQueries({ queryKey: ['repoData'] }),
        // errorElement: <div>Oops! There was an error.</div>,
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
