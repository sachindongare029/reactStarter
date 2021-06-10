import React from "react";
import { connect } from "react-redux";
import { NavLink as Link } from "react-router-dom";
import "./index.scss";

function Header() {
  return (
    <header className="container">
      <section className="top__section">
        <div>
          <Link to="/" replace>
            <img src="" alt="company-logo" className="company-logo" />
          </Link>
        </div>
        <div className="right__sub--section">hii</div>
      </section>
      <section className="bottom__section">
        <ul>
          <li>
            <Link
              to={`/home`}
              replace
              activeStyle={{ textDecoration: "underline" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`/upload-lists`}
              replace
              activeStyle={{ textDecoration: "underline" }}
            >
              Upload LIST
            </Link>
          </li>
        </ul>
      </section>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, null)(Header);
