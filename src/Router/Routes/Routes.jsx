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
import UpcomingTrip from "../../Components/Admin/UpcomingTrip/UpcomingTrip";
import SnapPhotos from "../../Components/Admin/SnapPhotos/SnapPhotos";
import PackageTrip from "../../Components/Admin/PackageTrip/PackageTrip";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import Booked from "../../Components/Booked/Booked";
import AdminBooked from "../../Components/Admin/AdminBooked/AdminBooked";
import MakeAdmin from "../../Components/Admin/MakeAdmin/MakeAdmin";
import SuperAdmin from "../../Components/Admin/SuperAdmin/SuperAdmin";

import Editor from "../../Components/Admin/Editor/Editor";
import EditorLayout from "../../Components/Editor/EditorLayout/EditorLayout";
import EditorAbout from "../../Components/Editor/EditorAbout/EditorAbout";
import EditorBooked from "../../Components/Editor/EditorBooked/EditorBooked";
import EditorPackage from "../../Components/Editor/EditorPackage/EditorPackage";
import EditorPackageTrip from "../../Components/Editor/EditorPackageTrip/EditorPackageTrip";
import EditorTrip from "../../Components/Editor/EditorTrip/EditorTrip";
import EditorTeam from "../../Components/Editor/EditorTeam/EditorTeam";
import EditorSchedule from "../../Components/Editor/EditorSchedule/EditorSchedule";
import EditorServices from "../../Components/Editor/EditorServices/EditorSerivces";
import EditorSnapPhotos from "../../Components/Editor/EditorSnapPhotos/EditorSnapPhotos";
import EditorUpcomingTrip from "../../Components/Editor/EditorUpcomingTrip/EditorUpcomingTrip";
import EditorRoute from "../EditorRoute/EditorRoute";

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
    loader: () =>
      fetch("http://localhost:5000/admin/tripPackage"),
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
    element: (
      <PrivateRoute>
        <Feedback />
      </PrivateRoute>
    ),
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
        path: "/admin/MakeAdmin",
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/MakeAdmin",
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "/admin/MakeAdmin",
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
      },

              
      {
        path: "/admin/packageTrip",
        element: <PackageTrip />,
      },

      {
        path: "/admin/booked",
        element: <AdminBooked />,
      },

      {
        path: "/admin/superAdmin",
        element: <SuperAdmin />,
      },
      {
        path: "/admin/editor",
        element: <Editor />,
      },
    ],
  },

  {
    path: "/editor",
    element: (
      <EditorRoute>
        <EditorLayout />
      </EditorRoute>
    ),
    children: [
      {
        path: "/editor/home",
        element: (
          <EditorRoute>
            <Editor />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/about",
        element: (
          <EditorRoute>
            <EditorAbout />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/booked",
        element: (
          <EditorRoute>
            <EditorBooked />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/package",
        element: (
          <EditorRoute>
            <EditorPackage />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/packageTrip",
        element: (
          <EditorRoute>
            <EditorPackageTrip />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/schedule",
        element: (
          <EditorRoute>
            <EditorSchedule />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/services",
        element: (
          <EditorRoute>
            <EditorServices />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/snapPhotos",
        element: (
          <EditorRoute>
            <EditorSnapPhotos />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/team",
        element: (
          <EditorRoute>
            <EditorTeam />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/trip",
        element: (
          <EditorRoute>
            <EditorTrip />
          </EditorRoute>
        ),
      },

      {
        path: "/editor/editorUpcomingTrip",
        element: (
          <EditorRoute>
            <EditorUpcomingTrip />
          </EditorRoute>
        ),
      },
    ],
  },
]);

export default router;
