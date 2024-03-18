import React from "react";
import styled from "styled-components";
import { type HeroImageProps } from "./HeroImage.types";

const HeroImageContainer = styled.div<HeroImageProps>`
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  ${(props) =>
    props.disabled !== undefined &&
    props.disabled &&
    `
    cursor: not-allowed;
    background: none;
    background-color: darkgrey;
  `}
`;

const Title = styled.h1`
  color: #fff;
`;

const Subtitle = styled.h2`
  color: #fff;
`;

const CallToActionButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageurl,
  title,
  subtitle,
  Text,
  disabled = false,
  OnClick,
}) => {
  return (
    <HeroImageContainer imageurl={imageurl} disabled={disabled}>
      {title !== undefined && title.trim() !== "" && <Title>{title}</Title>}
      {subtitle !== undefined && subtitle.trim() !== "" && (
        <Subtitle>{subtitle}</Subtitle>
      )}
      {Text !== undefined && Text.trim() !== "" && (
        <CallToActionButton onClick={OnClick}>{Text}</CallToActionButton>
      )}
    </HeroImageContainer>
  );
};

export default HeroImage;
