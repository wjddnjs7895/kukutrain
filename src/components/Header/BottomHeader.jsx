import React, { useState } from 'react';
import styled from 'styled-components';
import { getWidthPixel, getHeightPixel, HEIGHT, getPixelToNumber } from '../../utils/responsive';

import { ReactComponent as BottomHeaderElement } from '../../Assets/element/BottomTabElement.svg';
import { palette } from '../../constants/palette';
import Button from '../Button';
import Blank from '../Blank';

import { ReactComponent as RestaurantGrayIcon } from '../../Assets/icon/restaurant_gray.svg';
import { ReactComponent as ToiletGrayIcon } from '../../Assets/icon/toilet_gray.svg';
import { ReactComponent as ToiletCrimsonIcon } from '../../Assets/icon/toilet_crimson.svg';
import { ReactComponent as CheerCrimsonIcon } from '../../Assets/icon/cheer_crimson.svg';
import { ReactComponent as CheerGrayIcon } from '../../Assets/icon/cheer_gray.svg';
import { ReactComponent as CenterButtonIcon } from '../../Assets/button/center_button.svg';
import BottomSubContainer from '../Container/BottomSubContainer';

export function BottomHeader({ locY, setLocY }) {
  const [isScroll, setScroll] = useState(false);
  const [selectedIdx, setIdx] = useState(0);
  const [isToggle, setToggle] = useState(false);
  const [alcoholIdx, setAlcoholIdx] = useState([]);
  const [foodIdx, setFoodIdx] = useState([]);
  const [noiseIdx, setNoiseIdx] = useState([]);
  const [type, setType] = useState(-1);
  return (
    <ContainerStyled>
      {selectedIdx === 1 ? (
        <div>
          {isToggle ? (
            <BottomSubContainer
              type={type}
              setType={setType}
              idxList={type === 0 ? alcoholIdx : type === 1 ? foodIdx : noiseIdx}
              setIdx={type === 0 ? setAlcoholIdx : type === 1 ? setFoodIdx : setNoiseIdx}
            />
          ) : null}
          <StyledHeaderElement
            onTouchStart={e => {
              setScroll(true);
            }}
            onTouchEnd={e => {
              setScroll(false);
            }}
            onTouchMove={e => {
              if (isScroll) {
                setLocY(e.touches[0].pageY - getPixelToNumber(getHeightPixel(35)));
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
                setLocY(e.pageY - getPixelToNumber(getHeightPixel(35)));
              }
            }}
          />
          <RowContainerStyled>
            <Blank width={getWidthPixel(30)} />
            <Button text={'화장실'} idx={0} isSelected={selectedIdx === 0} onClick={() => setIdx(0)}>
              {selectedIdx === 0 ? <ToiletCrimsonIconStyled /> : <ToiletGrayIconStyled />}
            </Button>
            <Blank width={getWidthPixel(152)} />
            <Button text={'응원단'} idx={2} isSelected={selectedIdx === 2} onClick={() => setIdx(2)}>
              {selectedIdx === 2 ? <CheerCrimsonIconStyled /> : <CheerGrayIconStyled />}
            </Button>
            <Blank width={getWidthPixel(30)} />
          </RowContainerStyled>
          <CenterButtonStyled onClick={() => setToggle(!isToggle)}>
            <CenterButtonIconStyled />
          </CenterButtonStyled>
        </div>
      ) : (
        <HeaderStyled
          onTouchStart={e => {
            setScroll(true);
          }}
          onTouchEnd={e => {
            setScroll(false);
          }}
          onTouchMove={e => {
            if (isScroll) {
              setLocY(e.touches[0].pageY - getPixelToNumber(getHeightPixel(35)));
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
              setLocY(e.pageY - getPixelToNumber(getHeightPixel(35)));
            }
          }}
        >
          <Blank width={getWidthPixel(30)} />
          <Button text={'화장실'} idx={0} isSelected={selectedIdx === 0} onClick={() => setIdx(0)}>
            {selectedIdx === 0 ? <ToiletCrimsonIconStyled /> : <ToiletGrayIconStyled />}
          </Button>
          <Blank width={getWidthPixel(22)} />
          <Button text={'뒤풀이'} idx={1} isSelected={selectedIdx === 1} onClick={() => setIdx(1)}>
            <RestaurantIconStyled />
          </Button>
          <Blank width={getWidthPixel(22)} />
          <Button text={'응원단'} idx={2} isSelected={selectedIdx === 2} onClick={() => setIdx(2)}>
            {selectedIdx === 2 ? <CheerCrimsonIconStyled /> : <CheerGrayIconStyled />}
          </Button>
          <Blank width={getWidthPixel(30)} />
        </HeaderStyled>
      )}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.div`
  width: ${getWidthPixel(428)};
  height: ${getHeightPixel(86)};
  background-color: #ffffff00;
`;

const RowContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
`;

const StyledHeaderElement = styled(BottomHeaderElement)`
  width: ${getWidthPixel(428)};
  height: ${getHeightPixel(86)};
  position: absolute;
`;

const HeaderStyled = styled.div`
  width: ${getWidthPixel(428)};
  height: ${getHeightPixel(86)};
  border-radius: ${getWidthPixel(30)} ${getWidthPixel(30)} 0 0;
  background-color: ${palette.background};
  display: flex;
  flex-direction: row;
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

const CenterButtonIconStyled = styled(CenterButtonIcon)`
  width: ${getWidthPixel(63)};
  height: ${getWidthPixel(63)};
`;

const CenterButtonStyled = styled.button`
  position: absolute;
  margin-left: ${getWidthPixel(183)};
  margin-top: -${getWidthPixel(5)};
  background-color: ${palette.none};
  border: 0px;
`;
