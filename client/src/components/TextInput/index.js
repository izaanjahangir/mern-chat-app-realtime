import React from "react";
import TextFieldLib from "@material-ui/core/TextField";

function TextInput(props) {
  return (
    <TextFieldLib
      variant={props.variant}
      margin={props.margin}
      required={props.required}
      fullWidth={props.fullWidth}
      name={props.name}
      label={props.label}
      type={props.type}
      id={props.id}
      autoComplete={props.autoComplete}
    />
  );
}

TextInput.defaultProps = {
  variant: "outlined",
  required: false,
  fullWidth: true,
  label: "",
  type: "text",
};

export default TextInput;
