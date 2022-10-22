import React, { useState } from 'react';
import styled from 'styled-components';
import BottomContainer from '../components/Container/BottomContainer';
import MapContainer from '../components/Container/MapContainer';
import { getHeightPixel, getPixelToNumber } from '../utils/responsive';
import { HEIGHT } from '../utils/responsive';
import { deviceModel } from '../utils';

function MainPage() {
  const OFFSET__LOCY = deviceModel() === 'android' ? 210 : deviceModel() === 'ios' ? 105 : 105;
  const [locY, setLocY] = useState(HEIGHT - getPixelToNumber(getHeightPixel(OFFSET__LOCY)));
  return (
    <PageStyled>
      <MapContainer />
      <BottomContainer locY={locY} setLocY={setLocY} />
    </PageStyled>
  );
}

const PageStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default MainPage;
