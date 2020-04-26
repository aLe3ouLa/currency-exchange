import React from "react";
import { ButtonContainer } from "./button.styles";

const CustomButton = ({ isDisabled, onClick, children }) => {
  return (
    <ButtonContainer disabled={isDisabled} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default CustomButton;
