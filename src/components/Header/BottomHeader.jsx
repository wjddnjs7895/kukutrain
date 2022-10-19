import React, { useState } from 'react';
import styled from 'styled-components';
import { getHeightPixel } from '../../utils/responsive';

export function BottomHeader({ setLocY }) {
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
          setLocY(e.touches[0].clientY);
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
      Header
    </ContainerStyled>
  );
}

const ContainerStyled = styled.button`
  width: 100%;
  height: ${getHeightPixel(100)};
  border: 1px solid red;
`;
