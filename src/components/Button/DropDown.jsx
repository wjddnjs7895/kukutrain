import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

export default function DropDown({ setType, setVisible, isVisible }) {
  return (
    <ContainerStyled isVisible={isVisible}>
      <ButtonStyled
        onClick={() => {
          setVisible(false);
          setType(0);
        }}
      >
        주류
      </ButtonStyled>
      <DividerStyled />
      <ButtonStyled
        onClick={() => {
          setVisible(false);
          setType(1);
        }}
      >
        안주류
      </ButtonStyled>
      <DividerStyled />
      <ButtonStyled
        onClick={() => {
          setVisible(false);
          setType(2);
        }}
      >
        소음 정도
      </ButtonStyled>
    </ContainerStyled>
  );
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const ContainerStyled = styled.div`
  width: ${getWidthPixel(105)};
  padding-top: ${getHeightPixel(5)};
  padding-bottom: ${getHeightPixel(30)};
  position: absolute;
  margin-bottom: ${getHeightPixel(120)};
  background-color: #7d7f8080;
  border-radius: ${getWidthPixel(16)};
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ isVisible }) => css`
    animation: ${isVisible ? fadeIn : fadeOut} 0.2s ease-out;
    transition: visibility 0.15s ease-out;
  `};
`;

const ButtonStyled = styled.button`
  color: white;
  width: ${getWidthPixel(105)};
  height: ${getHeightPixel(36)};
  font-size: ${getWidthPixel(14)};
  background-color: ${palette.none};
  border: 0px;
`;

const DividerStyled = styled.div`
  width: ${getWidthPixel(80)};
  height: 1px;
  border-radius: 1px;
  background-color: #ffffff80;
`;
