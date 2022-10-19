import React, { useState } from 'react';
import styled from 'styled-components';
import { getPixelToNumber, getHeightPixel, HEIGHT } from '../../utils/responsive';

export function BottomHeader({ locY, setLocY }) {
  const [isScroll, setScroll] = useState(false);
  return (
    <ContainerStyled
      onTouchStart={() => {
        setScroll(true);
      }}
      onTouchEnd={e => {
        setScroll(false);
      }}
      onTouchMove={e => {
        if (isScroll) {
          setLocY(e.touches[0].pageY);
        }
      }}
      onMouseDown={() => {
        setScroll(true);
      }}
      onMouseUp={() => {
        setScroll(false);
      }}
      onMouseMove={e => {
        if (isScroll) {
          setLocY(e.clientY);
        }
      }}
    >
      {locY},{HEIGHT}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.button`
  width: 100%;
  height: ${getHeightPixel(100)};
  border: 1px solid red;
`;
