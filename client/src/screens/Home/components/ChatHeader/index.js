import React from "react";
import Typography from "@material-ui/core/Typography";

import Avatar from "../../../../components/Avatar";
import useStyles from "./style";

function ChatHeader() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Avatar />
      <Typography className={classes.username} variant="subtitle1">
        Izaan jahangir
      </Typography>
    </div>
  );
}

export default ChatHeader;
