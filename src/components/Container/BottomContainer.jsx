import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { getHeightPixel } from '../../utils/responsive';
import { BottomHeader } from '../Header/BottomHeader';
import BodyContainer from './BodyContainer';

export default function BottomContainer({ locY, setLocY }) {
  return (
    <ContainerStyled marginTop={locY < 796 ? (locY > 0 ? locY + 'px' : getHeightPixel(0)) : getHeightPixel(796)}>
      <BottomHeader setLocY={setLocY} locY={locY} headerType={0} />
      <BodyContainer />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  position: absolute;
  ${({ marginTop = getHeightPixel(796) }) => css`
    margin-top: ${marginTop};
  `};
  width: 100%;
  height: ${getHeightPixel(926)};
`;
