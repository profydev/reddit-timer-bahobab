import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './Hero.style';

const HeroSection = () => (
  <S.HeroWrapper>
    <S.HeroHeading>No reactions to your reddit posts?</S.HeroHeading>
    {/* eslint-disable-next-line max-len */}
    <S.SubHeading>Great timing, great results. Find the best time to post your subreddit</S.SubHeading>
    <S.CtaBtn as={Link} to="/search/javascript">Show me the best time</S.CtaBtn>
    <S.DefaultSubReddit>r/javascript</S.DefaultSubReddit>
    <Link to="/search/javascript">
      <S.Image
        src="./images/heatmap@2x.png"
        srcSet="./images/heatmap.png, ./images/heatmap@2x.png, ./images/heatmap@3x.png"
        alt="heatmap screenshot"
      />
    </Link>
  </S.HeroWrapper>
);

export default HeroSection;
