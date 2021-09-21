import React from 'react';

import * as S from './Hero.style';

const Hero = () => (
  <S.HeroWrapper>
    <S.HerHeading>No reactions to your reddit posts?</S.HerHeading>
    {/* eslint-disable-next-line max-len */}
    <S.SubHeading>Great timing, great results. Find the best time to post your subreddit</S.SubHeading>
    <S.CtaBtn type="button">Show me the best time</S.CtaBtn>
    <p>r/javascript</p>
    <div>
      <img src="./table.png" alt="heatmap" />
    </div>
  </S.HeroWrapper>
);

export default Hero;
