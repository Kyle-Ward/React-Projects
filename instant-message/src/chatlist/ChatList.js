import React from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import NotificationImportant from "@material-ui/icons/NotificationImportant";

const ChatListComponent = props => {
  const { classes } = props;

  const userIsSender = chat =>
    chat.messages[chat.messages.length - 1].sender === props.userEmail;

  if (props.chats.length > 0) {
    return (
      <main className={classes.root}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          className={classes.newChatBtn}
          onClick={props.newChatBtnFn}
        >
          New Message
        </Button>
        <List>
          {props.chats.map((_chat, _index) => {
            return (
              <div key={_index}>
                <ListItem
                  onClick={() => props.selectChatFn(_index)}
                  className={classes.listItem}
                  selected={props.selectedChatIndex === _index}
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp">
                      {
                        _chat.users
                          .filter(_user => _user !== props.userEmail)[0]
                          .split("")[0]
                      }
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      _chat.users.filter(_user => _user !== props.userEmail)[0]
                    }
                    secondary={
                      <React.Fragment>
                        <Typography component="span" color="textPrimary">
                          {_chat.messages[
                            _chat.messages.length - 1
                          ].message.substring(0, 30)}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  {_chat.receiverHasRead === false && !userIsSender(_chat) ? (
                    <ListItemIcon>
                      <NotificationImportant
                        className={classes.unreadMessage}
                      />
                    </ListItemIcon>
                  ) : null}
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      </main>
    );
  } else {
    return (
      <main className={classes.root}>
        <Button
          variant="contained"
          fullWidth
          color="primary"
          onClick={props.newChatBtnFn}
          className={classes.newChatBtn}
        >
          New Message
        </Button>
        <List />
      </main>
    );
  }
};

export default withStyles(styles)(ChatListComponent);
