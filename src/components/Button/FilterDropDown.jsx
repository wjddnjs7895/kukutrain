import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';
import { ReactComponent as UpArrowIcon } from '../../Assets/icon/up_arrow.svg';
import DropDown from './DropDown';

export default function FilterDropDown({ text, isVisible, setVisible, setType }) {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    let timeoutId;
    if (isVisible) {
      setFlag(true);
    } else {
      timeoutId = setTimeout(() => setFlag(false), 150);
    }
    return () => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, [isVisible]);
  return (
    <>
      {flag ? <DropDown setType={setType} setVisible={setVisible} isVisible={isVisible} /> : null}
      <ButtonStyled onClick={() => setVisible(!isVisible)}>{text}</ButtonStyled>
      <IconStyled />
    </>
  );
}

const ButtonStyled = styled.button`
  background-color: #7d7f8080;
  color: white;
  font-size: ${getWidthPixel(13)};
  width: ${getWidthPixel(105)};
  height: ${getWidthPixel(31)};
  border-radius: ${getWidthPixel(15)};
  border: 1px solid white;
  text-align: center;
  position: absolute;
`;

const IconStyled = styled(UpArrowIcon)`
  width: ${getWidthPixel(10)};
  height: ${getHeightPixel(6)};
  margin-left: ${getWidthPixel(85)};
  position: absolute;
`;
