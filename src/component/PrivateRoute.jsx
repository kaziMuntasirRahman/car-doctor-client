import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <span className="flex justify-center items-center mx-auto loading loading-dots loading-lg scale-[4]" />
  }

  if (user) {
    return children;
  }

  else
    return (
      <Navigate state={location.pathname} to={'/signin'} replace />
    );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
}

export default PrivateRoute;