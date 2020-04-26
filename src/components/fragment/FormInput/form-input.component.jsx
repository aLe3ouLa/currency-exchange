import React from "react";

import { Input, Sign } from "./form-input.styles";

const FormInput = ({
  name,
  value,
  onChange,
  disabled,
  isFromValue,
  isZero,
}) => {
  return (
    <React.Fragment>
      <Sign>{value ? (isFromValue ? `-` : `+`) : ""}</Sign>
      <Input
        isZero={isZero}
        name={name}
        value={value}
        placeholder="0"
        onChange={onChange}
        disabled={disabled}
        autoComplete="off"
      />
    </React.Fragment>
  );
};
export default FormInput;
