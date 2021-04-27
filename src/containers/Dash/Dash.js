import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import { Nav } from "react-bootstrap";
import * as LazyComponent from "../../utils/LazyLoaded";
import PrivateRoute from "../../utils/PrivateRoute";
import Header from "../Header";

function Dash() {
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <div>
        <HashRouter>
          <Header />
          <Switch>
            {/* <Route exact path={path}>
              <LazyComponent.UploadLists />
            </Route> */}
            <PrivateRoute
              component={LazyComponent.UploadLists}
              path="/dash/upload-lists"
            />
            <PrivateRoute
              component={LazyComponent.Home}
              path="/dash/home"
            />
            <LazyComponent.NotFound path="/" />
          </Switch>
        </HashRouter>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Dash);
