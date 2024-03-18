import React from 'react'
import styled from 'styled-components'
import { type HeroImageProps } from './HeroImage.types'

const HeroImageContainer = styled.div<HeroImageProps>`
  background-image: url(${(props) => props.imageUrl});
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
`

const Title = styled.h1`
  color: #fff;
`

const Subtitle = styled.h2`
  color: #fff;
`

const CallToActionButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  cursor: pointer;
`

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  subtitle,
  Text,
  disabled = false,
  OnClick,
}) => {
  return (
    <HeroImageContainer imageUrl={imageUrl} disabled={disabled}>
      {title ?? (false && <Title>{title}</Title>)}
      {subtitle ?? (false && <Subtitle>{subtitle}</Subtitle>)}
      {Text ??
        (false && (
          <CallToActionButton onClick={OnClick}>{Text}</CallToActionButton>
        ))}
    </HeroImageContainer>
  )
}

export default HeroImage
