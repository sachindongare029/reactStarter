import React from "react";
import { connect } from "react-redux";
import UploadList from "../../components/UploadLists/uploadList";

class UploadLists extends React.Component {
  render() {
    return (
      <div className="hl__container">
        <UploadList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(UploadLists);
