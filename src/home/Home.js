import React from 'react';

import Hero from '../hero/Hero';
import * as S from './Home.style';

function Home() {
  return (
    <S.HomeWrapper>
      {/* <h1>Home Page</h1> */}
      <Hero />
      <S.SectionWrapper>
        <S.SectionHeader id="about">About</S.SectionHeader>
        <S.AboutList>
          <S.ListItem>We find the 500 top posts from the past year for a subreddit.</S.ListItem>
          {/* eslint-disable-next-line max-len */}
          <S.ListItem>The data is visualized in a heatmap grouped by weekday and hour of the day.</S.ListItem>
          <S.ListItem>See immediately when to submit your reddit post.</S.ListItem>
        </S.AboutList>
      </S.SectionWrapper>

      <S.SectionWrapper>
        <S.SectionHeader id="how-it-works">How It Works</S.SectionHeader>
        <p>
          {/* eslint-disable-next-line max-len */}
          This app was created during a course on profy.dev with the goal to implement a pixel-perfect real-world application with professionalworkflows and tools like Kanban, ClickUp, Figma, GitHub, pull requests and code reviews. Click here for more information.
        </p>
      </S.SectionWrapper>
    </S.HomeWrapper>
  );
}

export default Home;
