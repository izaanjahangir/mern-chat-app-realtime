import React from "react";

import useStyles from "./style";

function MessageInput() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <input placeholder="Enter your message" className={classes.input} />
    </div>
  );
}

export default MessageInput;
