import React, { useEffect } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { getHeightPixel, getWidthPixel, HEIGHT, REAL__WIDTH, WIDTH } from './utils/responsive';
import MainPage from './pages/MainPage';
import Blank from './components/Blank';

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width < REAL__WIDTH * 0.6 || isMobile) {
    return (
      <PageStyled>
        <ContainerStyled>
          <MainPage />
        </ContainerStyled>
      </PageStyled>
    );
  } else
    return (
      <PageStyled>
        <Blank width={getWidthPixel(405)} height={getHeightPixel(720)} />
        <ContainerStyled>
          <MainPage />
        </ContainerStyled>
      </PageStyled>
    );
}

const PageStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerStyled = styled.div`
  width: ${`${WIDTH.toString()}px`};
  height: ${`${HEIGHT.toString()}px`};
`;

export default App;
