import React from "react";
import AvatarLib from "@material-ui/core/Avatar";

import useStyles from "./style";

function Avatar(props) {
  const classes = useStyles();

  return (
    <AvatarLib alt={props.alt} src={props.image} className={classes.avatar} />
  );
}

Avatar.defaultProps = {
  alt: "avatar",
  image: require("../../assets/images/avatar.jpg"),
};

export default Avatar;
