import React, { useState } from 'react';
import styled from 'styled-components';
import BottomContainer from '../components/Container/BottomContainer';
import MapContainer from '../components/Container/MapContainer';
import { getHeightPixel, getPixelToNumber, getWidthPixel } from '../utils/responsive';
import { HEIGHT } from '../utils/responsive';
import { deviceModel } from '../utils';
import { ReactComponent as Ellipse } from '../Assets/icon/Ellipse.svg';

function MainPage() {
  const [selected, setSelected] = useState(-1);
  const OFFSET__LOCY =
    deviceModel() === 'android'
      ? 210
      : deviceModel() === 'ios'
      ? 115
      : deviceModel() === 'ios/naver' || deviceModel() === 'ios/kakao'
      ? 305
      : 105;
  const [locY, setLocY] = useState(HEIGHT - getPixelToNumber(getHeightPixel(OFFSET__LOCY)));
  const [alcoholIdx, setAlcoholIdx] = useState([]);
  const [foodIdx, setFoodIdx] = useState([]);
  const [noiseIdx, setNoiseIdx] = useState([]);

  const SIZE = getWidthPixel(7);

  return (
    <PageStyled>
      <MapContainer
        selected={selected}
        setSelected={setSelected}
        alcoholIdx={alcoholIdx}
        foodIdx={foodIdx}
        noiseIdx={noiseIdx}
      />
      <BannerStyled href="https://forms.gle/8ms8F85UdewC9N8A9" target="_blank">
        <div className="content">
          <Ellipse width={SIZE} height={SIZE} />
          <div className="text">KUGODS 디자인 인력 모집중</div>
          <Ellipse width={SIZE} height={SIZE} />
        </div>
      </BannerStyled>
      <BottomContainer
        locY={locY}
        setLocY={setLocY}
        selected={selected}
        setSelected={setSelected}
        alcoholIdx={alcoholIdx}
        setAlcoholIdx={setAlcoholIdx}
        foodIdx={foodIdx}
        setFoodIdx={setFoodIdx}
        noiseIdx={noiseIdx}
        setNoiseIdx={setNoiseIdx}
      />
    </PageStyled>
  );
}

const BannerStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${getHeightPixel(68)};
  left: ${getWidthPixel(30)};
  width: ${getWidthPixel(368)};
  height: ${getHeightPixel(54)};
  border-radius: ${getHeightPixel(27)};
  background-color: #fcfcfc;
  border: 2px solid #bc323b;
  z-index: 101;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .text {
    margin: 0 ${getWidthPixel(10)};
    width: ${getWidthPixel(190)};
    text-align: center;
    font-weight: 600;
    font-size: ${getWidthPixel(14)};
    color: #bc323b;
  }
`;

const PageStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default MainPage;
