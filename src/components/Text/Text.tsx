import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.span<TextProps>`
  font-family: "Playfair Display", serif;
  ${(props) =>
    props.disabled &&
    `
    background-color: grey;
    cursor: not-allowed;
    color: #ccc;
  `}
`;

const Text: React.FC<TextProps> = ({ types = "paragraph", text, ...props }) => {
  return (
    <StyledText types={types} {...props}>
      {text}
    </StyledText>
  );
};

export default Text;
