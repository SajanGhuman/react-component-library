import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
//----------Default Styles------------//
  border-radius: 3px;
  padding: 10px;
  font-size: 30px;
  display: inline-block;
  border: none;
  border-radius: 1rem;
  min-width: 80px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
  transition: background-color 0.3s linear, color 0.3s linear;

  //-----------Disables Styles-----------------------//
  &:disabled {
    background-color: ${(props) => props.theme.disabled};
    color: ${(props) => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

`;

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
      aria-disabled={disabled ? true : undefined}
    >
      {text}
    </StyledButton>
  );
};

export default Button;