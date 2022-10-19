import React from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import styled, { css } from 'styled-components';
import Restaurant from '../../Assets/icon/Restaurant.svg';
import { getHeightPixel, WIDTH } from '../../utils/responsive';

export default function MapContainer() {
  return (
    <StyledMap center={{ lat: 37.5843918209331, lng: 127.02957798348103 }}>
      <MapMarker
        position={{ lat: 37.58438710962356, lng: 127.03039031468118 }}
        image={{ src: Restaurant, size: { width: 27, height: 27 } }}
      />
    </StyledMap>
  );
}

const StyledMap = styled(Map)`
  position: absolute;
  left: 0;
  top: 0;
  width: ${WIDTH + 'px'};
  height: 100%;
  z-index: 0;
`;
