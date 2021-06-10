import React, { Suspense } from "react";
import { Switch, Redirect, HashRouter } from "react-router-dom";
import * as LazyComponent from "../utils/LazyLoaded";
import Loader from "../components/Loader/Loader";
import PrivateRoute from "../utils/PrivateRoute";
import Header from "../containers/Header";
import Footer from "../containers/Footer/Footer";

const Routes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HashRouter>
        <Header />
        <Switch>
          <LazyComponent.NotFound path="/404" exact />
          <PrivateRoute component={LazyComponent.Dash} path="/" />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </HashRouter>
    </Suspense>
  );
};

export default Routes;
