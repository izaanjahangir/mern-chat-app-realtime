import React from "react";

import useStyles from "./style";

function Loader() {
  const classes = useStyles();

  return (
    <img
      alt="loading"
      className={classes.loader}
      src={require("../../assets/icons/loading.gif")}
    />
  );
}

export default Loader;
