import React from 'react';
import styled from 'styled-components';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

import Blank from '../Blank';

import { ReactComponent as TimeIcon } from '../../Assets/icon/time.svg';
import { palette } from '../../constants/palette';

export default function StoreTitleContainer({ id, title, subTitle, startTime, endTime, setSelected, mainImage }) {
  return (
    <ContainerStyled onClick={() => setSelected(id)}>
      <ImageStyled src={mainImage} />
      <InnerContainerStyled>
        <RowContainerStyled>
          <TitleStyled>{title}</TitleStyled>
          <Blank width={getWidthPixel(23)} />
          <SubTitleStyled>{subTitle}</SubTitleStyled>
        </RowContainerStyled>
        <Blank height={getHeightPixel(24)} />
        <RowContainerStyled>
          <TimeContainerStyled>
            <TimeIconStyled />
            <Blank width={getWidthPixel(5)} />
            <TimeIconTextStyled>영업시간</TimeIconTextStyled>
          </TimeContainerStyled>
          <Blank width={getWidthPixel(10)} />
          <TimeTextStyled>
            {startTime}-{endTime}
          </TimeTextStyled>
        </RowContainerStyled>
      </InnerContainerStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: ${getWidthPixel(362)};
  height: ${getHeightPixel(120)};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InnerContainerStyled = styled.div`
  display: flex;
  width: ${getWidthPixel(240)};
  flex-direction: column;
  justify-content: center;
`;

const ImageStyled = styled.img`
  width: ${getWidthPixel(129)};
  height: ${getHeightPixel(84)};
  border: 1px solid #e3e3e3;
`;

const TitleStyled = styled.div`
  font-weight: bold;
  color: '#424242';
  font-size: ${getWidthPixel(18)};
  padding-left: ${getWidthPixel(8)};
  display: flex;
  align-items: center;
`;

const SubTitleStyled = styled.div`
  font-weight: regular;
  font-size: ${getWidthPixel(13)};
  color: #9a9a9a;
  display: flex;
  align-items: center;
`;

const TimeIconStyled = styled(TimeIcon)`
  width: ${getWidthPixel(14)};
  height: ${getWidthPixel(14)};
`;

const TimeContainerStyled = styled.div`
  width: ${getWidthPixel(78)};
  height: ${getHeightPixel(24)};
  border-radius: ${getHeightPixel(12)};
  background-color: ${palette.indigo};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TimeIconTextStyled = styled.div`
  color: white;
  font-size: ${getWidthPixel(10)};
`;

const TimeTextStyled = styled.div`
  color: ${palette.dark_gray};
  font-size: ${getWidthPixel(14)};
  display: flex;
  align-items: center;
`;

const RowContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: ${getWidthPixel(16)};
`;
