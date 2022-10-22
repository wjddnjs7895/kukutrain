import React from 'react';
import styled from 'styled-components';

import { getHeightPixel } from '../../utils/responsive';

import { palette } from '../../constants/palette';

export default function BodyContainer({ locY }) {
  return <ContainerStyled />;
}

const ContainerStyled = styled.div`
  width: 100%;
  height: ${getHeightPixel(926)};
  background-color: ${palette.background};
  margin-top: -${getHeightPixel(50)};
`;
