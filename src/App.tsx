import './App.css'
import Footer from './Footer'
import About from './Pages/About';
import Home from './Pages/Home';
import TopBar from './TopBar'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);


function App() {
  return (
    <div className="App">
      <TopBar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
