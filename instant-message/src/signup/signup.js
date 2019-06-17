import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import styles from "./styles";
const firebase = require("firebase");

const SignupComponent = ({ classes, history }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirmation, setPasswordConfirmation] = useState(null);
  const [signupError, setSignupError] = useState("");

  const formIsValid = () => password === passwordConfirmation;

  const submitSignup = e => {
    e.preventDefault();
    if (!formIsValid()) {
      setSignupError("Passwords do not match!");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(
        authRes => {
          const userObj = {
            email: authRes.user.email
          };
          firebase
            .firestore()
            .collection("users")
            .doc(email)
            .set(userObj)
            .then(
              () => {
                history.push("/dashboard");
              },
              dbError => {
                console.log(dbError);
                setSignupError("Failed to add user");
              }
            );
        },
        authError => {
          console.log(authError);
          setSignupError("Failed to add user");
        }
      );
  };

  const userTyping = (type, e) => {
    switch (type) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "passwordConfirmation":
        setPasswordConfirmation(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up!
        </Typography>
        <form onSubmit={e => submitSignup(e)} className={classes.form}>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="signup-email-input">
              Enter Your Email
            </InputLabel>
            <Input
              autoComplete="email"
              onChange={e => userTyping("email", e)}
              autoFocus
              id="signup-email-input"
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="signup-password-input">
              Create A Password
            </InputLabel>
            <Input
              type="password"
              onChange={e => userTyping("password", e)}
              id="signup-password-input"
            />
          </FormControl>
          <FormControl required fullWidth margin="normal">
            <InputLabel htmlFor="signup-password-confirmation-input">
              Confirm Your Password
            </InputLabel>
            <Input
              type="password"
              onChange={e => userTyping("passwordConfirmation", e)}
              id="signup-password-confirmation-input"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
        {signupError ? (
          <Typography className={classes.errorText} component="h5" variant="h6">
            {signupError}
          </Typography>
        ) : null}
        <Typography
          component="h5"
          variant="h6"
          className={classes.hasAccountHeader}
        >
          Already Have An Account?
        </Typography>
        <Link className={classes.logInLink} to="/login">
          Log In!
        </Link>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(SignupComponent);
