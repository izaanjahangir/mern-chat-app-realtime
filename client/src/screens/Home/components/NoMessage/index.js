import React from "react";

import Typography from "@material-ui/core/Typography";
import useStyles from "./style";

function NoMessage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography>Click on any person to start conversation</Typography>
    </div>
  );
}

export default NoMessage;
