import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  Paper,
  withStyles,
  CssBaseline,
  Typography
} from "@material-ui/core";
import styles from "./styles";

const firebase = require("firebase");

const NewChatComponent = ({ classes, goToChatFn, newChatSubmitFn }) => {
  const [username, setUsername] = useState(null);
  const [message, setMessage] = useState(null);

  const userTyping = (type, e) => {
    switch (type) {
      case "username":
        setUsername(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };

  newChatSubmitFn({
    sendTo: username,
    message: message
  });

  const buildDocKey = () => {
    return [firebase.auth().currentUser.email, username].sort().join(":");
  };

  goToChatFn(buildDocKey(), message);

  const doesChatExists = async () => {
    const docKey = buildDocKey();
    const chat = await firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .get();
    console.log(chat.exists);
    return chat.exists;
  };

  const doesUserExists = async () => {
    const usersSnapshot = await firebase
      .firestore()
      .collection("users")
      .get();
    const exists = usersSnapshot.docs
      .map(_doc => _doc.data().email)
      .includes(username);
    // this.setState({ serverError: !exists });
    return exists;
  };

  const submitNewChat = async e => {
    e.preventDefault();
    const userExists = await doesUserExists();
    if (userExists) {
      const chatExists = await doesChatExists();
      chatExists ? goToChatFn() : newChatSubmitFn();
    }
  };

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Send A Message!
        </Typography>
        <form className={classes.form} onSubmit={e => submitNewChat(e)}>
          <FormControl fullWidth>
            <InputLabel htmlFor="new-chat-username">
              Enter Your Friend's Email
            </InputLabel>
            <Input
              required
              className={classes.input}
              autoFocus
              onChange={e => userTyping("username", e)}
              id="new-chat-username"
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="new-chat-message">
              Enter Your Message>
            </InputLabel>
            <Input
              required
              className={classes.input}
              onChange={e => userTyping("message", e)}
              id="new-chat-message"
            />
          </FormControl>
          <Button
            fullWidth
            className={classes.submit}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </main>
  );
};

export default withStyles(styles)(NewChatComponent);
