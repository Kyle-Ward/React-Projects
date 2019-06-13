import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const firebase = require("firebase");

const LoginComponent = ({ classes, history }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState("");
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     email: null,
  //     password: null,
  //     loginError: ""
  //   };
  // }

  const userTyping = (type, e) => {
    switch (type) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const submitLogin = e => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {
          history.push("./dashboard");
        },
        err => {
          setLoginError("Server Error");
          console.log(err);
        }
      );
  };

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In!
        </Typography>
        <form className={classes.form} onSubmit={e => submitLogin(e)}>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="login-email-input">
              Enter Your Email
            </InputLabel>
            <Input
              autoComplete="email"
              autoFocus
              id="login-email-input"
              onChange={e => userTyping("email", e)}
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="login-password-input">
              Enter Your Password
            </InputLabel>
            <Input
              type="password"
              id="login-password-input"
              onChange={e => userTyping("password", e)}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </form>
        {loginError ? (
          <Typography component="h5" variant="h6" className={classes.errorText}>
            Incorrect Login Information
          </Typography>
        ) : null}
        <Typography
          component="h5"
          variant="h6"
          className={classes.noAccountHeader}
        >
          Don't Have An Account?
        </Typography>
        <Link className={classes.signUpLink} to="/signup">
          Sign Up!
        </Link>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(LoginComponent);
