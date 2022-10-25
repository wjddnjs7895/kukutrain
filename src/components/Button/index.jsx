import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

import { palette } from '../../constants/palette';
import Blank from '../Blank';

export default function Button({ idx, text, isSelected, onClick, children }) {
  return (
    <ContainerStyled>
      {isSelected ? <BarStyled idx={idx} /> : <GrayBarStyled />}
      <ButtonStyled buttonColor={isSelected ? palette.crimson : palette.gray} onClick={onClick}>
        {children}
        <Blank width={getWidthPixel(10)} />
        {text}
      </ButtonStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  height: ${getHeightPixel(65)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BarStyled = styled.div`
  border-radius: 2;
  border: 1px solid ${palette.crimson};
  width: ${getWidthPixel(42)};
  ${({ idx }) => css`
    animation: ${idx === 0 ? moveLeft : moveRight} 0.7s ease-in-out;
    transition: visibility 0.7s ease-in-out;
  `}
`;

const GrayBarStyled = styled.div`
  border-radius: 2;
  border: 1px solid ${palette.none};
  width: ${getWidthPixel(42)};
`;

const ButtonStyled = styled.button`
  width: ${getWidthPixel(108)};
  height: ${getHeightPixel(42)};
  border-radius: ${getWidthPixel(30)};
  ${({ buttonColor = palette.gray }) => css`
    border: 1.5px solid ${buttonColor};
    color: ${buttonColor};
  `}
  display: flex;
  margin-top: ${getHeightPixel(21)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${getWidthPixel(14)};
`;

const moveLeft = keyframes`
  0% {
    transform: translateX(${getWidthPixel(250)});
  }
  100% {
    transform: translateX(${getWidthPixel(0)});
  }
`;

const moveRight = keyframes`
  0% {
    transform: translateX(${getWidthPixel(-250)});
  }
  100% {
    transform: translateX(${getWidthPixel(0)});
  }
`;
