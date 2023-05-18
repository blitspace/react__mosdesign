import { createBrowserRouter } from "react-router-dom";

import App from './App';
import Home from './Pages/Home';
import News from './Pages/News';
import About from './Pages/About';
import Article from './Pages/Article';
import Brands from './Pages/Brands';
import Brand from './Pages/Brand';
import Error from './Pages/Error';


const routerDefault = {
    errorElement: <Error />,
};

 const browserRoute = createBrowserRouter([
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

export default browserRoute;
