import React from "react";
// import messages from "./../../assets/Local/messages";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import "./index.scss";
import History from "../../routes/History";
// import Auth from "../../utils/Auth";

function Header(props) {
  // render() {
  // const { lang } = props;
  // const message = messages[lang];
  // console.log('window', window.location.href)
  var isbase = window.location.href.includes("/dash");
  function logout() {
    History.push("/login");
    // Auth.signOut();
  }
  return (
    <header className="container">
      <section className="top__section">
        <div>
          <Link to="/dash">
            <img src="" alt="company-logo" className="company-logo" />
          </Link>
        </div>
        <div className="right__sub--section">
          {isbase ? (
            <span>
              <span onClick={logout} className="login-btn btn">
                Logout
              </span>
            </span>
          ) : (
            <Link to="/login" className="login-btn btn">
              Log In
            </Link>
          )}
        </div>
      </section>
      {isbase ? (
        <section className="bottom__section">
          <ul>
            <li>
              <Link
                to={`/dash/upload-lists`}
                activeStyle={{ textDecoration: "underline" }}
              >
                Upload LIST
              </Link>
            </li>
            <li>
              <Link
                to={`/dash/home`}
                activeStyle={{ textDecoration: "underline" }}
              >
                List Bidding
              </Link>
            </li>
          </ul>
        </section>
      ) : (
        ""
      )}
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Header);
