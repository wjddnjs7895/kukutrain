import React from 'react';
import styled from 'styled-components';
import StoreTitleContainer from '../components/Container/StoreTitleContainer';
import { palette } from '../constants/palette';
import { getWidthPixel } from '../utils/responsive';

export default function ListPage({ setSelected }) {
  return (
    <PageStyled>
      <StoreTitleContainer
        id={0}
        title={'춘자'}
        subTitle={'교우회명'}
        startTime={'17:00'}
        endTime={'7:00'}
        setSelected={setSelected}
      />
      <DividerStyled />
      <StoreTitleContainer
        id={1}
        title={'춘자'}
        subTitle={'교우회명'}
        startTime={'17:00'}
        endTime={'7:00'}
        setSelected={setSelected}
      />
    </PageStyled>
  );
}

const PageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${palette.none};
`;

const DividerStyled = styled.div`
  border-top: 1px solid ${palette.light_gray};
  width: ${getWidthPixel(428)};
`;
