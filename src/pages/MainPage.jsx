import React, { useState } from 'react';
import styled from 'styled-components';
import BottomContainer from '../components/Container/BottomContainer';
import MapContainer from '../components/Container/MapContainer';
import { getHeightPixel, getPixelToNumber } from '../utils/responsive';
import { HEIGHT } from '../utils/responsive';

function MainPage() {
  const [locY, setLocY] = useState(HEIGHT - getPixelToNumber(getHeightPixel(105)));
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
