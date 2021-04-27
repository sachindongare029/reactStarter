import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { HashRouter, Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import { IntlProvider } from "react-intl";
import messages from "../assets/Local/messages";
import { MaterialSnackbar } from "../components/Snackbar/Snackbar";
import Loader from "../components/Loader/Loader";
import "./App.scss";
import { connect } from "react-redux";
import { setCurrentLang } from "../store/Lang/LangAction";
import Login from "./Login/Login";

class App extends React.Component {
  render() {
    const { lang, loading } = this.props;
    console.log('lang',lang);
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div
          className={lang === "ar" ? "rtl" : "ltr"}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {loading ? <Loader /> : null}
          <HashRouter history={history}>
            <MaterialSnackbar />
             {/* <Navbar /> */}
            <Routes lang={lang} />
            {/* {<Login />} */}
          </HashRouter>
        </div>
      </IntlProvider>
    );
  }
}

const mapStateToProps = ({ lang, loading }) => ({
  lang,
  loading,
});

export default connect(mapStateToProps, { setCurrentLang })(App);
