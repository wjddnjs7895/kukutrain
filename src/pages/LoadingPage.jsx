import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as ElementImage } from '../Assets/element/LeftScreenElement.svg';
import { ReactComponent as TrainIcon } from '../Assets/icon/train_right.svg';
import { getHeightPixel, getWidthPixel } from '../utils/responsive';

export default function LoadingPage() {
  return (
    <PageStyled>
      <ContainerStyled>
        <ElementStyled />
      </ContainerStyled>
      <TrainStyled />
      <LoadingBar />
    </PageStyled>
  );
}

const PageStyled = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${getHeightPixel(300)};
`;

const ElementStyled = styled(ElementImage)`
  width: ${getWidthPixel(232)};
  height: ${getWidthPixel(242)};
`;

const moveRight = keyframes`
  0% {
    transform: translateX(-${getWidthPixel(428 + 250)});
  }
  100% {
    transform: translateX(${getWidthPixel(120)});
  }
`;

const LoadingBar = styled.div`
  height: 3px;
  width: ${getWidthPixel(428)};
  background-color: #bc323b;
  position: abosulte;
  margin-top: ${getHeightPixel(100)};
`;

const TrainStyled = styled(TrainIcon)`
  width: ${getWidthPixel(111)};
  height: ${getWidthPixel(62)};
  margin-top: ${getHeightPixel(100 - 62)};
  animation: ${moveRight} 3s linear;
  position: absolute;
  margin-left: ${getWidthPixel(428 + 120)};
`;
