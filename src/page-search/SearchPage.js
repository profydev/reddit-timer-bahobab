import React from 'react';

import SubredditForm from './SubredditForm';
import * as S from './SearchPage.style';

function SearchPage() {
  return (
    <S.Container as="section">
      <S.Headline>Find the best time for a subreddit</S.Headline>
      <SubredditForm />
    </S.Container>
  );
}

export default SearchPage;
