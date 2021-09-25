import React from 'react';

import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import * as S from './Home.style';

function Home() {
  return (
    <S.HomeWrapper>
      {/* <h1>Home Page</h1> */}
      home page
      <HeroSection />
      <InfoSection />

    </S.HomeWrapper>
  );
}

export default Home;
