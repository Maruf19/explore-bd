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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import Booked from "../../Components/Booked/Booked";
import AdminBooked from "../../Components/Admin/AdminBooked/AdminBooked";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/cart",
    element: (
      <PrivateRoute>
        <Cart />
      </PrivateRoute>
    ),
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
    path: "/booked",
    element: <Booked />,
  },

  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin/home",
        element: (
          <AdminRoute>
            <Admin />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/services",
        element: (
          <AdminRoute>
            <AdminSerivces />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/trip",
        element: (
          <AdminRoute>
            <Trip />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/about",
        element: (
          <AdminRoute>
            <AdminAbout />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/team",
        element: (
          <AdminRoute>
            {" "}
            <Team />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/packages",
        element: (
          <AdminRoute>
            <AdminPackage />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/schedule",
        element: (
          <AdminRoute>
            <AdminSchedule />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/snap",
        element: (
          <AdminRoute>
            <AdminSnap />
          </AdminRoute>
        ),
      },

      {
        path: "/admin/contact",
        element: (
          <AdminRoute>
            <AdminContact />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/upcomingTrip",
        element: (
          <AdminRoute>
            <UpcomingTrip />
          </AdminRoute>
        ),
      },

      {
        path: "/admin/snapPhotos",
        element: (
          <AdminRoute>
            <SnapPhotos />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/packageTrip",
        element: <PackageTrip />,
      },

      {
        path: "/admin/booked",
        element: <AdminBooked/>,
      },
    ],
  },
]);

export default router;
