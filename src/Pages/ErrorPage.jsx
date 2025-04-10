import { Link } from "react-router-dom";
import Navbar from "./Shared/Navbar";

const ErrorPage = () => {
  return (
    <div className="min-h-screen text-center">
      <Navbar />
      <img src="https://i.ibb.co/cXgBpsS/Frame.png" className="m-auto" />
      <Link className="btn btn-wide btn-ghost btn-outline my-10" to={'/'}>Go Home</Link>
    </div>
  );
};

export default ErrorPage;