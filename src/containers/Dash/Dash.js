import React from "react";
import { connect } from "react-redux";
import { HashRouter, Switch, Redirect } from "react-router-dom";
import * as LazyComponent from "../../utils/LazyLoaded";
import PrivateRoute from "../../utils/PrivateRoute";

function Dash() {
  return (
    <div className="container">
      <div>
        <HashRouter>
          <Switch>
            <PrivateRoute exact path="/">
              <Redirect to="/home" />
            </PrivateRoute>
            <PrivateRoute component={LazyComponent.Home} path="/home" />
            <PrivateRoute
              component={LazyComponent.UploadLists}
              path="/upload-lists"
            />
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
