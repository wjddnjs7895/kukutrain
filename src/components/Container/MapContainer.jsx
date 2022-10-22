import React from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import Restaurant from '../../Assets/icon/Restaurant.svg';
import Cheer from '../../Assets/icon/Cheer.svg';
import Toilet from '../../Assets/icon/Toilet.svg';
import { WIDTH } from '../../utils/responsive';
import data from '../../data/data.json';

export default function MapContainer() {
  const { markers } = data;
  const SIZE = 27;

  return (
    <StyledMap center={{ lat: 37.5843918209331, lng: 127.02957798348103 }}>
      {markers.map(marker => {
        const { id, position, type } = marker;

        if (type === 'restaurant') {
          return (
            <MapMarker key={id} position={position} image={{ src: Restaurant, size: { width: SIZE, height: SIZE } }} />
          );
        } else if (type === 'cheer') {
          return <MapMarker key={id} position={position} image={{ src: Cheer, size: { width: SIZE, height: SIZE } }} />;
        } else {
          return (
            <MapMarker key={id} position={position} image={{ src: Toilet, size: { width: SIZE, height: SIZE } }} />
          );
        }
        return <MapMarker key={marker.id} position={marker.position} image={icon} />;
      })}
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
