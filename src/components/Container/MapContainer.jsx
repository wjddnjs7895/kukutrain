import React from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

export default function MapContainer() {
  return (
    <MapStyled center={{ lat: 37.5843918209331, lng: 127.02957798348103 }}>
      <MapMarker position={{ lat: 37.58438710962356, lng: 127.03039031468118 }}>
        <div style={{ color: '#070606' }}>춘자</div>
      </MapMarker>
    </MapStyled>
  );
}

const MapStyled = styled(Map)`
  width: 100%;
  height: 100%;
  z-index: -1;
`;
