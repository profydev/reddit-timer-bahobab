import React from 'react';

import * as S from './InfoSection.style';

const InfoSction = () => (
  <section>
    <S.SectionWrapper>
      <S.SectionHeader id="how-it-works">How It Works</S.SectionHeader>
      <p>
        This app was created during a course on
        <a href="https://profy.dev">profy.dev</a>
        {/* eslint-disable-next-line max-len */}
        with the goal to implement a pixel-perfect real-world application with professional workflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests and code reviews.
        <a href="https://profy.dev/employers">Click here for more information</a>
      </p>
    </S.SectionWrapper>
    <S.SectionWrapper>
      <S.SectionHeader id="about">About</S.SectionHeader>
      <S.AboutList>
        <S.ListItem>We find the 500 top posts from the past year for a subreddit.</S.ListItem>
        {/* eslint-disable-next-line max-len */}
        <S.ListItem>The data is visualized in a heatmap grouped by weekday and hour of the day.</S.ListItem>
        <S.ListItem>See immediately when to submit your reddit post.</S.ListItem>
      </S.AboutList>
    </S.SectionWrapper>
  </section>
);

export default InfoSction;
