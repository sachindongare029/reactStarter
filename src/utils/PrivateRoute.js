import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { lang } = useSelector((state) => state);

  return (
    // <Route
    //   {...rest}
    //   render={props =>
    //     Auth.isAuth() ? <Component {...props} /> : <Redirect to={`/login`} />
    //   }
    // />
    <Route {...rest} render={(props) => <Component {...props} />} />
  );
};

export default PrivateRoute;
