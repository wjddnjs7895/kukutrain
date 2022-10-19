import React from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import Restaurant from '../../Assets/icon/Restaurant.svg';
import { WIDTH } from '../../utils/responsive';

export default function MapContainer() {
  return (
    <MapStyled center={{ lat: 37.5843918209331, lng: 127.02957798348103 }}>
      <MapMarker
        position={{ lat: 37.58438710962356, lng: 127.03039031468118 }}
        image={{ src: Restaurant, size: { width: 27, height: 27 } }}
      />
    </MapStyled>
  );
}

const MapStyled = styled(Map)`
  position: absolute;
  width: ${WIDTH + 'px'};
  height: 100%;
  z-index: -1;
`;
