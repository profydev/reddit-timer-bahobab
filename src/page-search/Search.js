import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as S from './Search.style';

function Search() {
  const defaultSubreddit = window.location.pathname.split('/')[2];
  const [subreddit, setSubreaddit] = useState(defaultSubreddit);
  const history = useHistory();

  // useEffect(() => {
  //   setSubreaddit(defaultSubreddit);
  // }, [defaultSubreddit]);

  useEffect(() => history.listen((location) => {
    setSubreaddit(location.pathname.split('/')[2]);
  }), [history]);

  const onChange = (e) => {
    setSubreaddit(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();

    history.push(`/search/${subreddit}`);
    // console.log(history);
    // window.history.replaceState(null, 'Yeeeee!', `/search/${subreddit}`);
  };

  return (
    <S.SearchWraper>
      <h2>Find the best time for a subreddit</h2>

      <form>
        <S.Label htmlFor="subreddit">
          r /
        </S.Label>
        <S.Input
          type="text"
          id="subreddit"
          value={subreddit}
          onChange={onChange}
          placeholder="Enter your subreddit"
        />
        <S.Button onClick={onClick}>search</S.Button>
      </form>
    </S.SearchWraper>
  );
}

export default Search;
