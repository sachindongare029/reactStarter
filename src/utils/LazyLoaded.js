import React from "react";

export const Home = React.lazy(() => import("../containers/Home/Home"));
export const Dash = React.lazy(() => import("../containers/Dash/Dash"));
export const UploadLists = React.lazy(() =>
  import("../containers/UploadLists/UploadLists")
);
export const ResetPassword = React.lazy(() =>
  import("../containers/ResetPasssword/ResetPassword")
);
export const Login = React.lazy(() => import("../containers/Login/Login"));
export const Register = React.lazy(() =>
  import("../containers/Register/Register")
);
export const NotFound = React.lazy(() =>
  import("../components/NotFound/NotFound")
);
