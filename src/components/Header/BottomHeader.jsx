import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
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
import { ReactComponent as SpoonIcon } from '../../Assets/icon/spoon_icon.svg';
import { ReactComponent as ChopStickLeftIcon } from '../../Assets/icon/chopstick1_icon.svg';
import { ReactComponent as ChopStickRightIcon } from '../../Assets/icon/chopstick2_icon.svg';
import BottomSubContainer from '../Container/BottomSubContainer';
import BackHeader from './BackHeader';

export function BottomHeader({ locY, setLocY, setSelected, selected }) {
  const SCROLL__OFFSET__Y = 40;
  const [isScroll, setScroll] = useState(false);
  const [selectedIdx, setIdx] = useState(0);
  const [isToggle, setToggle] = useState(false);
  const [flag, setFlag] = useState(false);
  const [alcoholIdx, setAlcoholIdx] = useState([]);
  const [foodIdx, setFoodIdx] = useState([]);
  const [noiseIdx, setNoiseIdx] = useState([]);
  const [type, setType] = useState(-1);
  useEffect(() => {
    let timeoutId;
    if (isToggle) {
      setFlag(true);
    } else {
      timeoutId = setTimeout(() => setFlag(false), 150);
    }
    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [isToggle]);
  return (
    <ContainerStyled>
      {selected !== -1 ? (
        <div
          onTouchStart={e => {
            setScroll(true);
          }}
          onTouchEnd={e => {
            setScroll(false);
          }}
          onTouchMove={e => {
            if (isScroll) {
              setLocY(e.touches[0].pageY - getPixelToNumber(getHeightPixel(SCROLL__OFFSET__Y)));
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
              setLocY(e.pageY - getPixelToNumber(getHeightPixel(SCROLL__OFFSET__Y)));
            }
          }}
        >
          <BackHeader setSelected={setSelected} />
        </div>
      ) : selectedIdx === 1 ? (
        <div
          onTouchStart={e => {
            setScroll(true);
          }}
          onTouchEnd={e => {
            setScroll(false);
          }}
          onTouchMove={e => {
            if (isScroll) {
              setLocY(e.touches[0].pageY - getPixelToNumber(getHeightPixel(SCROLL__OFFSET__Y)));
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
              setLocY(e.pageY - getPixelToNumber(getHeightPixel(SCROLL__OFFSET__Y)));
            }
          }}
        >
          {flag ? (
            <BottomSubContainer
              type={type}
              setType={setType}
              idxList={type === 0 ? alcoholIdx : type === 1 ? foodIdx : noiseIdx}
              setIdx={type === 0 ? setAlcoholIdx : type === 1 ? setFoodIdx : setNoiseIdx}
              isToggle={isToggle}
            />
          ) : (
            <BottomSubOffContainer>
              <BottomSubOff />
            </BottomSubOffContainer>
          )}
          <HeaderBox>
            <StyledHeaderElement />
          </HeaderBox>
          <RowContainerStyled>
            <MarginStyled>
              <Button text={'화장실'} idx={0} isSelected={selectedIdx === 0} onClick={() => setIdx(0)}>
                {selectedIdx === 0 ? <ToiletCrimsonIconStyled /> : <ToiletGrayIconStyled />}
              </Button>
            </MarginStyled>
            <MarginStyled marginLeft={getWidthPixel(152)}>
              <Button text={'응원단'} idx={2} isSelected={selectedIdx === 2} onClick={() => setIdx(2)}>
                {selectedIdx === 2 ? <CheerCrimsonIconStyled /> : <CheerGrayIconStyled />}
              </Button>
            </MarginStyled>
          </RowContainerStyled>
          <CenterButtonStyled onClick={() => setToggle(!isToggle)}>
            {isToggle ? (
              <CenterButtonIconStyled>
                <SpoonIconStyled />
                <ChopStickLeftIconStyled />
                <ChopStickRightIconStyled />
              </CenterButtonIconStyled>
            ) : (
              <ListButtonIconStyled>
                <ListLineStyled />
                <Blank height={getWidthPixel(6)} />
                <ListLineStyled />
                <Blank height={getWidthPixel(6)} />
                <ListLineStyled />
              </ListButtonIconStyled>
            )}
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
              setLocY(e.touches[0].pageY - getPixelToNumber(getHeightPixel(SCROLL__OFFSET__Y)));
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
              setLocY(e.pageY - getPixelToNumber(getHeightPixel(SCROLL__OFFSET__Y)));
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
  width: ${getWidthPixel(428)};
  display: flex;
  flex-direction: row;
  position: absolute;
  justify-content: center;
`;

const StyledHeaderElement = styled(BottomHeaderElement)`
  filter: drop-shadow(0px -10px 10px #0000001a);
`;

const HeaderBox = styled.div`
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
  box-shadow: 0px -10px 10px #0000001a;
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

const CenterButtonIconStyled = styled.div`
  width: ${getWidthPixel(63)};
  height: ${getWidthPixel(63)};
  background-color: #bc323b;
  border-radius: ${getWidthPixel(40)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ListButtonIconStyled = styled.div`
  width: ${getWidthPixel(58)};
  height: ${getWidthPixel(58)};
  background-color: #bc323b;
  border-radius: ${getWidthPixel(40)};
  margin-left: ${getWidthPixel(3)};
  margin-top: ${getWidthPixel(3)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CenterButtonStyled = styled.button`
  position: absolute;
  margin-left: ${getWidthPixel(183)};
  margin-top: -${getWidthPixel(5)};
  background-color: ${palette.none};
  border: 0px;
`;

const ListLineStyled = styled.div`
  width: ${getWidthPixel(20)};
  height: ${getWidthPixel(3)};
  border-radius: ${getWidthPixel(2)};
  background-color: white;
`;

const SpoonIconStyled = styled(SpoonIcon)`
  width: ${getWidthPixel(11)};
  height: ${getWidthPixel(34)};
`;

const ChopStickLeftIconStyled = styled(ChopStickLeftIcon)`
  width: ${getWidthPixel(7)};
  height: ${getWidthPixel(34)};
`;

const ChopStickRightIconStyled = styled(ChopStickRightIcon)`
  width: ${getWidthPixel(7)};
  height: ${getWidthPixel(34)};
`;

const BottomSubOff = styled.div`
  width: ${getWidthPixel(98)};
  height: ${getHeightPixel(6)};
  background-color: #9f9f9f;
  border-radius: ${getHeightPixel(3)};
  margin-top: -${getHeightPixel(24)};
  position: absolute;
`;

const BottomSubOffContainer = styled.div`
  width: ${getWidthPixel(428)};
  display: flex;
  justify-content: center;
`;

const MarginStyled = styled.div`
  ${({ marginLeft = getWidthPixel(0), marginRight = getWidthPixel(0) }) => css`
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
  `}
`;
