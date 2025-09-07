import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/NavLink';

const router = createBrowserRouter(
  [
    {path: "/", element:<div><Navbar/><Home/></div>},
    {path: "/about", element: <div><Navbar/><About/></div>},
    {path: "/contact", element: <div><Navbar/><Contact/></div>},
  ]
)

function App(){
  return(
    <>
    <div><RouterProvider router={router}/></div>
    </>
  )
}

export default App;