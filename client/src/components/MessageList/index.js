import React from "react";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "../../components/Avatar";
import useStyles from "./style";

function MessageList() {
  const classes = useStyles();

  return (
    // <ListItem button>
    //   <div className={classes.avatarContainer}>
    //     <Avatar
    //       alt="username"
    //       src={require("../../assets/images/avatar.jpg")}
    //       className={classes.avatar}
    //     />
    //   </div>
    //   <div className={classes.userDetailsContainer}>

    //   </div>

    // </ListItem>
    <ListItem button>
      <ListItemAvatar>
        <Avatar
          alt="username"
          src={require("../../assets/images/avatar.jpg")}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography className={classes.username} variant="body1">
            Izaan jahangir
          </Typography>
        }
        secondary={
          <Typography className={classes.message} variant="caption">
            Izaan jahangir
          </Typography>
        }
      />
      <div>
        <Typography className={classes.message} variant="caption">
          09:00 am
        </Typography>
      </div>
    </ListItem>
  );
}

export default MessageList;
