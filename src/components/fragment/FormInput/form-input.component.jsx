import React from "react";

import { Input, Sign } from "./form-input.styles";

const convert = (number) => {
  const decimal = (number.toString().split(".")[1] || []).length;
  return decimal > 2 ? Number(number).toFixed(2) : number;
};

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
        value={convert(value)}
        placeholder="0"
        onChange={onChange}
        disabled={disabled}
        autoComplete="off"
      />
    </React.Fragment>
  );
};
export default FormInput;
