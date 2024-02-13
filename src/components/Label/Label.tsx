import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  font-family: "Playfair Display", serif;
  cursor: pointer;
  color: ${(props) =>
    props.theme.textColor
  };
  ${(props) => props.disabled && `
    background-color: grey;
    cursor: not-allowed;
    color: #ccc;
  `}
`;

const Label: React.FC<LabelProps> = ({
  text,
  disabled = false,
  ...props
}) => {
  return (
    <StyledLabel
      disabled={disabled}
      {...props}
    >
      {text}
    </StyledLabel>
  );
}

export default Label;