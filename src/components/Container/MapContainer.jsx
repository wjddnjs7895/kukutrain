import React from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';
import styled, { keyframes } from 'styled-components';
import Restaurant from '../../Assets/icon/Restaurant.svg';
import Cheer from '../../Assets/icon/Cheer.svg';
import Toilet from '../../Assets/icon/Toilet.svg';
import Restaurant_map_gray from '../../Assets/icon/Restaurant_map_gray.svg';
import { WIDTH } from '../../utils/responsive';
import { data } from '../../data/data';
import { FILTER__LIST, FILTER__TYPE__LIST } from '../../constants';

const CENTER = { lat: 37.5843918209331, lng: 127.02957798348103 };
const SIZE = 27;

export default function MapContainer({ selected, setSelected, alcoholIdx, foodIdx, noiseIdx, selectedIdx }) {
  const { datas } = data;

  let filteredData = null;
  if (selectedIdx === 0) filteredData = datas.filter(data => data.type === 'toilet');
  if (selectedIdx === 1) {
    const filterIdx = {
      alcohol: alcoholIdx,
      food: foodIdx,
      noise: noiseIdx,
    };

    filteredData =
      alcoholIdx.length === 0 && foodIdx.length === 0 && noiseIdx.length === 0
        ? datas.filter(data => data.type === 'restaurant')
        : datas.filter(data => {
            if (data.type !== 'restaurant') return false;
            let flag = false;

            for (const type of FILTER__TYPE__LIST) {
              const list = filterIdx[type]; // Idx
              if (list.length === 0) continue;

              if (!data[type]) return false;

              const filterList = list.map(idx => FILTER__LIST[type].list[idx]);
              if (type === 'noise') {
                if (filterList.includes(data[type])) flag = true;
              } else {
                for (const filter of data[type]) {
                  if (filterList.includes(filter)) flag = true;
                }
              }
            }

            return flag;
          });
  }
  if (selectedIdx === 2) filteredData = datas.filter(data => data.type === 'cheer');

  /*
  let filtered_datas =
    alcoholIdx.length === 0 && foodIdx.length === 0 && noiseIdx.length === 0
      ? datas
      : datas.filter(data => {
          let flag = false;

          for (const type of FILTER__TYPE__LIST) {
            const list = filterIdx[type]; // Idx
            if (list.length === 0) continue;

            if (!data[type]) return false;

            const filterList = list.map(idx => FILTER__LIST[type].list[idx]);
            if (type === 'noise') {
              if (filterList.includes(data[type])) flag = true;
            } else {
              for (const filter of data[type]) {
                if (filterList.includes(filter)) flag = true;
              }
            }
          }

          return flag;
        });
        */

  const selectedData = selected === -1 ? null : datas.find(data => data.id === selected);
  const centerPos = selectedData ? selectedData.position : CENTER;

  return (
    <StyledMap center={centerPos} isPanto={true}>
      {filteredData.map(data => {
        const { id, position, type } = data;

        if (type === 'restaurant') {
          if (selected === -1 || selected === id) {
            return (
              <MapMarker
                onClick={() => setSelected(id)}
                key={id}
                position={position}
                image={{ src: Restaurant, size: { width: SIZE, height: SIZE } }}
                onCreate={maker => {
                  maker.setZIndex(100);
                }}
              />
            );
          } else {
            return (
              <MapMarker
                onClick={() => setSelected(id)}
                key={id}
                position={position}
                image={{ src: Restaurant_map_gray, size: { width: SIZE, height: SIZE } }}
                onCreate={maker => {
                  maker.setZIndex(1);
                }}
              />
            );
          }
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
