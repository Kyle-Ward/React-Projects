import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Send from "@material-ui/icons/Send";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

const ChatTextBoxComponent = ({
  classes,
  userClickedInputFn,
  submitMessageFn
}) => {
  const [chatText, setChatText] = useState("");

  const messageValid = txt => txt && txt.replace(/\s/g, "").length;

  const submitMessage = () => {
    if (messageValid(chatText)) {
      submitMessageFn(chatText);
      document.getElementById("chattextbox").value = "";
    }
  };

  const userTyping = e =>
    e.keyCode === 13 ? submitMessage() : setChatText(e.target.value);

  return (
    <div className={classes.chatTextBoxContainer}>
      <TextField
        placeholder="Type your message..."
        onKeyUp={e => userTyping(e)}
        id="chattextbox"
        className={classes.chatTextBox}
        onFocus={userClickedInputFn}
      />
      <Send onClick={submitMessage} className={classes.sendBtn} />
    </div>
  );
};

export default withStyles(styles)(ChatTextBoxComponent);
