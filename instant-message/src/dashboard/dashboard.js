import React from "react";
import ChatListComponent from "../chatlist/ChatList";
import { Button, withStyles } from "@material-ui/core";
import styles from "./styles";
import ChatViewComponent from "../chatview/ChatView";
import ChatTextBoxComponent from "../chattextbox/ChatTextBox";

const firebase = require("firebase");

class DashboardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: []
    };
  }

  selectChat = async chatIndex => {
    await this.setState({ selectedChat: chatIndex });
    this.messageRead();
  };

  newChatBtnClicked = () => {
    this.setState({ newChatFormVisible: true, selectedChat: null });
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(async _usr => {
      if (!_usr) this.props.history.push("/login");
      else {
        await firebase
          .firestore()
          .collection("chats")
          .where("users", "array-contains", _usr.email)
          .onSnapshot(async res => {
            const chats = res.docs.map(_doc => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats
            });
          });
      }
    });
  };

  signOut = () => firebase.auth().signOut();

  buildDocKey = friend => [this.state.email, friend].sort().join(":");

  submitMessage = msg => {
    const docKey = this.buildDocKey(
      this.state.chats[this.state.selectedChat].users.filter(
        _usr => _usr !== this.state.email
      )[0]
    );
    firebase
      .firestore()
      .collection("chats")
      .doc(docKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: msg,
          timestamp: Date.now()
        }),
        receiverHasRead: false
      });
  };

  clickedChatWhereNotSender = chatIndex =>
    this.state.chats[chatIndex].messages[
      this.state.chats[chatIndex].messages.length - 1
    ].sender !== this.state.email;

  messageRead = () => {
    const docKey = this.buildDocKey(
      this.state.chats[this.state.selectedChat].users.filter(
        _usr => _usr !== this.state.email
      )[0]
    );
    if (this.clickedChatWhereNotSender(this.state.selectedChat)) {
      firebase
        .firestore()
        .collection("chats")
        .doc(docKey)
        .update({ receiverHasRead: true });
    } else {
      console.log("Clicked message where user was sender");
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ChatListComponent
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}
        />
        {this.state.newChatFormVisible ? null : (
          <ChatViewComponent
            user={this.state.email}
            chat={this.state.chats[this.state.selectedChat]}
          />
        )}
        {this.state.selectedChat !== null && !this.state.newChatFormVisible ? (
          <ChatTextBoxComponent
            submitMessageFn={this.submitMessage}
            messageReadFn={this.messageRead}
          />
        ) : null}
        <Button className={classes.signOutBtn} onClick={this.signOut}>
          Sign Out
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(DashboardComponent);
