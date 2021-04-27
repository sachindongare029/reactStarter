import React, { Suspense, useEffect } from "react";
import {
  Router,
  Switch,
  Redirect,
  useLocation,
  useHistory,
  HashRouter,
} from "react-router-dom";
import history from "./History";
import * as LazyComponent from "../utils/LazyLoaded";
import Loader from "../components/Loader/Loader";
import PrivateRoute from "../utils/PrivateRoute";
import store from "../store";
import { setCurrentLang } from "../store/Lang/LangAction";
import Auth from "../utils/Auth";
// import Login from "../containers/Login/Login";
import Header from "../containers/Header";
import Footer from "../containers/Footer/Footer";
import { StateMachineProvider, createStore } from "little-state-machine";
import UploadLists from "../containers/UploadLists/UploadLists";

const Routes = ({ lang }) => {
  const location = useLocation();
  const History = useHistory();

  useEffect(() => {
    // store.dispatch(
    //   setCurrentLang(location.pathname.split("/")[1] === "en" ? "en" : "en")
    // );
  }, []);

  // useEffect(() => {
  //   const pathname = location.pathname.split("/");
  //   pathname[1] = pathname[1] === "en" ? "en" : "ar";
  //   const newPathname = pathname.join("/");
  //   // History.push(newPathname.replace(/en|ar/, lang));
  // }, [lang]);
  createStore({});
  var isbase = window.location.href.includes("/dash");
  return (
    <Suspense fallback={<Loader />}>
      <StateMachineProvider>
        <HashRouter history={history}>
          {!isbase ? <Header /> : ""}
          <Switch>
            <LazyComponent.NotFound path="/404" exact />
            <LazyComponent.Login path="/login" exact />
            <LazyComponent.Register path="/register" exact />
            <PrivateRoute component={LazyComponent.Dash} path="/dash" />
            <LazyComponent.ResetPassword path="/forgot-password" exact />
            <PrivateRoute exact path="/">
              <Redirect to="/login" />
            </PrivateRoute>
            <Redirect to="/404" />
          </Switch>
          <Footer />
        </HashRouter>
      </StateMachineProvider>
    </Suspense>
  );
};

export default Routes;
