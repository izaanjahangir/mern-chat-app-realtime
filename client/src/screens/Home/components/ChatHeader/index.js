import React from "react";
import useStyles from "./style";

function ChatHeader() {
  const classes = useStyles();

  return <div className={classes.headerContainer}></div>;
}

export default ChatHeader;
