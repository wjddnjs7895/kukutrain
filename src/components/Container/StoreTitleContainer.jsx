import React from 'react';
import styled from 'styled-components';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

import Blank from '../Blank';

import { ReactComponent as TimeIcon } from '../../Assets/icon/time.svg';
import { palette } from '../../constants/palette';

export default function StoreTitleContainer({ title, subTitle, startTime, endTime }) {
  return (
    <ContainerStyled>
      <ImageStyled />
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
  flex-direction: column;
  justify-content: center;
`;

const ImageStyled = styled.div`
  width: ${getWidthPixel(129)};
  height: ${getHeightPixel(84)};
  border: 1px solid;
`;

const TitleStyled = styled.div`
  font-weight: bold;
  font-color: '#9a9a9a';
  font-size: ${getWidthPixel(18)};
  padding-left: ${getWidthPixel(8)};
  display: flex;
  align-items: center;
`;

const SubTitleStyled = styled.div`
  font-weight: regular;
  font-size: ${getWidthPixel(13)};
  display: flex;
  align-items: center;
`;

const TimeIconStyled = styled(TimeIcon)`
  width: ${getWidthPixel(16)};
  height: ${getWidthPixel(16)};
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
  font-size: ${getWidthPixel(11.5)};
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
