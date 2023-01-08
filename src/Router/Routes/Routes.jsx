import { createBrowserRouter } from "react-router-dom";
import Admin from "../../Components/Admin/Admin";

import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Packages from "../../Components/Packages/Packages";
import Schedule from "../../Components/Schedule/Schedule";
import Snap from "../../Components/Snap/Snap";
import Contact from "../../Components/Contact/Contact";
import Book from "../../Components/Book/Book";

// import Admin from "./Components/Admin/Admin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
    {
        path: "/about",
        element: <About></About>,
    },
    {
        path: "/packages",
        element: <Packages></Packages>,
    },
    {
        path: "/schedule",
        element: <Schedule></Schedule>,
    },
    {
        path: "/snap",
        element: <Snap></Snap>,
    },
    {
        path: "/contact",
        element: <Contact></Contact>,
    },
    {
        path: "/book",
        element: <Book></Book>
    }
]);

export default router;
