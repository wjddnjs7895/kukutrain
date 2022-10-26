import React from 'react';
import styled from 'styled-components';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

import { ReactComponent as BackIcon } from '../../Assets/icon/back.svg';

export default function BackHeader({ setSelected }) {
  return (
    <ContainerStyled>
      <ButtonStyled onClick={() => setSelected(-1)}>
        <IconStyled />
      </ButtonStyled>
      <div className="info-text">식당 정보</div>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: ${getWidthPixel(428)};
  height: ${getHeightPixel(86)};
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  background-color: #f6f6f6;
  display: flex;
  align-items: center;
  padding-left: ${getWidthPixel(20)};

  .info-text {
    width: ${getWidthPixel(300)};
    text-align: center;
    font-size: 14px;
    color: #bc323b;
  }
`;

const IconStyled = styled(BackIcon)`
  width: ${getWidthPixel(15)};
  height: ${getWidthPixel(25)};
`;

const ButtonStyled = styled.div`
  width: ${getWidthPixel(44)};
  height: ${getWidthPixel(44)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
