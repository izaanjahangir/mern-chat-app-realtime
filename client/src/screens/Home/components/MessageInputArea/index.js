import React from "react";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

import Button from "../../../../components/Button";
import MessageInput from "../MessageInput";
import useStyles from "./style";

function MessageInputArea() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <MessageInput />
      <Button className={classes.button} color="primary" variant="text">
        <SendRoundedIcon />
      </Button>
    </div>
  );
}

export default MessageInputArea;
