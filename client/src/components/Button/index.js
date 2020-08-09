import React from "react";
import ButtonLib from "@material-ui/core/Button";

function Button(props) {
  return (
    <ButtonLib
      type={props.type}
      fullWidth={props.fullWidth}
      variant={props.variant}
      color={props.color}
      className={props.className}
    >
      {props.children}
    </ButtonLib>
  );
}

Button.defaultProps = {
  type: "button",
  fullWidth: false,
  variant: "contained",
  color: "primary",
  className: "",
};

export default Button;
