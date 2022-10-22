import React, { useState } from 'react';
import styled from 'styled-components';

import ListPage from '../../pages/ListPage';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

import { palette } from '../../constants/palette';
import Detail from '../Detail/Detail';

export default function BodyContainer({ locY, selected, setSelected }) {
  return (
    <ContainerStyled>
      {selected === -1 ? (
        <>
          <DividerStyled />
          <ListPage setSelected={setSelected} />
        </>
      ) : (
        <Detail locY={locY} restaurant_id={selected} />
      )}
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
