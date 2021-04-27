import React from "react";
import { connect } from "react-redux";
import "./../../scss/login.scss";

function ResetPassword() {
  return <div className="row resetPassword">Reset Pass</div>;
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(ResetPassword);
