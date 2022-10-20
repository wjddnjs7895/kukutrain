import React, { useState } from 'react';
import styled from 'styled-components';
import { getWidthPixel, getHeightPixel, HEIGHT, getPixelToNumber } from '../../utils/responsive';

import { ReactComponent as BottomHeaderElement } from '../../Assets/element/BottomTabElement.svg';
import { palette } from '../../constants/palette';
import Button from '../Button';

import { ReactComponent as RestaurantGrayIcon } from '../../Assets/icon/restaurant_gray.svg';
import { ReactComponent as ToiletGrayIcon } from '../../Assets/icon/toilet_gray.svg';
import { ReactComponent as ToiletCrimsonIcon } from '../../Assets/icon/toilet_crimson.svg';
import { ReactComponent as CheerCrimsonIcon } from '../../Assets/icon/cheer_crimson.svg';
import { ReactComponent as CheerGrayIcon } from '../../Assets/icon/cheer_gray.svg';

export function BottomHeader({ locY, setLocY, headerType }) {
  const [isScroll, setScroll] = useState(false);
  const [selectedIdx, setIdx] = useState(0);
  return (
    <ContainerStyled
      onTouchStart={e => {
        setScroll(true);
      }}
      onTouchEnd={e => {
        setScroll(false);
      }}
      onTouchMove={e => {
        if (isScroll) {
          setLocY(e.touches[0].pageY - getPixelToNumber(getHeightPixel(20)));
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
          setLocY(e.pageY - getPixelToNumber(getHeightPixel(20)));
        }
      }}
    >
      {headerType === 1 ? (
        <StyledHeaderIcon />
      ) : (
        <HeaderStyled>
          <Button text={'화장실'} idx={0} isSelected={selectedIdx === 0} onClick={() => setIdx(0)}>
            {selectedIdx === 0 ? <ToiletCrimsonIconStyled /> : <ToiletGrayIconStyled />}
          </Button>
          <Button text={'뒤풀이'} idx={1} isSelected={selectedIdx === 1} onClick={() => setIdx(1)}>
            <RestaurantIconStyled />
          </Button>
          <Button text={'응원단'} idx={2} isSelected={selectedIdx === 2} onClick={() => setIdx(2)}>
            {selectedIdx === 2 ? <CheerCrimsonIconStyled /> : <CheerGrayIconStyled />}
          </Button>
        </HeaderStyled>
      )}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.button`
  width: 100%;
  height: ${getHeightPixel(100)};
  background-color: #ffffff00;
  border: 0px;
`;

const StyledHeaderIcon = styled(BottomHeaderElement)`
  width: ${getWidthPixel(428)};
  height: ${getHeightPixel(127)};
`;

const HeaderStyled = styled.div`
  width: ${getWidthPixel(428)};
  height: ${getHeightPixel(127)};
  border-radius: ${getWidthPixel(30)};
  background-color: ${palette.background};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ToiletCrimsonIconStyled = styled(ToiletCrimsonIcon)`
  width: ${getWidthPixel(16)};
  height: ${getHeightPixel(19)};
`;

const ToiletGrayIconStyled = styled(ToiletGrayIcon)`
  width: ${getWidthPixel(16)};
  height: ${getHeightPixel(19)};
`;

const RestaurantIconStyled = styled(RestaurantGrayIcon)`
  width: ${getWidthPixel(13)};
  height: ${getHeightPixel(19)};
`;

const CheerCrimsonIconStyled = styled(CheerCrimsonIcon)`
  width: ${getWidthPixel(20)};
  height: ${getHeightPixel(17)};
`;

const CheerGrayIconStyled = styled(CheerGrayIcon)`
  width: ${getWidthPixel(20)};
  height: ${getHeightPixel(17)};
`;
