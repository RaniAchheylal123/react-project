import './App.css'
import Rani from './Components/R';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/NavLink';   // ✅ Corrected import

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Navbar/><Home/></div>
  },
  {
    path: "/about",
    element: <div><Navbar/><About/></div>
  },
  {
    path: "/contact",
    element: <div><Navbar/><Contact/></div>
  },
]);

function App(){
  return (
    <>
      <Rani/>  {/* will show on all pages */}
      {/* <RouterProvider router={router}/> */}
    </>
  )
}

export default App;
