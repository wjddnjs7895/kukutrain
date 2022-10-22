import React from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import styled, { keyframes } from 'styled-components';
import Restaurant from '../../Assets/icon/Restaurant.svg';
import Cheer from '../../Assets/icon/Cheer.svg';
import Toilet from '../../Assets/icon/Toilet.svg';
import { WIDTH } from '../../utils/responsive';
import data from '../../data/data.json';

export default function MapContainer({ setSelected }) {
  const { markers } = data;
  const SIZE = 27;

  return (
    <StyledMap center={{ lat: 37.5843918209331, lng: 127.02957798348103 }}>
      {markers.map(marker => {
        const { id, position, type } = marker;
        if (type === 'restaurant') {
          return (
            <MapMarker
              onClick={() => setSelected(id)}
              key={id}
              position={position}
              image={{ src: Restaurant, size: { width: SIZE, height: SIZE } }}
            />
          );
        } else if (type === 'cheer') {
          return <MapMarker key={id} position={position} image={{ src: Cheer, size: { width: SIZE, height: SIZE } }} />;
        } else {
          return (
            <MapMarker key={id} position={position} image={{ src: Toilet, size: { width: SIZE, height: SIZE } }} />
          );
        }
      })}
    </StyledMap>
  );
}

const scaleUp = keyframes`
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

const StyledMap = styled(Map)`
  position: absolute;
  left: 0;
  top: 0;
  width: ${WIDTH + 'px'};
  height: 100%;
  z-index: 0;

  img[title] {
    animation: ${scaleUp} 0.4s ease-in both;
  }
`;
