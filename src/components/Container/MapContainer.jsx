import React from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import Restaurant from '../../Assets/icon/Restaurant.svg';
import Cheer from '../../Assets/icon/Cheer.svg';
import Toilet from '../../Assets/icon/Toilet.svg';
import { WIDTH } from '../../utils/responsive';

export default function MapContainer() {
  const markers = [
    {
      id: 0,
      type: 'restaurant',
      name: '춘자',
      position: {
        lat: 37.5843918209331,
        lng: 127.02957798348103,
      },
      image: {
        src: Restaurant,
        size: { width: 27, height: 27 },
      },
    },
    {
      id: 1,
      type: 'cheer',
      name: '응원단',
      position: {
        lat: 37.58317774961192,
        lng: 127.02950957395034,
      },
      image: {
        src: Cheer,
        size: { width: 27, height: 27 },
      },
    },
    {
      id: 2,
      type: 'toilet',
      name: '정보관 화장실',
      position: {
        lat: 37.58520749653496,
        lng: 127.02845178318773,
      },
      image: {
        src: Toilet,
        size: { width: 27, height: 27 },
      },
    },
  ];

  return (
    <StyledMap center={{ lat: 37.5843918209331, lng: 127.02957798348103 }}>
      {markers.map(marker => (
        <MapMarker key={marker.id} position={marker.position} image={marker.image} />
      ))}
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
