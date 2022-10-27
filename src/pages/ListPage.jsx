import React from 'react';
import styled from 'styled-components';
import StoreTitleContainer from '../components/Container/StoreTitleContainer';
import { palette } from '../constants/palette';
import { getWidthPixel, getHeightPixel } from '../utils/responsive';
import { data } from '../data/data';
import Blank from '../components/Blank';
import { FILTER__LIST, FILTER__TYPE__LIST, TYPE__LIST } from '../constants';

export default function ListPage({ alcoholIdx, foodIdx, noiseIdx, setSelected, selectedIdx }) {
  const { datas } = data;
  const filterIdx = {
    alcohol: alcoholIdx,
    food: foodIdx,
    noise: noiseIdx,
  };

  const filteredData =
    alcoholIdx.length === 0 && foodIdx.length === 0 && noiseIdx.length === 0
      ? datas.filter(data => data.type === 'restaurant')
      : datas
          .filter(data => data.type === 'restaurant')
          .filter(data => {
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

  return (
    <PageStyled>
      <Blank height={getHeightPixel(10)} />
      {filteredData.map(store => {
        if (store.type === TYPE__LIST[selectedIdx]) {
          return (
            <ContainerStyled key={store.id}>
              <StoreTitleContainer
                id={store.id}
                title={store.name}
                subTitle={store.group}
                startTime={store.time ? store.time.split('~')[0] : '미정'}
                endTime={store.time ? store.time.split('~')[1] : '미정'}
                setSelected={setSelected}
                mainImage={store.img_main}
              />
              <DividerStyled />
            </ContainerStyled>
          );
        }
      })}
      <Blank height={getHeightPixel(400)} />
    </PageStyled>
  );
}

const PageStyled = styled.div`
  width: 100%;
  background-color: ${palette.none};
  overflow: scroll;
`;

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DividerStyled = styled.div`
  border-top: 1px solid ${palette.light_gray};
  width: ${getWidthPixel(428)};
`;
