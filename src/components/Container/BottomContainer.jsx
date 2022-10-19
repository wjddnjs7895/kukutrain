import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { getHeightPixel } from '../../utils/responsive';
import { BottomHeader } from '../Header/BottomHeader';

export default function BottomContainer({ locY, setLocY }) {
  return (
    <ContainerStyled
      marginTop={locY < 796 ? (locY > 0 ? getHeightPixel(locY) : getHeightPixel(0)) : getHeightPixel(796)}
    >
      <BottomHeader setLocY={setLocY} />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  ${({ marginTop = getHeightPixel(796) }) => css`
    margin-top: ${marginTop};
  `};
  width: 100%;
  height: ${getHeightPixel(926)};
  border: 1px solid blue;
  background-color: gray;
  display: flex;
`;
