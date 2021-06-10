import React from "react";
import { HashRouter } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import { IntlProvider } from "react-intl";
import messages from "../assets/Local/messages";
import { MaterialSnackbar } from "../components/Snackbar/Snackbar";
import Loader from "../components/Loader/Loader";
import "./App.scss";
import { connect } from "react-redux";
import { setCurrentLang } from "../store/Lang/LangAction";

class App extends React.Component {
  render() {
    const { lang, loading } = this.props;
    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div
          className={lang === "ar" ? "rtl" : "ltr"}
          dir={lang === "ar" ? "rtl" : "ltr"}
        >
          {loading ? <Loader /> : null}
          <HashRouter>
            <MaterialSnackbar />
            <Routes lang={lang} />
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
