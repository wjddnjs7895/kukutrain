import React from 'react';
import styled from 'styled-components';

import { getWidthPixel, getHeightPixel } from '../utils/responsive';

import { ReactComponent as ElementImage } from '../Assets/element/LeftScreenElement.svg';

export default function LeftPage() {
  return (
    <PageStyled>
      <ContainerStyled>
        <ElementImage />
      </ContainerStyled>
    </PageStyled>
  );
}

const PageStyled = styled.div`
  width=${getWidthPixel(780)} 
  height=${getHeightPixel(720)}
  background-color: white;
`;

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ElementStyled = styled(ElementImage)`
  width: ${getWidthPixel(232)};
  height: ${getWidthPixel(242)};
`;
