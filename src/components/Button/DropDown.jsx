import React from 'react';
import styled from 'styled-components';
import { palette } from '../../constants/palette';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

export default function DropDown({ setType, setVisible }) {
  return (
    <ContainerStyled>
      <ButtonStyled
        onClick={() => {
          setVisible(false);
          setType(0);
        }}
      >
        주류
      </ButtonStyled>
      <DividerStyled />
      <ButtonStyled
        onClick={() => {
          setVisible(false);
          setType(1);
        }}
      >
        안주류
      </ButtonStyled>
      <DividerStyled />
      <ButtonStyled
        onClick={() => {
          setVisible(false);
          setType(2);
        }}
      >
        소음 정도
      </ButtonStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: ${getWidthPixel(105)};
  padding-top: ${getHeightPixel(5)};
  padding-bottom: ${getHeightPixel(30)};
  position: absolute;
  margin-bottom: ${getHeightPixel(120)};
  background-color: #7d7f8080;
  border-radius: ${getWidthPixel(16)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonStyled = styled.button`
  color: white;
  width: ${getWidthPixel(105)};
  height: ${getHeightPixel(36)};
  font-size: ${getWidthPixel(14)};
  background-color: ${palette.none};
  border: 0px;
`;

const DividerStyled = styled.div`
  width: ${getWidthPixel(80)};
  height: 1px;
  border-radius: 1px;
  background-color: #ffffff80;
`;
