import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getHeightPixel, getWidthPixel, HEIGHT } from '../../utils/responsive';
import { ReactComponent as Marker } from '../../Assets/icon/Marker.svg';
import { ReactComponent as Call } from '../../Assets/icon/Call.svg';
import { data } from '../../data/data';

function FoodComponent({ image = '이미지 없음', name }) {
  return (
    <div className="item">
      <img className="img" src={image} alt="" />
      <div className="name">{name}</div>
    </div>
  );
}

export default function Detail({ locY, restaurant_id }) {
  const ICON_SIZE = getWidthPixel(24);
  const COLOR = ['#424242', '#9a9a9a', '#696969', '#727272'];

  const market = data['datas'].find(data => data.id === restaurant_id);
  const { name, subname, addr, phone, img_main } = market;

  console.log(market);

  return (
    <StyledDetailContainer locY={locY}>
      <div className="bl-container main">
        <img src={img_main} className="img item" />
        <StyledFont className="name item" color={COLOR[0]} fw={600}>
          {name}
        </StyledFont>
        <StyledFont className="type item" color={COLOR[1]}>
          {subname}
        </StyledFont>
      </div>

      <div className="split"></div>

      <div className="bl-container sub">
        <div className="pos bl-item">
          <Marker className="marker item-con" width={ICON_SIZE} height={ICON_SIZE} />
          <StyledFont className="addr item-text" color={COLOR[2]}>
            {addr}
          </StyledFont>
        </div>
        <div className="contact bl-item">
          <Call className="call item-icon" width={ICON_SIZE} height={ICON_SIZE} />
          <StyledFont className="number item-text" color={COLOR[2]}>
            {phone}
          </StyledFont>
        </div>
      </div>

      <div className="split"></div>

      <StyledGrid className="bl-container" locY={locY}>
        {market['snack'] &&
          market['snack'].map((snack, idx) => <FoodComponent key={idx} image={snack.image} name={snack.name} />)}
      </StyledGrid>
    </StyledDetailContainer>
  );
}

const StyledDetailContainer = styled.div`
  width: 100%;
  margin-top: -${getHeightPixel(15)};
  height: ${({ locY }) => getHeightPixel(HEIGHT - locY)};
  overflow-y: auto;

  .split {
    margin: 0.375em 0;
    border: ${() => getHeightPixel(1.5)} solid #dedede;
  }

  .bl-container {
    margin: 0 auto;
    width: ${getWidthPixel(368)};
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .item {
      margin-top: 0.75em;
    }

    .img {
      width: 100%;
      height: ${getHeightPixel(150)};

      border: 1px solid black;
      border-radius: 1.25rem;
    }

    .name {
      font-weight: 600;
    }

    .type {
      font-size: 0.75rem;
    }
  }

  .sub {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .bl-item {
      display: flex;
      align-items: center;
      height: ${getHeightPixel(40)};
    }

    .item-text {
      margin-left: 0.5em;
      font-size: 0.75rem;
    }
  }
`;

const StyledFont = styled.div`
  color: ${({ color }) => color};
  text-align: center;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  max-height: ${({ locY }) => getHeightPixel(HEIGHT - (locY + 275))};
  justify-items: center;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  .item {
    height: ${getHeightPixel(130)};
    margin-top: 1em;
  }

  .img {
    width: ${getWidthPixel(100)};
    height: ${getWidthPixel(100)};

    border: 1px solid black;
    border-radius: 0.75em;
  }

  .name {
    margin-top: 0.5em;
    text-align: center;
    font-size: 0.5rem;
  }
`;
