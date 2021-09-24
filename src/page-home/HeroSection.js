import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './HeroSection.style';
import { DEFAULT_SUBREDDIT } from '../config';

const HeroSection = () => (
  <S.Section>
    <S.HeroHeading>
      No reactions to your reddit posts?
    </S.HeroHeading>
    {/* eslint-disable-next-line max-len */}
    <S.SubHeading>
      Great timing, great results. Find the best time to post your subreddit
    </S.SubHeading>
    <S.CtaBtn as={Link} to={`/search/${DEFAULT_SUBREDDIT}`}>
      Show me the best time
    </S.CtaBtn>
    <S.DefaultSubReddit>
      r/
      {DEFAULT_SUBREDDIT}
    </S.DefaultSubReddit>
    <Link to={`/search/${DEFAULT_SUBREDDIT}`}>
      <S.Image
        src="./images/heatmap@2x.png"
        srcSet="./images/heatmap.png, ./images/heatmap@2x.png, ./images/heatmap@3x.png"
        alt="heatmap screenshot"
      />
    </Link>
  </S.Section>
);

export default HeroSection;
