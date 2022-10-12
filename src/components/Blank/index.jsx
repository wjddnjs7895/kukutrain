import React from 'react';
import styled, { css } from 'styled-components';

function Blank({ width, height }) {
  return <BlankStyled width={width} height={height} />;
}

const BlankStyled = styled.div`
  ${({ width = '0px', height = '0px' }) => css`
    width: ${width};
    height: ${height};
  `}
`;

export default Blank;
