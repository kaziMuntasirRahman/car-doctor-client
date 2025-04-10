import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import CheckOut from "../Pages/CheckOut";
import MyBookings from "../Pages/MyBookings";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../component/PrivateRoute";
import Service from "../Pages/Home/Service";
import Contact from "../Pages/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/services",
        element: <Service />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/checkout/:_id",
        loader: ({ params }) => fetch(`http://localhost:8000/services/${params._id}`),
        element: <PrivateRoute><CheckOut /></PrivateRoute>
      },
      {
        path: "/mybookings/:email",
        loader: ({ params }) => fetch(`http://localhost:8000/bookings/${params.email}`),
        element: <PrivateRoute><MyBookings /></PrivateRoute>
      }
    ]
  }
])

export default router;