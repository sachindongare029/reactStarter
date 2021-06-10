import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div className="container my-5">
        <h3 className="text-center">"The Home Page"</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Home);
