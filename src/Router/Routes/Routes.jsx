import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Packages from "../../Components/Packages/Packages";
import Schedule from "../../Components/Schedule/Schedule";
import Snap from "../../Components/Snap/Snap";
import Contact from "../../Components/Contact/Contact";
import Book from "../../Components/Book/Book";
import AdminLayout from "../../Components/Admin/AdminLayout/AdminLayout";
import Admin from "../../Components/Admin/Admin/Admin";
import AdminSerivces from "../../Components/Admin/AdminServices/AdminSerivces";
import Trip from "../../Components/Admin/Trip/Trip";
import AdminAbout from "../../Components/Admin/AdminAbout/AdminAbout";
import Team from "../../Components/Admin/Team/Team";

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
    element: <Book></Book>,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/services",
        element: <AdminSerivces />,
      },
      {
        path: "/admin/trip",
        element: <Trip />,
      },
      {
        path: "/admin/about",
        element: <AdminAbout />,
      },
      {
        path: "/admin/team",
        element: <Team />,
      },
    ],
  },
]);

export default router;
