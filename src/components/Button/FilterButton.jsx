import React from 'react';
import styled, { css } from 'styled-components';
import { getWidthPixel } from '../../utils/responsive';

export default function FilterButton({ text, idx, idxList, setIdx, isSelected }) {
  return (
    <ButtonStyled
      backgroundColor={isSelected ? '#BF3535' : '#dcdcdc80'}
      onClick={() => {
        if (isSelected) {
          let filtered = idxList.filter(element => element !== idx);
          setIdx(filtered);
        } else {
          let filtered = idxList.concat(idx);
          setIdx(filtered);
        }
      }}
    >
      {text}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  ${({ backgroundColor }) => css`
    background-color: ${backgroundColor};
  `}
  color: white;
  font-size: ${getWidthPixel(12)};
  width: ${getWidthPixel(77)};
  height: ${getWidthPixel(27)};
  border-radius: ${getWidthPixel(15)};
  border: 0px;
  margin-right: ${getWidthPixel(14)};
`;
