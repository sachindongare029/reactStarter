import React from "react";

export const Home = React.lazy(() => import("../containers/Home/Home"));
export const Dash = React.lazy(() => import("../containers/Dash/Dash"));
export const UploadLists = React.lazy(() =>
  import("../containers/UploadLists/UploadLists")
);
export const NotFound = React.lazy(() =>
  import("../components/NotFound/NotFound")
);
