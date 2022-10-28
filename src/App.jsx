import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { getHeightPixel, getWidthPixel, HEIGHT, REAL__WIDTH, WIDTH } from './utils/responsive';
import MainPage from './pages/MainPage';
import RouteChangeTracker from './components/RouteChangeTracker';
import LeftPage from './pages/LeftPage';
import Blank from './components/Blank';
import LoadingPage from './pages/LoadingPage';

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [alert, alertSet] = useState(false);

  RouteChangeTracker();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    let timer = setTimeout(() => {
      alertSet(true);
    }, 2000);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (width < REAL__WIDTH * 0.6 || isMobile) {
    return (
      <PageStyled>
        <ContainerStyled>{alert ? <MainPage /> : <LoadingPage />}</ContainerStyled>
      </PageStyled>
    );
  } else
    return (
      <PageStyled>
        <LeftPage />
        <Blank width={getWidthPixel(100)} />
        <ContainerStyled>
          <MainPage />
        </ContainerStyled>
      </PageStyled>
    );
}

const PageStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContainerStyled = styled.div`
  width: ${`${WIDTH.toString()}px`};
  height: ${`${HEIGHT.toString()}px`};
`;

export default App;
