import React from 'react';
import styled, { css } from 'styled-components';

import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

import { palette } from '../../constants/palette';
import Blank from '../Blank';

export default function Button({ idx, text, isSelected, onClick, children }) {
  return (
    <ButtonStyled buttonColor={isSelected ? palette.crimson : palette.gray} onClick={onClick}>
      {children}
      <Blank width={getWidthPixel(10)} />
      {text}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: ${getWidthPixel(108)};
  height: ${getHeightPixel(42)};
  border-radius: ${getWidthPixel(30)};
  ${({ buttonColor = palette.gray }) => css`
    border: 1.5px solid ${buttonColor};
    color: ${buttonColor};
  `}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: ${getWidthPixel(16)};
`;
