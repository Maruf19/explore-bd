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
import AdminPackage from "../../Components/Admin/AdminPackage/AdminPackage";
import AdminSchedule from "../../Components/Admin/AdminSchedule/AdminSchedule";
import AdminSnap from "../../Components/Admin/AdminSnap/AdminSnap";
import Feedback from "../../Components/Feedback/Feedback";
import Login from "../../Components/Login/Login";
import Cart from "../../Components/Cart/Cart";
import Register from "../../Components/Register/Register";
import AdminContact from "../../Components/Admin/AdminContact/AdminContact";
import UpcomingTrip from "../../Components/Admin/UpcomingTrip/UpcomingTrip";
import SnapPhotos from "../../Components/Admin/SnapPhotos/SnapPhotos";
import PackageTrip from "../../Components/Admin/PackageTrip/PackageTrip";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/packages",
    element: <Packages></Packages>,
    loader: () => fetch("http://localhost:5000/admin/tripPackage"),
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
    path: "/feedback",
    element: <Feedback />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/home",
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
      {
        path: "/admin/packages",
        element: <AdminPackage />,
      },
      {
        path: "/admin/schedule",
        element: <AdminSchedule />,
      },
      {
        path: "/admin/snap",
        element: <AdminSnap />,
      },

      {
        path: "/admin/contact",
        element: <AdminContact />,
      },
      {
        path: "/admin/upcomingTrip",
        element: <UpcomingTrip />,
      },

      {
        path: "/admin/snapPhotos",
        element: <SnapPhotos />,
      },
      {
        path: "/admin/packageTrip",
        element: <PackageTrip />,
      },
    ],
  },
]);

export default router;
