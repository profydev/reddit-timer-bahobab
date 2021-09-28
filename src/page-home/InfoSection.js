import React from 'react';

import Info from './Info';
import * as S from './InfoSection.style';

const InfoSction = () => (
  <S.Container as="section">
    <Info id="how-it-works" headline="How It Works">
      <S.HowItWorksList>
        <S.ListItem>We find the 500 top posts from the past year for a subreddit.</S.ListItem>
        {/* eslint-disable-next-line max-len */}
        <S.ListItem>The data is visualized in a heatmap grouped by weekday and hour of the day.</S.ListItem>
        <S.ListItem>See immediately when to submit your reddit post.</S.ListItem>
      </S.HowItWorksList>
    </Info>
    <Info id="about" headline="About">
      <p>
        This app was created during a course on
        <a href="https://profy.dev">profy.dev</a>
        {/* eslint-disable-next-line max-len */}
        with the goal to implement a pixel-perfect real-world application with professional workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests and code reviews.
        <a href="https://profy.dev/employers">Click here for more information</a>
      </p>
    </Info>
  </S.Container>
);

export default InfoSction;
