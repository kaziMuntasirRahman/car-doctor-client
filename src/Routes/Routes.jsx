import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import CheckOut from "../Pages/CheckOut";
import MyBookings from "../Pages/MyBookings";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "/checkout/:_id",
        loader: ({ params }) => fetch(`http://localhost:8000/services/${params._id}`),
        element: <CheckOut />
      },
      {
        path: "/mybookings/:email",
        loader: ({ params }) => fetch(`http://localhost:8000/bookings/${params.email}`),
        element: <MyBookings />
      }
    ]
  }
])

export default router;