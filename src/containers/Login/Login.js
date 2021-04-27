import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./../../scss/login.scss";
import { Btn } from "../../components/Controls/Button/Button";
import History from "../../routes/History";
import { Redirect } from "react-router-dom";
import Auth from "../../utils/Auth";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import {
  Paper,
  withStyles,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import UploadLists from "../UploadLists/UploadLists";

// import Floating from './Floating';
// React.forwardRef((props, ref)

function Login() {
  function handleLogin(data) {
    // console.log(data)
    // axios.post('http://abc/login', data).then(function (response) {
    //   console.log(response);
    //   if (response.status == 200) {
    //     console.log('succesfully logged in')
    //     History.push("/dash/upload-lists");
    //   }
    // }).catch(function (error) {
    //   setUserName('');
    //   setPassword('');
    //   alert('Something went wrong');
    // });
    History.push("/dash/upload-lists");
  }
  const { register, handleSubmit, errors, setValue, formState } = useForm();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="row login-page">
      <div className="col-sm-3"></div>
      <div className="col-sm-6">
        <div className="login-form__block">
          <form onSubmit={handleSubmit(handleLogin)} id="login-form">
            <div className="login-form-heading text-center">
              <h4>Log In</h4>
            </div>
            <div className="form-group  field-group login-form__username-block">
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <EmailIcon />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                  <TextField
                    id="Email"
                    label="Email"
                    type="email"
                    fullWidth
                    autoFocus
                    error={errors.Email && true}
                    name="Email"
                    inputRef={register({
                      required: true,
                      pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="flex-start">
                <Grid item xs={1}></Grid>

                <Grid item xs={11}>
                  {errors.Email && (
                    <p className="error-feild">This field is required</p>
                  )}
                </Grid>
              </Grid>
            </div>
            <div className="form-group  field-group login-form__password-block">
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <LockIcon />
                </Grid>
                <Grid item md={true} sm={true} xs={true}>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    name="Password"
                    inputRef={register({
                      required: true,
                    })}
                    error={errors.Password && true}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} alignItems="flex-start">
                <Grid item xs={1}></Grid>

                <Grid item xs={11}>
                  {errors.Password && (
                    <p className="error-feild">This field is required</p>
                  )}
                </Grid>
              </Grid>
            </div>

            <div className="login-form__submit">
              <button type="submit" className="btn btn-default">
                LOGIN
              </button>
            </div>
            <div className="login-form__links">
              <Link className="forgot-password" to="/forgot-password">
                Forgot Password?
              </Link>
            </div>
            <div className="login-form-heading text-center">
              <div>
                New To This Site?
                <strong>
                  <Link className="request-access" to="/register">
                    {" "}
                    Register
                  </Link>
                </strong>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-sm-3"></div>
    </div>
  );
}

export default Login;
