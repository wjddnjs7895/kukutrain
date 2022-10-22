import React from 'react';
import styled from 'styled-components';

import ListPage from '../../pages/ListPage';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

import { palette } from '../../constants/palette';

export default function BodyContainer({ locY }) {
  return (
    <ContainerStyled>
      <DividerStyled />
      <ListPage />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: 100%;
  height: ${getHeightPixel(926)};
  background-color: ${palette.background};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DividerStyled = styled.div`
  width: ${getWidthPixel(368)};
  height: ${getHeightPixel(3)};
  border-radius: 2px;
  background-color: ${palette.gray_02};
`;
